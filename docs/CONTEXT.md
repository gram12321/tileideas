# Project Context

Last updated: 2026-06-13

Canonical vocabulary for Tile Ideas. This file describes terms that exist in the current code or are established by the current design docs.

## Project Scope

Tile Ideas is an early-design, single-player, turn-based civilization simulation built around cities and tile influence.

The current implementation is intentionally small:

- one game state containing cities, tiles, and a turn counter
- one starter city and one starter tile
- city growth through an explicit action
- per-city influence values stored on tiles
- tile ownership resolved from the highest influence
- a React UI shell for inspecting and changing the demo state

Production, population, resources, map generation, persistence, combat, diplomacy, and AI opponents are not implemented yet.

## Domain Vocabulary

| Term | Current meaning |
|---|---|
| `GameState` | Top-level runtime state containing `turn`, `cities`, and `tiles`. |
| `turn` | Integer tracking how many turns have been advanced. |
| `City` | Main high-level game object. Currently contains `name` and `size`. |
| `name` | Current city display name and temporary identity key. |
| `size` | Current city growth value. It is a placeholder for a richer city model. |
| `Tile` | A map cell containing identity, terrain, ownership, and influence values. |
| `id` | Stable tile identifier. |
| `Terrain` | Current terrain union: `plains`, `forest`, `hill`, or `water`. |
| `owner` | Name of the city currently controlling a tile, or `null`. |
| `influenceByCity` | Record of city name to influence value for one tile. |
| City influence | A city's control strength on a tile. |
| Tile ownership | The result of comparing all city influence values on a tile. |

## Current Rules

- `createGame()` creates turn `0`, one city, and one tile.
- `growCity()` returns a new city with its size increased by the requested amount.
- `setTileInfluence()` returns a new tile with one city's influence updated.
- `resolveTileOwner()` assigns ownership to the city with the highest influence above `0`.
- Equal influence values keep the first highest city encountered by the current object-key iteration order.
- `advanceTurn()` increments the turn and resolves ownership for every tile.
- `runTurns()` repeatedly applies `advanceTurn()`.

## Naming Policy

- Use `City`, `Tile`, `Terrain`, `GameState`, and `influenceByCity` consistently.
- Keep implemented terms separate from proposed mechanics.
- Mark future concepts as planned until code exists.
- Avoid compatibility aliases for discarded imported-project concepts.
- Introduce stable city ids before city renaming or multi-city gameplay makes names unsafe as identity keys.

## Related Docs

- [City design](city.md)
- [Tile design](tiles.md)
- [Variables overview](variablesoverview.md)
- [Project information](PROJECT_INFO.md)
- [Implementation orientation](AIdocs/AIDescriptions_coregame.md)
