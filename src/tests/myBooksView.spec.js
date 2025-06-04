import { test, expect } from '@playwright/test'
import { goToFavorites } from './navigation.js'

test.describe('Mina-böcker-vy', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
  })

  test('Kunna se flera favoritmarkerade böcker', async ({ page }) => {
    const starButtons = page.locator('.book .star')

    await starButtons.nth(0).click()
    await starButtons.nth(1).click()

    await expect(starButtons.nth(0)).toHaveClass(/selected/)
    await expect(starButtons.nth(1)).toHaveClass(/selected/)

    await goToFavorites(page)

    const faveBooks = page.locator('.book')
    await expect(faveBooks).toHaveCount(2)
  })
})

