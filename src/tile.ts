export interface Tile {
  id: string;
  ownerCityId: string | null;
  localPopulation: number;
  arableLand: number;
}

export function createTile(
  id: string,
  ownerCityId: string | null,
  localPopulation: number,
  arableLand: number,
): Tile {
  if (!Number.isInteger(localPopulation) || localPopulation < 0) {
    throw new RangeError("Local population must be a non-negative integer.");
  }

  return { id, ownerCityId, localPopulation, arableLand };
}
