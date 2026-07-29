import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { ToastProvider } from '../components/ToastProvider'
import { routeConfig } from '../config/routes'
import { site } from '../config/site'

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </MemoryRouter>,
  )
}

describe('route smoke tests', () => {
  test.each(Object.values(routeConfig))('renders $path without crashing', async (route) => {
    renderRoute(route.path)

    await waitFor(() => {
      expect(document.title).toBe(`${route.pageTitle} | ${site.name}`)
    })

    expect(screen.getByRole('banner')).toBeTruthy()
    expect(screen.getAllByRole('contentinfo').length).toBeGreaterThan(0)
  })

  test('renders the not found route', async () => {
    renderRoute('/missing-page')

    expect(await screen.findByRole('heading', { name: /this dabba is empty/i })).toBeTruthy()
  })
})
