# Variables Overview

## Main Game Flow
1. Start a game.
2. Create the first `City`.
3. Initialize the city state.
4. Advance a turn or tick.
5. Update population, production, and influence.
6. Expand city control to nearby tiles.
7. Claim tiles inside city area.
8. Apply tile effects.
9. Repeat.

```mermaid
flowchart TD
  A[Start game] --> B[Create City]
  B --> C[Initialize city state]
  C --> D[Advance turn or tick]
  D --> E[Update population]
  D --> F[Update production]
  D --> G[Update influence]
  G --> H[Claim nearby tiles]
  H --> I[Apply tile effects]
  I --> D
```

## Core Variables

| Variable | Role |
| --- | --- |
| `city` | Main game object and state container. |
| `population` | Drives growth and output. |
| `production` | Used for build progress and city development. |
| `influence` | Defines how far the city reaches. |
| `claimed_tiles` | Tiles currently inside city area. |
| `tile_state` | Ownership and use state for each tile. |
| `turn_count` | Tracks progression through time. |

## Major Mechanics

### City Expansion

```mermaid
flowchart TD
  A[Influence increases] --> B[More tiles enter range]
  B --> C[City area grows]
  C --> D[claimed_tiles updates]
  D --> E[City gains more options]
```

### Production Loop

```mermaid
flowchart TD
  A[Population and tiles generate output] --> B[Production accumulates]
  B --> C[Spend production on a task]
  C --> D[Task completes]
  D --> E[City capability increases]
```
