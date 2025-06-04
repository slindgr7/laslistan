import { test, expect } from '@playwright/test'

test.describe('Katalog-vy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('kunna favoritmarkera böcker', async ({ page }) => {
        
        const starButton = page.locator('.book .star').first()

        await starButton.click()

        await expect(starButton).toHaveClass(/selected/)

    })
    


})