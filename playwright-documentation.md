# Playwright - dokumentation

## Locator Assertions

- `toBeVisible` – kollar att ett element syns  
- `toHaveText` – kollar att ett element har specifik text  
- `toBeHidden` – kollar att ett element inte syns (display: none, etc)  
- `toBeEnabled` – kollar att en knapp eller input är klickbar  
- `toBeDisabled` – kollar att t.ex. submit-knappen är avaktiverad  
- `toHaveValue` – kollar värdet i ett inputfält  
- `toHaveAttribute` – kollar attribut, t.ex. "href" eller "disabled"  
- `toHaveCount` – kollar antal matchande element (t.ex. antal rader i en lista)  
- `toHaveClass` – kollar att ett element har en eller flera specifika klasser

```js 
## Locator-metoder

- `getByRole` //välj element baserat på tillgänglighets-roll + namn
const knapp = page.getByRole('button', { name: 'Skicka' });

- `getByText` //välj element som innehåller viss synlig text

- `getByTestId` //välj element med data-testid-attribut (bra för testbarhet) 
const ruta = page.getByTestId('produktkort');

- `click` //klicka på element
await knapp.click();

- `fill` //fyll i textruta eller input
await page.getByLabel('Namn').fill('Sally');

- `type` //skriver text tecken för tecken (simulerar riktig inmatning)
await page.getByLabel('Meddelande').type('Hej!');

- `press` //simulerar tangentbordstryck, t.ex. Enter eller Tab
await page.getByLabel('Sök').press('Enter');

- `selectOption` // välj ett alternativ i en <select>-lista
await page.locator('select').selectOption('värde123');

- `check`  //kryssar i en checkbox
await page.getByLabel('Godkänn villkor').check();

- `uncheck`  //avmarkerar en checkbox
await page.getByLabel('Godkänn villkor').uncheck();

- `hover` //hovrar över ett element (t.ex. visa dropdowns)
await page.getByText('Meny').hover();

- `isVisible` //returnerar true/false om elementet är synligt
const syns = await page.getByText('Felmeddelande').isVisible();

- `isChecked` //returnerar true/false om en checkbox är ikryssad
const markerad = await page.getByLabel('Jag godkänner').isChecked();

- `nth` // välj det n:te elementet bland flera matchande (nollindexerat)
await page.locator('.artikel').nth(2).click();

- `first / last` //välj första eller sista elementet i en grupp
await page.locator('.rad').first().click();
await page.locator('.rad').last().click();
```