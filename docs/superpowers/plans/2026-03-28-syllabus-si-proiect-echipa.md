# Syllabus WEB — DAW-241 / 2026 + Proiect de grup

**Curs:** Programare Web
**Grupă:** DAW-241
**An:** 2025–2026
**Repo demonstrativ:** [dogs-landing-page](https://github.com/strdr4605/dogs-landing-page)
**Înregistrare proiecte:** https://gist.github.com/strdr4605/c2008e4e9f3f7617880340813614ff4f

---

## Capitole parcurse

### Cap. 1 — HTML Basics (30 sep 2025)
- `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- `<header>`, `<h1>`, `<title>`, `<meta charset>`
- Stiluri inline (`style="background-color: ..."`)

### Cap. 2 — CSS & Flexbox (21 oct 2025)
- Extragere stiluri inline în `style.css`, `<link rel="stylesheet">`
- Selectori: element, id (`#hero`, `#hero-images`)
- Box model: `margin`, `padding`
- Flexbox: `display: flex`, `flex-direction`, `align-items`, `justify-content`, `gap`
- `<section>`, `<img>`, `border-radius`, `flex-wrap`

### Cap. 3 — Intro DOM / Theme Toggle (11 nov 2025)
- Primul `<script src="script.js">`
- `document.getElementById`, `document.getElementsByTagName`
- `addEventListener("click", function() {...})`
- `window.getComputedStyle`, `element.style.background`
- `element.innerText`, `console.log`
- Arrow functions vs function declarations

### Cap. 4 — JS Obiecte & Manipulare DOM (3 feb 2026)
- Obiecte JS: `const content = { title, info, imageLinks: [...] }`
- `document.title`, setare `innerText` din obiect JS
- `document.createElement("img")`, `element.setAttribute("src", ...)`
- `element.appendChild`, `element.after`
- `for` loop pentru randarea mai multor imagini
- Separarea responsabilităților: `load-content.js` vs `script.js`
- `document.createElement("p")`, creare dinamică de paragrafe
- Funcții cu nume: `function render(content) {...}`

### Cap. 5 — Fetch API + JSON (3 feb 2026)
- `data.json` — fișier extern de date
- `fetch("data.json").then(res => res.json()).then(data => render(data))`
- Lanț de Promises `.then()`
- Format JSON, concepte `JSON.parse` / `JSON.stringify`

### Cap. 6 — Formulare (feb 2026)
- `<form id="dog-form">`, `<input type="text">`, `<input type="submit">`
- `<label for="...">`, legare prin `id`
- `event.preventDefault()`
- `form.elements['dog-name'].value`
- Adăugare dinamică `<img>` în DOM la submit
- `form.reset()`

### Cap. 7 — Input live / UI dinamic (feb 2026)
- `addEventListener("input", (event) => {...})`
- `event.target.value`
- Ștergere condiționată text când input-ul e gol

### Cap. 8 — Local Storage (feb–mar 2026)
- `localStorage.setItem(key, value)`, `localStorage.getItem(key)`
- `JSON.stringify` / `JSON.parse` pentru stocarea array-urilor
- `window.addEventListener("load", ...)` — restaurare stare la reload
- Persistarea temei și câinilor sugerați între reîncărcări

### Cap. 9 — Gestionarea erorilor (mar 2026)
- Bug real: `JSON.parse(null)` — crash în propriul cod
- Fix: verificare înainte de parsare, valoare default `[]` dacă nu există date
- Comentarii în cod care explică intenția

### Cap. 10 — API-uri reale / dog.ceo (10 mar 2026)
- `<select>` + `<option>` pentru selector rasă
- `addEventListener("change", ...)` pe select
- Fetch din API extern: `https://dog.ceo/api/breed/{breed}/images/random`
- Construirea dinamică a URL-ului cu concatenare string
- Fișier nou `dog-api.js`, arhitectură JS cu mai multe fișiere

### Cap. 11 — Async/Await (mar 2026)
- Refactorizare `.then()` → `async/await`
- `async function`, `await`, blocuri `try/catch`
- De ce async/await e mai lizibil decât lanțurile de Promise-uri

### Cap. 12 — Git & GitHub în echipă (17 mar 2026)
- Branch-uri: `git checkout -b`, `git push -u origin`
- GitHub Issues — planificare înainte de cod
- Pull Requests — review încrucișat + checkout local pentru testare
- Rezolvarea conflictelor de merge
- Branch protection rules pe `main`
- Vezi planul complet: [`2026-03-17-git-github-team-workflow.md`](./2026-03-17-git-github-team-workflow.md)

---

## Proiect de grup — Cerințe

### Echipe
- 2–3 persoane per echipă
- Înregistrare prin comentariu pe gist: https://gist.github.com/strdr4605/c2008e4e9f3f7617880340813614ff4f

### Cerințe tehnice

| Cerință | Detalii |
|---|---|
| Repo public pe GitHub | Toți membrii = colaboratori |
| Minimum 5 Issues planificate | Înainte de a scrie cod |
| Fiecare membre — minimum 1 PR merged | Cu cel puțin 1 aprobare de la coleg |
| Commits semnificative per persoană | Efortul individual se vede în istoricul git |
| HTML + CSS + JavaScript | Cel puțin un fetch dintr-un API extern |
| `README.md` | Descriere proiect, cum se deschide, cine l-a construit |

### Flux de lucru obligatoriu

```
Issue creat
    ↓
Branch creat din main (nu push direct pe main!)
    ↓
Cod scris + commit + push
    ↓
PR deschis → leagă de Issue (Closes #N)
    ↓
Coleg: code review + aprobare
    ↓
PR merge → Issue închis automat
    ↓
Toți trag main-ul local
```

### Evaluare

Nota se bazează pe:
1. **Issues** — există planificare reală? Sunt descriptive?
2. **PR-uri merged** — câte a deschis fiecare persoană?
3. **Commits** — cine a scris efectiv cod? (se vede din `git log`)
4. **Code review** — a lăsat fiecare comentarii pe PR-urile colegilor?
5. **Calitatea proiectului** — funcționează? Folosește ce am învățat?

### Situația curentă a echipelor (28 mar 2026)

| Echipă | Repo | Issues totale | Status |
|---|---|---|---|
| ARPENTE CRISTIAN, MARDARI MIRCEA | Cristi-08/To-do-planner | 12 | ✅ |
| BOGATU ALEXEI, VOLJIN POLINA | Utagob/DigiPlan | 14 | ✅ |
| BOCȘANEAN ANTONIA, PRISNEI DARIA | an1onia/proiectul-2 | 4 | ✅ |
| SPALATU BOGDAN, OSADCII NICOLAE | spalatu/NEST | 9 | ✅ |
| GAINARU GRIGORII, ZAGORODNIUC VIRGILIU | GainaruG/Prognoza-meteo | 6 | ✅ |
| CULBIDA MIHAIL, BOICO MIHAI-RĂZVAN, CALINIUC NICHITA | BoicoMihai/-Fridge-Scanner---not-final-name | 5 | ✅ |
| CROITORU VALERIA, MIHAILOV ANA | PitesFan/cozy-movies-info | 12 | ✅ |
| BURUIANA DUMITRIȚA, MORARI MARCEL | Dumitrita307/FAS-SUN | 2 | ⚠️ puține |
| JIGLIȚCHI ALAN, ȘAPTEFRAȚI ION | Boba-top/Dog-Landing-Page | 2 | ⚠️ puține |
| MAZUR LAURA, ȘEREMET SORINA, PALADI DIANA | Lauramazur/Mobillo | 2 | ⚠️ puține |
| BORCEA BOGDAN, TROFĂILĂ ALEXANDRU | Bogdansw/watchlist-organizer | 2 | ⚠️ puține |
| DARABAN GABRIELA, BRAGA BEATRICE | beatr1ceee-br/Mystic-Notes | 2 | ⚠️ puține |
| CHIRIAC DANIEL, MORARI EMANUEL | danny12134/cosmic-drop-project | 0 | 🚩 fără issues |

### Studenți neînregistrați (28 mar 2026)

- CARAMAN ALEX
- LEAHU IANA
- LISNIC MAXIM
- MAZUR MAXIM
- MICU NICOLAE
- PALII ARTIOM
- POPUȘOI BOGDAN
- ROȘCA GHEORGHE
- SALCOCI CĂTĂLIN
- VACARCIUC ION

### Probleme de format în comentarii

- **MORARI MARCEL** — username GitHub lipsă
- **ȘAPTEFRAȚI ION** — username GitHub lipsă
