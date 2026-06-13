# AI Prompt: Documentation Maintenance

Use this when updating documentation after design or implementation work.

## Documentation Roles

| File | Role |
|---|---|
| `README.md` | Short introduction, setup, and doc map. |
| `docs/CONTEXT.md` | Canonical current vocabulary and rules. |
| `docs/variablesoverview.md` | Main flow, variable dependencies, and relationship invariants. |
| `docs/city.md` | Current and planned city model. |
| `docs/tiles.md` | Current and planned tile model. |
| `docs/PROJECT_INFO.md` | Current file ownership and architecture direction. |
| `docs/AIdocs/AIDescriptions_coregame.md` | Current implementation orientation. |
| `docs/versionlog.md` | Meaningful committed project history. |

## Update Rules

- Keep implemented behavior separate from planned direction.
- Verify file paths and exported names against the repo.
- Remove imported-project terminology rather than preserving compatibility notes.
- Update `docs/CONTEXT.md` when vocabulary or current rules change.
- Update `docs/variablesoverview.md` when dependencies or game flow change.
- Update `docs/PROJECT_INFO.md` when ownership or paths change.
- Keep `README.md` concise and route deeper detail into `docs/`.

## Verification

Before finishing a broad documentation pass:

```bash
git diff --check
```

Also search the touched docs for known retired project names and paths.
