# Tiles

## Purpose

Tiles are map cells that hold terrain, influence, and control state.

## Current Model

Defined in `src/tile.ts`:

| Field | Type | Role |
|---|---|---|
| `id` | `string` | Stable tile identity. |
| `terrain` | `Terrain` | One of `plains`, `forest`, `hill`, or `water`. |
| `owner` | `string \| null` | Current controlling city name. |
| `influenceByCity` | `Record<string, number>` | Influence values keyed by city name. |

Current functions:

- `createTile(id, terrain)` creates an unclaimed tile.
- `setTileInfluence(tile, cityName, influence)` updates one influence value.
- `resolveTileOwner(tile)` assigns the highest positive influence as owner.

## Stored Versus Derived

| Value | Current treatment | Direction |
|---|---|---|
| `id` | Stored | Keep stored. |
| `terrain` | Stored | Keep stored. |
| `influenceByCity` | Stored | Keep stored unless influence becomes cheaply reproducible. |
| `owner` | Stored but recalculated on turn advance | May remain cached or become derived later. |
| Tile yields and bonuses | Not implemented | Prefer deriving from terrain and city state where practical. |

## Current Constraints

- Influence uses city names instead of stable ids.
- Tie behavior is implicit: the first highest entry encountered wins.
- There is no map position, adjacency, distance, yield, or city-area model yet.
- Ownership changes do not update a city-owned tile list because no such list exists.

## Design Rules

- Keep influence and ownership rules separate from UI.
- Define tie behavior before competitive multi-city control is implemented.
- Add map coordinates and adjacency only when map mechanics require them.
- If ownership is stored in both city and tile state later, update both atomically.
- Document any tile effect as a clear input into city state or turn resolution.
