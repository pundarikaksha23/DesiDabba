import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test, vi } from 'vitest'
import Contact from '../pages/Contact'
import { renderWithProviders } from '../test/render'

describe('Contact form validation', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  test('shows required validation errors before submission', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/please enter your name/i)).toBeTruthy()
    expect(screen.getByText(/please enter your email/i)).toBeTruthy()
    expect(screen.getByText(/please tell us a little/i)).toBeTruthy()
    expect(screen.getAllByText(/please review the highlighted fields/i).length).toBeGreaterThan(0)
  })

  test('validates email, phone, and minimum message length', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Asha')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'asha')
    await user.type(screen.getByRole('textbox', { name: /phone/i }), '12')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'short')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/please enter a valid email address/i)).toBeTruthy()
    expect(screen.getByText(/please enter a valid phone number/i)).toBeTruthy()
    expect(screen.getByText(/please add a few more details/i)).toBeTruthy()
  })

  test('sends a valid enquiry and shows the success state', async () => {
    let resolveFetch: (response: Response) => void = () => undefined
    vi.stubGlobal(
      'fetch',
      vi.fn(
        () =>
          new Promise<Response>((resolve) => {
            resolveFetch = resolve
          }),
      ),
    )
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Asha')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'asha@desidabba.ee')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Planning a private dinner for eight guests.')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByRole('button', { name: /sending/i })).toBeTruthy()
    resolveFetch(
      new Response(JSON.stringify({ success: 'true' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )
    await waitFor(() => {
      expect(screen.getAllByText(/your message has been sent; we will follow up/i).length).toBeGreaterThan(0)
    })
    expect(fetch).toHaveBeenCalledWith(
      'https://formsubmit.co/ajax/poojagkohli@gmail.com',
      expect.objectContaining({ method: 'POST' }),
    )
  })
})
