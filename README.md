# C.A.T.E

A local-first personal AI assistant forked from [OpenJarvis](https://github.com/open-jarvis/OpenJarvis).

This replaces the earlier C.A.T.E prototype with the full upstream system. The app title, web interface, repository, desktop identity, and `cate` command use C.A.T.E branding. Python modules (`openjarvis`), the distribution name, legacy `jarvis` command, and existing configuration paths remain compatible with upstream.

## Run on Windows

Requires Python 3.10–3.13 (3.12 recommended), uv, Node >=22.22, and npm >=11.19 <12.

```powershell
uv sync --python 3.12 --extra server --no-default-groups
uv run --no-sync cate gui
```

Configure a model in Settings. Local inference uses a separately installed engine such as Ollama; cloud inference requires provider credentials. This repository does not include model weights.

## Build

```powershell
cd frontend
npx --yes npm@11.19.0 ci
npm run build
cd ..
uv build
```

For the optional native desktop shell, install Rust and the platform Tauri prerequisites, sync the `desktop` Python extra, then run `npm run tauri build` from `frontend`. Native packaging has not been verified for this fork. Automatic binary updates are disabled until C.A.T.E has its own signed release channel.

## System structure

| Layer | Implementation |
| --- | --- |
| Interface | React 19, TypeScript, Vite, Tailwind CSS, Zustand |
| API / CLI | Python, FastAPI, Uvicorn, Click |
| Desktop shell | Optional Tauri 2 / Rust |
| Inference | Pluggable local engines and cloud providers |
| Agents | Simple chat, tool-using agents, research, scheduled and continuous agents |
| Tools and integration | Tool registry, MCP, connectors, channels and skills |
| Persistence | Sessions, SQLite-backed memory/traces, optional retrieval backends |
| Operations | Scheduler, workflows, security/approval components, telemetry and evaluation |

The Rust extension supports parts of the persistence/retrieval system; full memory functionality may require compiling it. Included components are upstream capabilities, not proof that every integration is configured or tested on this computer.

## Provenance

Imported upstream revision: `103b1227cb65af71fa930de0945e8d11844aef11`.
See [upstream documentation](README.upstream.md), [LICENSE](LICENSE), and source notices. Original attribution and licenses are retained. C.A.T.E changes are branding, launch alias, fork installation target, and disabling upstream binary updates.

## Import verification (2026-11-06)

- Frontend production build passed.
- Existing frontend tests: 117 passed across 23 files.
- CLI tests: 17 passed; `cate --help` verified.
- Python source distribution and wheel built successfully.
- Native desktop packaging, full backend suite, live inference, and authenticated connectors were not verified.
- npm audit reported 9 inherited dependency advisories: 3 low, 5 moderate, 1 critical (transitive `dompurify`). Dependencies were not upgraded during the import.
- Build warnings include a large main bundle and an ineffective dynamic analytics import.
