import { screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { footerLegalLinks, footerServiceLinks } from '../config/footer'
import { site } from '../config/site'
import { Footer } from '../layouts/Footer'
import { renderWithProviders } from '../test/render'

describe('Footer', () => {
  test('renders brand, footer navigation, services, contact, and legal links', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByLabelText(/desi dabba home/i)).toBeTruthy()
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: site.email })).toBeTruthy()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /terms/i })).toBeTruthy()

    for (const label of ['Home', 'Our Story', 'Services', 'Gallery', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeTruthy()
    }

    expect(screen.queryByRole('link', { name: 'Menu' })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Instagram' })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Facebook' })).toBeNull()

    for (const link of footerServiceLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
    }

    for (const link of footerLegalLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
    }
  })
})
