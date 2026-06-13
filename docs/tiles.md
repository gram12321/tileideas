# Tiles

## Purpose
Tiles represent map cells that can hold terrain and city influence.

## Tile Type
A tile should have its own type.

This lets us store:
- terrain
- current owner
- influence from several cities
- optional yield data

## Recommended Fields

| Field | Type | Role |
| --- | --- | --- |
| `terrain` | `string` or enum | Base land type. |
| `owner` | `City` id or `null` | Winning city for the tile. |
| `influenceByCity` | map/dictionary | Influence values per city. |
| `yield` | object or derived value | Tile output. |

## Data Decision: Stored vs Calculated

Some tile values should be stored, and some can be calculated.

### Store
- `terrain`
- `owner`
- `influenceByCity`

### Calculate
- `yield`, if it is fully determined by terrain and city state
- derived bonuses that depend on city size or other rules

This keeps the tile data small while still allowing flexible gameplay.

## Tile Control Rule
If several cities influence the same tile:
1. Sum influence per civ or city group.
2. Compare totals on that tile.
3. The highest total wins control.
4. Recompute when city influence changes.

## Suggested Shape
Keep tile ownership separate from city ownership.

That means:
- each tile knows who controls it
- each city knows which tiles it currently controls
- influence maps decide when the control should switch

This is the clearest way to support Civ-like tile switching without locking the model too early.
