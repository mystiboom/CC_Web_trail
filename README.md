# Decoding Bio Demo

Vite + React + TypeScript demo app. Includes an interactive grid component (`src/components/InteractiveGrid.tsx`).

## Tech Stack
- React 18
- TypeScript 5
- Vite 5
- ESLint (config in `eslint.config.js`)

## Requirements
- Node.js 18+ (recommended 18 or 20)
- npm 9+

Check versions:
```bash
node -v
npm -v
```

## Getting Started

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```
Open the URL printed in the terminal (usually `http://localhost:5173`).

## Build & Preview (Production)

Build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```
Open the printed URL (usually `http://localhost:4173`).

## Scripts

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build for production
- `npm run preview` — preview the build locally
- `npm run type-check` — TypeScript type check (no emit)

## Project Structure

```
decoding-bio-demo/
├─ public/                 # Static assets
├─ src/
│  ├─ assets/              # Images/icons
│  ├─ components/
│  │  └─ InteractiveGrid.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ App.css
├─ dist/                   # Production build output
├─ vite.config.ts
├─ tsconfig*.json
├─ eslint.config.js
└─ package.json
```

## Share or Deploy

### Share via GitHub
1. Initialize and commit:
   ```bash
   git init
   echo "node_modules\ndist\n.vite\n.env*" > .gitignore
   git add -A
   git commit -m "Initial commit"
   ```
2. Create a GitHub repo (empty, no README).
3. Push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/decoding-bio-demo.git
   git push -u origin main
   ```

### Share as a ZIP
- Delete `node_modules` before zipping to keep it small. The recipient should run `npm install` after unzipping.

## Troubleshooting

- Port in use: Vite will auto-select another port. Use the URL printed in the terminal.
- Node version errors: upgrade to Node 18+.
- Dependencies missing: run `npm install` in the project root.
- Cache issues: delete `node_modules` and `package-lock.json`, then `npm install`.

## License
MIT (or your preferred license)
