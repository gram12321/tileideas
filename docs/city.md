# City

## Purpose

The `City` is the main high-level game object. It is intended to become the local state container for growth, population, production, and tile influence.

## Current Model

Defined in `src/city.ts`:

| Field | Type | Role |
|---|---|---|
| `name` | `string` | Display name and temporary identity key. |
| `size` | `number` | Current growth value. |

Current functions:

- `createCity(name, size)` creates a city.
- `growCity(city, amount)` returns a new city with increased size.

## Current Constraints

- City names are currently used as keys in tile influence maps.
- Cities do not currently store controlled tile ids.
- City size does not yet affect population, production, or influence.
- Growth accepts any numeric amount; limits and validation are not defined yet.

## Planned Responsibilities

Add these only as their mechanics are designed:

| Concept | Intended role |
|---|---|
| Stable city id | Identity independent of display name. |
| Population | Growth and output driver. |
| Production | Build progress and city development. |
| Influence generation | Determines control pressure on nearby tiles. |
| Controlled tiles | Derived lookup or synchronized list of owned tiles. |

## Design Rules

- Keep city rules in domain code rather than React components.
- Prefer stable ids before adding renaming or multiple cities.
- Decide whether controlled tiles are derived or stored before adding them to `City`.
- Avoid making `City` own detailed tile state; tiles remain separate objects.
