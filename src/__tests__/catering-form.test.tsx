import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, test } from 'vitest'
import Catering from '../pages/Catering'
import { renderWithProviders } from '../test/render'

describe('Catering form', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('shows required validation errors before submission', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Catering />)

    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    expect(screen.getByText(/please enter your name/i)).toBeTruthy()
    expect(screen.getByText(/please enter your email/i)).toBeTruthy()
    expect(screen.getByText(/please enter your phone or whatsapp number/i)).toBeTruthy()
    expect(screen.getByText(/please choose your event date/i)).toBeTruthy()
    expect(screen.getByText(/please enter the expected guest count/i)).toBeTruthy()
    expect(screen.getByText(/please enter the event location/i)).toBeTruthy()
    expect(screen.getByText(/please tell us a little about the event/i)).toBeTruthy()
  })

  test('submits a valid enquiry and stores it locally', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Catering />)

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Asha')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'asha@desidabba.ee')
    await user.type(screen.getByRole('textbox', { name: /phone \/ whatsapp/i }), '+372 5000000')
    await user.type(screen.getByLabelText(/event date/i), '2026-09-12')
    await user.type(screen.getByRole('spinbutton', { name: /guest count/i }), '24')
    await user.type(screen.getByRole('textbox', { name: /location/i }), 'Tallinn')
    await user.selectOptions(screen.getByRole('combobox', { name: /occasion/i }), 'Wedding')
    await user.type(screen.getByRole('textbox', { name: /dietary needs/i }), 'Vegetarian options')
    await user.type(screen.getByRole('textbox', { name: /notes \/ preferred food style/i }), 'Warm buffet-style catering for a family celebration.')
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    expect(screen.getByRole('button', { name: /sending/i })).toBeTruthy()

    await waitFor(() => {
      expect(screen.getAllByText(/your catering enquiry is with us/i).length).toBeGreaterThan(0)
    })

    const stored = window.localStorage.getItem('desi-dabba-catering-enquiries')
    expect(stored).toBeTruthy()
    expect(stored).toContain('asha@desidabba.ee')
  })
})
