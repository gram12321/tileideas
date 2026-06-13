# Tiles

## Purpose

Tiles are map cells that hold the granular territorial state of the world.

They own local state first. City-level docs should describe aggregation and city behavior, not repeat tile storage details.

## Current Model

Defined in `src/tile.ts`:

| Field | Type | Role |
|---|---|---|
| `id` | `string` | Stable tile identity. |
| `ownerCityId` | `string \| null` | Stable id of the controlling city. |
| `localPopulation` | `number` | Non-negative integer count of people on the tile. |
| `arableLand` | `number` | Current first territorial attribute. |

Current functions:

- `createTile(id, ownerCityId, localPopulation, arableLand)` creates a tile and validates local population.

## Planned Tile Role

Current design direction:

- A tile should not mainly act as a direct-yield object like `2 food` or `1 production`.
- A tile should instead store underlying territorial attributes.
- When a city controls a tile, those attributes contribute to the city's aggregate territorial potential.
- The city then converts that potential into realized outputs through population, infrastructure, institutions, economy, and technology.

This means tiles define what a city's territory can support, not just what it instantly pays out.

## Planned Territorial Attributes

Current design direction:

- All tiles should use the same attribute language.
- Individual tiles can have very different amounts of those attributes.
- Tiles should not be forced to provide a little of everything.

Early examples discussed:

| Attribute | Meaning |
|---|---|
| `arableLand` | Land suitable for food production. |
| `habitationArea` | Land suitable for settlement and daily life. |
| `forestCover` or `biomass` | Organic material and forested territory. |
| `mountainArea` | Steep or elevated terrain with distinct constraints and opportunities. |
| `mineralBearingLand` | Land with extraction potential. |
| `freshwaterAccess` | Rivers, lakes, or similar water support. |
| `coastline` | Maritime edge and sea access. |
| `localPopulation` | Human presence on the tile. |

These are territorial attributes, not finished resources or direct city yields.

## Population As A Tile Attribute

Current design direction:

- Population is expected to exist on tiles, not only on a city-center object.
- Most land tiles may start with low but nonzero population.
- Population represents real-scale numbers of people, not Civilization-style population levels.
- Population is stored as whole people and does not allow fractions.
- An early tile may contain roughly `10` to `100` people, while a heavily developed tile may eventually contain `100,000` or more.
- Tile population can grow slowly from local conditions.
- City membership can modify that growth through city-wide systems such as health, trade, or infrastructure.

This implies:

- tile population remains part of the underlying simulation
- city population is the sum of population across controlled tiles
- display compaction remains undecided, but the underlying value is an integer count of people

## Minimum Planned Tile Slice

The first implementation should prove the territorial model with a deliberately small schema:

```ts
interface TerritorialAttributes {
  arableLand: number;
  mountainArea: number;
  coastline: number;
}
```

Alongside:

- `localPopulation` as a non-negative integer count of people
- `owner` referencing a stable city id or `null`
- `influenceByCity` keyed by stable city id

For this first slice, territorial attributes are abstract non-negative quantities. Their final units and their relationship to terrain remain open design questions.

## Stored Versus Derived

| Value | Current treatment | Direction |
|---|---|---|
| `id` | Stored | Keep stored. |
| `ownerCityId` | Stored | Current direct city ownership. |
| `arableLand` | Stored | First implemented territorial attribute. |
| Tile population | Stored | Real-scale local integer population. |
| City totals from tiles | Derived | Derived from controlled tiles. |
| Realized outputs from territory | Not implemented | Prefer deriving from tile state plus city systems. |

## Current Constraints

- There is no influence, terrain, map position, adjacency, or distance model yet.
- Only arable land is implemented from the planned territorial attribute schema.
- Ownership changes do not update a city-owned tile list because no such list exists.

## Planned Relationship To Cities

Tile-side assumption only:

- tiles keep the granular truth even after city aggregation

That keeps later systems such as border changes, migration, and uneven internal development possible. City-side behavior belongs in `docs/city.md`; cross-system flow belongs in `docs/variablesoverview.md`.

## Design Rules

- Keep influence and ownership rules separate from UI.
- Define tie behavior before competitive multi-city control is implemented.
- Add map coordinates and adjacency only when map mechanics require them.
- If ownership is stored in both city and tile state later, update both atomically.
- Use stable city ids rather than display names for ownership and influence.
- Treat tiles as holders of territorial attributes and local simulation state.
- Prefer a small shared attribute schema over ad hoc per-tile exceptions.
- Document any tile effect as a clear input into city state or turn resolution.
