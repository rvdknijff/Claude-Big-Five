# Claude Big Five

**Five fictional company websites, five deliberately different design directions — built as a
front‑end showcase.**

> ⚠️ **This is a Claude Code test / portfolio project. It is _not_ real client work.**
> Every company, person, review, statistic, project and event on these sites is invented.
> Blackline Motorworks, Bloom Pediatric Dental, Northbound Expeditions, Ledger & Loom and
> NIGHTSHIFT do not exist. Names, addresses, phone numbers and prices are placeholders and
> any resemblance to a real organisation or person is coincidental. Nothing here should be
> treated as medical, financial, safety or travel advice.

The goal of the exercise was to build five sites that could each plausibly have been made by a
_different_ strong digital agency — not one template reskinned five times. Different industries,
audiences, layouts, motion languages, navigation patterns and tone of voice.

---

## The five sites

| # | Directory | Company | Sector | Feeling | Design direction |
|---|-----------|---------|--------|---------|------------------|
| 1 | [`blackline-motorworks`](./blackline-motorworks) | Blackline Motorworks | Performance car workshop (Utrecht) | Precision / power / engineering | Dark luxury automotive, technical grids, motorsport data |
| 2 | [`bloom-pediatric-dental`](./bloom-pediatric-dental) | Bloom Pediatric Dental | Children's dental practice (Amersfoort) | Safe / friendly / caring | Soft, playful, organic shapes and illustration |
| 3 | [`northbound-expeditions`](./northbound-expeditions) | Northbound Expeditions | Small‑group outdoor expeditions | Adventure / scale / wilderness | Editorial photography and scroll storytelling |
| 4 | [`ledger-and-loom`](./ledger-and-loom) | Ledger & Loom | Financial advice for creative businesses | Clarity / intelligence / structure | Swiss editorial, grid, typography and data |
| 5 | [`nightshift`](./nightshift) | NIGHTSHIFT | Underground electronic music festival (Rotterdam) | Energy / underground / culture | Experimental / brutalist / kinetic |

Each directory is a fully self‑contained project with its own `package.json`, its own design
system document (`DESIGN.md`) and its own `README.md`.

---

## Tech stack (shared)

- **React 19** + **TypeScript** (strict)
- **Vite 8**
- **Tailwind CSS 4** (CSS‑first `@theme` tokens — each site defines its own token system)
- **react-router-dom 7** for client‑side routing
- Per‑site libraries only where they earn their place — e.g. Framer Motion for the sites that
  need orchestrated motion, Lenis for scroll‑storytelling, hand‑rolled SVG charts and
  count‑ups for Ledger & Loom (no chart library), a custom canvas grain layer for NIGHTSHIFT.

**No back end anywhere.** No database, API server, CMS, authentication or admin panel. Forms
validate and show loading / success / error states entirely on the client and never submit to a
server. All content is local mock data (`src/data/**`).

### Images

Photography is downloaded into each project (`public/images/`) rather than hot‑linked, so the
sites work offline and load fast. Every project has `scripts/fetch-images.mjs` with a manifest
of source URLs (Unsplash / Pexels) — run `npm run fetch:images` to re‑download or swap them.
Sources and credits are listed in each project's `public/images/CREDITS.md`.

---

## Running a site

Each project runs independently. Node 20.19+ or 22.12+ required.

```bash
cd blackline-motorworks      # or any of the five directories
npm install
npm run dev                  # start the dev server (Vite prints the local URL)
npm run build                # production build to dist/
npm run preview              # serve the production build locally
npm run typecheck            # tsc --noEmit
npm run lint                 # eslint
```

---

## Repository layout

```
Claude-Big-Five/
├── README.md                 ← you are here
├── blackline-motorworks/
│   ├── DESIGN.md             ← design system: identity, tokens, type, motion, layout rules
│   ├── README.md
│   ├── scripts/fetch-images.mjs
│   ├── public/images/
│   └── src/
├── bloom-pediatric-dental/
├── northbound-expeditions/
├── ledger-and-loom/
└── nightshift/
```

---

<details>
<summary><strong>Original brief (verbatim, Dutch)</strong></summary>

The prompt below is the assignment this repository was built from, kept unedited for reference.

---

# CLAUDE CODE OPDRACHT — 5 VOLLEDIG VERSCHILLENDE FRONTEND WEBSITES

Je gaat vijf volledig afzonderlijke, fictieve bedrijfswebsites ontwerpen en ontwikkelen.

Het doel is NIET om vijf websites te maken die aanvoelen alsof alleen het logo, lettertype en de kleuren zijn veranderd.

Iedere website moet:

* Een volledig eigen visuele identiteit hebben.
* Een volledig andere doelgroep aanspreken.
* Een andere branche vertegenwoordigen.
* Andere UX-prioriteiten hebben.
* Een andere layoutsamenstelling gebruiken.
* Andere animaties en interacties gebruiken.
* Een eigen tone-of-voice hebben.
* Een eigen navigatiestructuur hebben waar logisch.
* Als een daadwerkelijk professioneel bedrijf overkomen.
* Geschikt zijn als showcase-/portfolio-project.

## Algemene technische regels

Alleen frontend. Er mag ABSOLUUT GEEN backend worden gebouwd — geen Laravel, PHP, Node-backend,
Express, databases, API-server, authenticatie, adminpanel, CMS, accounts, databaseconnecties of
server-side formulieren. Formulieren mogen visueel volledig functioneren (validatie, states,
success, error, loading) maar sturen niets naar een server. Gebruik lokale mockdata.

Technologie: recente stabiele versies. Voorkeur voor React, TypeScript, Vite, Tailwind CSS.
Aanvullende libraries alleen wanneer ze echt waarde toevoegen (Framer Motion, GSAP, Three.js,
React Three Fiber, Lenis, Lucide, Swiper, ...). Niet twintig dependencies installeren voor
dingen die eenvoudig zelf gebouwd kunnen worden.

Performance: goede image optimization, lazy loading, geen gigantische JS-bundles, geen zware
3D wanneer die niets toevoegt, geen autoplay achtergrondvideo's van tientallen MB, goede font
loading, geen layout shifts, responsive images, performante animaties, respecteer
`prefers-reduced-motion`. Streef naar zeer goede Lighthouse-resultaten (Performance,
Accessibility, Best Practices, SEO). Bouwen alsof ze daadwerkelijk online gaan.

Responsive design op grote desktop, laptop, tablet landscape/portrait, grote en kleine
smartphone — en dat betekent niet simpelweg alles onder elkaar zetten. Denk per schermformaat
na over navigatie, typografie, contenthiërarchie, interactie, afbeeldingen, witruimte, cards,
animaties en touch targets.

Accessibility: semantische HTML, correcte heading-hiërarchie, goede kleurcontrasten, keyboard
navigation, focus states, formulier-labels, alt-teksten, ARIA alleen waar nodig, geen
interacties die alleen via hover ontdekt kunnen worden.

Geen generieke AI/SaaS-website (navbar → hero → 3 cards → logo strip → 3 cards → testimonials →
CTA → footer). Niet elke sectie een afgeronde container. Verschillende composities en creatieve
layouts. Vermijd overmatig glassmorphism, blauw/paarse gradients, glow-effecten, gradient
tekst, overal afgeronde kaarten, dezelfde border radius, dezelfde hero-layout, dezelfde
CTA-knoppen, overdreven floating cards. Iedere website moet door een andere sterke agency
ontworpen kunnen zijn.

## De vijf merken

**Website 1 — Blackline Motorworks.** Exclusieve werkplaats voor performance- en sportauto's in
Utrecht. Specialisatie: Porsche, BMW M, Audi RS, Mercedes-AMG. Diensten: performance upgrades,
uitlaatsystemen, onderstel, remmen, ECU tuning, dyno testing, track preparation, onderhoud.
Nadrukkelijk NIET goedkope tuning — premium reputatie, motorsport + high-end engineering +
exclusieve automotive cultuur. Doelgroep: overwegend mannen ~25–55 met bovengemiddeld inkomen
die serieus geld aan hun auto uitgeven (911-, M3/M4-, RS6-, AMG-bezitters, trackdayrijders).
Geen schreeuwerige Need for Speed-website — vakmanschap, technische expertise, exclusiviteit.
Visueel: high-end motorsport engineering, donker (diep zwart, antraciet, gebroken wit, één
krachtige accentkleur), krachtige fotografie, grote typografie, subtiele motorsportreferenties
(technical grids, meetlijnen, specificaties, RPM-details, dyno-grafiek-elementen) maar niet
kitscherig. Homepage: bijna-fullscreen hero met performanceauto in donkere werkplaats,
"Engineered to perform.", subtekst "Performance, precision and craftsmanship for cars built to
be driven.", CTA's Explore our work / Book an inspection. Expertise in editorial-layout (niet
zes identieke cards). Featured build: fictieve Porsche 992 Carrera S, stock 450 hp → Blackline
Stage 2 548 hp, 0–100 verbetering, exhaust, suspension, brakes, interactieve before/after of
build breakdown. Selected projects met grote automotive fotografie (Porsche 992 Carrera S, BMW
G80 M3 Competition, Audi RS6 C8, Mercedes-AMG GT). Workshop met de vakmensen, geen
stock-bedrijfstaal. Dyno/engineering: visueel technisch onderdeel dat laat zien dat tuning niet
simpelweg "meer pk" betekent. CTA: plan een inspectie. Pagina's: Home, Services, Projects,
Project detail, About/Workshop, Contact. Interactie: gecontroleerde premium animaties —
parallax autofotografie, tekst reveals, scroll-linked technische informatie, before/after
slider, hover states bij projecten. Geen overdreven animatiecircus.

**Website 2 — Bloom Pediatric Dental.** Fictieve kindertandartspraktijk in Amersfoort, kinderen
~2–16 jaar. Wil tandartsbezoek minder spannend maken. Focus op preventie, eerste tandartsbezoek,
angstige kinderen, poetstechniek, oudervoorlichting, rustige behandelingen. Twee gebruikers:
primaire beslisser = ouders ~25–45 (vertrouwen, professionaliteit, duidelijke informatie,
veiligheid, bereikbaarheid); eindgebruiker = kinderen (site mag speels zijn maar absoluut niet
onprofessioneel of kinderachtig). Visueel heel anders dan Blackline: zachte kleuren, veel lucht,
organische vormen, illustraties, vriendelijke fotografie, zachte typografie. Geen klinische
ziekenhuislook, geen standaard tandartswebsite met alleen lachende mensen in witte jassen.
Vriendelijk en geruststellend. Creatief concept: de praktijk als subtiele groeiwereld — "Een
gezonde glimlach groeit mee." Kleine illustratieve elementen (blaadjes, bloemen, vriendelijke
characters, wolken, sterretjes) maar professioneel. Homepage: hero "Big smiles start small.",
NL-subtitel "Een kindertandartspraktijk waar kinderen op hun eigen tempo kunnen wennen,
ontdekken en groeien.", CTA "Plan een eerste bezoek", tweede CTA "Zo bereiden we je kind voor".
Eerste bezoek als belangrijk onderdeel: visueel stappenproces (1 binnenkomen, 2 kennismaken,
3 stoel ontdekken, 4 tanden tellen, 5 samen afsluiten), eventueel interactieve horizontale
journey. Voor ouders: praktische info (wanneer eerste bezoek, hoe vaak controle, tandartsangst,
melktanden, poetsen, beugels/verwijzing). Meet the team (Dr. Sophie de Wit; Noor —
kindertandartsassistente; Emma — preventieassistente). "Is jouw kind zenuwachtig?" — opvallende
maar rustige sectie die de aanpak uitlegt. Kleine interactieve kinderfunctie "Poets met Pip":
een cartoon tand wordt langzaam schoon bij hover/swipe — charmante micro-interactie, geen game.
Pagina's: Home, Eerste bezoek, Behandelingen, Voor ouders, Ons team, Veelgestelde vragen,
Contact.

**Website 3 — Northbound Expeditions.** Fictief outdoor reisbedrijf, kleinschalige expedities,
geen massatoerisme. Bestemmingen: Noorwegen, IJsland, Schotland, Zweeds Lapland, Faeröer.
Activiteiten: trekking, wild camping, kajakken, winterexpedities, hiking, northern lights.
Groepsgrootte max ~8. Doelgroep ~24–45, redelijk wat te besteden, reizen voor ervaringen niet
luxe hotels, houden van outdoor, willen avontuur met begeleiding en veiligheid, geen
toeristische groepsreis met 40 mensen; gebruiken Instagram, Strava, Garmin, outdoorplatforms.
Visueel: modern outdoor editorial magazine — grote indrukwekkende landschapsfotografie, sterke
editorial typography, natuurlijke kleuren (off-white, donkergroen, steen/grijs), eventueel
signaaloranje als klein functioneel accent. De foto's zijn de held. Hero: heel groot beeld
(kleine groep hikers tussen enorme Noorse bergen), "Go where the road doesn't.", subtekst
"Small-group expeditions into Europe's wildest landscapes.", CTA "Explore expeditions".
Expedition explorer als zeer belangrijk onderdeel — expedities: Arctic Circle Winter Traverse
(Swedish Lapland, 7 days, difficulty 4/5, -18°C → -5°C, February); Lofoten Midnight Sun Trek
(Norway, 6 days, difficulty 3/5, June); Iceland Highlands Crossing (Iceland, 8 days, difficulty
4/5, August); Isle of Skye Wild Trek (Scotland, 5 days, difficulty 2/5, May). Expedition detail:
prachtige detailpagina met route, dagplanning, afstand, hoogtemeters, moeilijkheid, klimaat,
slaapplaatsen, wat inbegrepen is, wat je moet meenemen, groepsgrootte, visuele route/tijdlijn
(gestileerde frontend-routevisualisatie, geen externe kaartservice nodig). Storytelling: scroll
storytelling (Day 01 → civilization disappears; Day 02 → first mountain pass; Day 03 → camp
above the Arctic Circle) met fotografie, kaarten, data, korte teksten. Andere secties: Why small
groups?, Meet your guides, Safety, Equipment, Stories/journal, Sustainability. Pagina's: Home,
Expeditions, Expedition detail, About, Guides, Journal, Journal article, FAQ, Contact.

**Website 4 — Ledger & Loom.** Fictief financieel adviesbureau voor creatieve ondernemers
(fotografen, designers, developers, architecten, creatieve agencies, freelancers, videografen,
kleine studio's). Helpt met boekhouding, financiële planning, cashflow, belastingplanning,
bedrijfsstructuur, groei, financiële dashboards. Absoluut NIET als ouderwets accountantskantoor.
Doelgroep: zelfstandige creatieve professionals en kleine creatieve bedrijven ~25–45 die van
goed design houden en direct afhaken bij een website uit 2012. Merkbelofte: "Finance for people
who didn't start a business to become accountants." Vertaalt ingewikkelde financiële zaken naar
duidelijke beslissingen. Visueel heel anders dan de rest: Swiss design, editorial, grid based,
moderne typografie, veel witruimte, typografie als dominant designonderdeel, duidelijke
grafieken, tabellen, grote cijfers, ongebruikelijke asymmetrische layouts. Kleuren: warm
off-white, donkere inktkleur, één onverwachte felle accentkleur — geen typische fintech-blauw.
Hero: "Know your numbers. Build what matters.", subtekst "Financial clarity for independent
creatives and growing studios.", CTA "See how we help". Interactieve cashflow-demo (puur
frontend): sliders monthly revenue €12.500, monthly costs €7.200, tax reserve 28%; berekent
lokaal estimated profit, tax reserve, available cash; duidelijke disclaimer dat het geen echt
financieel advies is. Services niet als standaard kaarten maar als typografische index (01 —
Accounting, 02 — Cashflow, 03 — Tax planning, 04 — Growth planning, 05 — Studio finance) met
extra info bij hover/tap. Cases: Studio Norte (brand design studio, van chaotische cashflow naar
zes maanden financiële runway); Frame/37 (video production company, projectmarges inzichtelijk
gemaakt); Abel Architecture (architecture studio, planning voor eerste werknemer) — met mooie
datavisualisaties. Andere onderdelen: Financial philosophy, Process, Client stories, Resources,
FAQs, Contact. Pagina's: Home, Services, Cases, Case study, Insights, Article, About, Contact.

**Website 5 — NIGHTSHIFT.** Fictief underground muziek- en cultuurfestival in Rotterdam.
Genre: electronic, techno, experimental, UK garage, drum & bass, electronic live acts. Verspreid
over meerdere industriële locaties. Geen mainstream EDM-festival — draait om muziek, visual
arts, lichtinstallaties, architectuur, underground cultuur. Doelgroep 18–32 (studenten,
creatieven, muziekliefhebbers, designers, fotografen; Rotterdam/Amsterdam/Utrecht/Antwerpen +
internationale bezoekers), digitaal zeer vaardig met hoge designverwachtingen. Visueel de meest
experimentele: brutalist design, club posters, rave flyers, grote typography, grid distortion,
bewegende tekst, grain, noise, monochrome fotografie, felle accentkleur, onverwachte
hoverinteracties — maar nog steeds goed bruikbaar (wanneer, waar, wie speelt, hoe tickets
werken moet vindbaar zijn). Hero: geen standaard hero — fullscreen typografie "NIGHT / SHIFT",
"ROTTERDAM", "17 — 18 OCT 2026", bewegende achtergrondvisuals, CTA "ENTER", scrollen brengt de
gebruiker de website in. Line-up: zeer opvallende interactieve line-up, enorme typografische
lijst (KI/KI, OVERMONO, MALL GRAB, VTSS, INTERPLANETARY CRIMINAL, DJ FUCKOFF, SPECIAL REQUEST +
fictieve artiesten); bij hover foto, stage, tijd, genre; op mobiel via tap. Timetable: frontend
festival timetable, stages Terminal / Warehouse / Basement / Dock, 20:00 → 07:00, wisselen
tussen FRIDAY en SATURDAY, data lokaal. Venues: vier fictieve industriële locaties elk met eigen
sfeer (TERMINAL 04 — concrete/industrial techno; THE DOCK — UKG/house; SUBLEVEL —
experimental/live; WAREHOUSE 11 — hard/fast/late). Art installations: projection mapping,
interactive light, generative visuals, spatial audio. Archive: experimenteel festivalarchief
2026/2025/2024/2023 met posters/foto's. Pagina's: Landing/Home, Line-up, Timetable, Venues, Art,
Info, Archive.

## Onderlinge verschillen bewaken

Blackline = precision/power/engineering, dark luxury automotive. Bloom = safe/friendly/caring,
soft playful organic. Northbound = adventure/scale/wilderness, editorial photography +
storytelling. Ledger & Loom = clarity/intelligence/structure, Swiss editorial/typography/data.
NIGHTSHIFT = energy/underground/culture, experimental/brutalist/kinetic.

Content: geen lorem ipsum — geloofwaardige fictieve content per bedrijf (branche, doelgroep,
tone-of-voice, positionering). Zelf teamleden, reviews, cases, projecten, productnamen,
expedities, artiesten, artikelen, statistieken maken. Duidelijk fictieve bedrijfsdata mag niet
per ongeluk naar echte personen of organisaties verwijzen.

Afbeeldingen: geschikte hoogwaardige afbeeldingen of placeholders, eenvoudig vervangbaar,
onderdeel van het design, passende aspect ratios, niet elke website dezelfde Unsplash-card-layout.

Micro-interacties per site verschillend (niet vijf keer dezelfde fade-in). Blackline: technische
reveals, project transitions. Bloom: zachte organische animaties, interactieve tand. Northbound:
scroll storytelling, routeprogressie. Ledger & Loom: getallen, interactieve financiële demo,
gridinteracties. NIGHTSHIFT: kinetic typography, timetable interactions, experimentele
cursor/hoverstates.

Navigatie per merk passend (niet vijf keer dezelfde navbar). Blackline: minimalistische
horizontale premium navbar. Bloom: vriendelijke duidelijke navigatie. Northbound:
overlay/navigation gericht op exploratie. Ledger & Loom: strak typografisch systeem. NIGHTSHIFT:
experimentele festivalnavigatie.

Codekwaliteit: nette production-quality frontendcode, herbruikbare componenten waar logisch,
TypeScript types, duidelijke projectstructuur, geen component van 1500 regels, geen overbodige
duplicatie of abstrahering, geen dead code, geen console errors, geen TypeScript errors, geen
eenvoudig op te lossen warnings.

Projectstructuur: vijf volledig aparte projecten/directories (/blackline-motorworks,
/bloom-pediatric-dental, /northbound-expeditions, /ledger-and-loom, /nightshift), ieder
zelfstandig te draaien, ieder met eigen README (projectnaam, omschrijving, technologie,
installatie, development starten, production build).

Testen: per website functionaliteit (links, navigatie, mobile menu, buttons, interacties,
sliders, filters, accordions, forms, timetable, calculators, carousels, modals), responsive
(375, 430, 768, 1024, 1440, 1920 — let op overflow, afgebroken tekst, te kleine/grote tekst,
onbruikbare navigatie, horizontale scrollbar, verkeerd croppende afbeeldingen, overlappende
elementen), en code (typecheck, lint, production build — geen build errors). Visuele QA in de
browser. Performance QA.

Laatste designcontrole: "Als ik de logo's en bedrijfsnamen weg zou halen, zou ik dan nog steeds
onmiddellijk kunnen zien dat dit vijf verschillende merken en vijf verschillende designers zijn?"
Zo niet: herontwerp wat te veel op elkaar lijkt (hero layouts, navigatie, buttons, cards, border
radius, section spacing, fonts, animaties, footers, CTA-secties, mobile layouts).

Einddoel: vijf portfolio-projecten van hoog niveau. Geen backend, CMS, authenticatie of
database. Wel volledig responsive, visueel sterk, snel, interactief, toegankelijk, modern,
production-quality frontend met goede content, sterke branding en verschillende designrichtingen.

Begin met het analyseren van de vijf merken en maak vervolgens per merk een eigen design system
voordat je de uiteindelijke pagina's bouwt. Maak ook een README met de originele prompt en
uitleg dat dit een Claude-test-project is en geen officieel klantproject.

</details>

---

## Credits

Built with [Claude Code](https://claude.com/claude-code). Photography from Unsplash and Pexels
(per‑project `CREDITS.md`). All brand, product and editorial content is fictional.
