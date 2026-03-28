# Flux de lucru Git & GitHub în echipă — Plan de lecție

**Scop:** Elevii învață să colaboreze pe un proiect folosind GitHub Issues, branch-uri, pull request-uri și code review — inclusiv checkout-ul branch-ului unui coleg pentru testare locală.

**Public:** Perechi/triolete clasa a 11-a, știu deja git de bază (add, commit, push)

**Context:** Folosește repo-ul dogs-landing-page ca proiect comun

---

## Prezentare generală

Elevii vor simula un flux real de lucru în echipă:
1. Planifică munca cu GitHub Issues
2. Fiecare membru lucrează pe un branch separat
3. Deschide un PR când termină
4. Colegul face code review ȘI face checkout pe branch local pentru testare
5. Aprobă și face merge

Vor face asta în două exerciții — mai întâi secvențial (o persoană pe rând) pentru a învăța fluxul, apoi în paralel pentru a experimenta conflicte de merge și coordonare.

---

## Capitolul 1 — Setup & Concepte (condus de profesor, ~15 min)

### Ce vom acoperi
- Ce este un branch? De ce să nu facem commit direct pe `main`?
- Ce este un Issue? De ce planificăm înainte să scriem cod?
- Ce este un Pull Request? De ce facem review înainte de merge?
- Ce înseamnă „checkout pe un branch pentru testare"?

### Comenzi cheie de introdus

```bash
# Vezi toate branch-urile
git branch -a

# Creează și treci pe un branch nou
git checkout -b feature/functionalitatea-mea

# Trimite branch-ul pe GitHub
git push -u origin feature/functionalitatea-mea

# Fă checkout pe branch-ul unui coleg
git fetch origin
git checkout feature/branch-ul-colegului

# Întoarce-te pe main
git checkout main
```

### Concepte din interfața GitHub de arătat
- Tab Issues → New Issue → asignează la persoană
- Tab Pull Requests → New PR → selectează branch → base: main
- PR review → „Add review" → „Approve" / „Request changes"
- Butonul Merge (doar după aprobare)

### Regulile pentru această lecție
- **Nu face niciodată push direct pe `main`**
- **Orice modificare trece printr-un PR**
- **Orice PR are nevoie de cel puțin 1 aprobare** (de la un coleg care l-a testat)
- **Issues trebuie să existe înainte de a crea branch-uri**

---

## Capitolul 2 — Exercițiul A: README (secvențial, o persoană pe rând)

Scop: exersarea ciclului complet Issue → Branch → PR → Review → Merge o dată, fără conflicte.

---

### Pasul A1 — Persoana A creează Issue-ul

Pe GitHub:
1. Mergi la Issues → New Issue
2. Titlu: `Adaugă README.md cu descrierea proiectului`
3. Descriere: „Creează un README care explică ce este proiectul, cum se deschide și cine l-a construit."
4. Asignează la: Persoana A
5. Submit

---

### Pasul A2 — Persoana A creează un branch și scrie README-ul

```bash
git checkout main
git pull origin main
git checkout -b feature/add-readme
```

Creează `README.md` cu conținutul următor (elevii completează numele lor):

```markdown
# Dogs Landing Page

O pagină web simplă pentru iubitorii de câini. Explorează câini după rasă, vezi fotografii aleatorii și sugerează propriul câine.

## Cum se deschide

Deschide `index.html` în browser. Nu e nevoie de instalare.

## Construit de

- [Nume 1]
- [Nume 2]
```

```bash
git add README.md
git commit -m "Adaugă README cu descrierea proiectului"
git push -u origin feature/add-readme
```

---

### Pasul A3 — Persoana A deschide un Pull Request

Pe GitHub:
1. Mergi la Pull Requests → New Pull Request
2. base: `main` ← compare: `feature/add-readme`
3. Titlu: `Adaugă README.md`
4. Descriere: „Closes #1" (leagă de issue — înlocuiește 1 cu numărul real al issue-ului)
5. Request review from: Persoana B
6. Submit

---

### Pasul A4 — Persoana B face review la PR (cod + test local)

**Code review pe GitHub:**
1. Mergi la PR → tab Files changed
2. Citește diff-ul — are sens README-ul?
3. Lasă cel puțin un comentariu (chiar dacă e doar „arată bine")

**Test local (partea importantă):**
```bash
git fetch origin
git checkout feature/add-readme
```
Deschide `index.html` în browser — mai funcționează pagina? Există `README.md` și arată corect?

**Înapoi pe GitHub:**
1. Mergi la PR → Review changes
2. Selectează „Approve" dacă totul e în regulă, sau „Request changes" dacă ceva trebuie corectat
3. Submit review

---

### Pasul A5 — Persoana A face merge la PR

După aprobare:
1. Mergi la PR pe GitHub
2. Click „Merge pull request" → „Confirm merge"
3. Șterge branch-ul (GitHub oferă asta după merge)

```bash
# Ambii membri actualizează main-ul local
git checkout main
git pull origin main
```

Închide Issue-ul (GitHub face asta automat dacă descrierea PR-ului conținea „Closes #N").

---

## Capitolul 3 — Exercițiul B: Modificări în paralel (două persoane simultan)

Scop: experiența lucrului în paralel, gestionarea unui potențial conflict de merge, exersarea aceluiași flux de PR de două ori simultan.

---

### Pasul B0 — Creează Issues mai întâi (ambii membri, împreună)

Creați două Issues înainte ca cineva să scrie cod:

- Issue 1: `Adaugă o secțiune Rase în index.html` — asignat Persoanei A
- Issue 2: `Adaugă un footer cu numele echipei în index.html` — asignat Persoanei B

Ambele issues vizează același fișier (`index.html`) — e intenționat.

---

### Pasul B1 — Ambii membri creează branch-uri în același timp

**Persoana A:**
```bash
git checkout main
git pull origin main
git checkout -b feature/sectiune-rase
```

**Persoana B (în același timp):**
```bash
git checkout main
git pull origin main
git checkout -b feature/footer
```

---

### Pasul B2 — Persoana A adaugă secțiunea Rase

În `index.html`, adaugă undeva în `<body>`:

```html
<section id="breeds">
  <h2>Rase populare</h2>
  <ul>
    <li>Golden Retriever</li>
    <li>Labrador</li>
    <li>Pudel</li>
  </ul>
</section>
```

```bash
git add index.html
git commit -m "Adaugă secțiunea rase pe pagina principală"
git push -u origin feature/sectiune-rase
```

---

### Pasul B3 — Persoana B adaugă footer-ul

În `index.html`, înainte de `</body>`:

```html
<footer>
  <p>Realizat de [Nume 1] &amp; [Nume 2] — Clasa a 11-a</p>
</footer>
```

```bash
git add index.html
git commit -m "Adaugă footer cu numele echipei"
git push -u origin feature/footer
```

---

### Pasul B4 — Ambii deschid PR-uri

Fiecare persoană deschide un PR pe GitHub (aceiași pași ca la Exercițiul A):
- Persoana A: `feature/sectiune-rase` → `main`, titlu „Adaugă secțiunea rase", „Closes #N"
- Persoana B: `feature/footer` → `main`, titlu „Adaugă footer", „Closes #N"

Review încrucișat: Persoana A face review la PR-ul Persoanei B, Persoana B la PR-ul Persoanei A.

---

### Pasul B5 — Review și merge la primul PR

Cine termină review-ul primul — face merge la acel PR.

Al doilea PR poate afișa acum un avertisment de conflict pe GitHub (dacă ambii au editat aceeași parte din `index.html`).

---

### Pasul B6 — Rezolvă conflictul pe al doilea PR

Persoana al cărei PR are conflict:

```bash
git checkout main
git pull origin main
git checkout feature/branch-ul-lor
git merge main
```

Git va arăta un conflict în `index.html`. Deschide fișierul, găsește markerii de conflict:

```
<<<<<<< HEAD
  (modificările tale)
=======
  (modificările din main)
>>>>>>> main
```

Păstrează ambele modificări. Șterge markerii. Salvează.

```bash
git add index.html
git commit -m "Merge main în branch, rezolvă conflictul"
git push
```

PR-ul pe GitHub se va actualiza automat. Reviewer-ul îl verifică din nou și aprobă.

---

### Pasul B7 — Merge la al doilea PR

La fel ca înainte — aprobă și fă merge pe GitHub, apoi ambii trag main-ul local.

---

## Capitolul 4 — Protecția branch-ului pe GitHub (profesorul configurează, sau ghidat împreună)

Scop: regula „nu face push direct pe main" să fie aplicată de GitHub, nu doar prin încredere.

---

### Pas — Activează protecția branch-ului pe `main`

O persoană (proprietarul repo-ului sau liderul echipei) face asta pe GitHub:

1. Mergi la repo → **Settings** → **Branches**
2. Sub „Branch protection rules" → click **Add rule**
3. Branch name pattern: `main`
4. Activează aceste opțiuni:
   - ✅ **Require a pull request before merging**
     - ✅ **Require approvals** → setează la `1`
     - ✅ **Dismiss stale pull request approvals when new commits are pushed**
   - ✅ **Require branches to be up to date before merging** (opțional, dar recomandat)
   - ✅ **Do not allow bypassing the above settings** (previne proprietarul repo-ului să sară peste review)
5. Click **Save changes**

---

### Ce aplică această regulă

| Acțiune | Rezultat după protecție |
|---|---|
| `git push origin main` direct | ❌ Respins de GitHub |
| Merge PR fără aprobare | ❌ Butonul Merge e dezactivat |
| Merge PR după aprobare | ✅ Permis |
| Proprietarul repo ocolește regulile | ❌ Blocat (dacă „Do not allow bypassing" e activat) |

---

### Cum verifici că funcționează

Cere unui elev să încerce push direct pe main:

```bash
# Fă o mică modificare la orice fișier
echo "<!-- test -->" >> index.html
git add index.html
git commit -m "test push direct"
git push origin main
```

Output așteptat:
```
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "..." is required.
To https://github.com/...
 ! [remote rejected] main -> main (protected branch hook declined)
```

Anulează commit-ul local:
```bash
git reset HEAD~1
git checkout index.html
```

---

## Rezumat: fluxul de lucru într-o imagine

```
Issue creat
    ↓
Branch creat din main
    ↓
Cod scris + commit + push
    ↓
PR deschis (leagă de Issue)
    ↓
Coleg: code review pe GitHub + checkout branch local + testare
    ↓
Coleg: Aprobare (sau Request Changes)
    ↓
PR merge → Issue închis
    ↓
Toți trag main-ul
```

---

## Greșeli frecvente de urmărit

| Greșeală | Ce să faci |
|---|---|
| Push direct pe main | Reverte sau mută modificările pe un branch |
| Merge fără aprobare | Folosește branch protection rules |
| Ai uitat să tragi main înainte de a crea branch | `git pull origin main` primul, întotdeauna |
| Conflictul pare înspăimântător | Citește markerii, păstrează ambele modificări, șterge markerii |
| „Closes #N" lipsește din descrierea PR | Editează descrierea PR-ului, sau închide issue-ul manual |
