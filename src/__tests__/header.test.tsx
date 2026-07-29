import { screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Header } from '../layouts/Header'
import { navigationLinks } from '../config/navigation'
import { site } from '../config/site'
import { renderWithProviders } from '../test/render'

describe('Header', () => {
  test('renders the brand, primary navigation, and WhatsApp CTA', () => {
    renderWithProviders(<Header />)

    expect(screen.getByLabelText(/desi dabba home/i)).toBeTruthy()
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /chat with desi dabba on whatsapp/i })).toHaveProperty(
      'href',
      site.whatsapp,
    )

    for (const link of navigationLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
    }
  })
})
