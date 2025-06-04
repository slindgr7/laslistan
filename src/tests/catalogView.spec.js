import { test, expect } from '@playwright/test'
import { goToCatalog } from './navigation.js'
 
test.describe('Katalog-vy', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
  })

  test('kunna favoritmarkera och avmarkera flera böcker', async ({ page }) => {
    const starButtons = page.locator('.book .star')
    
    await starButtons.nth(0).click()
    await starButtons.nth(1).click()

    await expect(starButtons.nth(0)).toHaveClass(/selected/)
    await expect(starButtons.nth(1)).toHaveClass(/selected/)

    await starButtons.nth(0).click()
    await starButtons.nth(1).click()

    await expect(starButtons.nth(0)).not.toHaveClass(/selected/)
    await expect(starButtons.nth(1)).not.toHaveClass(/selected/)
  })
})
