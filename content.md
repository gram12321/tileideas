# Project Context

Date: 2026-06-13

Canonical vocabulary and system notes for the current tile-based city simulation bootstrap.

## Scope Status

The current repo implements a very small playable slice:

- a `GameState` with `turn`, `cities`, and `tiles`
- one starter city created through `createGame()`
- one starter tile created through `createGame()`
- city growth through a pure `growCity()` update
- tile influence stored per city and ownership resolved from highest influence
- manual turn progression through `advanceTurn()`
- a minimal React/Vite UI shell that reads the current state and exposes demo actions

This is enough to validate the first architecture decisions, but it is still only a bootstrap layer.

## Reusable Architecture Rules

These patterns are worth keeping as the project grows:

- Keep core simulation state in plain TypeScript modules, not React components.
- Prefer pure state-transition functions that return new objects.
- Let the UI call domain functions and display results; do not bury game rules inside component code.
- Keep prototype/demo setup in small bootstrap helpers rather than mixing it into core rules.
- Add new systems in narrow slices so the docs and code stay aligned.

## Domain Vocabulary

| Term | Type | Definition |
|---|---|---|
| `GameState` | object | Top-level runtime state with `turn`, `cities`, and `tiles`. |
| `City` | object | City state with `name` and `size`. The city is currently the main simulation anchor. |
| `Tile` | object | Tile state with `id`, `terrain`, `owner`, and `influenceByCity`. |
| `Terrain` | union | Current terrain ids: `"plains"`, `"forest"`, `"hill"`, `"water"`. |
| `influenceByCity` | record | Per-city influence values stored on one tile. |
| `owner` | `string \| null` | The city that currently controls the tile, or `null` when no city has influence. |
| `createCity()` | function | Creates a city with a name and starting size. |
| `growCity()` | function | Returns a new city with increased size. |
| `createTile()` | function | Creates a tile with a terrain type and no owner. |
| `setTileInfluence()` | function | Writes or updates one city's influence on a tile. |
| `resolveTileOwner()` | function | Recomputes tile ownership from the highest influence value. |
| `createGame()` | function | Creates the baseline game state with one city and one tile. |
| `advanceTurn()` | function | Increments the turn and resolves tile ownership for the current tick. |
| `growFirstCity()` | function | Demo helper that grows the first city in state. |
| `runTurns()` | function | Repeats `advanceTurn()` for a fixed number of turns. |

## Current Loop

The implemented loop is simple:

1. Create a starting state with one city and one tile.
2. Seed starter influence for the demo state.
3. Advance turns to resolve tile ownership from influence.
4. Grow the city through explicit player action.
5. Render the resulting values in the UI shell.

This gives us a clean base for testing city growth, tile control, and future turn-based rules without committing to a larger economy or map system yet.

## Out Of Scope Right Now

The current project does **not** implement any of the following yet:

- production chains or recipe systems
- retail demand, pricing, or marketplace simulation
- nation/country data
- multiple interacting cities
- formal tile expansion rules
- resource harvesting or worked-tile assignments
- combat, diplomacy, research, or AI opponents
- persistence, backend services, or database schema

Those concepts should stay out of core context docs until code or approved design work brings them back.

## Design Direction

- Keep the city as the main high-level game object.
- Model tile control through influence rather than per-tile worker assignment.
- Preserve the split between domain rules and UI shell code.
- As systems grow, move shared types, constants, and services into the `src/lib/` structure described in `README.md`.
- Prefer stable identifiers when the project moves beyond a single-city prototype. The current bootstrap uses city names as influence keys, which is acceptable for now but should become explicit city ids before renaming or multi-city play.

## Naming Policy

- Keep business terms explicit and consistent.
- Avoid importing old-project vocabulary unless it is intentionally part of this game.
- Do not keep compatibility aliases for discarded systems.
- Update this file when the implemented simulation model changes in a meaningful way.
