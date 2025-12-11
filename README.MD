# DagenTot.nl - Countdown Timer

Een moderne, gebruiksvriendelijke countdown-website gebouwd met Next.js. Tel af naar belangrijke datums en deel je countdowns met een unieke URL.

## ✨ Features

- 🎯 **Eenvoudige countdown calculator** - Dagen, weken en maanden tot een datum
- 🔗 **Deelbare URLs** - Elke countdown heeft een unieke, deelbare link
- 🌓 **Dark/Light mode** - Automatische theme detection en manual toggle
- 📱 **Mobile-first** - Volledig responsive ontwerp
- 🚀 **PWA-ready** - Installeerbaar als web app
- 🎨 **Emoji support** - Personaliseer je countdown met emoji's
- 📊 **AdSense ready** - Advertentie-posities geïntegreerd
- ⚡ **Performance optimized** - Lighthouse score 90+

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Date handling**: date-fns
- **Language**: TypeScript
- **Deployment**: Docker + Nginx

## 📦 Installatie

### Lokale ontwikkeling

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production build

```bash
# Build voor productie
npm run build

# Start production server (statische export)
npm start
```

### Docker deployment

```bash
# Build en start met Docker Compose
docker-compose up -d

# Toegankelijk op http://localhost:3000

# Stop de container
docker-compose down
```

## 📁 Project Structuur

```
dagentot-nl/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── CountdownDisplay.tsx
│   │   ├── DatePicker.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ShareButton.tsx
│   │   └── AdSlot.tsx
│   ├── lib/
│   │   ├── countdown.ts        # Countdown logic
│   │   ├── url-state.ts        # URL parameter handling
│   │   └── seo.ts              # SEO utilities
│   └── types/
│       └── countdown.ts        # TypeScript types
├── public/
│   └── manifest.json           # PWA manifest
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── next.config.js
```

## 🔗 URL Parameters

Countdowns worden gestuurd via URL parameters:

```
/?date=2026-05-01
/?title=Vakantie&date=2026-05-01
/?title=Verjaardag&date=2025-12-25&emoji=🎂
```

### Parameters

- `date` (verplicht): ISO 8601 datum (YYYY-MM-DD)
- `title` (optioneel): Titel van het event
- `emoji` (optioneel): Emoji voor het event
- `theme` (optioneel): `light`, `dark`, of `auto`

## 🎨 Theming

De applicatie ondersteunt dark/light mode:

- **Auto detection**: Gebruikt systeem voorkeur
- **Manual toggle**: Via knop rechtsboven
- **Persistence**: Opgeslagen in localStorage

## 📊 AdSense Integratie

Voordat je AdSense advertenties activeert:

1. Vervang placeholder in `.env.local`:
```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-JOUW_CLIENT_ID
```

2. Update ad slots in de componenten met je eigen slot IDs

3. Voeg AdSense script toe (al geïntegreerd in layout.tsx)

## 🚀 Deployment

### Vercel (Aanbevolen)

```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build commando
npm run build

# Output directory
out
```

### Docker op VPS

```bash
# Build image
docker build -t dagentot-nl .

# Run container
docker run -d -p 80:80 dagentot-nl
```

## ⚡ Performance

Target metrics:

- ✅ Lighthouse Performance: 95+
- ✅ First Contentful Paint: < 1s
- ✅ Time to Interactive: < 1.5s
- ✅ Bundle size: < 200KB

## 🔒 Security

- XSS protection via React's automatic escaping
- Security headers in nginx.conf
- Input validation voor alle user input
- CSP headers (configureerbaar)

## 🎯 SEO

- Dynamic meta tags per countdown
- Open Graph tags voor social sharing
- Structured data (JSON-LD)
- Semantic HTML
- Sitemap generatie (TODO)

## 📝 Todo / Roadmap

### v1.1
- [ ] Multiple countdowns opslaan (localStorage)
- [ ] Meer emoji categorieën
- [ ] Custom achtergronden
- [ ] Export naar calendar (.ics)

### v2.0
- [ ] User accounts
- [ ] Database integratie
- [ ] E-mail reminders
- [ ] Widget support
- [ ] Native mobile apps

## 🐛 Bekende Issues

- Safari date picker styling kan afwijken
- iOS PWA install prompt vereist handmatige actie

## 🤝 Contributing

Contributions zijn welkom! Open een issue of pull request.

## 📄 Licentie

MIT License - zie LICENSE file voor details

## 👨‍💻 Auteur

DagenTot.nl - [Website](https://dagentot.nl)

## 🙏 Credits

- Next.js team voor het framework
- Tailwind CSS voor styling system
- date-fns voor date utilities