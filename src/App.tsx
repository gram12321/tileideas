import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  advanceTurn,
  createGame,
  type GameState,
} from "./game";
import { getCityTotals } from "./city";

function createStarterState(): GameState {
  return createGame("Northhold");
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() => createStarterState());

  const city = gameState.cities[0];
  const tile = gameState.tiles[0];
  const cityTotals = city
    ? getCityTotals(city, gameState.tiles)
    : { size: 0, population: 0, arableLand: 0 };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <section className="rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
            Vite + React + TypeScript + shadcn
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tile Ideas now has a simple UI shell.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            This starter screen reads the existing game state, shows a few key
            values, and gives us a clean base for the next interface step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => setGameState((current) => advanceTurn(current))}>
              Advance Turn
            </Button>
            <Button variant="ghost" onClick={() => setGameState(createStarterState())}>
              Reset Demo
            </Button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-white/10 bg-white/8">
            <CardHeader>
              <CardTitle>Turn</CardTitle>
              <CardDescription>Core loop progress</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">{gameState.turn}</p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/8">
            <CardHeader>
              <CardTitle>City Size</CardTitle>
              <CardDescription>Number of controlled tiles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">{cityTotals.size}</p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/8">
            <CardHeader>
              <CardTitle>City Population</CardTitle>
              <CardDescription>Sum of controlled tiles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">{cityTotals.population}</p>
            </CardContent>
          </Card>
        </section>

        <Card className="border-white/10 bg-slate-950/70">
          <CardHeader>
            <CardTitle>Current Snapshot</CardTitle>
            <CardDescription>
              Tiny debugging surface for the first playable UI experiments.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                City
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                {city?.name ?? "No city"}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Controls {cityTotals.size} tile with {cityTotals.arableLand} arable
                land.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Tile
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                {tile?.id ?? "No tile"}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Population {tile?.localPopulation ?? 0}; owned by{" "}
                {tile?.ownerCityId ?? "no city"}.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between gap-3 text-xs text-slate-400">
            <span>Ready for more shadcn components whenever we need them.</span>
            <span>State lives in the existing TypeScript domain files.</span>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
