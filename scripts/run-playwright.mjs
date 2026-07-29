import { spawn } from 'node:child_process'
import http from 'node:http'

const host = '127.0.0.1'
const port = 4173
const baseUrl = `http://${host}:${port}`
const viteArgs = ['./node_modules/vite/bin/vite.js', '--host', host, '--port', String(port)]
const playwrightArgs = ['playwright', 'test', ...process.argv.slice(2)]

function commandFor(command, args) {
  if (process.platform !== 'win32') {
    return { command, args }
  }

  const commandShell = process.env.ComSpec || 'C:\\Windows\\System32\\cmd.exe'

  return {
    command: commandShell,
    args: ['/d', '/s', '/c', [command, ...args].join(' ')],
  }
}

function requestUrl(url) {
  return new Promise((resolve) => {
    const request = http.get(url, (response) => {
      response.resume()
      resolve(response.statusCode && response.statusCode < 500)
    })

    request.on('error', () => resolve(false))
    request.setTimeout(500, () => {
      request.destroy()
      resolve(false)
    })
  })
}

async function waitForServer(url) {
  const startedAt = Date.now()

  while (Date.now() - startedAt < 15_000) {
    if (await requestUrl(url)) {
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 250))
  }

  throw new Error(`Timed out waiting for ${url}`)
}

function stopProcessTree(processToStop) {
  if (!processToStop.pid || processToStop.exitCode !== null) {
    return Promise.resolve()
  }

  if (process.platform === 'win32') {
    return new Promise((resolve) => {
      const taskkillCommand = commandFor('taskkill', ['/pid', String(processToStop.pid), '/t', '/f'])
      const taskkill = spawn(taskkillCommand.command, taskkillCommand.args, { stdio: 'ignore' })
      taskkill.on('close', () => resolve())
      taskkill.on('error', () => resolve())
    })
  }

  processToStop.kill('SIGTERM')
  return Promise.resolve()
}

function runPlaywright() {
  return new Promise((resolve) => {
    const playwrightCommand = commandFor('npx', playwrightArgs)
    const tests = spawn(playwrightCommand.command, playwrightCommand.args, {
      stdio: 'inherit',
      env: {
        ...process.env,
        PLAYWRIGHT_MANAGED_SERVER: '0',
      },
    })

    tests.on('close', (code) => resolve(code ?? 1))
    tests.on('error', () => resolve(1))
  })
}

const server = spawn(process.execPath, viteArgs, {
  stdio: ['ignore', 'ignore', 'inherit'],
  env: process.env,
})

try {
  await waitForServer(baseUrl)
  const exitCode = await runPlaywright()
  await stopProcessTree(server)
  process.exit(exitCode)
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  await stopProcessTree(server)
  process.exit(1)
}
