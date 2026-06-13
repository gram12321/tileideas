import { createCity, growCity, type City } from "./city";
import { createTile, resolveTileOwner, type Tile } from "./tile";

export interface GameState {
  turn: number;
  cities: City[];
  tiles: Tile[];
}

export function createGame(cityName = "Capital"): GameState {
  return {
    turn: 0,
    cities: [createCity(cityName)],
    tiles: [createTile("tile-0")],
  };
}

export function advanceTurn(state: GameState): GameState {
  return {
    turn: state.turn + 1,
    cities: [...state.cities],
    tiles: state.tiles.map(resolveTileOwner),
  };
}

export function growFirstCity(state: GameState, amount = 1): GameState {
  if (state.cities.length === 0) {
    return state;
  }

  return {
    ...state,
    cities: [growCity(state.cities[0], amount), ...state.cities.slice(1)],
  };
}

export function runTurns(state: GameState, turns: number): GameState {
  let nextState = state;

  for (let turn = 0; turn < turns; turn += 1) {
    nextState = advanceTurn(nextState);
  }

  return nextState;
}
