import type { Tile } from "./tile";

export interface City {
  id: string;
  civilizationId: string;
  name: string;
}

export function createCity(
  id: string,
  civilizationId: string,
  name: string,
): City {
  return { id, civilizationId, name };
}

export function getCityTotals(city: City, tiles: Tile[]) {
  const controlledTiles = tiles.filter((tile) => tile.ownerCityId === city.id);

  return {
    size: controlledTiles.length,
    population: controlledTiles.reduce(
      (total, tile) => total + tile.localPopulation,
      0,
    ),
    arableLand: controlledTiles.reduce(
      (total, tile) => total + tile.arableLand,
      0,
    ),
  };
}
