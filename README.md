# E2E-testning Playwright
Han som skapa hemsidan gjorde det väldigt tacksamt med data-testid


## Navigation
Jag bestämde mig för att börja med navigeringen vilket faller naturligt efter react-router, hashrouter. 
- Första sidan är "home-page" så jag börjar med att verifiera med `toHaveTitle` "Läslistan".

- addBookView testar navigationen via `getByTestId` som verifieras med en heading.
- catalogView testar navigationen via `getByTestId` som verifieras med en heading.
- myBooksView testar navigationen via `getByTestId` som verifieras med en heading.

////////efter Demo - Davids rekommendationer
Jag gjorde om navigationen till funktioner istället eftersom jag återanvänder de på flera olika ställen i min kod. 

## catalogView
Eftersom detta är "home-page" och med beforeEach är vi redan på rätt vy, kan jag direkt med en locator hämta klassen .book .star där jag ser att den blir selected vid click-eventet. Därav så jag kan verifiera att den blivit "vald".


## addBookView
Jag navigerar mig till rätt vy och nu nå input-fälten med `getByTestId` fylla i dem med .fill() och verifiera att Submit-knappen ej längre är disabled och att den tillagda boken finns i catalog-vyn.


## myBooksView
I detta test återanvänder jag funktionalitet från **catalogView** för att favoritmarkera två böcker.
Därefter navigerar jag till mina böcker-vyn via `getByTestId` favorites där jag verifierar att de är två böcker i listan.