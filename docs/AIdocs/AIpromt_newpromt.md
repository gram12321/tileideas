# AI Prompt: Starting A New Development Session

Use this as a short context handoff for Tile Ideas.

## Project Summary

Tile Ideas is an early single-player, turn-based civilization simulation centered on cities, tile influence, and gradual territorial control.

The current stack is React, Vite, TypeScript, Tailwind CSS, and shadcn UI. The current domain prototype has cities, tiles, influence, ownership resolution, and manual turn advancement.

## First Files To Read

1. `README.md`
2. `docs/CONTEXT.md`
3. `docs/variablesoverview.md`
4. `docs/PROJECT_INFO.md`
5. The smallest relevant source files

## Current Snapshot

- `src/game.ts` owns `GameState` and turn transitions.
- `src/city.ts` owns city creation and growth.
- `src/tile.ts` owns tiles, influence, and ownership resolution.
- `src/App.tsx` is a minimal interaction and debugging shell.
- No persistence, backend, or automated tests exist yet.

## Development Rules

- Keep changes minimal and scoped to the request.
- Keep game rules in domain modules, not React components.
- Prefer pure state transitions.
- Check the repo before assuming a planned file or folder exists.
- Use current terms from `docs/CONTEXT.md`.
- Update docs when implementation, terminology, or ownership changes.

## Useful Commands

```bash
npm run build
git diff --check
```

Do not start the dev server or commit changes unless asked.
