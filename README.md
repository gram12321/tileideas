# Tile Ideas

Early design and prototype work for a single-player, turn-based civilization simulation.

The current design direction is not a Civ-style "work one tile per population" model. Cities are expected to spread influence, control territory, and aggregate the underlying state of the tiles they hold. Controlled tiles contribute territorial potential, while city-level systems determine how much of that potential becomes usable output.

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

- [Project context](docs/CONTEXT.md): canonical vocabulary and naming rules
- [Variables overview](docs/variablesoverview.md): stored-vs-derived decisions, dependency flow, and turn order
- [City](docs/city.md): city-specific model and responsibilities
- [Tiles](docs/tiles.md): tile-specific model and planned attribute schema
- [City growth and territory brainstorm](docs/brainstorm-city-growth-2026-06-13.md): exploratory design trail and unresolved ideas
- [Project information](docs/PROJECT_INFO.md): repo structure, ownership, and likely module split
- [Implementation orientation](docs/AIdocs/AIDescriptions_coregame.md): imported implementation guidance to verify before use
- [Version log](docs/versionlog.md): committed change history

## Working Rules

- Keep changes minimal and add only what the request needs.
- Keep this README short; larger designs belong in `docs/`.
- Keep simulation rules outside React components.
- Prefer small, testable slices over broad placeholder systems.
- Treat imported `.agent/` skills as optional guidance and verify their assumptions against this repo.
