# Sirat MVP - Qur'an Reader

A simplified MVP version of [Sirat](https://github.com/MAtiyaaa/sirat) - A bilingual Qur'an reader application.

## Features

- 📖 **Qur'an Reader** - Browse all 114 Surahs
- 🌐 **Bilingual Support** - Arabic and English translations
- 🌙 **Dark/Light Mode** - Theme toggle for comfortable reading
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast & Lightweight** - Built with Vite and React

## Tech Stack

- **React 18.3** - Modern component architecture
- **TypeScript** - Type-safe development
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing
- **AlQuran.cloud API** - Qur'an data source

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
sirat-mvp/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # App header with theme toggle
│   │   └── SurahCard.tsx # Surah display card
│   ├── pages/           # Route pages
│   │   ├── Home.tsx     # Surah list page
│   │   └── SurahDetail.tsx # Individual Surah reader
│   ├── lib/             # Utilities
│   │   └── utils.ts     # Helper functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.ts
```

## API

This MVP uses the free [AlQuran.cloud API](https://alquran.cloud/api) for Qur'an data:
- Arabic text from Quran Uthmani edition
- English translation from Sahih International

## Differences from Parent Project

This MVP focuses solely on the Qur'an reading feature, removing:
- ❌ Authentication (Supabase)
- ❌ Database persistence
- ❌ Additional features (Tasbih, Mosque Locator, etc.)
- ❌ Complex state management

The goal is a simple, working Qur'an reader that demonstrates the core functionality.

## License

MIT

## Acknowledgments

- Original project: [Sirat by MAtiyaaa](https://github.com/MAtiyaaa/sirat)
- AlQuran.cloud API for Qur'an data
- shadcn/ui for component primitives