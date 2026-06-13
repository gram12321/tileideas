# City

## Purpose
The `City` is the main game object. It owns the core local state for growth, production, and tile control.

## First City Type
For now, a city should hold:

| Field | Type | Role |
| --- | --- | --- |
| `name` | `string` | Display and identification. |
| `size` | `number` | City growth or tier. |

## Suggested Next Fields
These are likely to be needed soon, but can wait until the mechanic needs them:

| Field | Type | Role |
| --- | --- | --- |
| `population` | `number` | Growth and output driver. |
| `production` | `number` | Build progress. |
| `influence` | `number` | Strength of tile control. |
| `tilesControlled` | `Tile[]` or tile ids | Tiles currently owned by the city. |

## City Responsibilities
- Track city size and identity.
- Generate influence over nearby tiles.
- Keep ownership of tiles the city controls.
- Feed local production and growth systems.

## Tile Ownership Recommendation
Use a separate `Tile` type.

Reason:
- A tile needs its own terrain and control state.
- A city needs a list of controlled tiles.
- Several cities may compete over the same tile.
- Tile ownership is easier to calculate if the tile stores influence from multiple cities.

## Recommended Relationship
- `City` owns an array of controlled tile ids or references.
- `Tile` stores competing influence values from each city.
- The winner is the city with the highest total influence on that tile.
- If ownership changes, update the city tile lists and the tile owner state.

## Minimal Model
Start with:
- `City`
- `Tile`
- `tile influence map`
- `tile owner`

That gives us room for Civ-style tile switching without overbuilding the data model.
