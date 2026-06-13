# Core Game Implementation Orientation

Last updated: 2026-06-13

Status: Early prototype

This file explains the current architecture and how to extend it without treating planned systems as implemented.

## Current Architecture

- React renders the prototype UI.
- Plain TypeScript modules own the current simulation rules.
- `GameState` is held in React state and replaced through pure domain transitions.
- There is no persistence, backend, database, or automated test setup yet.

## Current Runtime

| Area | Path | Responsibility |
|---|---|---|
| Game state | `src/game.ts` | Create game, advance turns, grow the first city, run repeated turns. |
| City domain | `src/city.ts` | City type, creation, and growth. |
| Tile domain | `src/tile.ts` | Terrain, tile creation, influence updates, ownership resolution. |
| Domain exports | `src/index.ts` | Public exports for current domain modules. |
| UI shell | `src/App.tsx` | Create demo state, display values, trigger domain actions. |
| UI primitives | `src/components/ui/` | Reusable button and card components. |

## Current Turn Flow

1. `createGame()` creates one city and one tile.
2. The UI demo helper seeds influence and advances once to resolve ownership.
3. Player actions can advance a turn, grow the first city, or reset the demo.
4. `advanceTurn()` increments `turn` and resolves ownership for each tile.

See `docs/variablesoverview.md` for dependency diagrams and planned flow.

## Architecture Rules

- Keep simulation calculations and state transitions outside React components.
- Prefer pure functions returning new state.
- Let pages and components orchestrate actions and presentation.
- Add shared types, constants, or services only when real complexity justifies them.
- Do not introduce persistence assumptions until persistence is intentionally designed.
- Verify planned paths against the repo before creating or referencing them.

## UI Direction

The current UI is a debugging and interaction shell, not the final game interface.

Use existing shadcn-based primitives where they fit. Keep game rules out of event handlers beyond calling domain functions and updating state.

## Planned Domain Growth

These are design directions, not implemented systems:

- richer city state such as population and production
- map position, adjacency, and distance
- influence generation and city expansion
- tile effects and terrain-derived output
- multiple cities and explicit influence tie rules
- persistence and loading
- automated tests for domain transitions

Each system should land as a narrow playable or testable slice. Update `docs/CONTEXT.md`, `docs/variablesoverview.md`, and `docs/PROJECT_INFO.md` when it becomes real.

## Related Docs

| Need | Document |
|---|---|
| Domain terms and current rules | `docs/CONTEXT.md` |
| Variable dependencies | `docs/variablesoverview.md` |
| File ownership | `docs/PROJECT_INFO.md` |
| City design | `docs/city.md` |
| Tile design | `docs/tiles.md` |
