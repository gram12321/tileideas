# Tile Ideas

Early design and prototype work for a single-player, turn-based civilization simulation.

The game starts with a `City` as its main high-level object. Cities grow and spread influence to claim nearby tiles. Claimed tiles belong to the city area without requiring individual worker assignment.

## Current Prototype

- React, Vite, TypeScript, Tailwind CSS, and shadcn UI
- one starter city and one starter tile
- city growth
- per-city tile influence
- tile ownership resolved from highest influence
- manual turn advancement
- minimal UI shell for inspecting and changing demo state

Population, production, map generation, persistence, combat, diplomacy, and AI opponents are not implemented yet.

## Quick Start

```bash
npm install
npm run dev
```

The Vite server uses port `4173`.

Useful check:

```bash
npm run build
```

## Docs

- [Project context](docs/CONTEXT.md)
- [Variables overview](docs/variablesoverview.md)
- [City](docs/city.md)
- [Tiles](docs/tiles.md)
- [Project information](docs/PROJECT_INFO.md)
- [Implementation orientation](docs/AIdocs/AIDescriptions_coregame.md)
- [Version log](docs/versionlog.md)

## Working Rules

- Keep changes minimal and add only what the request needs.
- Keep this README short; larger designs belong in `docs/`.
- Keep simulation rules outside React components.
- Prefer small, testable slices over broad placeholder systems.
- Treat imported `.agent/` skills as optional guidance and verify their assumptions against this repo.
