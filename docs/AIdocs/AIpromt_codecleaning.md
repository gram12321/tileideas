# AI Prompt: Code Cleanup And Refactoring

Use this when cleaning or restructuring Tile Ideas.

## Goals

- Improve readability without changing intended behavior.
- Remove dead or imported-project code and terminology.
- Keep domain logic outside React components.
- Preserve the current small-module approach until complexity justifies a larger structure.

## Review Areas

| Area | Look for |
|---|---|
| `src/game.ts`, `src/city.ts`, `src/tile.ts` | Unclear state transitions, mutation, duplicated domain rules. |
| `src/App.tsx` | Simulation logic that should move into domain modules. |
| `src/components/ui/` | Duplicate or unused UI primitives. |
| Docs | Claims about systems, files, or rules that do not exist. |

## Process

1. Read the relevant code and current docs.
2. Identify concrete duplication, dead code, misplaced logic, or naming problems.
3. Make the smallest coherent change.
4. Verify with `npm run build` when code changes warrant it.
5. Update docs only where behavior, terminology, or ownership changed.

## Constraints

- Do not create planned folders merely to match architecture docs.
- Do not preserve aliases for discarded imported-project concepts.
- Do not introduce a database, backend, or large framework during cleanup unless explicitly requested.
- Do not mix unrelated refactors into a focused change.
