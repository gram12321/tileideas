export interface City {
  name: string;
  size: number;
}

export function createCity(name: string, size = 1): City {
  return { name, size };
}

export function growCity(city: City, amount = 1): City {
  return { ...city, size: city.size + amount };
}
