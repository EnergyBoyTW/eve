# Contributing

## Setup

```bash
git clone https://github.com/EnergyBoyTW/eve.git
cd eve
npm install
cp apps/eve/.env.example apps/eve/.env.local
npm run dev
```

## Branches

- `main` — stable, deploys to production
- Feature branches off `main`, PR back to `main`

## Code style

- TypeScript strict mode throughout
- Run `npm run typecheck` before opening a PR

## Commit messages

Short imperative subject line, no trailing period. Body optional.
