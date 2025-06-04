import { test, expect } from '@playwright/test'
import { goToAddBook, goToCatalog } from './navigation.js'

test.describe('Lägg-till-bok-vy', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
  })

  test('Kunna lägga till bok och kontrollera att den finns i catalog', async ({ page }) => {
    await goToAddBook(page)

    await page.getByTestId('add-input-title').fill('Harry Potter')
    await page.getByTestId('add-input-author').fill('J. K. Rowling')

    const submitBtn = page.getByTestId('add-submit')
    await expect(submitBtn).toBeEnabled()
    await submitBtn.click()

    await goToCatalog(page)

    const newBookTitle = page.getByTestId('star-Harry Potter')
    await expect(newBookTitle).toBeVisible()
  })
})
