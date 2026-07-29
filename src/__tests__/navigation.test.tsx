import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import { useLocation } from 'react-router-dom'
import { Header } from '../layouts/Header'
import { renderWithProviders } from '../test/render'

function LocationDisplay() {
  const location = useLocation()

  return <div data-testid="location">{location.pathname}</div>
}

describe('Navigation', () => {
  test('opens the mobile menu and navigates from a drawer link', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <>
        <Header />
        <LocationDisplay />
      </>,
    )

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const drawer = screen.getByRole('dialog', { name: '' })
    expect(drawer).toBeTruthy()

    await user.click(within(drawer).getByRole('link', { name: /gallery/i }))

    await waitFor(() => {
      expect(screen.getByTestId('location').textContent).toBe('/gallery')
    })
  })
})
