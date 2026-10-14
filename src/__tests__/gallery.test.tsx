import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import Gallery from '../pages/Gallery'
import { galleryItems } from '../data/gallery'

describe('gallery page', () => {
  test('opens an image without displaying its caption', async () => {
    const user = userEvent.setup()
    const item = galleryItems[0]

    render(<Gallery />)

    await user.click(screen.getByRole('button', { name: `Open ${item.title}` }))

    expect(await screen.findByRole('dialog', { name: 'Gallery image' })).toBeInTheDocument()
    expect(screen.queryByText(item.title)).not.toBeInTheDocument()
    expect(screen.queryByText(item.category)).not.toBeInTheDocument()
  })
})
