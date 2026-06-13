# tileideas
Design docs for Tile based Civ Game

This is a early ideas design doc creation project

We are creating design docs, and coding early game mechanics and types for a game working title "Tile Ideas". In essense its a "Tile style Civilization, test of time, simulation game"

We imagine this, for now, as a single player game

We are not yet set on tech stack, for now we try to describe and possible try/code some early core mechanics.

This projekt does not incoorperate UI/2d/3d interface.

## Game Mechanics
Game start with a 'City'. This city is the main gameobject. This is where population, production and more live.

Cities spread thier influence, slowly aquirering acces to more tiles. Unlike civ-like game, tiles does not have to be worked, once they are in the city area.

## Agent brief.
Always go for minimum implementation. Do never create more than user ask for. If users promt something that will not work without additional code, ask to add this before conteniueing

Respons to user should be minimalistic. Unless asked for analysis, brainstorm, idea feedback or other "Text heavy/creative" task

Agent need to maintain readme.md at all time, and should autonomuisly update this when change were made. This is a minimalistic task. As little as possible should be added, while describing changes/updates. Larger designs should live in seperate docs. Readme.md is a 'library file' listing other docs.

Agents should also maintain docs\variablesoverview.md . This is a descriptive doc that on the very top list (and show in a flow chart) the main game flow of the game. The doc should also contain info about all other major variables of the game. Agents should add seperate flowcharts of variables for major gamemechanics.

## Scope
- Early design only.
- Single player for now.
- Tech stack is undecided.
- No UI, 2D, or 3D implementation in scope yet.

## Core Concept
- The game starts with one `City`.
- The city is the main game object.
- Population, production, and related state live there.
- Cities expand influence to claim nearby tiles.
- Claimed tiles do not need to be worked individually.

## Docs
- [Variables overview](docs/variablesoverview.md)
- [City](docs/city.md)
- [Tiles](docs/tiles.md)
- `docs/CONTEXT.md` can become the stable glossary for project terminology.
- `docs/PROJECT_INFO.md` can hold file-structure and ownership notes.
- `docs/VariableRelationshipMap.md` can hold larger system and variable relationship diagrams.

## Quick Start

```bash
npm install
npm run dev
```

Open the app through the Vite dev server URL, normally `http://localhost:5173/`.
Do not open `index.html` with a `file://` URL.

Useful checks:

```bash
npm test
npm run build
```

## Planned Codebase Map

| Area | Path | Notes |
|---|---|---|
| App shell | `src/App.tsx`, `src/main.tsx` | React entry point and top-level prototype shell. |
| Pages | `src/components/pages/` | Top-level game or prototype pages if this structure is used. |
| Shared UI | `src/components/`, `src/components/ui/` | Reusable UI and shadcn-based components. |
| Hooks | `src/hooks/` | Reusable state and UI behavior hooks when needed. |
| Services | `src/lib/services/` | Core game and simulation logic should live here, not in React components. |
| Database | `src/lib/database/` | Data access can live here if the project later adds persistence. |
| Types | `src/lib/types/` | Shared game and UI types. |
| Constants | `src/lib/constants/` | Tunable game values and shared labels. |
| Utilities | `src/lib/` | Supporting helpers and non-domain utilities. |
| Tests | `tests/` | Automated tests for simulation logic and core utilities. |
| Docs | `docs/` | Design docs, flow charts, terminology, and planning notes. |

## Documentation Entry Points

This README should stay short and act as a routing document.
Larger design notes and deeper system descriptions should live in `docs/`.

- `docs/CONTEXT.md` can become the stable glossary for project terminology.
- `docs/PROJECT_INFO.md` can hold file-structure and ownership notes.
- `docs/VariableRelationshipMap.md` can hold larger system and variable relationship diagrams.
- `docs/versionlog.md` can be the running change history for meaningful project milestones.
- `docs/AIdocs/` can hold imported AI workflow notes that are later simplified for this repo.

## Agent Files

- `agent.md` is the repo-level agent instruction file in this repo.
- `.cursor/` contains Cursor-specific project files.
- `.agent/` contains imported local skill and workflow material that can be simplified over time.
- README should remain a lightweight library file that points to the deeper docs.

## Working Rules
- Keep changes minimal.
- Add only what the request needs.
- If a request needs extra code or docs, ask before expanding scope.
- Keep this README concise and update it when the repo changes.

## Version Log Workflow

- Use `docs/versionlog.md` for meaningful project updates when that becomes useful.
- Keep entries in reverse chronological order, newest first.
- Group related changes into one entry when they represent one logical update.

## Architecture Direction
- Keep business logic out of React components where practical.
- Put simulation and game rules into services or other non-UI modules.
- Keep shared types and constants centralized instead of scattering them through components.
- Prefer growing the project through small, testable slices instead of broad placeholder systems.
