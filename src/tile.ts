export type Terrain = "plains" | "forest" | "hill" | "water";

export interface Tile {
  id: string;
  terrain: Terrain;
  owner: string | null;
  influenceByCity: Record<string, number>;
}

export function createTile(id: string, terrain: Terrain = "plains"): Tile {
  return {
    id,
    terrain,
    owner: null,
    influenceByCity: {},
  };
}

export function setTileInfluence(
  tile: Tile,
  cityName: string,
  influence: number,
): Tile {
  return {
    ...tile,
    influenceByCity: {
      ...tile.influenceByCity,
      [cityName]: influence,
    },
  };
}

export function resolveTileOwner(tile: Tile): Tile {
  let owner: string | null = null;
  let highestInfluence = 0;

  for (const cityName of Object.keys(tile.influenceByCity)) {
    const influence = tile.influenceByCity[cityName];
    if (influence > highestInfluence) {
      highestInfluence = influence;
      owner = cityName;
    }
  }

  return { ...tile, owner };
}
