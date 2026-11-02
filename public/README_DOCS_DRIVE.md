# Automated Documentation Drift Detection

**Problem 05 – Hacktoberfest 2026 – Hack Day Sonipat**  
**Team: HisenBugs**

An automated CI check that identifies documentation made incorrect by code changes in a Pull Request. It analyzes the PR diff, links changed code (renamed flags, changed defaults, modified parameters, removed features) to the docs that describe them, and reports the exact documentation sentences that are now out of date — each with a reference to the responsible code change.

---

## 📋 Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Phase-by-Phase Implementation](#3-phase-by-phase-implementation)
4. [Unique Selling Propositions (USPs)](#4-unique-selling-propositions)
5. [Installation & Quickstart](#5-installation)
6. [CLI & API Reference](#6-cli--api-reference)
7. [Data Schemas](#7-data-schemas)
8. [Testing & Benchmarks](#8-testing--benchmarks)
9. [Demo Scenarios](#9-demo-scenarios)
10. [The 3D Workstation Experience](#10-the-3d-workstation-experience)
11. [Technology Stack](#11-technology-stack)
12. [Team](#12-team)

---

## 1. Overview

Documentation drifts when developers update code without synchronizing associated documentation. Traditional doc test tools (e.g., `doctest`, `rustdoc`, `mktestdocs`) only check executable code blocks; they cannot evaluate natural language explanatory prose, configuration tables, tutorial parameters, or architectural descriptions.

This project solves that problem by providing:

- **Core Analysis Engine (Phase 1):** A Python CLI that parses code diffs, extracts semantic changes using AST parsing, links changed code symbols to documentation sentences using hybrid BM25 + dense embeddings, and verifies drift using an LLM (local Ollama gemma4:e4b with offline fallback).
- **GitHub Action / CI Check (Phase 2):** A Dockerized GitHub Action that runs on pull requests, analyzes PR diffs, posts inline review comments with suggestion blocks, creates GitHub Check Runs with file annotations, and validates drift detection against historical commit histories.
- **FastAPI Web API (Phase 3):** A web service wrapping the core engine with async background jobs, SQLite persistence, and REST endpoints for the frontend dashboard.
- **Next.js Frontend Dashboard (Phase 4):** A web interface with side-by-side diff visualization, one-click documentation fixes, PR analysis dashboard, and interactive retro 3D CRT workstation.

---

## 2. Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                     Next.js Frontend (Port 3000)                   │
│  app/lib/api.ts — Typed fetch client for backend API               │
└─────────────────────────────────────────────────────────────────────┘
                            │ HTTPS / JSON
                            │ CORS enabled for localhost:3000
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   FastAPI Backend (Port 8000)                      │
│  api/main.py         — App entrypoint, CORS, health                │
│  api/routes.py       — 10 REST endpoints                           │
│  api/worker.py       — Async + sync job manager                    │
│  api/database.py     — SQLite persistence                          │
│  api/schemas.py      — Pydantic v2 request/response models         │
└─────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    Phase 1 Core Engine (Python)
                    backend/core/
                    ├── diff_parser.py    # Unified diff parsing
                    ├── ast_extractor.py  # Semantic change extraction
                    ├── doc_parser.py     # Markdown sentence parser
                    ├── hybrid_matcher.py # BM25 + embeddings linker
                    ├── drift_verifier.py # LLM drift verification
                    ├── llm_client.py     # Ollama / OpenAI client
                    ├── embeddings.py     # Embedding service
                    └── models.py         # Pydantic v2 schemas
```

### Core Pipeline Flow

```
Input Diff
    │
    ▼
Diff Parser ────────▶ Extract added/removed lines, classify code vs doc
    │
    ▼
AST Extractor ───────▶ Detect renamed flags, changed defaults, modified params, removed features
    │
    ▼
Doc Parser ─────────▶ Extract doc sentences with exact line numbers & section hierarchy
    │
    ▼
Hybrid Matcher ──────▶ BM25 + dense embeddings (nomic-embed-text) + Reciprocal Rank Fusion
    │
    ▼
Drift Verifier ──────▶ LLM (gemma4:e4b) verifies drift, assigns severity + confidence
    │
    ▼
DriftAnalysisReport ──▶ JSON output with exact sentence, code line, suggested fix
```

---

## 3. Phase-by-Phase Implementation

### Phase 1: Core Analysis Engine (Local CLI/Script)
- **Unified Diff Parser:** Parses unified diffs from raw strings, local git repos, or GitHub PR patches.
- **AST Semantic Extractor:** Detects renamed CLI flags, changed defaults, modified parameters, and removed features across Python and TypeScript.
- **Documentation Sentence Parser:** Sentence tokenization with exact line numbers, header hierarchies, and Markdown table cell isolation.
- **Hybrid Retrieval:** BM25 lexical + dense embeddings (`nomic-embed-text`) with Reciprocal Rank Fusion (RRF).
- **LLM Drift Verifier:** Ollama `gemma4:e4b` verifier with offline heuristic rule fallback.
- **Confidence Scoring:** (0.0–1.0) with configurable thresholds and doc-update suppression guards.

### Phase 2: GitHub Action / CI Check (Primary Goal)
- Dockerized containerized execution (`action.yml`, `Dockerfile`, `entrypoint.sh`).
- Idempotent PR summary comments with hidden signature hashes.
- Inline review comments with GitHub markdown suggestion blocks on modified documentation lines.
- Native GitHub Check Runs with code annotations and configurable CI pipeline failure.
- Historical commit replay engine benchmarked against real open source histories.

### Phase 3: Web API (FastAPI)
- 10 REST endpoints with async/sync worker queue management.
- SQLite job persistence for past runs, findings, and downloadable git patches.
- Endpoints:
  - `GET /api/health` — Service health & Ollama readiness
  - `POST /api/analyze-pr` — Trigger full PR drift scan
  - `POST /api/analyze-diff` — Interactive diff playground
  - `GET /api/runs` & `GET /api/runs/{run_id}` — Run telemetry & findings
  - `POST /api/generate-fix` — AI-assisted markdown patch generator
  - `POST /api/fix/apply` — Downloadable git patch export
  - `GET /api/playground/scenarios` — Curated demo scenarios

### Phase 4: Frontend Dashboard & 3D CRT Workstation
- Modern Next.js App Router dashboard with Tailwind CSS and Lucide React.
- Interactive side-by-side diff inspector and one-click documentation patches.
- Full retro 3D CRT workstation hero room powered by Three.js and custom DDBIOS boot sequence.

---

## 4. Unique Selling Propositions

1. **Indirect Semantic Relationship Detection:** Discovers documentation drift where code and docs share zero common words using dense embeddings (`nomic-embed-text`).
2. **Exact Sentence Granularity with Line Mapping:** Identifies the precise drifted sentence within multi-line paragraphs and Markdown table rows rather than flagging entire documents.
3. **PR Doc-Update Guard:** Automatically suppresses findings if the Pull Request already updated the corresponding documentation.
4. **Internal Refactor False-Positive Suppression:** Filters out private method and internal symbol refactors that do not affect public interfaces.
5. **Behavioral Change Detection:** Detects behavioral shifts (e.g., async vs. sync execution, altered exception handling) even without symbol renames.
6. **Configuration Table Awareness:** Markdown configuration tables are parsed row-by-row, linking individual table entries to source parameters.
7. **Offline-First Local AI:** Runs 100% locally with Ollama (`gemma4:e4b` + `nomic-embed-text`), ensuring zero code or doc leaves your infrastructure.
8. **Hybrid Retrieval (BM25 + Dense + RRF):** Combines lexical precision for exact flags with vector semantic recall.
9. **Bi-Directional Code Linkage:** Direct linking from documentation sentences to source files, line ranges, and git diff hunks.

---

## 5. Installation

```bash
# Clone the repository
git clone https://github.com/DakshSingh-GitHub/docs-drive.git
cd docs-drive

# Backend Setup
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pip install fastapi uvicorn httpx aiosqlite

# Run Test Suite (75 Tests Passing)
.venv/bin/python3 -m pytest tests/ -v

# Frontend Setup
cd ..
npm install
npm run dev
```

---

## 6. CLI & API Reference

```bash
# Check local git branch diff
.venv/bin/python3 -m backend.cli check --repo . --base main --head HEAD

# Check PR patch against docs folder
.venv/bin/python3 -m backend.cli check --diff pr.patch --docs-dir docs/ --fail-on-drift

# Run historical commit replay benchmark
.venv/bin/python3 -m evaluation.run_eval --confidence 0.75
```

---

## 7. Demo Scenarios

| Scenario | Drift Type | Severity | Description |
|---|---|---|---|
| **1. Renamed Flag** | `renamed_flag` | High | `--timeout-secs` renamed to `--timeout` in CLI parser |
| **2. Changed Default** | `incorrect_default` | Medium | Default port changed from `8080` to `3000` |
| **3. Removed Parameter** | `param_removed` | Critical | `verify_ssl=True` parameter removed from client constructor |
| **4. False Alarm** | `none` | None | Internal refactor with no public API impact (suppressed) |

---

## 8. Technology Stack

- **Core & Backend:** Python 3.9+, FastAPI, Pydantic v2, SQLite, asyncio, unidiff, gitpython
- **AI & NLP:** Ollama, gemma4:e4b, nomic-embed-text, rank-bm25
- **Frontend:** Next.js 15+, React 19, Tailwind CSS v4, Lucide React, Three.js 3D CRT Workstation
- **CI/CD:** Docker, GitHub Actions, PyGithub, pytest (75 unit & integration tests)

---

## 9. Team

**Team Name:** HisenBugs  
**Event:** Hacktoberfest 2026 – Hack Day Sonipat  
**Problem:** Problem 05 – Automated Documentation Drift Detection

- **Jaydev Lamror** (@jaydevLamror11)
- **Rushan Advani** (@rushanadv)
- **Daksh Singh** (@DakshSingh-GitHub)
- **Sahaj Choukhani** (@sahajchoukhani)

