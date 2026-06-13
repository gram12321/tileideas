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
  growFirstCity,
  type GameState,
} from "./game";
import { setTileInfluence } from "./tile";

function createStarterState(): GameState {
  const state = createGame("Northhold");
  const firstCity = state.cities[0];

  if (!firstCity) {
    return state;
  }

  return advanceTurn({
    ...state,
    tiles: state.tiles.map((tile) => setTileInfluence(tile, firstCity.name, 4)),
  });
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() => createStarterState());

  const city = gameState.cities[0];
  const tile = gameState.tiles[0];

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
            <Button
              variant="outline"
              onClick={() => setGameState((current) => growFirstCity(current))}
            >
              Grow City
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
              <CardDescription>Population placeholder</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">{city?.size ?? 0}</p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/8">
            <CardHeader>
              <CardTitle>Tile Owner</CardTitle>
              <CardDescription>Resolved from influence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">
                {tile?.owner ?? "Unclaimed"}
              </p>
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
                Size {city?.size ?? 0} with one seeded tile influence for demo
                purposes.
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
                Terrain {tile?.terrain ?? "unknown"} with influence{" "}
                {city ? tile?.influenceByCity[city.name] ?? 0 : 0}.
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
