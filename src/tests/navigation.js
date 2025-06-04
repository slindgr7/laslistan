// import { test, expect } from '@playwright/test'

// test('Användare kan navigera mellan alla vyer', async ({ page }) => {

//   await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
//   await expect(page).toHaveTitle('Läslistan')


//   await page.getByTestId('add-book').click()
//   await expect(page.getByRole('heading', { name: 'Välkommen!' })).toBeVisible()

//   await page.getByTestId('catalog').click()
//   await expect(page.getByRole('heading', { name: 'Välkommen!' })).toBeVisible()

//   await page.getByTestId('favorites').click()
//   await expect(page.getByRole('heading', { name: 'Välkommen!' })).toBeVisible()
// })


// funktioner för att navigera till olika vyer
    const goToAddBook = async (page) => {
    await page.getByTestId('add-book').click()
    }

    const goToCatalog = async (page) => {
    await page.getByTestId('catalog').click()
    }

    const goToFavorites = async (page) => {
    await page.getByTestId('favorites').click()
    }


export { goToAddBook, goToCatalog, goToFavorites }
