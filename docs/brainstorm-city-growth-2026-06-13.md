# City Growth And Territory Brainstorm

Last updated: 2026-06-13
Status: exploratory notes, not final rules

## Goal

Explore foundational city growth and tile-contribution mechanics for Tile Ideas.

This note captures ideas discussed during brainstorming. It should stay flexible until we agree on a direction. Only settled mechanics should later move into the canonical docs such as `docs/city.md` and `docs/variablesoverview.md`.

## Starting Assumptions

- The game is a single-player, turn-based civilization simulation.
- Cities are expected to grow over time.
- We are still open to alternative structures if they produce better gameplay.

## Superseded Early Growth Ideas

These early ideas were useful for opening the design space, but they no longer match the current territorial-population model closely enough to guide implementation:

- food-bar population growth
- city-level threshold population growth
- birth-rate as the primary city growth mechanic
- first-slice plans built around hospital-driven population growth

The current direction is:

- population exists on tiles first
- city population is aggregated from tiles
- city membership and later city-wide systems modify tile conditions
- food may still matter later, but it is no longer the primary framing for the current minimum implementation path

## Tile Contribution Direction

New direction raised during brainstorming:

- Do not use the Civilization model where each point of population "works" one more tile.
- A city should benefit from the full territory it controls.
- Controlled tiles contribute to the city's overall capacity or potential rather than acting as individually assigned workplaces.

This suggests a city-area model rather than a worker-assignment model.

### Idea A. Territory adds city potential

Basic shape:

- Each controlled tile contributes some values to the city.
- The city sums those values across all controlled tiles.
- Those totals define what the city is capable of doing.

Possible contribution categories:

- arable land
- mineral potential
- urban capacity
- population support
- trade access
- defense value

This is a strong fit if the goal is to make the city feel like a territorial organism rather than a stack of worked plots.

### Idea B. Tiles can hold many latent properties

Basic shape:

- A tile is not mainly "terrain plus one improvement."
- Instead, each tile can contain a mix of underlying properties.
- Example properties: arable land, ore deposits, habitation potential, forest density, water access.
- Once the tile falls inside city control, those properties become part of the city's aggregated profile.

This makes the city economy read more like:

- "my city controls this region"

instead of:

- "my citizens are manually working these exact hexes"

## Feedback On These Ideas

### What looks strong

#### 1. This gives the game a cleaner identity

Moving away from one-pop-works-one-tile is a good differentiator. It avoids importing a Civilization rule just because it is familiar.

It also better matches the current prototype direction, where influence and control already matter more than citizen assignment.

#### 2. It makes territorial control matter continuously

Under this model, every newly controlled tile can matter immediately because it expands the city's capacity envelope. That creates a nice loop:

- grow influence
- claim land
- increase city potential
- use that potential to keep developing

That loop is easy to understand and can become the backbone of the game.

#### 3. It reduces fiddly micromanagement

If the player does not have to assign each citizen to a tile, the game can focus more on strategic city shape, specialization, and regional control.

That is especially useful if you want a broader simulation feel rather than a worker-placement feel.

### Risks To Watch

#### 1. "Potential" needs a clear conversion step

Your instinct is good, but "tiles add potential" is still one layer too abstract on its own.

You will eventually need a rule like:

- controlled tiles generate raw capacities
- city systems convert capacities into actual outputs

For example:

- arable land -> food ceiling or food production
- ore deposits -> mining capacity, but only if the city has labor or infrastructure
- urban land -> housing, administration, or building slots

Without that second step, the model can become vague and hard to balance.

#### 2. Full-territory counting can flatten decisions

If every controlled tile always contributes its full value with no friction, expansion may become too obviously optimal and city development may lose interesting trade-offs.

You may want some limiting factor later, such as:

- infrastructure capacity
- administration capacity
- population needed to exploit capacity
- distance decay from city center
- district or specialization choices

Not necessarily now, but probably eventually.

#### 3. "A tile can hold anything" is powerful but can get messy fast

I like the direction, but this part needs discipline.

If every tile can contain too many unrelated stats, the system becomes hard to read and hard to generate procedurally. A better version is:

- all tiles share a common small set of base attributes
- terrain and features bias those attributes
- some rare tags add exceptions

That keeps flexibility without turning tiles into unstructured data blobs.

## Recommended Shape Right Now

My recommendation is a layered model:

### Layer 1. Tile attributes

Each tile has a compact set of base attributes, for example:

- fertility
- mineral richness
- habitation capacity
- biomass or wood
- water access

### Layer 2. City territory totals

All controlled tiles are summed into city-level territory totals, for example:

- total fertile land
- total mineral base
- total habitation land

### Layer 3. City conversion rules

City systems convert those totals into actual effects:

- fertile land supports food generation
- habitation land supports population capacity
- mineral base supports industrial or construction potential

### Layer 4. City constraints

Population, infrastructure, policy, or buildings determine how much of that potential is actually realized.

This preserves your core idea:

- territory matters as a whole

while still leaving room for meaningful economic decisions.

## Current Lean On Tiles

Tentative lean:

- do not use per-pop tile assignment
- do use aggregate territory contribution
- do keep tiles as bundles of a few base attributes
- do require a city-side conversion layer so territory potential becomes understandable gameplay

## New Agreement: Tiles Provide Potential, Not Direct Yields

Current direction agreed in discussion:

- Move away from the Civilization-style idea that a tile directly provides outputs such as `2 food`, `1 production`, `iron`, or `horses`.
- A tile should instead provide underlying territorial values.
- When a city controls a tile, those values are added into the city's total territorial potential.
- The city only realizes that potential through population, infrastructure, economy, improvements, and technology.

This means the economic logic becomes:

- territory defines what is possible
- city development defines what is usable

That is a much stronger identity than direct-yield tiles because it focuses the game on regional development rather than tile harvesting.

## Shape Of A Tile In This Model

Important refinement:

- All tiles should use the same base schema.
- Individual tiles do not need to contain every value.
- A tile can contribute strongly to some dimensions and weakly or not at all to others.

Example direction:

- a river flat tile may contribute arable land and habitation potential
- a mountain tile may contribute steep land, mineral potential, and low habitation potential
- a coastal tile may contribute coastline, maritime access, and some habitation potential

So the rule is not:

- every tile gives a little of everything

It is:

- every tile is described using the same attribute language

That is important because it keeps map generation, balancing, and UI legible.

## Naming Problem: What Are These Values?

You are right that `resources` is probably the wrong word.

These values are not finished goods and not even necessarily extractable commodities. They are closer to physical or geographic capacities.

### Best naming candidates

#### 1. Territorial attributes

Meaning:

- the underlying qualities of land controlled by a city

Strengths:

- broad and flexible
- does not imply direct output
- works for arable land, mountain area, coastline, forest cover, settlement area

Weakness:

- slightly abstract

#### 2. Land capacity

Meaning:

- what the land is capable of supporting

Strengths:

- clearly tied to later city conversion
- pairs well with food capacity, habitation capacity, extraction capacity

Weakness:

- sounds more processed and city-facing than tile-facing

#### 3. Regional endowments

Meaning:

- what a territory naturally contains or offers

Strengths:

- good fit for geography and natural features
- distinguishes underlying conditions from developed outputs

Weakness:

- a bit formal

## Recommendation On Naming

My recommendation is:

- use `territorial attributes` as the broad design term
- use `capacity` for the city-side totals derived from those attributes

That gives a clean separation:

- tile level: territorial attributes
- city level: territorial capacity or city capacity

Example:

- tile attribute: `arableLand`
- tile attribute: `mountainArea`
- tile attribute: `coastline`
- city total: `totalArableLand`
- city total: `totalMountainArea`
- city derived capacity: `foodCapacity`, `miningCapacity`, `portCapacity`

This feels much clearer than calling all of it `resources`.

## Early Attribute Candidates

Very early candidate list for shared tile attributes:

- arable land
- habitation area
- forest cover or biomass
- mountain area
- mineral-bearing land
- freshwater access
- coastline

These are intentionally physical and territorial, not economic outputs.

## New Direction: Population Is Territorial First

New idea raised during brainstorming:

- Population should also be a territorial attribute.
- Move away from the Civilization and Paradox pattern where "the city" is primarily one location with attached population.
- A city should instead be understood as the named territory under one city's influence and control.
- The city's population is then the sum of the population on all tiles belonging to that city.

In this model:

- a city is not mainly a single special tile
- a city is a group of at least one controlled tile
- tile-level population is absorbed into city-level population once tiles belong to that city

This is a major but promising conceptual shift.

## Why This Direction Looks Strong

### 1. It matches the territory model already taking shape

If land, coast, mountains, and arable area are territorial attributes, then population fitting into the same model creates internal consistency.

The rule becomes:

- tiles contain territorial attributes
- cities aggregate the attributes of controlled tiles

Population then stops being a separate special-case mechanic.

### 2. It makes the city feel like a region, not a point

This is a real differentiator.

Instead of:

- "this tile is the city and the nearby tiles support it"

you get:

- "this named city is the territory currently unified under one urban and political identity"

That is a stronger simulation idea and fits your stated goals better.

### 3. It supports gradual urbanization better

This model leaves space for population to be distributed unevenly across territory before later city development transforms that territory.

That means you can eventually represent things like:

- sparse rural land
- dense urbanized land
- frontier land with little settlement
- coastal settlement corridors

without forcing all meaning into a single city-center number.

## Important Design Implication

I would phrase the underlying model like this:

- tiles keep the granular truth
- cities present the aggregated truth

That means tiles should probably not literally lose their stats inside the simulation.

Instead:

- tiles still store their own land and population values
- the city view sums those values and treats them as one city-level state
- the player usually interacts with the aggregated city, not with each tile separately

This matters because if tiles truly lose their identity in the underlying data, later systems become awkward:

- border changes
- city splitting
- conquest
- migration
- infrastructure spread
- uneven development inside one city territory

So I recommend:

- simulation truth stays distributed on tiles
- gameplay presentation and city management operate mostly on the city aggregate

That gives you the feel you want without boxing the design in too early.

## Revised Working Definition Of City

Tentative definition:

> A city is a named political and economic grouping of controlled tiles. Its visible state is primarily the aggregate of the territorial attributes and population contained in those tiles.

That definition is much closer to your current direction than the classic "city as one tile" model.

## Tension To Resolve Later

This model will eventually need an answer to one subtle question:

- is there still a privileged urban core inside the city territory, or is the city fully region-based with no special central tile?

Possible reasons to keep some notion of a core later:

- administrative center
- cultural or political identity
- main infrastructure hub
- distance effects
- defense targeting

But that can stay unresolved for now.

## Current Lean After This Discussion

- city is a territorial grouping, not just a point settlement
- population is a territorial attribute
- city population is the sum of tile populations under control
- tile-level data should likely remain in the simulation even if the player mostly sees city-level aggregates

## New Direction: Population Exists Everywhere, But Usually At Low Levels

Current direction agreed in discussion:

- Population should exist on essentially every land tile from the start.
- Most tiles begin with very low population, with local variation.
- Population growth is fundamentally autonomous and simulation-driven rather than created only by city actions.
- A tile's growth rate depends on surrounding conditions and later systems, not only on the tile itself.

Early examples of growth-supporting conditions discussed:

- being within the reach of a city
- being connected to trade lanes or routes
- being near existing civilization or urbanization
- having industrial or civic improvements nearby
- having fertile land or other favorable territorial attributes

This gives a useful baseline rule:

- population is already present in the world
- cities and infrastructure accelerate, organize, and concentrate it

That is a much richer foundation than "empty land stays empty until settled."

## What Changes When A Tile Becomes Part Of A City

Important refinement raised during discussion:

- a tile does not gain population simply because the city invented people there
- instead, the tile begins sharing in city-level conditions once it joins the city

Possible shared city-level effects:

- birth-rate bonus
- lower death rate
- better health conditions from hospitals or sanitation
- better food distribution
- better trade access
- stronger security or administrative stability
- infrastructure spillover from roads, markets, or industry

This suggests a useful rule:

- tile population remains local
- city membership changes the modifiers acting on that local population

That is a strong model because it preserves local simulation while still making city inclusion matter immediately.

## Recommended Conceptual Model For Population

Current recommendation:

### Layer 1. Tile population

- Every land tile stores its own population value.
- The value can be very small in undeveloped areas.
- The tile also stores territorial attributes that affect long-run population support.

### Layer 2. Local population dynamics

- Each tile has population growth or decline based on local conditions.
- At this stage, exact formulas remain open.

### Layer 3. City membership effects

- If a tile belongs to a city, it receives city-wide modifiers.
- These modifiers can improve growth, survival, productivity, and migration attraction.

### Layer 4. City aggregate

- City population is the sum of tile populations in that city.
- The city is what the player mostly sees and manages, even though the underlying simulation stays distributed.

## Why This Is Promising

### 1. It allows urbanization instead of instant settlement magic

Population can slowly accumulate, then accelerate when incorporated into larger systems.

That supports a believable transition from:

- sparse countryside

to:

- organized urban-region growth

### 2. It gives improvements broader meaning

Under this model, a hospital, market, road network, or industrial base does not just buff a city number.

It changes the living conditions across the city's territory.

That creates a more systemic feel than simple city-center bonuses.

### 3. It keeps future simulation options open

This foundation can later support:

- migration between tiles
- urban concentration
- depopulation
- frontier growth
- trade-driven settlement corridors

without replacing the model.

## Risk To Keep In Mind

The main risk is simulation sprawl.

If every tile has autonomous population, migration, birth rate, death rate, infrastructure spillover, and trade effects too early, the model can become difficult to tune and difficult to explain.

So the practical design advice is:

- adopt this conceptual model now
- keep the first implementation thin
- add only a small number of growth drivers at first

For example, an early version could use only:

- local population stored on tiles
- direct city ownership of tiles
- derived city totals from controlled tiles

and leave growth drivers, migration, sanitation, and industrial effects for later layers.

## Still Useful Open Questions

1. Should all controlled tiles contribute fully right away, or should some city capacity limit how much territory is effectively used?
2. Do we want one city center only, or can the city later develop internal districts that change how nearby tiles contribute?
3. How many base tile attributes are enough to make tiles interesting without making the map unreadable?

## Implemented First Slice Agreement

Agreed direction that has now been implemented:

- Cities receive stable ids.
- A civilization layer exists above cities.
- Controlled tiles are derived from tile ownership rather than stored on the city.
- A newly created starter city begins with one owned starter tile.
- City `size` means the number of tiles controlled by the city.
- City population is separate from city size and equals the sum of local population across controlled tiles.
- Population uses real-scale whole numbers of people rather than abstract levels such as `1`, `2`, or `3`.
- The first territorial attribute schema is intentionally tiny and currently implements only `arableLand`.

Still unresolved:

- population growth rules
- final units for territorial attributes
- the full birth, death, food, migration, infrastructure, economy, and technology simulation

## New Agreement: Population Uses Whole People

Current direction agreed in discussion:

- Population does not allow fractions.
- Tile population and city population both represent whole numbers of people.
- Population display may later abbreviate large values, but the underlying model uses integer counts.

This keeps the simulation legible and avoids awkward partial-person bookkeeping.

## New Direction: Civilization Layer Above Cities

Current direction raised during discussion:

- The player controls a civilization, not only a single city.
- A civilization begins with one city and can expand to many cities over time.
- Cities are subordinate territorial units inside a civilization.

This is important because tile influence and tile control may need both:

- city-level logic
- civilization-level logic

## New Direction: City Expansion Through Culture Accumulation

Current direction raised during discussion:

- City expansion should likely use a Civ4-like accumulation rule.
- A city accumulates culture over time.
- When culture crosses threshold values, the city's territorial reach can expand.

What looks strong about this:

- it gives expansion a readable pacing rule
- it creates a clean lever for buildings, trade, religion, military presence, and policy to affect borders later
- it separates "how much presence a city projects" from "which tiles are currently controlled"

Main design risk:

- if culture accumulation, tile influence, tile control, and incorporation are not clearly separated, the system will get muddy fast

## New Direction: Separate Influence From Reach Terminology

This is the main terminology problem that now needs cleanup.

Your instinct is right:

- `influence` should be reserved for the numeric share an entity has on a tile
- the area around a city where it can project or spread that influence should use a different word

I do not think `influence reach` is a good final term because it mixes the quantity and the area concept.

## Recommended Terminology Shape

My current recommendation:

- `influence`: the numeric share a city or civilization has on a specific tile
- `control`: who currently owns the tile
- `city territory`: the tiles currently assigned to a city
- `core territory`: the fully incorporated subset of city territory
- `frontier territory`: controlled tiles that are not yet fully incorporated
- `projection range`: the area from which a city can naturally spread influence outward
- `culture`: the accumulation that expands projection range or unlocks new territorial thresholds

Why I like this:

- `influence` stays numeric
- `territory` describes actual controlled land
- `core` versus `frontier` gives you a clean way to later support partial incorporation
- `projection range` is broad enough to later include military, trade, and cultural spread without overloading the word `influence`

I would avoid using `reach` as the main permanent noun unless you strongly prefer it stylistically. It is understandable, but it gets fuzzy once you have several overlapping rings.

## Multi-Layer Control Model Raised During Discussion

Current direction raised during discussion:

- A tile can receive influence from several cities and from several civilizations.
- Tile control may therefore need a two-stage resolution.

Proposed rule from discussion:

1. Each city contributes its own influence share to the tile.
2. Civilization influence on a tile is the sum of all city influences from cities belonging to that civilization.
3. The tile belongs to the civilization with the highest total influence.
4. Within the winning civilization, the tile is assigned to the city that has the highest city-level influence on that tile.

Example discussed:

- Copenhagen `40`
- Malmo `45`
- Koge `15`

Civilization totals:

- Denmark `55`
- Sweden `45`

Result:

- the tile belongs to Denmark
- within Denmark, the tile is assigned to Copenhagen

This is a coherent rule, but it is important to notice what it means:

- the winning city does not need to be the single strongest city on the tile
- the winning city only needs to be the strongest city inside the winning civilization

That is a real design choice, not just an implementation detail.

## Current Lean

My current lean is:

- yes to a civilization layer in the design
- yes to reserving `influence` for numeric tile shares
- yes to using `territory` for controlled tiles instead of `reach`
- yes to `core territory` as a later refinement, not a first-slice requirement
- yes to culture accumulation as the long-term border-growth system
- no to implementing full multi-source cultural spread in the current first slice

For the current implementation path, keep:

- one civilization
- one city
- direct city ownership
- no projection range yet
- no partial incorporation yet

and choose terminology and data shapes now so we do not paint ourselves into a corner.
