import { test, expect } from '@playwright/test'

test.describe('Navigering mellan olika vyer', () => {
  
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('titeln "Läslistan" visas', async ({ page }) => {
		await expect(page).toHaveTitle('Läslistan')
	  })

    test('Navigering till addBookView', async ({ page }) => {
        const addBookBtn = page.getByTestId('add-book')
        await addBookBtn.click()

        const heading = page.getByRole('heading', { name: 'Välkommen!' })
		await expect(heading).toBeVisible()
    })

    test('Navigering till myBooksView', async ({ page }) => {
      
        await page.getByTestId('favorites').click()

        await expect(page.getByRole('heading', { name: 'Välkommen!' })).toBeVisible()

    })

})