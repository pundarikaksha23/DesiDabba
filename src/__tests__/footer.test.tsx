import { screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { footerLegalLinks, footerServiceLinks } from '../config/footer'
import { navigationLinks } from '../config/navigation'
import { site } from '../config/site'
import { Footer } from '../layouts/Footer'
import { renderWithProviders } from '../test/render'

describe('Footer', () => {
  test('renders brand, navigation, services, contact, legal, and newsletter form', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByLabelText(/desi dabba home/i)).toBeTruthy()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /join/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: site.email })).toBeTruthy()
    expect(screen.getByRole('link', { name: site.phone })).toBeTruthy()

    for (const link of [...navigationLinks, ...footerServiceLinks, ...footerLegalLinks]) {
      expect(screen.getByRole('link', { name: link.label })).toBeTruthy()
    }
  })
})
