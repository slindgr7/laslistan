import { test, expect } from '@playwright/test'

test.describe('Mina-böcker-vy', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })
    
    test('Kunna se mina Favoritmarkerade böcker', async ({ page }) => {
        const starButton = page.locator('.book .star').first()

        await starButton.click()

        await expect(starButton).toHaveClass(/selected/)
        
        await page.getByTestId('favorites').click()

        const faveBooks = page.locator('.book')

        await expect(faveBooks).toHaveCount(1)

    })


})