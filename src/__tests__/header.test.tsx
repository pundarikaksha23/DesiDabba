import { screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Header } from '../layouts/Header'
import { navigationLinks } from '../config/navigation'
import { renderWithProviders } from '../test/render'

describe('Header', () => {
  test('renders the brand, primary navigation, and language control', () => {
    renderWithProviders(<Header />)

    expect(screen.getByLabelText(/desi dabba home/i)).toBeTruthy()
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /current language: estonian/i })).toHaveTextContent('ET')

    for (const link of navigationLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
    }
  })
})
