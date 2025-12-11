# 🇪🇸 Spanska Nu 🇸🇪

En interaktiv webbapplikation för att lära sig spanska verbböjningar och översättningar. Perfekt för personligt bruk och självstudier.

## 📋 Funktioner

- **Interaktiva övningar** - Öva verbböjningar med direkt feedback
- **Ljuduppspelning** - Lyssna på korrekt spanskt uttal med TTS (Text-to-Speech)
- **Progressmätning** - Följ dina framsteg i realtid
- **Två kategorier**:
  - Regelbundna verb (-AR, -ER, -IR)
  - Oregelbundna verb (ser, estar, tener, hacer, etc.)
- **Responsiv design** - Fungerar på desktop, surfplatta och mobil
- **Enkelt att använda** - Ingen inloggning krävs

## 📁 Projektstruktur

```
spanska-nu/
├── index.html                    # Landing page
├── regelbundna.html              # Övningar för regelbundna verb
├── oregelbundna.html             # Övningar för oregelbundna verb
├── assets/
│   ├── css/
│   │   └── styles.css            # Gemensam styling
│   └── js/
│       └── verbs.js              # Gemensam funktionalitet
└── README.md                     # Den här filen
```

## 🚀 Komma igång lokalt

1. Klona eller ladda ner projektet
2. Öppna `index.html` i din webbläsare
3. Börja öva!

Alternativt, kör en lokal server:
```bash
# Med Python 3
python3 -m http.server 8000

# Med Node.js (npx)
npx serve

# Öppna sedan http://localhost:8000 i din webbläsare
```

## 📤 Pusha till GitHub

### Första gången (om du inte redan har pushat):

```bash
# Gå till projektmappen
cd /home/anders/src/AndersFluur/spanska-nu

# Kontrollera status
git status

# Lägg till alla nya filer
git add .

# Skapa en commit
git commit -m "Initial commit: Spanska Nu webtjänst

Lagt till:
- Landing page med navigation
- Regelbundna verb övningar (-AR, -ER, -IR)
- Oregelbundna verb övningar
- Interaktiva övningar med ljuduppspelning
- Responsiv design
- README med instruktioner

🤖 Generated with Claude Code
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Koppla till ditt GitHub-repo (om inte redan gjort)
git remote add origin https://github.com/AndersFluur/spanska-nu.git

# Pusha till GitHub
git push -u origin main
```

### Vid framtida ändringar:

```bash
# Lägg till ändrade filer
git add .

# Skapa commit
git commit -m "Beskrivning av dina ändringar"

# Pusha
git push
```

## ☁️ Deploya till Cloudflare Pages

### Steg 1: Förbered GitHub-repo

1. Se till att alla filer är pushade till GitHub (följ instruktionerna ovan)
2. Verifiera att filerna syns på: `https://github.com/AndersFluur/spanska-nu`

### Steg 2: Koppla till Cloudflare Pages

1. **Logga in på Cloudflare**
   - Gå till: https://dash.cloudflare.com/
   - Logga in med ditt konto

2. **Skapa ett nytt Pages-projekt**
   - Klicka på "Workers & Pages" i vänstermenyn
   - Klicka på "Create application"
   - Välj "Pages" fliken
   - Klicka på "Connect to Git"

3. **Anslut GitHub**
   - Om det är första gången: Auktorisera Cloudflare att komma åt din GitHub
   - Välj ditt repository: `AndersFluur/spanska-nu`

4. **Konfigurera build-inställningar**
   - **Project name**: `spanska-nu` (eller valfritt namn)
   - **Production branch**: `main`
   - **Build command**: *Lämna tomt* (statisk site)
   - **Build output directory**: `/` (eller lämna tomt)
   - **Root directory**: `/` (projektets rot)

5. **Deploya**
   - Klicka på "Save and Deploy"
   - Vänta medan Cloudflare bygger och deplojar (tar ~1-2 minuter)
   - När det är klart får du en URL typ: `https://spanska-nu.pages.dev`

### Steg 3: Anpassad domän (valfritt)

Om du vill använda en egen domän:

1. Gå till ditt Pages-projekt i Cloudflare
2. Klicka på "Custom domains"
3. Klicka på "Set up a custom domain"
4. Följ instruktionerna för att koppla din domän

## 🔄 Automatisk deploy

När du har kopplat GitHub till Cloudflare Pages:

- Varje `git push` till `main` branch deployas automatiskt
- Du kan se deployment-status i Cloudflare Dashboard
- Rollbacks är enkla via Cloudflare interface

## 🎯 Användning

1. Välj kategori (Regelbundna eller Oregelbundna verb)
2. Klicka på 🔊 för att höra uttalet
3. Skriv översättningen eller verbformen
4. Tryck Enter eller klicka "Kolla" för att kontrollera
5. Följ din progress i toppen av sidan

**Tips:**
- 🔊 = Lyssna på ett ord och fyll i
- 🔊🔊 = Lyssna på alla former i följd
- ✓ Kontrollera alla = Kollar alla ifyllda svar
- 📝 Fyll i alla svar = Fyller i alla rätta svar (bra för att lära sig)
- 🔄 Rensa allt = Börja om från början

## 🔮 Framtida förbättringar

- [ ] Gruppera verb i mindre sektioner
- [ ] Lägg till meningsövningar (fill-in-the-blank)
- [ ] Gloslistor och ordförråd
- [ ] Olika tempus (presens, preteritum, etc.)
- [ ] Spara framsteg lokalt (localStorage)
- [ ] Möjlighet att välja specifika verb att öva på

## 📝 Licens

Detta är ett personligt projekt för privat bruk.

## 🙋 Support

Detta projekt är skapat för personligt bruk. Vid tekniska problem, kontrollera att:
- Alla filer är korrekt uppladdade
- JavaScript är aktiverat i webbläsaren
- Du använder en modern webbläsare (Chrome, Firefox, Safari, Edge)

---

**Skapad med ❤️ för att lära sig spanska**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
