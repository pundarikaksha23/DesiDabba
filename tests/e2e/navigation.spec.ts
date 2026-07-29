import { expect, test } from '@playwright/test'
import { routeConfig } from '../../src/config/routes'

test.describe('navigation', () => {
  test('loads configured routes from primary navigation and footer links', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('navigation', { name: /primary navigation/i })).toBeVisible()
    await expect(page.getByRole('contentinfo')).toBeVisible()

    for (const route of Object.values(routeConfig).filter((item) => item.footerVisibility === 'navigation')) {
      await page.goto('/')

      const link = page
        .getByRole('navigation', { name: /primary navigation/i })
        .getByRole('link', { name: route.navigationLabel, exact: true })

      await expect(link).toHaveAttribute('href', route.path)
      await link.click({ force: true })
      await expect(page).toHaveURL(route.path)
    }
  })

  test('shows contact validation in the browser', async ({ page }) => {
    await page.goto('/contact')
    await page.getByRole('button', { name: /send message/i }).click()

    await expect(page.getByText(/please enter your name/i)).toBeVisible()
    await expect(page.getByText(/please enter your email/i)).toBeVisible()
    await expect(page.getByText(/please tell us a little/i)).toBeVisible()
  })
})
