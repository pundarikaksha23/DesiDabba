import { screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { footerLegalLinks, footerServiceLinks } from '../config/footer'
import { navigationLinks } from '../config/navigation'
import { site } from '../config/site'
import { Footer } from '../layouts/Footer'
import { renderWithProviders } from '../test/render'

describe('Footer', () => {
  test('renders brand, navigation, services, contact, and legal links', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByLabelText(/desi dabba home/i)).toBeTruthy()
    expect(screen.getByRole('link', { name: `Email: ${site.email}` })).toBeTruthy()
    expect(screen.getByRole('link', { name: `WhatsApp: ${site.phone}` })).toBeTruthy()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /terms/i })).toBeTruthy()

    for (const link of [...navigationLinks, ...footerServiceLinks, ...footerLegalLinks]) {
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
    }
  })
})
