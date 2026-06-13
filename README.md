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

## Working Rules
- Keep changes minimal.
- Add only what the request needs.
- If a request needs extra code or docs, ask before expanding scope.
- Keep this README concise and update it when the repo changes.
