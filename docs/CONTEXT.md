# Project Context

Last updated: 2026-06-13

Canonical vocabulary for Tile Ideas. This file describes terms that exist in the current code or are established by the current design docs.

## Project Scope

Tile Ideas is an early-design, single-player, turn-based civilization simulation built around cities and tile influence.

The current implementation is intentionally small:

- one game state containing cities, tiles, and a turn counter
- one starter civilization, city, and city-owned tile
- tile-level population and arable land
- city totals derived from controlled tiles
- a React UI shell for inspecting and changing the demo state

Population growth, influence, additional territorial attributes, production, map generation, persistence, combat, diplomacy, and AI opponents are not implemented yet.

## Document Purpose

Use this file for:

- canonical vocabulary
- short current-rule summaries
- naming choices that other docs should reuse

Do not use this file for full mechanic design or relationship flowcharts. Those belong in `docs/city.md`, `docs/tiles.md`, `docs/variablesoverview.md`, or the brainstorm note.

## Domain Vocabulary

| Term | Current meaning |
|---|---|
| `GameState` | Top-level runtime state containing `turn`, `civilizations`, `cities`, and `tiles`. |
| `turn` | Integer tracking how many turns have been advanced. |
| `Civilization` or `Civ` | Top-level political entity controlled by the player. A civilization can contain multiple cities. |
| `City` | Named grouping of controlled tiles belonging to a civilization. |
| `name` | Display name. |
| `size` | Derived number of tiles controlled by a city. |
| `Tile` | Granular territorial unit containing ownership, local population, and territorial attributes. |
| `id` | Stable tile identifier. |
| `ownerCityId` | Stable id of the city currently controlling a tile, or `null`. |
| Territorial attributes | Planned tile-level values describing underlying land qualities such as arable land, habitation area, mountain area, coastline, and similar regional properties. |
| Local population | Planned tile-level integer count of people using real-scale values rather than abstract population levels. |
| City population | Planned derived sum of local population across tiles controlled by one city. |
| Territorial potential | The summed capacity a city gains from controlled tiles before city systems convert it into realized outputs. |
| City-wide improvements or institutions | Planned city-level systems such as hospitals, libraries, or other structures that modify all tiles belonging to that city. |

## Current Rules

- `createGame()` creates turn `0`, one civilization, one city, and one city-owned tile.
- `createTile()` requires local population to be a non-negative integer.
- `getCityTotals()` derives city size, population, and arable land from controlled tiles.
- `advanceTurn()` increments the turn.
- `runTurns()` repeatedly applies `advanceTurn()`.

## Design Direction Terms

These are active planned concepts, not implemented rules:

- tiles provide territorial attributes, not direct fixed yields
- local population exists at tile level and uses whole real-scale numbers of people
- city size is the derived count of controlled tiles
- city population is aggregated from controlled tiles
- city-wide improvements modify the conditions across controlled tiles

## Naming Policy

- Use `Civilization`, `City`, `Tile`, `GameState`, and `ownerCityId` consistently.
- Keep implemented terms separate from proposed mechanics.
- Mark future concepts as planned until code exists.
- Prefer `territorial attributes` over `resources` when referring to underlying land qualities.
- Prefer `local population` for tile-level people and `city population` for the aggregate total.
- Avoid compatibility aliases for discarded imported-project concepts.
- Introduce stable city ids before city renaming or multi-city gameplay makes names unsafe as identity keys.

## Related Docs

- [City design](city.md)
- [Tile design](tiles.md)
- [Variables overview](variablesoverview.md)
- [City growth and territory brainstorm](brainstorm-city-growth-2026-06-13.md)
- [Project information](PROJECT_INFO.md)
- [Implementation orientation](AIdocs/AIDescriptions_coregame.md)
