# AI Agent Rules

Keep this rule body mirrored across `agent.md`, `docs/AIdocs/airules.mdc`, `docs/AIdocs/copilot-instructions.md`, and `.cursor/rules/ai-agent-rule.mdc/airulesVS.instructions.md`.

## Orientation

- Read `README.md` for scope and doc routing.
- Read `docs/CONTEXT.md` for current terminology and rules.
- Read `docs/variablesoverview.md` for variable dependencies.
- Read `docs/PROJECT_INFO.md` for current file ownership.
- Check the actual repo before assuming planned files or systems exist.

## Workflow

- Keep changes minimal and scoped to the request.
- Do not commit or start the dev server unless asked.
- Verify meaningful code changes with the most focused available check.
- Update docs when behavior, terminology, or ownership changes.
- Do not preserve imported-project terminology or assumptions without explicit approval.

## Architecture

- Keep game rules in plain TypeScript domain modules, outside React components.
- Prefer pure functions that return new state.
- Keep React focused on presentation, UI state, and calling domain actions.
- Add types, constants, services, hooks, tests, or persistence folders only when real code needs them.
- Centralize tunable gameplay values once they are reused or need balancing.

## Domain

- The city is the current main high-level game object.
- Tiles store terrain, influence, and ownership state.
- Ownership is resolved from tile influence.
- Use terms defined in `docs/CONTEXT.md`.
- Update `docs/variablesoverview.md` when meaningful dependencies or game-flow relationships change.

## Local Skills

Repo-local skills live under `.agent/skills/`. They were imported from earlier projects and may contain stale stack assumptions. Use them selectively and treat current code and docs as authoritative.
