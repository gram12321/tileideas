import { createCity, type City } from "./city";
import { createTile, type Tile } from "./tile";

export interface Civilization {
  id: string;
  name: string;
}

export interface GameState {
  turn: number;
  civilizations: Civilization[];
  cities: City[];
  tiles: Tile[];
}

export function createGame(cityName = "Capital"): GameState {
  const city = createCity("city-0", "civ-0", cityName);

  return {
    turn: 0,
    civilizations: [{ id: "civ-0", name: "Player Civilization" }],
    cities: [city],
    tiles: [createTile("tile-0", city.id, 50, 10)],
  };
}

export function advanceTurn(state: GameState): GameState {
  return {
    ...state,
    turn: state.turn + 1,
  };
}

export function runTurns(state: GameState, turns: number): GameState {
  let nextState = state;

  for (let turn = 0; turn < turns; turn += 1) {
    nextState = advanceTurn(nextState);
  }

  return nextState;
}
