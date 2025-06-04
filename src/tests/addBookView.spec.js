import { test, expect } from '@playwright/test'

test.describe('Lägg-till-bok-vy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Kunna lägga till bok', async ({ page}) => {
        await page.getByTestId('add-book').click()

        const titleBook = page.getByTestId('add-input-title')
        await titleBook.fill('Harry Potter')

        const authorBook = page.getByTestId('add-input-author')
        await authorBook.fill('J. K. Rowling')

        const submitBtn = page.getByTestId('add-submit')
        await expect(submitBtn).toBeEnabled()
    })


})