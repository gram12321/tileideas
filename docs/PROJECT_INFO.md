# Project Information

Last updated: 2026-06-13

Status: Early prototype

This file maps current ownership and likely growth paths. Planned paths are guidance, not requirements.

## Current Stack

- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS 4
- shadcn/Radix UI primitives

There is currently no database, backend, persistence layer, or automated test setup.

## Current Layout

| Path | Role |
|---|---|
| `README.md` | Short project entry point and doc map. |
| `src/game.ts` | Top-level game state and turn transitions. |
| `src/city.ts` | City type, creation, and growth. |
| `src/tile.ts` | Tile type, influence updates, and ownership resolution. |
| `src/index.ts` | Public exports for domain modules. |
| `src/App.tsx` | Prototype UI shell and demo-state orchestration. |
| `src/components/ui/` | Shared shadcn-based UI primitives. |
| `src/lib/utils.ts` | Shared UI utility helpers. |
| `docs/` | Design, architecture, vocabulary, and workflow docs. |
| `.agent/skills/` | Imported local agent skills; use only when relevant and verify assumptions against this repo. |

## Current Ownership

| Area | Current owner |
|---|---|
| Game state and turns | `src/game.ts` |
| City rules | `src/city.ts` |
| Tile and influence rules | `src/tile.ts` |
| UI composition and demo actions | `src/App.tsx` |
| Shared UI primitives | `src/components/ui/` |
| Domain vocabulary | `docs/CONTEXT.md` |
| Variable relationships | `docs/variablesoverview.md` |

## Architecture Direction

Keep the current modules small while the domain is still forming. When a system becomes large enough to justify separation:

| Future concern | Preferred location |
|---|---|
| Shared domain types | `src/lib/types/` |
| Tunable gameplay values | `src/lib/constants/` |
| Larger simulation systems | `src/lib/services/` |
| Reusable hooks | `src/hooks/` |
| Top-level pages | `src/components/pages/` |
| Automated tests | `tests/` |

Do not create these folders only to satisfy the planned layout. Add them when real code needs them.

## Ownership Rules

- Keep simulation rules outside React components.
- Prefer pure functions that return updated state.
- Keep UI-only state and interaction in React.
- Centralize shared tunable values once they are reused or require balancing.
- Add persistence only after its requirements and ownership model are intentionally chosen.

## Documentation Map

| Need | Document |
|---|---|
| Overview and setup | `README.md` |
| Current vocabulary and rules | `docs/CONTEXT.md` |
| Variable flow and dependencies | `docs/variablesoverview.md` |
| City design | `docs/city.md` |
| Tile design | `docs/tiles.md` |
| Implementation orientation | `docs/AIdocs/AIDescriptions_coregame.md` |
| Change history | `docs/versionlog.md` |
