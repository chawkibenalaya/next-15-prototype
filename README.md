# My V0 Project

Un projet moderne basé sur Next.js avec une stack complète d'outils de développement et de composants UI.

## 🚀 Technologies utilisées

- **Framework**: Next.js 15.2.4
- **Runtime**: React 19
- **Langage**: TypeScript
- **Styling**: Tailwind CSS avec animations
- **UI Components**: Radix UI + shadcn/ui
- **Formulaires**: React Hook Form + Zod
- **Testing**: Cypress
- **Thèmes**: next-themes

## 📦 Composants UI inclus

Ce projet inclut une collection complète de composants UI basés sur Radix UI :

- **Navigation** : Menus, navigation, tooltips
- **Formulaires** : Inputs, selects, checkboxes, radio buttons, sliders
- **Feedback** : Toasts, alerts, progress bars
- **Layout** : Accordéons, tabs, séparateurs, scroll areas
- **Overlays** : Dialogs, popovers, hover cards
- **Data Display** : Avatars, carousels, graphiques (Recharts)

## 🛠️ Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd my-v0-project

# Installer les dépendances
npm install
```

## 🏃‍♂️ Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start

# Linting
npm run lint

# Tests E2E avec Cypress
npm run cypress:open    # Interface graphique
npm run cypress:run     # Mode headless
```

## 📁 Structure du projet

```
my-v0-project/
├── components/          # Composants React
│   └── ui/             # Composants UI (shadcn/ui)
├── pages/ ou app/      # Pages Next.js
├── styles/             # Fichiers CSS/Tailwind
├── lib/                # Utilitaires et configurations
└── cypress/            # Tests E2E
```

## 🎨 Styling

Le projet utilise :
- **Tailwind CSS** pour le styling utilitaire
- **tailwind-merge** et **clsx** pour la gestion conditionnelle des classes
- **class-variance-authority** pour les variantes de composants
- **tailwindcss-animate** pour les animations

## 📝 Formulaires

Configuration optimisée pour les formulaires avec :
- **React Hook Form** pour la gestion d'état
- **Zod** pour la validation
- **@hookform/resolvers** pour l'intégration

## 🧪 Tests

Tests end-to-end configurés avec Cypress pour garantir la qualité de l'application.

## 🌙 Thèmes

Support des thèmes sombre/clair avec `next-themes`.

## 📊 Graphiques

Intégration de **Recharts** pour la visualisation de données.

## 🚧 Développement

Pour commencer à développer :

1. Lancez le serveur de développement : `npm run dev`
2. Ouvrez [http://localhost:3000](http://localhost:3000)
3. Commencez à modifier les fichiers - les changements sont appliqués automatiquement

## 📄 Licence

Ce projet est privé.