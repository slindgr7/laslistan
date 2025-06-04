# E2E-testning Playwright
Han som skapa hemsidan gjorde det väldigt tacksamt med data-testid


## Navigation
Jag bestämde mig för att börja med navigeringen vilket faller naturligt efter react-router, hashrouter. 
- Första sidan är "home-page" så jag börjar med att verifiera med `toHaveTitle` "Läslistan".

- addBookView testar navigationen via `getByTestId` som verifieras med en heading.

- myBooksView testar navigationen via `getByTestId` som verifieras med en heading.


## catalogView
Eftersom detta är "home-page" och med beforeEach är vi redan på rätt vy, kan jag direkt med en locator hämta klassen .book .star där jag ser att den blir selected vid click-eventet. Därav så jag kan verifiera att den blivit "vald".


## addBookView
Jag kan kopiera min navigation från tidigare som verifierar att jag hamnat på rätt vy, och nu nå input-fälten med `getByTestId` fylla i dem med .fill() och verifiera att Submit-knappen ej längre är disable.


## myBooksView
I detta test återanvänder jag funktionalitet från **catalogView** för att favoritmarkera en bok.
Därefter navigerar jag till mina böcker-vyn via `getByTestId` favorites.
sedan verifieras att den favoritmarkerade boken visas korrekt i vyn genom att kontrollera att .book-klassen har 1 antal.