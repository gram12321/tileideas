# City

## Purpose

The `City` is the main high-level object through which the player manages a named group of controlled tiles.

Tiles keep granular territorial state. The city owns city-wide systems and exposes derived totals across its territory.

## Current Model

Defined in `src/city.ts`:

| Field | Type | Role |
|---|---|---|
| `name` | `string` | Display name and temporary identity key. |
| `size` | `number` | Current manually changed growth value. This meaning is temporary and conflicts with the planned model. |

Current functions:

- `createCity(name, size)` creates a city.
- `growCity(city, amount)` returns a new city with increased size.

## Current Constraints

- City names are currently used as keys in tile influence maps.
- Cities do not currently store controlled tile ids.
- City size is currently stored and manually changed rather than derived from controlled territory.
- Growth accepts any numeric amount; limits and validation are not defined yet.

## Planned Responsibilities

Add these only as their mechanics are designed:

| Concept | Intended role |
|---|---|
| Stable city id | Identity independent of display name. |
| Population | Derived sum of local population across controlled tiles. |
| Production | Build progress and city development. |
| Influence generation | Determines control pressure on nearby tiles. |
| Controlled tiles | Derived by finding tiles whose owner matches the stable city id. |
| City-wide improvements | Buildings, institutions, or civic structures that modify all controlled tiles in the city territory. |

## Planned City Territory Model

Current design direction:

- A city is not only a single map tile.
- A city is a named grouping of controlled tiles.
- The city's visible state is primarily the aggregate of values stored on those tiles.
- City `size` is the number of tiles controlled by the city.
- City population is the sum of local population across controlled tiles.
- Size and population are separate derived values.
- Controlled tile ids should not be stored on the city while they can be derived reliably from tile ownership.

This is still a design-stage model and is not implemented yet.

## Planned Identity And Derived Values

| Value | Planned treatment |
|---|---|
| Stable city id | Stored on the city and used by tile ownership and influence records. |
| Display name | Stored on the city and safe to rename independently of identity. |
| City size | Derived count of controlled tiles. |
| City population | Derived sum of controlled tiles' `localPopulation`. |
| Territorial totals | Derived sums of controlled tiles' territorial attributes. |

## Planned City-Wide Effects

Current design direction:

- Some city improvements may exist at the city level rather than on individual tiles.
- These improvements apply modifiers across the full territory controlled by that city.
- Controlled tiles keep their own local values, but city membership allows them to benefit from shared city systems.

Early examples discussed:

- a hospital in `Copenhagen` could improve population growth or reduce death rate across all tiles belonging to `Copenhagen`
- a library could improve literacy or knowledge output across the city's population
- future institutions could affect health, administration, trade, security, infrastructure, or science

Exact naming for this system is still open. Possible umbrella terms include:

- improvements
- institutions
- civic structures
- city systems

See `docs/tiles.md` for tile-side storage assumptions and `docs/variablesoverview.md` for the full relationship flow.

## Design Rules

- Keep city rules in domain code rather than React components.
- Use stable city ids for ownership and influence; names are display values.
- Derive controlled tiles, city size, city population, and territorial totals from tiles.
- Avoid making `City` own detailed tile state; tiles remain separate objects.
