import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import Contact from '../pages/Contact'
import { renderWithProviders } from '../test/render'

describe('Contact form validation', () => {
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

  test('shows loading and success states for a valid mock submission', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Asha')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'asha@desidabba.ee')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Planning a private dinner for eight guests.')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByRole('button', { name: /sending/i })).toBeTruthy()
    await waitFor(() => {
      expect(screen.getAllByText(/we will follow up with a thoughtful next step/i).length).toBeGreaterThan(0)
    })
  })
})
