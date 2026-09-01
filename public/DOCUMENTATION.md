# ⚖️ Vlyxir — Complete Architecture & Platform Documentation

> **Version:** 7.3.20  
> **Release Class:** Enterprise Developer Platform / High-Performance Online Judge & Cloud IDE  
> **Target Environments:** Web (Next.js 16 + React 19), Progressive Web App (PWA), Desktop (Electron 33 macOS / Windows)  
> **Core Backend:** Python 3.10+ / FastAPI / Persistent Worker IPC Pool  
> **Persistence & Realtime:** Supabase (PostgreSQL 15, Auth, Row-Level Security, Realtime WebSockets)  
> **AI Inference Tier:** Groq Cloud (Qwen 2.5 32B / LLaMA 3.3 70B) & Google Gemini API (Gemini 2.5 Flash / Pro)  
> **In-Browser Sandbox:** Pyodide WebAssembly (Python 3.11 Runtime in WebWorker)  

---

## Table of Contents

1. [Executive Overview & Platform Vision](#1-executive-overview--platform-vision)
   - 1.1 What is Vlyxir?
   - 1.2 Target Audience & Core Value Proposition
   - 1.3 High-Level System Architecture & Topology
   - 1.4 Dual-Experience Paradigm: Classic vs. MDE (Modern Design Experience)
   - 1.5 Multi-Platform Delivery (Web, PWA, Electron Desktop)
2. [System Architecture & Repository Topology](#2-system-architecture--repository-topology)
   - 2.1 Complete Monorepo Directory Tree
   - 2.2 Tech Stack Matrix & Library Ecosystem
   - 2.3 Environment Configurations & Runtime Variables
   - 2.4 Build, Test, and Packaging Pipeline
3. [Authentication, Identity & Multi-Account Architecture](#3-authentication-identity--multi-account-architecture)
   - 3.1 Architecture of AuthContext & AuthProvider
   - 3.2 Supabase Auth Integration & Session Lifecycle
   - 3.3 Multi-Account Switching & Local Persistence
   - 3.4 User Profiles & Role Hierarchy (User, Pro, Super)
   - 3.5 Username Policy, Availability Validation & Regex Security
4. [Comprehensive Route Directory & Page Matrix](#4-comprehensive-route-directory--page-matrix)
   - 4.1 Route Mapping Table (All 35+ Routes)
   - 4.2 Dynamic Routes & Parameter Handlers
   - 4.3 Next.js Route Groups & Viewport Isolation
   - 4.4 Internal API Route Handlers
5. [The Core Pillars of Vlyxir](#5-the-core-pillars-of-vlyxir)
   - 5.1 Pillar I: The Online Judge Engine & Problem Solving Architecture
   - 5.2 Pillar II: Cloud IDE, Virtual Workspace & Local Execution (Forge)
   - 5.3 Pillar III: Real-Time 1v1 Algorithmic Duels & Competitive Arena
   - 5.4 Pillar IV: Collaborative Technical Interview Suite
   - 5.5 Pillar V: AI Code Intelligence & Multi-Model Analysis
   - 5.6 Pillar VI: Interactive Data Structures & Algorithms Curriculum (Learn)
   - 5.7 Pillar VII: Community, Discussion Forums & Social Network
   - 5.8 Pillar VIII: Gamification, Global Leaderboard & Identity
   - 5.9 Pillar IX: High-Admin Governance & Platform Telemetry
   - 5.10 Pillar X: High-Performance Execution Engine & Backend Infrastructure
6. [Frontend Component Catalog & UI Library](#6-frontend-component-catalog--ui-library)
   - 6.1 General & Shell Components
   - 6.2 Editor & Development Components
   - 6.3 Interview & Collaboration Components
   - 6.4 Forum & Community Components
   - 6.5 Auth & Modal Components
7. [Frontend State Management, Contexts, Hooks & Utilities](#7-frontend-state-management-contexts-hooks--utilities)
   - 7.1 AppContext & Theme Engine
   - 7.2 AuthContext & Multi-Account Management
   - 7.3 Custom Hooks (usePyodideWorker, useInterviewRealtime)
   - 7.4 Client-Side Caching & LocalStorage Utilities
8. [Database Schema, Data Dictionary & Row Level Security (RLS)](#8-database-schema-data-dictionary--row-level-security-rls)
   - 8.1 Schema Architecture & Relational Topology
   - 8.2 Detailed SQL Table Definitions
   - 8.3 Enums & Constraint Specifications
   - 8.4 Row-Level Security (RLS) Policies
9. [The Design System: Modern Design Experience (MDE)](#9-the-design-system-modern-design-experience-mde)
   - 9.1 Glassmorphism & Atmospheric Lighting
   - 9.2 Tailwind CSS v4 Configuration & Design Tokens
   - 9.3 Animation Orchestration: Framer Motion & Anime.js
   - 9.4 Viewport Locking & Responsive Drawer Paradigms
   - 9.5 Accessibility, Motion Reduction & Typography
10. [Installation, Deployment & DevOps Runbook](#10-installation-deployment--devops-runbook)
    - 10.1 Local Development Environment Setup
    - 10.2 Production Deployment (Vercel & Cloud VPS)
    - 10.3 Electron Desktop Compilation (macOS DMG & Windows EXE)
    - 10.4 Supabase Setup & Migration Runbook
    - 10.5 Troubleshooting, Common Pitfalls & Operational FAQ

---

# 1. Executive Overview & Platform Vision

### 1.1 What is Vlyxir?

**Vlyxir** (pronounced */vlɪk-sɪər/*) is an industrial-grade, full-lifecycle coding ecosystem and cloud development environment engineered for developers, competitive programmers, technical interviewers, and algorithms students. It fuses a sub-millisecond Python judging engine with an immersive, glassmorphic desktop and web interface, an in-browser WebAssembly Python sandbox, real-time multiplayer code duels, live collaborative interview rooms, structured computer science curricula, and tier-gated artificial intelligence analysis.

Traditional online judges (e.g., LeetCode, Codeforces, HackerRank) frequently suffer from architectural friction:
1. **Subprocess Spawn Overhead:** Traditional judges spawn a new operating system process (`python solution.py`) for each test case. When evaluating a solution across 100 to 120 test cases, process initialization and tear-down incur hundreds of milliseconds of artificial latency.
2. **Disconnected Tools:** Developers must write code in a separate editor, test snippets locally, paste them into a submission box, seek AI explanations from external chatbots, and use separate meeting software for mock interviews.
3. **Rigid, Monolithic Interfaces:** Standard platforms use static layouts that cannot adapt to ultrawide displays, multi-monitor setups, or mobile responsive constraints.

Vlyxir eliminates these limitations by consolidating all aspects of technical programming into ten interconnected architectural pillars, powered by a persistent worker pool, WebAssembly client-side execution, Supabase Realtime synchronization, and multi-model AI inference.

```
+-----------------------------------------------------------------------------------------------+
|                                       VLYXIR ECOSYSTEM                                        |
+------------------------------+-------------------------------+--------------------------------+
|      PRACTICE & EXECUTION    |     COMPETITION & CAREER      |     INTELLIGENCE & COMMUNITY   |
+------------------------------+-------------------------------+--------------------------------+
| - 295+ Problem Bank          | - 1v1 Real-Time Code Duels    | - Multi-Model AI Code Review   |
| - Sub-Millisecond Judge Pool | - Collaborative Interviews    | - Deep Analytics & Insights    |
| - Cloud IDE (Multi-File)     | - Global Leaderboard (+10/-5) | - Discussion Forums & Threads  |
| - Pyodide WASM Local Forge   | - Accuracy 2.0 Metric         | - 16-Category DSA Curriculum   |
+------------------------------+-------------------------------+--------------------------------+
```

### 1.2 Target Audience & Core Value Proposition

Vlyxir is tailored for four distinct user personas:

| User Persona | Core Pain Point | Vlyxir Solution |
| :--- | :--- | :--- |
| **Competitive Programmers** | Sluggish judge turnaround times and inaccurate performance percentiles. | Sub-millisecond persistent worker judging pool, sub-case execution profiling, and 1v1 real-time live duels. |
| **Job Seekers / Interviewees** | Context switching between algorithm problem sets, video calls, and code scratchpads. | Built-in collaborative interview rooms with dual-role controls, live output synchronization, and candidate logs. |
| **Computer Science Students** | Disjointed theory and practice; inability to run Python code without installing local tools. | Interactive DSA Curriculum (`/learn`) linked directly to problem definitions, plus in-browser WebAssembly Forge (`/forge`). |
| **Senior Engineers & Mentors** | Lack of deep algorithmic code review beyond simple pass/fail verdicts. | Groq & Gemini-powered AI code reviews examining Big-O time/space complexity, static code quality, and security vulnerabilities. |

### 1.3 High-Level System Architecture & Topology

Vlyxir is organized as a distributed monorepo separating client presentation, edge APIs, cloud persistence, and high-security code execution.

```mermaid
flowchart TB
    subgraph Clients ["Client Layer (judge-frontend)"]
        Browser["Desktop Browser
(Chrome, Safari, Firefox)"]
        Mobile["Mobile Browser
(Adaptive Pill Nav)"]
        Electron["Desktop App
(Electron 33 Mac/Win)"]
        PWA["Progressive Web App
(Service Worker Cache)"]
    end

    subgraph FrontendApp ["Next.js 16 Presentation Core"]
        direction TB
        AppRouter["App Router (app/)
(web) | (mde) | (abouts) | (high_admin) | forum"]
        AppCtx["AppContext
Theme, Font Scale, Layout Flags"]
        AuthCtx["AuthContext
Multi-Account Session Switching"]
        PyodideWorker["Pyodide WebWorker
WASM Python 3.11 Execution"]
        ApiLib["API Client (app/lib/api/api.ts)
Local/Remote Auto-Ping Failover"]
    end

    subgraph EdgeServices ["Next.js Edge API Routes"]
        AnalysisAPI["/api/code-analysis
Auth Token & Tier Verification"]
        GroqSDK["Groq SDK (Qwen 2.5 32B)"]
        GeminiSDK["Google GenAI SDK (Gemini 2.5 Flash)"]
    end

    subgraph SupabaseCloud ["Persistence & Realtime (Supabase)"]
        AuthService["Supabase Auth (JWT HS256)"]
        PostgresDB[("PostgreSQL 15
Profiles, Submissions, Duels,
Interviews, Forums, Dailies")]
        RealtimeWS["Supabase Realtime
WebSockets Broadcast & Presence"]
        StorageBuckets["Supabase Storage
Avatars & Forum Attachments"]
    end

    subgraph BackendJudge ["Execution Engine (judge-backend)"]
        FastAPI["FastAPI App (app.py:5000)
CORS, JWT Verification, Pydantic"]
        SecurityMod["Security Guardrails (security.py)
AST Keyword Validation & Import Sandbox"]
        RunnerSupervisor["Runner Supervisor (runner.py)
ThreadPoolExecutor & Watchdogs"]
        WorkerPool["Persistent Worker Pool (runner_worker.py)
Compile-Once Stdin/Stdout JSON IPC"]
        ProblemsBank[("Problem Bank (problems/*.json)
295+ Challenge Definitions")]
    end

    %% Client Connections
    Browser --> AppRouter
    Mobile --> AppRouter
    Electron --> AppRouter
    PWA --> AppRouter

    %% Frontend Internal
    AppRouter --> AppCtx
    AppRouter --> AuthCtx
    AppRouter --> PyodideWorker
    AppRouter --> ApiLib

    %% API & Backend Calls
    ApiLib -->|"HTTP POST /submit, /run
(Local:5000 -> Fallback:Vercel)"| FastAPI
    AppRouter --> AnalysisAPI
    AnalysisAPI --> GroqSDK
    AnalysisAPI --> GeminiSDK
    AnalysisAPI --> PostgresDB

    %% Supabase Connections
    AuthCtx --> AuthService
    AppRouter --> PostgresDB
    AppRouter --> RealtimeWS
    AppRouter --> StorageBuckets

    %% Backend Execution
    FastAPI --> SecurityMod
    FastAPI --> RunnerSupervisor
    RunnerSupervisor --> WorkerPool
    FastAPI --> ProblemsBank
```

### 1.4 Dual-Experience Paradigm: Classic vs. MDE

Vlyxir provides two distinct interface philosophies that users can toggle dynamically in the settings modal or via global switches:

1. **Classic Interface (`(web)` routes):**
   - Clean, functional, LeetCode-familiar presentation.
   - Traditional page scrolling for documentation, leaderboard, account settings, and policy pages.
   - Focuses on maximum clarity, tabular data inspection, and standard code submission workflows.
   - Routes: `/code-judge`, `/code-ide`, `/code-analysis`.

2. **Modern Design Experience (MDE) (`(mde)` routes):**
   - High-immersion, dark glassmorphic styling utilizing backdrop blurs, ambient radial glows, and GPU-accelerated micro-interactions via Framer Motion and Anime.js.
   - Strict viewport containment (`h-screen overflow-hidden`): The application behaves like a native desktop operating system window without browser body scrolling.
   - Modular dockable split panels with drag handles, full keyboard navigation, and specialized tools.
   - Routes: `/arena` (replacing code-judge), `/forge` (replacing code-ide), `/insights` (replacing code-analysis), `/duel` (1v1 competitive arena), `/interview` (collaborative mock interviews), `/learn` (interactive curriculum).

The path resolution engine (`paths.ts`) dynamically resolves URLs based on the user's active UI mode:

```typescript
export function getCodeJudgePath(useNewUi: boolean) {
  return useNewUi ? "/arena" : "/code-judge";
}

export function getCodeIdePath(useNewUi: boolean) {
  return useNewUi ? "/forge" : "/code-ide";
}

export function getCodeAnalysisPath(useNewUi: boolean) {
  return useNewUi ? "/insights" : "/code-analysis";
}
```

### 1.5 Multi-Platform Delivery

Vlyxir is designed to run seamlessly across form factors:

- **Web Application:** Powered by Next.js 16 with React 19 Server Components and Client Components, deployed to Vercel edge networks.
- **Progressive Web App (PWA):** Configured via `@ducanh2912/next-pwa` with custom service workers, app manifests (`manifest.ts`), offline page caching, and home-screen installation.
- **Desktop Electron Application:** Packaged using Electron 33 and `electron-builder`. Provides native desktop windows, custom window chrome (`TitleBar.tsx`), hardware-accelerated rendering, menu integration, and macOS Apple Silicon universal binaries as well as Windows NSIS installers.

---

# 2. System Architecture & Repository Topology

### 2.1 Complete Monorepo Directory Tree

The Vlyxir repository is structured into two primary top-level workspaces: `judge-frontend` (Next.js client and edge application) and `judge-backend` (FastAPI execution service and problem catalog), accompanied by configuration, documentation, and asset directories.

```
Vlyxir/
├── .gitignore                          # Monorepo git ignore rules
├── CODE_OF_CONDUCT.md                  # Contributor Covenant Code of Conduct
├── DOCUMENTATION.md                    # Exhaustive master documentation (this file)
├── LICENSE                             # Dual licensing (MIT Frontend, Proprietary Backend)
├── README.md                           # Quickstart guide and screenshots
├── SECURITY.md                         # Security policy and disclosure guidelines
│
├── judge-backend/                      # High-performance Python execution engine
│   ├── app.py                          # FastAPI application, CORS, JWT verification, routes
│   ├── runner.py                       # Supervisor process, thread pool, timeout watchdogs
│   ├── runner_worker.py                # Persistent worker script, stdin/stdout JSON IPC
│   ├── security.py                     # Static analysis AST scanner & sandbox import hook
│   ├── benchmark.py                    # Performance benchmarking suite
│   ├── benchmark_toggle.py             # Toggle worker pool vs sequential subprocess runs
│   ├── test_api.py                     # Backend unit and integration tests
│   ├── test_echo_input.py              # Terminal input echo harness tests
│   ├── test_runner_multi.py            # Multi-file execution test suite
│   ├── test_security.py                # AST security policy penetration tests
│   ├── verify_failures.py              # Testcase failure report verification
│   ├── add_tags_script.py              # Automated problem tag classification utility
│   ├── generate_new_problems.py        # Problem generation script
│   ├── requirements.txt                # Python runtime dependencies (FastAPI, psutil, PyJWT)
│   └── problems/                       # Catalog of 295+ challenge definitions
│       ├── two_sum.json                # Problem definition: metadata, sample/hidden test cases
│       ├── binary_search.json
│       ├── climbing_stairs.json
│       ├── invert_binary_tree.json
│       ├── median_of_three.json
│       └── ... (295+ JSON definitions)
│
└── judge-frontend/                     # Next.js 16 + React 19 + TypeScript + Tailwind v4
    ├── package.json                    # Dependencies, scripts, and Electron build configurations
    ├── tsconfig.json                   # TypeScript compiler options and path aliases (@/*)
    ├── next.config.ts                  # Next.js configuration, PWA setup, asset domains
    ├── tailwind.config.ts              # Tailwind CSS configuration
    ├── postcss.config.mjs              # PostCSS plugins (@tailwindcss/postcss)
    ├── eslint.config.mjs               # ESLint 9 configuration
    ├── main.js                         # Electron main process entrypoint
    ├── preload.js                      # Electron secure context bridge preload script
    ├── tag_problems.js                 # Frontend problem metadata synchronization utility
    ├── generate_problems.js            # Problem schema validator and builder
    │
    ├── app/                            # Next.js App Router root
    │   ├── layout.tsx                  # Root HTML shell, fonts, AppWrapper, AuthProvider
    │   ├── page.tsx                    # Landing page: hero, features, CTA, stats showcase
    │   ├── globals.css                 # Global styles, Tailwind directives, glassmorphic utilities
    │   ├── not-found.tsx               # Custom 404 page with atmospheric styling
    │   ├── manifest.ts                 # Web App Manifest generator for PWA
    │   ├── sitemap.ts                  # Search engine XML sitemap generator
    │   │
    │   ├── (abouts)/                   # Route group: Informational and marketing pages
    │   │   ├── features/               # Detailed feature catalog and capabilities breakdown
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   └── what-is-vlyxir/         # Platform philosophy, mission, and architecture overview
    │   │       ├── layout.tsx
    │   │       └── page.tsx
    │   │
    │   ├── (high_admin)/               # Route group: Super-admin governance portal
    │   │   ├── admin/                  # Administrative dashboard
    │   │   │   ├── page.tsx            # Metrics, telemetry, user management table
    │   │   │   ├── components/         # Admin components (UserManagementModal)
    │   │   │   └── modals/             # Admin modals (ConfirmPermission, CreateUser, etc.)
    │   │   └── docs-int/               # Internal developer documentation portal
    │   │       └── page.tsx
    │   │
    │   ├── (mde)/                      # Route group: Modern Design Experience
    │   │   ├── arena/                  # MDE Online Judge interface
    │   │   │   ├── page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   ├── layoutOptions.ts
    │   │   │   ├── layouts/            # ClassicLayout, GroupedSwitchLayout, StackedLayout
    │   │   │   └── modals/             # Submission result modals
    │   │   ├── duel/                   # Real-time 1v1 multiplayer coding battle
    │   │   │   └── page.tsx
    │   │   ├── forge/                  # MDE Cloud IDE with Pyodide WASM execution
    │   │   │   ├── page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   ├── layoutOptions.ts
    │   │   │   └── layouts/            # ClassicIdeLayout, WideIdeLayout
    │   │   ├── insights/               # MDE AI Code Review and complexity analyzer
    │   │   │   ├── page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── interview/              # Collaborative mock interview platform
    │   │   │   ├── page.tsx            # Interview dashboard and room code entry
    │   │   │   └── [id]/               # Active real-time collaborative interview room
    │   │   │       ├── page.tsx
    │   │   │       └── InterviewClientPage.tsx
    │   │   └── learn/                  # Interactive DSA curriculum
    │   │       ├── page.tsx            # Curriculum directory and progress tracker
    │   │       ├── layout.tsx
    │   │       ├── components/         # TopicSidebar, TopicViewer
    │   │       └── [category]/[topic]/ # Topic reader and integrated code runner
    │   │           ├── page.tsx
    │   │           └── TopicClientPage.tsx
    │   │
    │   ├── (web)/                      # Route group: Classic web views & user management
    │   │   ├── account-controls/       # GDPR data export and cascade account deletion
    │   │   ├── account-settings/       # User profile editing, avatar, username, country
    │   │   ├── code-analysis/          # Classic AI code analysis view
    │   │   ├── code-ide/               # Classic online IDE view
    │   │   ├── code-judge/             # Classic LeetCode-style judge view
    │   │   ├── community-guidelines/   # User code of conduct & forum rules
    │   │   ├── docs/                   # Public API and user documentation
    │   │   ├── download-vlyxir/        # Electron desktop application download hub
    │   │   ├── leaderboard/            # Global competitive leaderboard
    │   │   ├── login/                  # Authentication login page
    │   │   ├── meet-developer/         # Developer bio, acknowledgements, contact
    │   │   ├── policies/               # Privacy policy & terms of service
    │   │   ├── register/               # User registration page
    │   │   ├── upgrade-tiers/          # Subscription plans (Free vs. Pro Tiers 1-3)
    │   │   ├── user/[user_id]/         # Public user profile & submission statistics
    │   │   ├── your-plan/              # Current subscription tier manager
    │   │   └── your-profile/           # Redirect helper to current user profile
    │   │
    │   ├── api/                        # Next.js Serverless Edge Routes
    │   │   ├── code-analysis/          # Serverless endpoint calling Groq & Gemini APIs
    │   │   │   └── route.ts
    │   │   └── groq-test/              # Health check route for AI provider connectivity
    │   │       └── route.ts
    │   │
    │   ├── auth/                       # Auth callback routes
    │   │   └── callback/               # OAuth token exchange and session confirmation
    │   │       └── page.tsx
    │   │
    │   ├── forum/                      # Community discussion platform
    │   │   ├── page.tsx                # Forum main feed, channel filters, search
    │   │   ├── layout.tsx              # Forum layout with persistent sidebar & right panel
    │   │   ├── [forum_id]/             # Thread detail page with nested comments
    │   │   ├── drafts/                 # User draft manager with local/cloud autosave
    │   │   ├── edit-post/[post_id]/    # Post edit client page
    │   │   ├── new-post/               # Markdown post creation studio
    │   │   ├── your-content/           # User post & comment history manager
    │   │   └── forum-helper/           # Forum API utilities, profanity filter, modals
    │   │
    │   └── lib/                        # Shared client/server application libraries
    │       ├── api/                    # API client layer
    │       │   ├── admin.ts            # High-admin queries and telemetry fetchers
    │       │   ├── ai-types.ts         # TypeScript interfaces for AI responses
    │       │   ├── ai-utils.ts         # Prompt templates and markdown sanitizers
    │       │   ├── api.ts              # Core judge API client with local/remote failover
    │       │   ├── forge-limits.ts     # Forge and AI usage rate limit enforcement
    │       │   ├── gemini.ts           # Google Generative AI (Gemini 2.5 Flash) service
    │       │   ├── groq.ts             # Groq SDK (Qwen 2.5 32B) service
    │       │   ├── interview.ts        # Interview session database mutations
    │       │   └── supabase/           # Supabase client initializer
    │       │       └── client.ts
    │       ├── auth/                   # Authentication and application state
    │       │   ├── auth-context.tsx    # Multi-account session provider
    │       │   └── context.tsx         # Global UI state (theme, font, daily problem)
    │       ├── data/                   # Static curriculum datasets
    │       │   └── learnData.ts        # 1.25 MB comprehensive DSA curriculum syllabus
    │       ├── hooks/                  # Custom React hooks
    │       │   └── useInterviewRealtime.ts # Realtime WebSocket channel synchronization
    │       ├── types/                  # Global TypeScript type definitions
    │       │   ├── interview.ts        # Types for interview sessions and messages
    │       │   └── types.ts            # Types for problems, submissions, users
    │       └── utils/                  # Core utility functions
    │           ├── anime.ts            # Anime.js animation helpers
    │           ├── cache.ts            # In-memory and local storage caching engine
    │           ├── country-options.ts  # ISO country code list with emoji flags
    │           ├── editor-config.ts    # Monaco editor configuration presets
    │           ├── paths.ts            # Dynamic route resolver (Classic vs. MDE)
    │           └── storage.ts          # LocalStorage CRUD and Supabase submission sync
    │
    ├── components/                     # Reusable React component library
    │   ├── Account/                    # DeleteAccountModal
    │   ├── Auth/                       # AuthForm, LoginPrompt
    │   ├── Editor/                     # CodeEditor (Monaco), Toolbar, FileExplorer, Settings
    │   ├── General/                    # ClientLayout, NavBar, NewNavBar, ThemeToggle, DailyProblemModal
    │   ├── Interview/                  # InterviewLayout, ChatPanel, NotesPanel, VerdictSelector
    │   ├── forge/                      # PythonRunner (client-side execution)
    │   ├── forum/                      # ForumFeed, PostDetail, CommentThread, CreatePostForm
    │   ├── CountryDropdown.tsx         # Searchable country selector
    │   ├── ProblemList.tsx             # Filterable problem table
    │   ├── ProblemSelector.tsx         # Dropdown problem picker
    │   └── ProblemViewer.tsx           # Markdown problem description and testcase viewer
    │
    ├── hooks/                          # Top-level client hooks
    │   └── usePyodideWorker.ts         # Hook interfacing with Pyodide WebWorker
    ├── public/                         # Static assets, icons, hero images, worker scripts
    ├── supabase/                       # Supabase migration scripts and schemas
    │   └── migrations/                 # Versioned SQL migrations
    └── workers/                        # Web Worker scripts
        └── pyodide.worker.ts           # WebAssembly Python runtime execution thread
```

### 2.2 Tech Stack Matrix & Library Ecosystem

| Domain | Technology | Version | Purpose & Architectural Rationale |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | Next.js | `^16.1.6` | App Router architecture, Server Components, Edge API routing, Turbopack support. |
| **UI Library** | React & React DOM | `19.2.3` | Modern concurrency, Actions, `use()` hook for promise unwrapping, minimal hydration lag. |
| **Language** | TypeScript | `^5.0` | Strict type safety across frontend and backend boundaries. |
| **Styling Engine** | Tailwind CSS | `^4.0` | JIT compilation, CSS variables for dynamic theming, `@tailwindcss/postcss`. |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) | `^4.7.0` | Industry-standard VS Code engine: syntax highlighting, auto-completion, multi-cursor editing. |
| **Cloud Persistence** | Supabase JS (`@supabase/supabase-js`) | `^2.101.1` | Managed PostgreSQL database, JWT Auth, Row-Level Security, Realtime WebSockets. |
| **AI Inference (Fast)** | Groq SDK (`groq-sdk`) | `^1.1.2` | LPU hardware acceleration: sub-second time/space complexity analysis via Qwen 2.5 32B. |
| **AI Inference (Deep)** | Google GenAI (`@google/generative-ai`) | `^0.24.1` | Multimodal and deep reasoning analysis using Gemini 2.5 Flash and Gemini 2.5 Pro. |
| **Client-Side Sandbox**| Pyodide (WebAssembly) | `0.26.2` | Runs CPython 3.11 inside a dedicated Web Worker; enables offline and zero-latency execution. |
| **Animation Systems** | Framer Motion & Anime.js | `^12.27` / `^4.3` | Fluid UI state transitions, spring physics, and animated radial glow coordinates. |
| **Iconography** | Lucide React (`lucide-react`) | `^0.563.0` | Consistent, lightweight vector icon library for all UI buttons and badges. |
| **Content Moderation** | Leo Profanity (`leo-profanity`) | `^1.9.0` | Automated regex profanity filtering across forum posts and comments. |
| **Tour & Onboarding** | Driver.js (`driver.js`) | `^1.3.1` | Interactive step-by-step onboarding walkthroughs for first-time users. |
| **Desktop Packaging** | Electron & Electron Builder | `^33.4` / `^25.1`| Cross-platform native window wrapper for macOS (DMG/Universal) and Windows (NSIS). |
| **PWA Engine** | Next PWA (`@ducanh2912/next-pwa`) | `^10.2.6` | Workbox-powered service worker caching, background sync, and installability. |
| **Backend Framework** | FastAPI (Python) | `0.110+` | High-throughput asynchronous REST API, auto OpenAPI generation, Pydantic validation. |
| **Process Inspection** | `psutil` (Python) | `5.9+` | Memory usage tracking, CPU utilization metrics, and process tree termination. |
| **Token Verification**| `PyJWT` (Python) | `2.8+` | Cryptographic verification of Supabase HS256 JWT tokens inside FastAPI headers. |

### 2.3 Environment Configurations & Runtime Variables

#### Frontend Environment Variables (`judge-frontend/.env.local`)

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-id>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# AI Provider Credentials
GROQ_API_KEY=gsk_...
GOOGLE_API_KEY=AIzaSy...

# Optional External API Base URL (If remote judge is used)
NEXT_PUBLIC_BACKEND_URL=https://code-judge-6fm6.vercel.app
```

#### Backend Environment Variables (`judge-backend/.env` or system environment)

```bash
# Supabase JWT Secret for token verification
SUPABASE_JWT_SECRET=your-supabase-jwt-secret-from-dashboard

# Environment Identifier: 'development' or 'production'
ENV=development

# Allowed Origins for CORS (Comma-separated)
ALLOWED_ORIGINS=http://localhost:3000,https://vlyxir.vercel.app
```

### 2.4 Build, Test, and Packaging Pipeline

Vlyxir provides automated npm and python scripts across the lifecycle:

```bash
# Frontend Development Server
cd judge-frontend && npm run dev

# Frontend Production Build
cd judge-frontend && npm run build

# Backend API Server Launch
cd judge-backend && python app.py

# Electron Desktop Development Mode (Concurrently boots Next.js and Electron)
cd judge-frontend && npm run electron:dev

# Electron Cross-Platform Desktop Packaging
cd judge-frontend && npm run build:dmg          # macOS Apple Silicon DMG
cd judge-frontend && npm run build:dmg:universal# macOS Universal Binary
cd judge-frontend && npm run build:exe          # Windows NSIS Installer & Portable Exe

# Problem Metadata Synchronization
cd judge-frontend && npm run tag                # Syncs problem tags based on heuristics
cd judge-frontend && npm run generate-problems  # Validates JSON schemas of problem definitions
```

---

# 3. Authentication, Identity & Multi-Account Architecture

### 3.1 Architecture of `AuthContext` & `AuthProvider`

Authentication in Vlyxir is handled by a custom client-side context layer located at `judge-frontend/app/lib/auth/auth-context.tsx`. It interfaces with Supabase Auth while providing multi-account switching capabilities.

```mermaid
sequenceDiagram
    autonumber
    actor User as Developer / User
    participant AuthUI as Login / Register UI
    participant AuthContext as AuthProvider (React Context)
    participant LocalStorage as Local Storage (vlyxir_saved_accounts)
    participant Supabase as Supabase Auth (GoTrue API)
    participant Postgres as Supabase DB (profiles table)

    User->>AuthUI: Enters Credentials or OAuth Provider
    AuthUI->>Supabase: signInWithPassword() or signInWithOAuth()
    Supabase-->>AuthUI: Returns Session & JWT Access Token
    AuthUI->>AuthContext: onAuthStateChange(SIGNED_IN)
    AuthContext->>Postgres: SELECT full_name, avatar_url, username FROM profiles WHERE id = user.id
    Postgres-->>AuthContext: Returns Profile Metadata
    AuthContext->>LocalStorage: Saves account record to SavedAccount[] array
    AuthContext->>AuthContext: Sets active session, user, and dbProfile states
    AuthContext-->>User: Renders personalized dashboard & active rank
```

### 3.2 Supabase Auth Integration & Session Lifecycle

Supabase Auth provides the identity infrastructure:
- **Tokens:** Access tokens are signed JWTs with an expiration window of 3600 seconds (1 hour). Refresh tokens are managed securely in local storage and refreshed automatically by `@supabase/supabase-js`.
- **JWT Header Injection:** Whenever the frontend submits code to the FastAPI judge (`/submit` or `/run`), it extracts the current session's access token and sends it in the `Authorization: Bearer <token>` header:

```typescript
const { data: { session } } = await supabase.auth.getSession();
const token = session?.access_token;

const res = await fetch(`${baseUrl}/submit`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ problem_id: problemId, code: code, test_only: testOnly })
});
```

On the backend, FastAPI's dependency `get_current_user` decodes the token against `SUPABASE_JWT_SECRET` with HMAC-SHA256 validation:

```python
def get_current_user(authorization: Optional[str] = Header(None)):
    if not SUPABASE_JWT_SECRET:
        if os.getenv("ENV") == "production":
            raise HTTPException(status_code=500, detail="JWT secret not configured")
        return {"id": "dev-user"}

    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header missing")

    try:
        token = authorization.replace("Bearer ", "")
        payload = jwt.decode(token, SUPABASE_JWT_SECRET, algorithms=["HS256"], audience="authenticated")
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
```

### 3.3 Multi-Account Switching & Local Persistence

Vlyxir implements a multi-account manager allowing developers to switch between work, personal, and competitive pseudonyms without having to log out.

The state is maintained via the `SavedAccount` interface:

```typescript
export type SavedAccount = {
  userId: string;
  email: string;
  username: string;
  avatarUrl: string;
  provider: string;
  providers?: string[];
  session: Session;
};
```

1. **Account Registration:** When an account signs in successfully, `AuthProvider` checks the local array stored in `localStorage.getItem("vlyxir_saved_accounts")`. If the account exists, it updates the cached session and avatar; otherwise, it appends the new account.
2. **Account Switching (`switchAccount`):** Invoking `switchAccount(userId)` retrieves the target account's session and passes its refresh token to `supabase.auth.setSession(...)`. The active user identity swaps immediately, refreshing leaderboard affiliations, personal submission histories, and duel records.
3. **Account Removal (`removeAccount`):** Removes an account from the local storage cache. If the removed account was currently active, the system automatically transitions to the next available account or triggers a clean sign-out.

### 3.4 User Profiles & Role Hierarchy

Vlyxir defines three distinct authorization roles stored in the `profiles` table:

```
                  +-----------------------------------+
                  |         SUPER ADMIN (role)        |
                  | - Full telemetry access           |
                  | - User role & tier moderation     |
                  | - Quota resets & system controls  |
                  +-----------------+-----------------+
                                    |
                  +-----------------v-----------------+
                  |          PRO TIER 1 - 3           |
                  | - Multi-file IDE projects         |
                  | - Tier 1: Complexity Analysis     |
                  | - Tier 2: Refactoring Suggestions |
                  | - Tier 3: Security & Auto-Fix     |
                  | - Host collaborative interviews   |
                  +-----------------+-----------------+
                                    |
                  +-----------------v-----------------+
                  |             FREE USER             |
                  | - 295+ Problem submissions        |
                  | - 1v1 Algorithmic Duels           |
                  | - Pyodide WASM local execution    |
                  | - Community Forums & Curriculum   |
                  +-----------------------------------+
```

1. **Free User (`role: 'user'`, `plan: 'free'`):**
   - Unlimited submissions to the 295+ problem bank.
   - Unlimited local execution via Pyodide WebAssembly in Forge.
   - Unlimited participation in 1v1 coding duels and matchmaking.
   - Read and write access to community forums, drafts, and DSA curriculum.
   - Can join collaborative interview sessions as a candidate.

2. **Pro User (`role: 'user'`, `plan: 'pro'` with `user_tiers.tier` in `{1, 2, 3}`):**
   - **Tier 1:** Unlocks standard AI code analysis (Time/Space complexity, static analysis findings).
   - **Tier 2:** Unlocks multi-file IDE virtual workspaces in Forge, AI optimization suggestions, and 10 daily AI runs.
   - **Tier 3:** Unlocks hosting permissions for Collaborative Technical Interviews, security vulnerability scanning, automated code refactoring diffs, Gemini 2.5 Pro model selection, and 20 daily AI runs.

3. **Super Admin (`role: 'super'`):**
   - Unlimited access across all platform capabilities regardless of subscription status.
   - Access to the `/admin` telemetry console, user moderation, problem inventory audit, and global maintenance toggles.

### 3.5 Username Policy, Availability Validation & Regex Security

Usernames serve as unique human-readable routing identifiers (e.g., `/user/daksh` or `/forum/daksh:my-post-123456789`). To prevent URL collision, XSS attacks, and routing ambiguities, Vlyxir enforces strict format rules:

- **Format Regex:** `^[a-zA-Z0-9_]{3,20}$` (3 to 20 characters, alphanumeric and underscores only).
- **Reserved Keywords:** Usernames such as `admin`, `system`, `root`, `api`, `auth`, `login`, `register`, `vlyxir`, `leaderboard`, and `settings` are blacklisted.
- **Atomic Availability Checks:** Migration `202604061_username_availability.sql` provides a high-concurrency database function to verify username uniqueness before account registration:

```sql
CREATE OR REPLACE FUNCTION check_username_available(requested_username TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN NOT EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE LOWER(username) = LOWER(TRIM(requested_username))
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

# 4. Comprehensive Route Directory & Page Matrix

### 4.1 Route Mapping Table

Next.js 16 App Router organizes Vlyxir into route groups denoted by parentheses (which do not affect the public URL path). Below is the complete catalog of all 35+ routes:

| Route Path | Physical Directory | Route Group | Access Level | Layout Model | Primary Purpose & Features |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | Root | Public | Responsive Scroll | Hero showcase, interactive code runner preview, feature grid, live stats counter. |
| `/arena` | `app/(mde)/arena/page.tsx` | `(mde)` | Public | Viewport Locked | MDE Online Judge: Split problem description, Monaco editor, testcase runner, layout switcher. |
| `/code-judge` | `app/(web)/code-judge/page.tsx` | `(web)` | Public | Viewport Locked | Classic Online Judge: LeetCode-style problem viewer, sample/hidden test cases, submissions. |
| `/forge` | `app/(mde)/forge/page.tsx` | `(mde)` | Public / Tiered | Viewport Locked | MDE Cloud IDE: Pyodide WASM local Python execution, multi-file virtual tree, drag handles. |
| `/code-ide` | `app/(web)/code-ide/page.tsx` | `(web)` | Public | Viewport Locked | Classic Online IDE: Server-backed execution, standard input/output console, past code loader. |
| `/duel` | `app/(mde)/duel/page.tsx` | `(mde)` | Public / Auth | Viewport Locked | 1v1 Realtime Coding Battle: Matchmaking queue, 5s versus screen, live opponent progress, emotes. |
| `/interview` | `app/(mde)/interview/page.tsx` | `(mde)` | Auth Required | Responsive Scroll | Mock Interview Dashboard: Create room, join room by code, active/past session archives. |
| `/interview/[id]` | `app/(mde)/interview/[id]/page.tsx` | `(mde)` | Auth Required | Viewport Locked | Collaborative Interview Room: Synchronized Monaco editor, execution lock, notes, live chat, verdicts. |
| `/insights` | `app/(mde)/insights/page.tsx` | `(mde)` | Pro Tier 1+ | Viewport Locked | MDE AI Code Review: Multi-model (Groq/Gemini), complexity analysis, security audits, code diffs. |
| `/code-analysis`| `app/(web)/code-analysis/page.tsx` | `(web)` | Pro Tier 1+ | Viewport Locked | Classic AI Code Analysis: Simplified code review drawer, Big-O explanations, static findings. |
| `/learn` | `app/(mde)/learn/page.tsx` | `(mde)` | Public | Responsive Scroll | Interactive DSA Curriculum Directory: 16 core categories, completion progress, topic navigation. |
| `/learn/[category]/[topic]` | `app/(mde)/learn/[category]/[topic]/page.tsx` | `(mde)` | Public | Responsive Scroll | Topic Reader: KaTeX math formulas, interactive theory, code examples, jump-to-judge links. |
| `/forum` | `app/forum/page.tsx` | Root | Public | Responsive Scroll | Community Forums: Channel tabs, search, trending topics, post feed, upvote counts. |
| `/forum/[forum_id]` | `app/forum/[forum_id]/page.tsx` | Root | Public | Responsive Scroll | Forum Post View: Markdown article, embedded problem badges, nested comment threads, upvoting. |
| `/forum/new-post` | `app/forum/new-post/page.tsx` | Root | Auth Required | Responsive Scroll | Markdown Post Authoring: Split live preview, tag selector, problem linker, autosave drafts. |
| `/forum/drafts` | `app/forum/drafts/page.tsx` | Root | Auth Required | Responsive Scroll | User Drafts Manager: List unsaved posts, restore drafts to authoring studio, bulk deletion. |
| `/forum/your-content` | `app/forum/your-content/page.tsx` | Root | Auth Required | Responsive Scroll | Personal Content Studio: Manage published posts and comments, edit posts, track upvote metrics. |
| `/forum/edit-post/[post_id]` | `app/forum/edit-post/[post_id]/page.tsx` | Root | Author / Super | Responsive Scroll | Edit Post Studio: Re-open published articles, update markdown, modify problem associations. |
| `/leaderboard` | `app/(web)/leaderboard/page.tsx` | `(web)` | Public | Responsive Scroll | Global Leaderboard: +10/-5 scoring algorithm, country flags, search, instant cache hydration. |
| `/user/[user_id]` | `app/(web)/user/[user_id]/page.tsx` | `(web)` | Public | Responsive Scroll | Public User Profile: Win/loss duel record, Accuracy 2.0 percentage, submission history, code viewer. |
| `/your-profile` | `app/(web)/your-profile/page.tsx` | `(web)` | Auth Required | Redirect Helper | Resolves the authenticated user's UUID or username and redirects to `/user/[user_id]`. |
| `/account-settings` | `app/(web)/account-settings/page.tsx` | `(web)` | Auth Required | Responsive Scroll | User Profile Editor: Change avatar (Gravatar/upload), bio, country, social links, privacy toggles. |
| `/account-controls` | `app/(web)/account-controls/page.tsx` | `(web)` | Auth Required | Responsive Scroll | Account Governance: GDPR JSON data export, cascade delete account across all tables. |
| `/your-plan` | `app/(web)/your-plan/page.tsx` | `(web)` | Auth Required | Responsive Scroll | Subscription Status: Displays active tier, limits, renewal date, and feature access breakdown. |
| `/upgrade-tiers`| `app/(web)/upgrade-tiers/page.tsx` | `(web)` | Public | Responsive Scroll | Tier Comparison: Free, Pro Tier 1, Pro Tier 2, Pro Tier 3 feature matrices and pricing. |
| `/login` | `app/(web)/login/page.tsx` | `(web)` | Public (Guest) | Responsive Scroll | Authentication: Email/password login, OAuth providers (GitHub, Google), saved account quick-switch. |
| `/register` | `app/(web)/register/page.tsx` | `(web)` | Public (Guest) | Responsive Scroll | Registration: Username availability check, password strength meter, email verification. |
| `/auth/callback`| `app/auth/callback/page.tsx` | Root | Public | Responsive Scroll | OAuth Callback Handler: Exchanges OAuth code for Supabase JWT and redirects to dashboard. |
| `/admin` | `app/(high_admin)/admin/page.tsx` | `(high_admin)` | Super Admin | Viewport Locked | Governance Dashboard: System telemetry, user role/tier overrides, account bans, quota resets. |
| `/docs-int` | `app/(high_admin)/docs-int/page.tsx` | `(high_admin)` | Super Admin | Responsive Scroll | Internal Architecture Docs: Secrets management, operational runbooks, DB triggers documentation. |
| `/docs` | `app/(web)/docs/page.tsx` | `(web)` | Public | Responsive Scroll | Public Developer Documentation: Platform overview, judging criteria, problem format guide. |
| `/download-vlyxir` | `app/(web)/download-vlyxir/page.tsx` | `(web)` | Public | Responsive Scroll | Desktop Download Portal: macOS (Apple Silicon / Intel) DMG and Windows NSIS direct downloads. |
| `/features` | `app/(abouts)/features/page.tsx` | `(abouts)` | Public | Responsive Scroll | Comprehensive Features Showcase: Detailed capability cards, stack highlights, and architecture notes. |
| `/what-is-vlyxir` | `app/(abouts)/what-is-vlyxir/page.tsx` | `(abouts)` | Public | Responsive Scroll | Product Narrative: Mission statement, architectural philosophy, and comparison against legacy judges. |
| `/meet-developer` | `app/(web)/meet-developer/page.tsx` | `(web)` | Public | Responsive Scroll | Creator Profile: Developer narrative, GitHub links, tech stack choices, acknowledgments. |
| `/policies` | `app/(web)/policies/page.tsx` | `(web)` | Public | Responsive Scroll | Legal & Compliance: Privacy policy, data collection disclosures, cookie usage, terms of service. |
| `/community-guidelines` | `app/(web)/community-guidelines/page.tsx` | `(web)` | Public | Responsive Scroll | Community Standards: Forum conduct, anti-cheat policy, fair play guidelines for duels. |

### 4.2 Dynamic Routes & Parameter Handlers

Vlyxir leverages Next.js dynamic segment routing:

1. **`app/(web)/user/[user_id]/page.tsx`:**
   - Supports dual lookup formats: either a standard UUID (`8-4-4-4-12` format) or a case-insensitive username (`daksh`).
   - If a UUID is passed, it queries `profiles.id = user_id`.
   - If a username is passed, it queries `profiles.username ILIKE user_id`.

2. **`app/forum/[forum_id]/page.tsx`:**
   - Formatted as `username:slug-randomId` (e.g., `daksh:dynamic-programming-tips-482019482`).
   - Helper `parseForumId()` splits the path parameter into author username and article slug, retrieving the post record with a single indexed query.

3. **`app/(mde)/interview/[id]/page.tsx`:**
   - Represents the unique interview room UUID generated by `crypto.randomUUID()`.
   - Used as the unique topic key for the Supabase Realtime channel: `interview_${sessionId}`.

4. **`app/(mde)/learn/[category]/[topic]/page.tsx`:**
   - Encodes syllabus taxonomy (e.g., `/learn/dynamic-programming/0-1-knapsack-problem`).
   - Looks up structured lesson content in `learnData.ts` and synchronizes completion status with `user_learning_progress`.

### 4.3 Next.js Route Groups & Viewport Isolation

To deliver an app-like experience for coding workspaces while retaining standard scrolling for text-heavy documentation, Vlyxir enforces strict viewport containment:

```typescript
// Single screen viewport containment check in ClientLayout.tsx
const isSingleScreenPage = 
    isCodeJudgePath(pathname) || 
    isCodeIdePath(pathname) || 
    isCodeAnalysisPath(pathname) || 
    isForumPath(pathname) || 
    isLearnPath(pathname) || 
    isInterviewRoom;
```

When `isSingleScreenPage` is `true`, the main wrapper applies:
```css
height: 100vh;
overflow: hidden;
display: flex;
flex-direction: column;
```
This guarantees that panels, splitters, Monaco editors, and terminal consoles fill the exact physical screen dimensions without triggering browser-level scrolling or layout shifts.

### 4.4 Internal API Route Handlers

#### `/api/code-analysis` (POST)
- **Authorization:** Requires a Supabase user access token in the `Authorization: Bearer <token>` header.
- **Validation Pipeline:**
  1. Validates JWT against Supabase service client.
  2. Queries `profiles.plan` to confirm active `pro` subscription.
  3. Queries `user_tiers.tier` to identify feature gate level (Tier 1, 2, or 3).
  4. Enforces daily usage caps (`ai_usage` table).
  5. Routes payload to either `analyzeCodeWithGroq` (Qwen 2.5 32B) or `analyzeCodeWithGemini` (Gemini 2.5 Flash / Pro).
  6. Returns structured JSON containing time/space complexity, static analysis findings, security alerts, and refactored code diffs.

---

# 5. The Core Pillars of Vlyxir

---

## 5.1 Pillar I: The Online Judge Engine & Problem Solving Architecture

The Online Judge is the cornerstone of Vlyxir, engineered to provide instant, sub-millisecond execution feedback across 295+ competitive algorithmic challenges.

```
+---------------------------------------------------------------------------------------------------+
|                                  ONLINE JUDGE EXECUTION PIPELINE                                  |
+-------------------+      +--------------------+      +--------------------+      +----------------+
|  User Submits     | ---> |  API Client Ping   | ---> |  FastAPI Backend   | ---> |  JudgeWorker   |
|  Code & Problem   |      |  (Local vs Remote) |      |  JWT & Pydantic    |      |  Persistent    |
|  ID in Monaco     |      |  Failover Logic    |      |  Validation        |      |  Process Pool  |
+-------------------+      +--------------------+      +--------------------+      +----------------+
                                                                                          |
+-------------------+      +--------------------+      +--------------------+             |
|  Result Modal     | <--- |  Database Update   | <--- |  Verdict Engine    | <-----------+
|  AC / WA / TLE    |      |  Submissions &     |      |  Diff Evaluator    |
|  Duration & Diff  |      |  XP Trigger (+10)  |      |  Time Watchdog     |
+-------------------+      +--------------------+      +--------------------+
```

### 5.1.1 Problem Bank & Data Model

The catalog comprises 295+ coding challenges stored as JSON files under `judge-backend/problems/`. Each problem conforms to a strict data specification:

```json
{
  "id": "two_sum",
  "title": "Two Sum",
  "difficulty": "easy",
  "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`...",
  "input_format": "Line 1: Space-separated integers representing nums\nLine 2: Single integer target",
  "output_format": "Space-separated indices sorted in ascending order",
  "constraints": "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.",
  "judge_mode": "ALL",
  "sample_test_cases": [
    {
      "input": "2 7 11 15\n9",
      "output": "0 1"
    },
    {
      "input": "3 2 4\n6",
      "output": "1 2"
    }
  ],
  "hidden_test_cases": [
    {
      "input": "3 3\n6",
      "output": "0 1"
    },
    {
      "input": "1 5 8 11 14\n19",
      "output": "1 4"
    }
  ],
  "tags": ["Array", "Hash Table"]
}
```

#### Problem Classification & Tagging Taxonomy

Problems are tagged according to a 20-category algorithmic taxonomy defined in `TAG_RULES` (`judge-backend/app.py`):
1. **Array:** Vectors, subarrays, permutations, rotation, sorting.
2. **String:** Anagrams, palindromes, parsing, pattern matching.
3. **Hash Table:** Frequency maps, key-value lookups, hash sets.
4. **Math:** Prime factorization, combinatorics, modular arithmetic, geometry.
5. **Dynamic Programming:** Knapsack, longest common subsequence, path counting.
6. **Binary Search:** Monotonic search spaces, rotated arrays, peak finding.
7. **Sorting:** QuickSort, MergeSort, custom comparators, priority queues.
8. **Greedy:** Activity selection, interval scheduling, optimal caching.
9. **Depth-First Search (DFS):** Graph traversals, connected components, tree traversals.
10. **Breadth-First Search (BFS):** Shortest paths, level-order traversal, flood fill.
11. **Tree:** Binary trees, BST validation, lowest common ancestor (LCA), serialization.
12. **Linked List:** Pointer manipulation, cycle detection, list reversal.
13. **Two Pointers:** Sorted pair searches, partitioning, palindrome verification.
14. **Sliding Window:** Substring constraints, dynamic window expansion/contraction.
15. **Graph:** Dijkstra, Bellman-Ford, topological sort, bipartite matching.
16. **Bit Manipulation:** XOR tricks, mask operations, Hamming weight.
17. **Stack:** Monotonic stacks, parentheses validation, reverse Polish notation.
18. **Queue:** Sliding window maximum, circular queues.
19. **Backtracking:** N-Queens, Sudoku solving, subset generation, permutations.
20. **Matrix:** 2D grid traversals, matrix rotations, spiral paths.

### 5.1.2 The Execution Pipeline: Local vs. Remote Failover

Vlyxir eliminates single-point-of-failure risks through an automatic backend ping discovery mechanism implemented in `judge-frontend/app/lib/api/api.ts`.

When an execution or submission request is initiated:
1. `getBaseUrl()` executes an asynchronous fetch ping to `http://localhost:5000/` with an `AbortController` configured to a strict 1500ms timeout.
2. If the local Python judge is online, requests route directly to `http://localhost:5000` for low-latency local execution.
3. If the local endpoint fails to respond within 1500ms, the client switches to the remote production backend (`https://code-judge-6fm6.vercel.app`), ensuring uninterrupted service.

### 5.1.3 Verdict Evaluation Engine

When the judge evaluates a solution, each test case generates one of six standardized verdicts:

| Verdict Code | Full Verdict Name | Description | Failure Triggers |
| :--- | :--- | :--- | :--- |
| **AC** | **Accepted** | Solution produced the exact expected output for all test cases within resource limits. | All test cases match whitespace-normalized output. |
| **WA** | **Wrong Answer** | Output produced by user code diverged from expected output. | String mismatch after trimming trailing whitespace and blank lines. |
| **TLE** | **Time Limit Exceeded** | Code execution surpassed the hard 2-second timeout ceiling. | Infinite loops, recursion depth traps, unoptimized $O(N^2)$ / $O(2^N)$ algorithms. |
| **RE** | **Runtime Error** | Process exited with a non-zero exit code or raised an uncaught Python exception. | `ZeroDivisionError`, `IndexError`, `KeyError`, `RecursionError`, `MemoryError`. |
| **CE** | **Compilation Error** | Code failed Python AST parsing or syntax verification. | `SyntaxError`, `IndentationError`, invalid syntax tokens. |
| **SV** | **Security Violation** | Code attempted forbidden system or network operations. | Importing `os`, `sys`, `socket`, `requests`, `subprocess`, `open()`. |

#### Output Normalization Logic
To prevent false-negative verdicts caused by OS newline discrepancies (`
` vs `
`) or trailing whitespace, outputs pass through `normalize_output()` in `judge-backend/runner.py`:
```python
def normalize_output(text: str) -> str:
    if not text:
        return ""
    # Normalize Windows CRLF to standard LF, strip right-side whitespace
    lines = [line.rstrip() for line in text.replace("
", "
").split("
")]
    # Strip leading and trailing empty lines while preserving inner formatting
    while lines and not lines[0]:
        lines.pop(0)
    while lines and not lines[-1]:
        lines.pop()
    return "
".join(lines)
```

#### Hidden Test Case Obfuscation Policy
To uphold competitive integrity while giving developers actionable feedback:
- **Passed hidden test cases:** Input and expected output remain obfuscated; only the `Accepted` status and duration are returned.
- **Failed hidden test case:** The exact input that caused the break is revealed to the user alongside the actual output or error traceback, allowing debugging without exposing the entire secret test suite.

### 5.1.4 Resizable Split-Pane UI Layouts

Vlyxir provides three distinct ergonomic layouts for problem solving, configurable in `app/(mde)/arena/layoutOptions.ts`:

1. **Classic Layout (`ClassicLayout.tsx`):**
   - Left Pane (40-60% width): Problem title, difficulty badge, tags, Markdown description, sample test case accordions.
   - Right Pane (Upper): Full-height Monaco Code Editor with language selector, font scaling, and theme toggle.
   - Right Pane (Lower): Interactive test console with Run (Sample Test Cases) and Submit (Full Suite) action triggers.
   - Resizing: Drag handle with pointer-event capture and smooth flexbox proportion updates.

2. **Grouped Switch Layout (`GroupedSwitchLayout.tsx`):**
   - Tab-based modular view optimizing screen real estate for laptops and tablets.
   - Allows instant switching between "Problem Description", "Code Editor", and "Execution Results" via keyboard shortcuts (`Ctrl/Cmd + 1`, `2`, `3`).

3. **Stacked Layout (`StackedLayout.tsx`):**
   - Vertical stacking layout tailored for ultrawide monitors and portrait-oriented code review screens.

### 5.1.5 Daily Challenge Engine & +20 XP Scoring Bonus

Vlyxir features an automated daily problem scheduler running in `ClientLayout.tsx`:
1. Checks the Supabase `daily_questions` table for a record matching the current date string (`YYYY-MM-DD`).
2. If no daily challenge is registered for today, it selects a problem from the unused pool using a deterministic pseudo-random hash algorithm:
   ```typescript
   let hash = 0;
   for (let i = 0; i < todayString.length; i++) {
       hash = todayString.charCodeAt(i) + ((hash << 5) - hash);
   }
   const index = Math.abs(hash) % unusedProblems.length;
   const candidateProblem = unusedProblems[index];
   ```
3. Attempts an atomic insert into `daily_questions`. If another client wins the race condition, it recovers gracefully by querying the newly inserted record.
4. **Scoring Bonus:** Solving a regular problem awards **+10 XP** on the global leaderboard. However, if the solved problem matches today's daily challenge, `storage.ts` executes a verification trigger that awards a **+20 XP bonus** (+10 base XP + 10 daily bonus for new solves, or +20 full bonus if previously solved).
5. Dispatches a custom window event (`daily-score-updated`) to trigger immediate UI re-renders across all active navigation bars.

---

## 5.2 Pillar II: Cloud IDE, Virtual Workspace & Local Execution (Forge)

The Cloud IDE provides a dedicated software development workspace in the browser, eliminating the need to install local Python environments.

```
+---------------------------------------------------------------------------------------------------+
|                                      CLOUD IDE (FORGE) WORKSPACE                                  |
+---------------------------------------------------------------------------------------------------+
| [ File Explorer ]  |  [ Monaco Editor (main.py) ]                   | [ Pyodide WASM Runtime ]    |
| ├── main.py (*)    |  import math                                   | Status: Ready (CPython 3.11)|
| ├── utils.py       |  from utils import calculate_metrics           | Memory: Sandboxed WebWorker |
| └── data/          |                                                | Standard In: [ Interactive ]|
|     └── test.in    |  print(calculate_metrics(42))                  | Standard Out:               |
|                    |                                                | > Metric calculated: 1764.0 |
| [ + New File ]     | [ Run (Shift+Enter) ] [ Layout: Wide ] [ DL ]  | Duration: 0.003s            |
+--------------------+------------------------------------------------+-----------------------------+
```

### 5.2.1 The IDE Core: Classic (`/code-ide`) vs. Forge (`/forge`)

- **Classic Code IDE (`/code-ide`):** Routes code directly to the backend judge (`/run` endpoint) via FastAPI. It supports single-string code execution and multi-file structures sent as JSON payloads to `run_code_multi()`.
- **Forge MDE (`/forge`):** Powered by an in-browser WebAssembly Python runtime (Pyodide), providing instant execution with zero server latency and complete offline support.

### 5.2.2 Monaco Editor Integration & Configuration

The editor engine is powered by Microsoft's Monaco Editor (`@monaco-editor/react`), matching the development experience of Visual Studio Code:
- **IntelliSense & Syntax Highlighting:** Full Python 3 lexical tokenizer with semantic token coloring.
- **Keybindings:** Integrated VS Code shortcuts (`Cmd/Ctrl + Enter` to execute, `Cmd/Ctrl + S` to save, `Cmd/Ctrl + /` to toggle line comments, `Alt + Up/Down` to move lines).
- **Dynamic Configuration:** Font scaling (`appFontScale` from 0.8x to 1.4x), editor font size (12px to 24px), tab sizing (2 or 4 spaces), minimap toggling, and line number styling configured via `editor-config.ts`.
- **Theme Synchronization:** Seamlessly switches between `vs-dark`, `vs-light`, and high-contrast dark themes in tandem with the platform's global theme engine.

### 5.2.3 Multi-File Virtual Filesystem

Forge provides an in-memory virtual filesystem allowing developers to build modular multi-file Python projects.

```typescript
const [files, setFiles] = useState<Record<string, {
    name: string;
    path: string;
    content: string;
    isFolder: boolean;
}>>({
    "main.py": {
        name: "main.py",
        path: "main.py",
        content: "# Entrypoint script\nprint('Start with Vlyxir Forge!')",
        isFolder: false
    }
});
```

- **File Management:** Create files, create nested folders, rename items, and delete files with confirmation prompts.
- **Entrypoint Designation:** A designated entrypoint file (defaulting to `main.py`) acts as the root module when initiating execution.
- **Project Export:** Users can click "Download Archive" to bundle the virtual filesystem into a `.zip` archive containing the exact directory structure and source code.
- **Tier Access Gating:** Multi-file workspace capabilities require a **Pro Tier 2+** subscription or Super Admin status (`hasMultiFileAccess = role === 'super' || (plan === 'pro' && tier >= 2)`). Single-file execution is freely accessible to all registered users.

### 5.2.4 Client-Side Execution with Pyodide WebAssembly

In Forge (`/forge`), code execution is offloaded entirely to the client's browser using WebAssembly. This is orchestrated through a dedicated WebWorker (`judge-frontend/workers/pyodide.worker.ts`) and React hook (`usePyodideWorker.ts`).

```mermaid
sequenceDiagram
    autonumber
    participant UI as Forge UI (page.tsx)
    participant Hook as usePyodideWorker Hook
    participant Worker as pyodide.worker.ts (WebWorker)
    participant Pyodide as Pyodide CPython 3.11 WASM Engine

    UI->>Hook: Mounts component
    Hook->>Worker: new Worker('/workers/pyodide.worker.ts')
    Worker->>Pyodide: importScripts(cdn/pyodide.js)
    Worker->>Pyodide: loadPyodide({ stdout, stderr })
    Pyodide-->>Worker: Engine Initialized
    Worker-->>Hook: postMessage({ type: 'ready' })
    Hook-->>UI: isReady = true

    UI->>Hook: runCode(pythonSource, stdinString)
    Hook->>Worker: postMessage({ type: 'run', code, input })
    Worker->>Pyodide: sys.stdin = io.StringIO(input)
    Worker->>Pyodide: pyodide.runPythonAsync(code)
    Pyodide-->>Worker: stdout / stderr buffered output
    Worker-->>Hook: postMessage({ type: 'success', stdout, stderr, duration })
    Hook-->>UI: Sets output state & plays completion sound
```

#### Key Advantages of Pyodide WebAssembly:
1. **Zero Server Load:** Execution happens on the client's CPU, reducing backend infrastructure costs to zero for code testing.
2. **Offline Support:** Once the WASM runtime files are cached by the browser service worker, Forge can execute Python code without an active internet connection.
3. **Hardware Watchdog Termination:** If user code enters an infinite loop, the UI can immediately terminate the WebWorker (`terminatePyodide()`) without freezing the browser's main UI thread.

### 5.2.5 Forge Limits & Quota Enforcement

Execution quotas are managed by `judge-frontend/app/lib/api/forge-limits.ts`:
- **Free Plan:** Unlimited client-side Forge runs (`FORGE_FREE_LIMIT = Infinity`), zero server-side AI runs.
- **Pro Tier 1:** Unlimited Forge runs, 0 AI analysis runs.
- **Pro Tier 2:** Unlimited Forge runs, multi-file virtual workspace unlocked, 10 daily AI runs.
- **Pro Tier 3 / Super Admin:** Unlimited Forge runs, multi-file projects, 20 daily AI runs (unlimited for super admins).

---

## 5.3 Pillar III: Real-Time 1v1 Algorithmic Duels & Competitive Arena

The 1v1 Duel system (`judge-frontend/app/(mde)/duel/page.tsx`) transforms competitive programming into a synchronized, head-to-head multiplayer contest.

```
+---------------------------------------------------------------------------------------------------+
|                                  1v1 CODE DUEL BATTLE SCREEN                                      |
+---------------------------------------------------------------------------------------------------+
| YOU (Player 1)                                   | OPPONENT (Player 2)                            |
| Code: 420 chars | Line: 14                       | Progress: [=========>    ] 7/10 Passed         |
| Status: Running tests...                         | Status: Typing... (Line 18, 380 chars)         |
+--------------------------------------------------+------------------------------------------------+
| Problem: "Longest Substring Without Repeating Characters"  [ Difficulty: Medium | Time: 12:44 ]   |
| Real-Time Emotes: [ 🔥 ] [ 😎 ] [ 😮 ] [ 🤔 ] [ 👑 ] [ 🎯 ] [ 💀 ] [ 👏 ]                         |
| Question Change: [ Request New Problem ] (1/2 Votes)                                              |
+---------------------------------------------------------------------------------------------------+
```

### 5.3.1 Multiplayer State Machine

A duel progresses through five discrete lifecycle states managed by `uiState`:

```mermaid
stateDiagram-v2
    [*] --> Lobby: Open /duel or Click Challenge
    Lobby --> Searching: Enter Matchmaking Queue
    Lobby --> Versus: Direct Challenge Accepted via vlyxir-lobby
    Searching --> Versus: Opponent Matched via Supabase Presence
    Versus --> Battle: 5-Second Countdown Expires
    Battle --> Results: First Player Achieves 100% AC or Timer Expires
    Results --> Lobby: Rematch or Return to Hub
```

1. **`lobby`:** Displays the matchmaking trigger, direct challenge user selector (showing online followers and following connections), and active head-to-head records.
2. **`searching`:** Places the user in the global matchmaking pool. A Supabase Realtime channel tracks queued players using Presence heartbeats. If a compatible match is identified within 45 seconds, both clients synchronize on a generated `sessionId`.
3. **`versus`:** A high-impact 5-second countdown screen showcasing both players' avatars, handles, win/loss records, and overall duel statistics with animated vs. banners.
4. **`battle`:** The active coding competition. Both players solve the identical challenge. Live metrics synchronize via WebSockets.
5. **`results`:** Detailed outcome screen showing victory, defeat, or draw banners, duration to solve, test pass ratios, and side-by-side code diff comparisons.

### 5.3.2 Real-Time Synchronization Protocol

During the `battle` state, player progress is broadcasted over the session's Supabase Realtime channel (`duel_${sessionId}`):

```typescript
// Broadcast payload emitted on code edits and test runs
sessionChannelRef.current.send({
    type: "broadcast",
    event: "player_progress",
    payload: {
        userId: user.id,
        charCount: code.length,
        cursorLine: currentLine,
        passCount: testResults.filter(t => t.status === "Accepted").length,
        totalCount: testResults.length,
        isRunning: isExecuting
    }
});
```

The opponent's UI intercepts these broadcasts to update real-time progress bars:
- **Opponent Test Bar:** Displays how many test cases the opponent has passed (e.g., `8/10 Passed`).
- **Activity Indicators:** Displays whether the opponent is currently compiling code, typing, or idle.
- **Floating Emotes:** Triggering an emote (🔥, 😎, 😮, 🤔, 👑, 🎯, 💀, 👏) broadcasts an `emote_event` payload that renders floating animated emojis across both players' screens.

### 5.3.3 Question Change Voting Protocol

If both competitors find the randomly assigned problem unsuitable, either player can initiate a mutual question change:
1. Player A opens the Problem Reference Picker and selects a replacement challenge.
2. The system broadcasts a `question_change_request` to Player B.
3. Player B receives a modal prompt: *"Opponent requested to change problem to [Problem Title]. Accept?"*
4. If Player B accepts, the session updates `currentProblem`, clears both code editors, resets timers, and restarts the battle synchronously.

### 5.3.4 Persistence & Duel Database Tables

Completed duels are recorded in two dedicated Supabase tables (`20260531130000_duel_schema.sql`):
- **`public.duel_sessions`:** Stores `id`, `problem_id`, `creator_id`, `opponent_id`, `status` (`active`, `completed`, `abandoned`), `winner_id`, and completion timestamps.
- **`public.duel_participant_results`:** Stores individual submissions per player: `duel_id`, `user_id`, `code`, `passed`, `total`, and outcome `result` (`victory`, `defeat`, `draw`).

---

## 5.4 Pillar IV: Collaborative Technical Interview Suite

The Collaborative Interview Suite (`/interview` and `/interview/[id]`) provides an enterprise-grade environment for conducting real-time technical assessments, mock coding interviews, and pair-programming sessions.

```
+---------------------------------------------------------------------------------------------------+
|                                 COLLABORATIVE INTERVIEW ROOM                                      |
+---------------------------------------------------------------------------------------------------+
| [ Host Controls ]  | [ Shared Synchronized Editor ]                 | [ Interviewer Tabbed Dock ] |
| Room: 8f2a-...     | def solve_graph(edges, n):                     | ├── Candidate Logs (Live)   |
| Status: Active     |     # Synchronized Realtime Editor             | ├── Private Notes           |
| Execution: UNLOCKED|     adj = collections.defaultdict(list)        | ├── Rubric Scoring          |
| [ Lock Execution ] |     for u, v in edges:                         | └── Realtime Chat           |
| [ Conclude Session]|         adj[u].append(v)                       |                             |
| Verdict: [Pending] |     return len(adj)                            | Verdict: [ ACCEPT / REJECT ]|
+--------------------+------------------------------------------------+-----------------------------+
```

### 5.4.1 Host vs. Candidate Role Separation

The interview architecture establishes strict security boundaries between the session creator (**Host / Interviewer**) and the attendee (**Candidate**):

| Capability / Permission | Host / Interviewer | Candidate |
| :--- | :---: | :---: |
| Create Session Room Code | Yes (Pro Tier 3+) | No |
| Invite Link Distribution | Yes | No |
| Real-Time Collaborative Coding | Yes | Yes |
| Run / Execute Code | Yes | Conditional (Subject to Host Lock) |
| Toggle Execution Lock | Yes | No |
| View Candidate Keystroke / Action Logs | Yes (Realtime Audit) | No |
| Maintain Private Evaluation Notes | Yes (Encrypted to Host) | No |
| Issue Official Verdict (`Accepted`/`Rejected`) | Yes | No |
| In-Room Live Chat | Yes | Yes |

### 5.4.2 Session Creation, Sharing & Slot Locking

1. **Host Initialization:** A Pro Tier 3 host navigates to `/interview` and clicks "Create Session". The system executes `createInterviewSession(hostUuid)` in `judge-frontend/app/lib/api/interview.ts`, generating an atomic record in `interview_sessions`.
2. **Link Distribution:** The host shares the session URL (`https://vlyxir.vercel.app/interview/<uuid>`) or short room code with the candidate.
3. **Exclusive Slot Locking:** To prevent unauthorized third parties from interrupting an ongoing interview, `20260710000000_interview_sessions.sql` enforces an atomic participant slot lock:
   ```sql
   CREATE POLICY "Participants can join an empty session"
       ON public.interview_sessions FOR UPDATE
       USING (participant_uuid IS NULL OR auth.uid() = participant_uuid)
       WITH CHECK (auth.uid() = participant_uuid);
   ```
   Once a candidate connects, `participant_uuid` binds to their profile; subsequent connection attempts by other users are rejected immediately with a "Room Full" notification.

### 5.4.3 Real-Time Editor Synchronization (`useInterviewRealtime.ts`)

Collaboration is synchronized via a dedicated Supabase Realtime channel (`interview_${sessionId}`):

```typescript
// Broadcast code modifications to peer
const broadcastCodeChange = (newCode: string) => {
    channelRef.current?.send({
        type: 'broadcast',
        event: 'code_change',
        payload: { code: newCode, author: userId }
    });
};
```

- **Conflict Resolution:** Code updates carry an `author` identifier. When a peer receives an incoming `code_change` broadcast where `author !== currentUserId`, it updates the Monaco editor model through an operational transaction that preserves local cursor coordinates.
- **Execution Lock:** If the candidate's code enters a runaway loop or if the interviewer wants to explain a concept without interruptions, the host toggles "Execution Lock". This broadcasts an `execution_lock_toggle` event that disables the candidate's "Run" and "Submit" buttons immediately.

### 5.4.4 Candidate Action Logging & Keystroke Audit Trail

To evaluate problem-solving methodologies, Vlyxir maintains an automated timeline of the candidate's actions stored in `candidate_logs`:
- *14:02:11 — Candidate connected to session room.*
- *14:05:30 — Candidate initiated test run on Sample Case 1.*
- *14:08:45 — Code executed: Runtime Error (ZeroDivisionError on line 12).*
- *14:14:20 — Candidate modified algorithm to use Hash Map.*
- *14:18:02 — Test run passed (Sample Cases 1 & 2 Accepted).*

### 5.4.5 Private Notes, Rubric Evaluation & Verdict Conclusion

While the candidate codes, the interviewer has access to a private evaluation panel:
- **Private Markdown Notes:** Persisted exclusively for the host's user ID; invisible to candidate network requests.
- **Rubric Scoring:** Evaluates algorithmic correctness, code cleaniness, communication, and time efficiency.
- **Session Finalization (`endSession`):** The host selects an official verdict (`Accepted`, `Rejected`, or `Pending`), saves final evaluation notes, and closes the room. The candidate receives an official completion banner, and the transcript is permanently archived to the host's history.

---

# 5. The Core Pillars of Vlyxir (Continued)

---

## 5.5 Pillar V: AI Code Intelligence & Multi-Model Analysis

The AI Code Analysis engine (`/code-analysis`, `/insights`, and `/api/code-analysis`) provides automated code reviews, algorithmic complexity calculations, and security audits.

```
+---------------------------------------------------------------------------------------------------+
|                                  AI CODE ANALYSIS PIPELINE                                        |
+-------------------+      +--------------------+      +--------------------+      +----------------+
|  User Code        | ---> |  Next.js Edge API  | ---> |  Tier Verification | ---> |  Multi-Model   |
|  Submission in    |      |  /api/code-analysis|      |  DB Check (Profiles|      |  Router        |
|  Insights / IDE   |      |  Bearer Auth Token |      |  & user_tiers)     |      |  (Groq/Gemini) |
+-------------------+      +--------------------+      +--------------------+      +----------------+
                                                                                          |
+-------------------+      +--------------------+      +--------------------+             |
|  Interactive      | <--- |  Usage Tracking    | <--- |  Structured JSON   | <-----------+
|  Review Cards     |      |  ai_usage Table    |      |  Validation &      |
|  & Code Diffs     |      |  Quota Decrement   |      |  Schema Parsing    |
+-------------------+      +--------------------+      +--------------------+
```

### 5.5.1 Dual-Provider Engine Architecture

Vlyxir decouples AI inference across two industry-leading provider APIs:

1. **Groq Cloud SDK (`judge-frontend/app/lib/api/groq.ts`):**
   - Model: `qwen/qwen3-32b` or `llama-3.3-70b-versatile`.
   - Optimized for ultra-low latency response times (200ms - 500ms).
   - Serves general code complexity analysis, algorithmic summary generation, and basic bug detection.

2. **Google Gemini Generative AI SDK (`judge-frontend/app/lib/api/gemini.ts`):**
   - Model: `gemini-2.5-flash` (with failover to `gemini-2.5-pro`).
   - Leverages Gemini's structured JSON output mode (`responseSchema`) to enforce strict type compliance on responses.
   - Serves deep reasoning, multi-language refactoring, security vulnerability detection, and line-by-line diff explanations.

### 5.5.2 Tier-Gated Feature Matrix

AI analysis capabilities scale progressively based on the user's subscription tier:

```typescript
export interface CodeAnalysisResult {
    summary: string;
    complexity: {
        time: string;           // e.g. "O(N log N)"
        space: string;          // e.g. "O(N)"
        explanation: string;
    };
    staticAnalysis: {
        overview: string;
        findings: AnalysisFinding[];
    };
    suggestions: string[];
    // Unlocked in Tier 3:
    security?: {
        overview: string;
        findings: AnalysisFinding[];
    };
    improvementRoadmap?: string[];
    recommendedCode?: string;
    whatsChanged?: string;
}
```

| Capability | Free User | Pro Tier 1 | Pro Tier 2 | Pro Tier 3 / Super |
| :--- | :---: | :---: | :---: | :---: |
| Daily AI Query Quota | 0 runs | 0 runs | 10 runs / day | 20 runs / day (Unlimited for Super) |
| Algorithmic Summary | - | Yes | Yes | Yes |
| Time Complexity $O(\cdot)$ | - | Yes | Yes | Yes |
| Space Complexity $O(\cdot)$ | - | Yes | Yes | Yes |
| Static Code Findings | - | Yes | Yes | Yes |
| Optimization Suggestions | - | Limited | Complete | Complete |
| Step-by-Step Roadmap | - | - | Yes | Yes |
| Security Vulnerability Scan | - | - | - | Yes |
| Automated Refactored Code | - | - | - | Yes |
| "What Changed" Diff Breakdown | - | - | - | Yes |
| Model Selector (Gemini Pro) | - | - | - | Yes |

### 5.5.3 Structured Prompt Engineering & Schema Enforcement

To prevent hallucinated markdown or unstructured prose from breaking frontend layouts, prompts enforce JSON schema validation (`ai-utils.ts`):

```typescript
export function getAnalysisPrompt(tier: number): string {
  const baseInstructions = `You are a world-class principal software engineer and algorithms expert. Analyze the provided code with extreme precision. Output MUST be valid JSON only.`;

  if (tier >= 3) {
    return `${baseInstructions}
Include fields:
- summary: string
- complexity: { time: string, space: string, explanation: string }
- staticAnalysis: { overview: string, findings: [{ title, detail, severity: "low"|"medium"|"high"|"critical", location, suggestion }] }
- security: { overview: string, findings: [...] }
- suggestions: string[]
- improvementRoadmap: string[]
- recommendedCode: string (fully refactored, production-ready Python solution)
- whatsChanged: string (concise explanation of algorithmic changes made)
Code to analyze:
`;
  }
  // Simplified schema for Tier 1 & 2...
}
```

### 5.5.4 Analysis History & Local/Remote Persistence

Users can inspect their historical AI reviews via the Analysis Records Drawer:
- Stores the last 25 analysis records locally in `localStorage` and synchronizes with Supabase.
- Clicking any historical entry reloads the exact code snippet, time/space complexity graphs, and refactored code diffs without consuming daily AI query tokens.

---

## 5.6 Pillar VI: Interactive Data Structures & Algorithms Curriculum (Learn)

The Curriculum System (`/learn`, `/learn/[category]`, and `/learn/[category]/[topic]`) is a comprehensive computer science syllabus integrated directly with problem solving workflows.

```
+---------------------------------------------------------------------------------------------------+
|                                  INTERACTIVE CURRICULUM (LEARN)                                   |
+---------------------------------------------------------------------------------------------------+
| [ Syllabus Categories ]       | [ Topic Viewer: "Prefix Sums & Range Queries" ]                   |
| ├── Arrays & Hashing (12/12)  |                                                                   |
| ├── Two Pointers (8/8)        | Mathematical Definition:                                          |
| ├── Sliding Window (6/6)      | $$P[i] = \sum_{k=0}^{i-1} A[k], \quad 	ext{Range}(L, R) = P[R+1] - P[L]$$ |
| ├── Stack (10/10)             |                                                                   |
| ├── Binary Search (14/14)     | Interactive Python Example:                                       |
| ├── Dynamic Programming (24)  | def build_prefix_sum(nums):                                       |
| │   ├── 0/1 Knapsack          |     prefix = [0] * (len(nums) + 1)                                |
| │   └── Longest Common Subseq |     for i, n in enumerate(nums):                                  |
| └── Graphs (18/18)            |         prefix[i + 1] = prefix[i] + n                             |
|                               |     return prefix                                                 |
| [ Bookmark ] [ Mark Complete ]| [ Practice Problem: Range Sum Query (Jump to Judge) -> ]          |
+-------------------------------+-------------------------------------------------------------------+
```

### 5.6.1 Syllabus Taxonomy & Scale

The curriculum data file (`judge-frontend/app/lib/data/learnData.ts`) contains **1.25 MB** of structured educational data across 16 core domains:
1. **Arrays & Hashing:** Static arrays, dynamic arrays, hash tables, prefix sums, amortization.
2. **Two Pointers:** Inward-converging pointers, fast/slow runner pointers, partitioning.
3. **Sliding Window:** Fixed-size windows, dynamically expanding windows, auxiliary count maps.
4. **Stack & Queue:** Monotonic stacks, min/max stacks, queue implementations using stacks.
5. **Binary Search:** Discrete search spaces, finding boundaries, search by answer technique.
6. **Linked List:** Singly linked lists, doubly linked lists, cycle detection via Floyd's algorithm.
7. **Trees & Binary Search Trees:** DFS traversals (inorder, preorder, postorder), BFS level-order, LCA, tree balancing.
8. **Tries (Prefix Trees):** Character transitions, autocomplete structures, bitwise XOR tries.
9. **Heap / Priority Queue:** Binary heaps, heapify operations in $O(N)$, Top-K element tracking.
10. **Backtracking:** State-space tree pruning, subsets, combinations, permutation generation.
11. **Graphs:** Adjacency lists, BFS/DFS, topological sort (Kahn's algorithm), connected components.
12. **Advanced Graph Algorithms:** Dijkstra's shortest path, Bellman-Ford, Prim's / Kruskal's MST.
13. **Dynamic Programming (1-D):** Subproblem recurrence relations, memoization, iterative space-saving.
14. **Dynamic Programming (2-D / Grid):** Grid traversals, edit distance, 0/1 knapsack, interval DP.
15. **Greedy Algorithms:** Interval scheduling, optimal Huffman encoding, exchange arguments.
16. **Bit Manipulation & Math:** Bitwise masks, powers of two, modular arithmetic, fast exponentiation.

### 5.6.2 Educational Topic Architecture

Every topic entry in `learnData.ts` contains:
- **`title` & `slug`:** Human-readable label and URL path.
- **`difficulty`:** Beginner, Intermediate, or Advanced.
- **`theory`:** Comprehensive Markdown article explaining core principles, invariant conditions, and common edge cases.
- **`mathFormulas`:** KaTeX-rendered LaTeX mathematical definitions for recurrences and Big-O derivations.
- **`codeSnippets`:** Fully commented Python implementations demonstrating canonical patterns.
- **`relatedProblems`:** Array of problem IDs linking the theoretical concept to practical problems in the Vlyxir judge.

### 5.6.3 Persistent Progress Tracking (`user_learning_progress`)

User progress synchronizes with the database table `user_learning_progress` (`storage.ts`):
- **Completion Tracking:** Clicking "Mark as Completed" toggles `is_completed: true` in Supabase, updating category progress rings across the curriculum overview.
- **Bookmarking:** Users can bookmark complex topics to create a personalized study revision queue.

---

## 5.7 Pillar VII: Community, Discussion Forums & Social Network

The Community Platform (`/forum`) enables developers to share solutions, discuss algorithmic breakthroughs, and review code collaboratively.

```
+---------------------------------------------------------------------------------------------------+
|                                      VLYXIR COMMUNITY FORUM                                       |
+---------------------------------------------------------------------------------------------------+
| [ Channels ]        | [ Thread Feed: "General / Questions" ]              | [ Trending Topics ]   |
| ├── All Posts       |                                                     | 1. #dynamic-program   |
| ├── General         | [PIN] Optimal Subsequence Optimization in O(N log N)| 2. #two-sum           |
| ├── Algorithms      | By @daksh (Super) • 4 min read • 42 Upvotes • 18 C  | 3. #faang-interviews  |
| ├── Interview Exp   | Tags: [Algorithms] [DP] [BinarySearch]              |                       |
| └── Showcase        | Referenced: [ Problem: Longest Increasing Subseq ]  | [ Create New Post ]   |
|                     |                                                     | [ Your Drafts (2) ]   |
| [ Starred Channels ]| "Here is a complete visual breakdown of how patience| [ Your Content ]      |
|                     | sorting transforms O(N^2) DP into O(N log N)..."    |                       |
+---------------------+-----------------------------------------------------+-----------------------+
```

### 5.7.1 Channel Structure & Navigation

Forums are categorized into specialized channels:
- **General (`general`):** Platform news, software engineering career discussions, industry updates.
- **Questions (`questions`):** Algorithmic problem debugging, syntax troubleshooting, test case edge case analysis.
- **Algorithms (`algorithms`):** Theoretical deep-dives, competitive programming templates, Big-O proofs.
- **Interview Experiences (`interview-experiences`):** Real-world FAANG assessment breakdowns, system design insights.
- **Showcase (`showcase`):** User project demonstrations, custom scripts, and learning milestones.

### 5.7.2 Markdown Post Authoring & Problem Linking

The post authoring studio (`/forum/new-post`) provides a distraction-free writing environment:
- **Split Live Preview:** Left pane features raw Markdown input; right pane renders GitHub Flavored Markdown (GFM), syntax-highlighted code blocks, and KaTeX math formulas in real-time.
- **Embedded Problem Reference Badges:** Clicking "Reference Problem" opens the `ProblemReferenceModal`. Selecting a challenge embeds an interactive badge into the post:
  ```markdown
  :::problem{id="two_sum" title="Two Sum" difficulty="easy"}
  :::
  ```
  Readers can click this badge to open the problem in the Online Judge or Arena directly.
- **Estimated Read Time:** Automatically computes reading duration using word count heuristics (`Math.ceil(wordCount / 200)` minutes).

### 5.7.3 Nested Multi-Level Comment Threads

Discussions support recursive hierarchical commenting via `CommentThread.tsx`:
- Users can reply to the top-level article or post nested replies to existing comments.
- **Optimistic Interactions:** Upvoting a post or liking a comment updates UI counters immediately, followed by an asynchronous transaction to `forum_post_upvotes` or `forum_comment_likes`.

### 5.7.4 Content Moderation & Profanity Filtering

To maintain high community standards, submissions pass through an automated moderation filter powered by `leo-profanity` (`judge-frontend/app/forum/forum-helper/helper.ts`):
```typescript
export function filterProfanity(text: string): { isClean: boolean; cleanText: string } {
    const isClean = !leoProfanity.check(text);
    const cleanText = leoProfanity.clean(text);
    return { isClean, cleanText };
}
```
If an author attempts to publish a post containing flagged language, the submission is paused, and `ProfanityModal.tsx` prompts the author to sanitize their phrasing before publication.

### 5.7.5 Drafts & Auto-Save Recovery

The authoring studio features a dual-layer auto-save mechanism:
1. **LocalStorage Autosave:** Captures form state every 2 seconds to prevent data loss from accidental tab closures.
2. **Supabase Cloud Drafts:** Persists drafts to the `forum_drafts` table, allowing authors to start writing on desktop and resume later on mobile.

---

## 5.8 Pillar VIII: Gamification, Global Leaderboard & Identity

Vlyxir motivates developers through competitive ranking systems, accuracy analytics, and customizable user profiles.

### 5.8.1 Competitive Scoring Algorithm

Platform rankings are calculated dynamically based on submission outcomes:
- **Accepted Solution (AC):** **+10 Points** awarded on the first accepted solve of any problem. Subsequent submissions of the identical problem do not duplicate base points.
- **Wrong Answer / Failure (WA/TLE/RE):** **-5 Points** deducted per breaking submission, discouraging brute-force guessing and encouraging careful code verification.
- **Daily Challenge Bonus:** Solving today's featured daily problem awards an additional **+10 XP** (+20 XP total for a first-time solve).

### 5.8.2 Accuracy 2.0: First-Submission Purity Model

Standard coding platforms calculate accuracy simply as `total_passed / total_submissions`, which allows users to artificially inflate their percentage by spamming accepted submissions after failing multiple times.

Vlyxir introduces **Accuracy 2.0** (`judge-frontend/app/(web)/user/[user_id]/UserClientPage.tsx`), which measures problem-solving precision on first attempts:

```typescript
// 1. Sort all valid submissions by creation date (oldest first)
const oldestFirst = [...validSubmissions].sort((a, b) => 
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
);

// 2. Identify the very first submission made for each distinct problem
const firstSubmissionsMap = new Map();
oldestFirst.forEach(sub => {
    if (!firstSubmissionsMap.has(sub.problem_id)) {
        firstSubmissionsMap.set(sub.problem_id, sub);
    }
});

// 3. Compute accuracy strictly across first attempts
const firstSubmissions = Array.from(firstSubmissionsMap.values());
let totalAccuracyScore = 0;
firstSubmissions.forEach(sub => {
    if (sub.total > 0) {
        totalAccuracyScore += (sub.passed / sub.total);
    }
});

const calculatedAccuracy = firstSubmissions.length > 0 
    ? (totalAccuracyScore / firstSubmissions.length) * 100 
    : 0;
```

This ensures a developer's accuracy score reflects their true algorithmic intuition on unencountered problems.

### 5.8.3 Global Leaderboard & Caching Engine

The Leaderboard (`/leaderboard`) ranks the world's top coders:
- **Instant Cache Hydration:** Loads cached rankings from `cache.ts` in under 15ms upon page load, followed by an asynchronous background revalidation against Supabase.
- **Country Flags & Internationalization:** Integrates `country-options.ts` and `CountryDropdown.tsx` to display national flags alongside coder handles.
- **Privacy Controls:** Users can toggle their visibility on public leaderboards via `leaderboard_settings.is_enabled`.

### 5.8.4 Public Profile Showcase & Code Viewer

The user profile (`/user/[user_id]`) serves as a developer's competitive resume:
- **Performance Overview:** Total problems solved categorized by difficulty (Easy, Medium, Hard), global rank badge, win/loss duel ratio, and Accuracy 2.0 metric.
- **Follow System:** Users can follow other developers to track their activity and initiate direct duels.
- **Submission History & Code Viewer Modal:** Displays recent submissions with a "View Code" modal showing syntax-highlighted solutions, execution durations, and test pass counts.

### 5.8.5 Account Governance & GDPR Cascade Deletion

Vlyxir complies with data privacy and GDPR regulations via `/account-controls`:
- **JSON Data Export:** Downloads a complete archive of the user's profile, submissions, duel records, forum posts, and interview archives.
- **Cascade Deletion:** Executing account deletion systematically cleans up the user's data across all 15+ relational tables using cascading foreign key relationships before deleting the Supabase auth record.

---

## 5.9 Pillar IX: High-Admin Governance & Platform Telemetry

The Administration Portal (`/admin` and `/docs-int`) gives platform administrators complete control over platform operations.

### 5.9.1 Super-Admin Security Guardrails

Access to `/admin` is guarded by multi-layer verification:
1. Client-side layout checks verify that `user.role === 'super'`.
2. Database Row-Level Security restricts administrative mutation functions to authenticated users matching `role = 'super'`.
3. Unauthorized users are routed to a custom 404 page (`NotFound.tsx`), hiding the existence of administrative endpoints from public view.

### 5.9.2 Platform Telemetry Dashboard

The administrative console streams real-time operational metrics (`judge-frontend/app/lib/api/admin.ts`):
- **Total Users & 24h Active Users:** Tracks user growth and daily active developer sessions.
- **Total Daily Forge Runs:** Monitors client and server execution throughput.
- **AI Token Usage:** Monitors daily API token consumption across Groq and Gemini endpoints to manage operational costs.

### 5.9.3 User Management Studio

Administrators can moderate platform users through `UserManagementModal.tsx`:
- **Role Escalation:** Promote or demote users between `user`, `pro`, and `super` tiers.
- **Tier Overrides:** Manually assign user tiers (Tier 1, 2, or 3) for beta testers or enterprise partners.
- **Account Banning & Moderation:** Apply bans with recorded reasons, restricting access to public forums and competitive matchmaking.
- **Quota Resets:** Reset daily AI and Forge limits for individual users.

### 5.9.4 Problem Inventory Audit & Maintenance Mode

- **Problem Definition Auditor:** Verifies that all 295+ JSON problem files contain valid sample test cases, hidden test cases, descriptions, and tag classifications.
- **Global Maintenance Toggle:** Activating maintenance mode sets `maintenance_mode = true` in Supabase, pausing new code submissions across the platform with a helpful status banner while database updates take place.

---

## 5.10 Pillar X: High-Performance Execution Engine & Backend Infrastructure

The backend judging system (`judge-backend/`) is engineered for sub-millisecond execution, maximum concurrent throughput, and sandboxed security.

```
+---------------------------------------------------------------------------------------------------+
|                               FASTAPI & PERSISTENT WORKER ARCHITECTURE                            |
+---------------------------------------------------------------------------------------------------+
| FastAPI Server (app.py:5000)                                                                      |
| ├── POST /submit (JWT Authenticated, CORS Restricted)                                             |
| └── POST /run    (Single & Multi-File Execution)                                                  |
+---------------------------------------------------------------------------------------------------+
                                       |
                                       v
| Runner Supervisor (runner.py)                                                                     |
| ├── Static AST Security Validator (security.py)                                                  |
| ├── Worker Pool Manager: Persistent Python Subprocess Pool                                        |
| └── ThreadPoolExecutor: Concurrent Test Case Dispatcher                                           |
+---------------------------------------------------------------------------------------------------+
             |                                                 |
             v                                                 v
| Worker Process 1 (runner_worker.py)             | Worker Process N (runner_worker.py)             |
| ├── Stdin: {"type":"init","code":"..."}         | ├── Stdin: {"type":"init","code":"..."}         |
| ├── CPython compile() Bytecode in Memory        | ├── CPython compile() Bytecode in Memory        |
| ├── Memory Limit: RLIMIT_AS (128 MB)            | ├── Memory Limit: RLIMIT_AS (128 MB)            |
| ├── Stdin: {"type":"run","input":"...","id":1}  | ├── Stdin: {"type":"run","input":"...","id":2}  |
| └── Stdout: {"status":"done","output":"..."}    | └── Stdout: {"status":"done","output":"..."}    |
+-------------------------------------------------+-------------------------------------------------+
```

### 5.10.1 Eliminating Subprocess Overhead with Persistent Workers

In legacy judges, evaluating 100 test cases requires spawning 100 separate Python interpreter processes (`subprocess.run(["python", ...])`). On modern operating systems, spawning a Python process takes 30ms to 80ms. For 100 test cases, process initialization alone introduces 3 to 8 seconds of overhead.

Vlyxir solves this via the **Persistent JudgeWorker Pool** (`runner.py` & `runner_worker.py`):
1. The supervisor launches long-running worker processes running `runner_worker.py`.
2. The worker receives an initialization payload over standard input: `{"type": "init", "code": "<user_code>"}`.
3. The worker compiles the code into bytecode in memory using Python's built-in `compile(code, "<string>", "exec")`.
4. For each test case, the supervisor sends an execution request over standard input: `{"type": "run", "input": "<tc_input>", "id": <index>}`.
5. The worker executes the compiled bytecode against fresh global namespaces (`get_safe_globals()`), captures standard output and standard error using `io.StringIO`, and returns execution results over standard output:
   `{"status": "done", "id": 1, "output": "...", "duration": 0.001}`
6. **Performance Result:** Individual test case execution times drop from ~50ms to **0.001s (sub-millisecond)**, delivering 50x faster judging turnaround.

### 5.10.2 Sandboxing & AST Security Guardrails (`security.py`)

To prevent arbitrary code execution, file tampering, or denial-of-service attacks on judge infrastructure, submissions pass through two layers of security:

1. **Static Analysis AST Scanner:**
   Before compilation, the code is scanned against restricted keywords and dangerous modules using regular expressions and AST tokenizers:
   ```python
   RESTRICTED_KEYWORDS = [
       r'import\s+(socket|http|urllib|requests|ftplib|telnetlib|smtplib|asyncio|os|subprocess|sys|inspect|pdb|posix|pwd)',
       r'from\s+(socket|http|urllib|requests|ftplib|telnetlib|smtplib|asyncio|os|subprocess|sys|inspect|pdb|posix|pwd)',
       r'__import__', r'getattr', r'setattr', r'delattr',
       r'exec\s*\(', r'eval\s*\(', r'open\s*\(',
       r'os\.(system|popen|spawn|exec|posix_spawn)',
       r'subprocess\.(run|Popen|call|check_call|check_output)'
   ]
   ```
   If any blacklisted pattern is detected, execution is aborted immediately with a `Security Violation` verdict.

2. **Restricted Runtime Globals:**
   Dangerous built-ins (`open`, `eval`, `exec`, `compile`, `getattr`, `setattr`, `input`, `breakpoint`) are stripped from the execution namespace, and `__import__` is overridden with a restricted hook (`restricted_import`) that raises an `ImportError` on any forbidden module.

3. **Operating System Resource Limits (`RLIMIT_AS`):**
   On Unix environments, workers invoke `resource.setrlimit(resource.RLIMIT_AS, (mem_limit, mem_limit))` to enforce a strict **128 MB virtual memory ceiling**. Any solution exceeding this threshold triggers a `MemoryError` and is flagged as a Runtime Error.

4. **Hard 2-Second Timeout Watchdogs:**
   The supervisor wraps each test case in a `ThreadPoolExecutor` watchdog. If execution exceeds **2.0 seconds**, the worker is terminated and a `Time Limit Exceeded` (TLE) verdict is emitted.

---

# 6. Frontend Component Catalog & UI Library

The Vlyxir frontend features over 45 modular React components organized by feature domain under `judge-frontend/components/`:

### 6.1 General & Shell Components

- **`ClientLayout.tsx`:** The root layout coordinator. Manages global navigation, dynamic background gradients, incoming 1v1 duel invite modals, daily challenge popups, and desktop title bars.
- **`NavBar.tsx` / `NewNavBar.tsx`:** The primary navigation headers. `NavBar` provides classic horizontal navigation, while `NewNavBar` renders modern pill-shaped menus with profile dropdowns, XP badges, and theme switches.
- **`NavDropdown.tsx` / `NewNavDropdown.tsx`:** Dropdown menu displaying user handles, active subscription plan, profile links, theme toggles, and account switcher triggers.
- **`TitleBar.tsx`:** Custom macOS/Windows window title bar rendered when running inside the Electron desktop wrapper, supporting drag regions and native window minimize, maximize, and close buttons.
- **`DailyProblemModal.tsx`:** Modal showcasing the featured daily challenge, difficulty badge, XP reward indicator, and direct solve button.
- **`FilterModal.tsx`:** Search and filter modal for the problem bank, supporting filtering by difficulty, tag classification, and solved/unsolved status.
- **`SettingsModal.tsx`:** Comprehensive preferences modal controlling font scales, editor font sizes, reduced motion, hardware acceleration, and classic vs. MDE UI switches.
- **`SubmissionsModal.tsx`:** Global submission drawer displaying the user's past 50 submissions across all problems.
- **`ThemeToggle.tsx` / `ThemeScript.tsx`:** Controls theme switching (light, dark, system). `ThemeScript` injects inline JavaScript in the HTML `<head>` to prevent theme flickering during initial server-side hydration.
- **`TourGuide.tsx`:** Onboarding overlay powered by Driver.js that highlights core features for first-time visitors.
- **`LoadingOverlay.tsx`:** Full-screen translucent blur overlay with animated spinners displayed during auth state hydration and route transitions.

### 6.2 Editor & Development Components

- **`CodeEditor.tsx`:** Core Monaco editor wrapper. Handles syntax highlighting, keybinding intercepts, cursor tracking, and operational text replacements.
- **`Toolbar.tsx`:** Top action bar for the editor containing language selectors, run/submit buttons, layout switches, font controls, and reset buttons.
- **`FileExplorer.tsx`:** Virtual multi-file directory tree for the Forge IDE, supporting file creation, folder nesting, renaming, deletion, and active tab management.
- **`LanguageSelector.tsx`:** Dropdown selector for programming languages (Python 3, with roadmap support for C++, Java, and Rust).
- **`PastSubmissions.tsx`:** Problem-specific submission drawer allowing developers to review past attempts and load historical code into the active editor.
- **`Settings.tsx`:** Editor-specific settings drawer controlling tab sizes (2 vs 4 spaces), minimap toggles, word wrapping, and font scales.
- **`MobileResultPanel.tsx`:** Adaptive slide-up drawer for mobile screens displaying terminal stdout, stderr, and testcase pass/fail tabs.

### 6.3 Interview & Collaboration Components

- **`InterviewLayout.tsx`:** Split layout orchestrator for collaborative interview rooms. Coordinates editor panes, chat panels, candidate logs, and private notes.
- **`ChatPanel.tsx`:** Real-time in-session chat box supporting timestamps, auto-scrolling, and instant broadcast delivery.
- **`NotesPanel.tsx`:** Private Markdown evaluation notebook for the host/interviewer with auto-saving notes and candidate rubric scoring.
- **`VerdictSelector.tsx`:** Interactive decision modal allowing the interviewer to conclude a session with an official verdict (`Accepted` / `Rejected`).
- **`WaitingRoom.tsx`:** Candidate holding room displaying host profile cards, room readiness indicators, and audio/video permission checks.

### 6.4 Forum & Community Components

- **`ForumFeed.tsx`:** Filterable post feed supporting tabbed channel sorting (All Posts, Hot, New, Top), search queries, and pagination.
- **`ForumPostCard.tsx`:** Article card displaying author avatar, username, publication timestamp, tags, estimated read time, upvote counter, and comment count.
- **`PostDetail.tsx`:** Full-width article viewer rendering GitHub Flavored Markdown, syntax-highlighted code blocks, and embedded problem badges.
- **`CommentSection.tsx` / `CommentThread.tsx`:** Recursive comment system supporting nested replies, optimistic upvotes, and author badges.
- **`CreatePostForm.tsx`:** Markdown editor with split live preview, channel assignment, tag selectors, and auto-save draft hooks.
- **`ProblemReferenceModal.tsx`:** Modal allowing authors to search the 295+ problem bank and embed interactive challenge links into forum posts.
- **`ForumSidebar.tsx` / `ForumRightPanel.tsx`:** Persistent channel navigation menu and trending topics sidebar.
- **`DeleteConfirmationModal.tsx`:** Confirmation modal preventing accidental post or comment deletions.

### 6.5 Auth & Modal Components

- **`AuthForm.tsx`:** Unified login and registration form supporting email/password authentication, password strength meters, and OAuth providers.
- **`LoginPrompt.tsx`:** Non-intrusive modal prompting guest users to authenticate when attempting to submit solutions or join duels.
- **`DeleteAccountModal.tsx`:** Double-confirmation modal requiring users to type their username before triggering GDPR cascade account deletion.
- **`CountryDropdown.tsx`:** Searchable dropdown selector displaying ISO country codes and national emoji flags.

---

# 7. Frontend State Management, Contexts, Hooks & Utilities

### 7.1 `AppContext` & Theming Engine

`AppContext` (`judge-frontend/app/lib/auth/context.tsx`) provides the primary UI state bus for Vlyxir:

```typescript
interface AppContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSubmissionsModalOpen: boolean;
  setIsSubmissionsModalOpen: (isOpen: boolean) => void;
  isDark: boolean;
  themeMode: ThemeMode; // "light" | "dark" | "system"
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  appFontScale: number;
  setAppFontScale: (scale: number) => void;
  editorFontSize: number;
  setEditorFontSize: (size: number) => void;
  reduceMotion: boolean;
  setReduceMotion: (enabled: boolean) => void;
  hardwareAcceleratedThemeAnimations: boolean;
  setHardwareAcceleratedThemeAnimations: (enabled: boolean) => void;
  autoHideMobilePills: boolean;
  setAutoHideMobilePills: (enabled: boolean) => void;
  useNewUi: boolean; // Classic vs MDE switch
  setUseNewUi: (enabled: boolean) => void;
  dailyProblemEnabled: boolean;
  setDailyProblemEnabled: (enabled: boolean) => void;
  dailyProblem: any | null;
  dailyProblemSolved: boolean;
  codeJudgePath: string;
  codeIdePath: string;
  codeAnalysisPath: string;
  resetUiSettings: () => void;
}
```

#### View Transitions API Integration
When toggling between dark and light modes, `AppContext` checks for native browser View Transitions support (`document.startViewTransition`). If available and `hardwareAcceleratedThemeAnimations` is active, it animates a circular radial theme expansion originating from the user's toggle coordinates.

### 7.2 Custom Hooks

#### `usePyodideWorker` (`judge-frontend/hooks/usePyodideWorker.ts`)
Manages communication with the WebWorker running CPython 3.11:
- Automatically initializes `pyodide.worker.ts` on component mount.
- Provides `runCode(code, input)` which sends execution payloads to the worker and returns a Promise resolving with `{ stdout, stderr, status, duration }`.
- Provides `terminate()` to terminate and restart the WebWorker thread if user code hangs in an infinite loop.

#### `useInterviewRealtime` (`judge-frontend/app/lib/hooks/useInterviewRealtime.ts`)
Encapsulates Supabase Realtime WebSocket communication for collaborative interview rooms:
- Manages channel subscription: `supabase.channel("interview_" + sessionId)`.
- Tracks participant presence heartbeats (online/offline status of host and candidate).
- Broadcasts code changes, execution lock states, terminal stdout updates, chat messages, and candidate timeline logs.

### 7.3 Client-Side Caching & LocalStorage Layer

Vlyxir implements client-side caching utilities to ensure fast page loads:
- **Problem Bank Cache (`cache.ts`):** Stores problem lists and individual problem descriptions in memory and `localStorage`. When a user navigates to `/arena` or `/code-judge`, cached problem data loads immediately while an asynchronous fetch refreshes the cache in the background.
- **Leaderboard Cache (`cache.ts`):** Caches the top 50 leaderboard users and global score statistics, reducing database queries on frequent leaderboard views.
- **Submission Sync (`storage.ts`):** Caches user submissions locally and synchronizes them with Supabase when network connectivity is available.

---

# 8. Database Schema, Data Dictionary & Row Level Security (RLS)

Vlyxir uses Supabase (PostgreSQL 15) with Row-Level Security (RLS) enabled across all public tables. Below are the complete schema definitions and security policies:

```mermaid
erDiagram
    PROFILES ||--o{ SUBMISSIONS : submits
    PROFILES ||--o{ FOLLOWS : follows
    PROFILES ||--o{ DUEL_SESSIONS : creates
    PROFILES ||--o{ INTERVIEW_SESSIONS : hosts
    PROFILES ||--o{ FORUM_POSTS : writes
    PROFILES ||--o{ FORUM_COMMENTS : comments
    PROFILES ||--o| USER_TIERS : has
    PROFILES ||--o| LEADERBOARD_SETTINGS : configures
    DUEL_SESSIONS ||--o{ DUEL_PARTICIPANTS : contains
    FORUM_POSTS ||--o{ FORUM_COMMENTS : contains
    FORUM_POSTS ||--o{ FORUM_UPVOTES : receives
```

### 8.1 Complete SQL Table Definitions

```sql
-- 1. PROFILES TABLE (Core Identity)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(50) UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    country VARCHAR(10),
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'super')),
    plan VARCHAR(20) DEFAULT 'free' CHECK (plan IN ('free', 'pro')),
    total_score INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. USER_TIERS TABLE (Subscription Sub-Tiers)
CREATE TABLE public.user_tiers (
    user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    tier INTEGER DEFAULT 1 CHECK (tier IN (1, 2, 3)),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. SUBMISSIONS TABLE (Judge History)
CREATE TABLE public.submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    problem_id VARCHAR(255) NOT NULL,
    problem_title TEXT NOT NULL,
    code TEXT NOT NULL,
    final_status VARCHAR(50) NOT NULL,
    passed INTEGER NOT NULL DEFAULT 0,
    total INTEGER NOT NULL DEFAULT 0,
    total_duration NUMERIC DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. DAILY_QUESTIONS TABLE (Daily Scheduler)
CREATE TABLE public.daily_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    problem_id VARCHAR(255) NOT NULL UNIQUE,
    date DATE NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. FOLLOWS TABLE (Social Graph)
CREATE TABLE public.follows (
    follower_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    following_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    PRIMARY KEY (follower_id, following_id),
    CONSTRAINT no_self_follow CHECK (follower_id <> following_id)
);

-- 6. DUEL_SESSIONS TABLE (Multiplayer Battles)
CREATE TABLE public.duel_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    problem_id VARCHAR NOT NULL,
    creator_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    opponent_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    status VARCHAR DEFAULT 'active' CHECK (status IN ('active', 'completed', 'abandoned')),
    winner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- 7. DUEL_PARTICIPANT_RESULTS TABLE (Duel Submissions)
CREATE TABLE public.duel_participant_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    duel_id UUID REFERENCES public.duel_sessions(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    code TEXT NOT NULL,
    passed INTEGER NOT NULL DEFAULT 0,
    total INTEGER NOT NULL DEFAULT 0,
    result VARCHAR NOT NULL CHECK (result IN ('victory', 'defeat', 'draw')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. INTERVIEW_SESSIONS TABLE (Mock Interviews)
CREATE TYPE interview_verdict AS ENUM ('Accepted', 'Rejected', 'Pending');
CREATE TYPE interview_status AS ENUM ('Waiting', 'Active', 'Completed');

CREATE TABLE public.interview_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_uuid UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    participant_uuid UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    verdict interview_verdict DEFAULT 'Pending'::interview_verdict,
    interviewer_notes TEXT,
    candidate_logs JSONB DEFAULT '[]'::jsonb,
    status interview_status DEFAULT 'Waiting'::interview_status,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. FORUM_CHANNELS TABLE
CREATE TABLE public.forum_channels (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    is_starred BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. FORUM_POSTS TABLE
CREATE TABLE public.forum_posts (
    id TEXT PRIMARY KEY,
    channel_id TEXT REFERENCES public.forum_channels(id) ON DELETE SET NULL,
    author_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    cover_image TEXT,
    tags TEXT[] DEFAULT '{}',
    referenced_problem_id TEXT,
    upvotes INTEGER DEFAULT 0,
    read_time_minutes INTEGER DEFAULT 1,
    is_pinned BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. FORUM_COMMENTS TABLE
CREATE TABLE public.forum_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id TEXT NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    body TEXT NOT NULL,
    parent_id UUID REFERENCES public.forum_comments(id) ON DELETE CASCADE,
    likes_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. USER_LEARNING_PROGRESS TABLE (Curriculum)
CREATE TABLE public.user_learning_progress (
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT false,
    is_bookmarked BOOLEAN DEFAULT false,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    PRIMARY KEY (user_id, topic_id)
);
```

### 8.2 Row-Level Security (RLS) Policy Specifications

To secure user data across multi-tenant environments, RLS policies enforce read/write constraints:

```sql
-- PROFILES RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile (no plan changes)" ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (plan = (SELECT plan FROM public.profiles WHERE id = auth.uid()));

-- SUBMISSIONS RLS
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Submissions viewable by everyone" ON public.submissions FOR SELECT USING (true);
CREATE POLICY "Users can insert own submissions" ON public.submissions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own submissions" ON public.submissions FOR DELETE USING (auth.uid() = user_id);

-- FOLLOWS RLS
ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view follows" ON public.follows FOR SELECT USING (true);
CREATE POLICY "Users can follow others" ON public.follows FOR INSERT WITH CHECK (auth.uid() = follower_id);
CREATE POLICY "Users can unfollow others" ON public.follows FOR DELETE USING (auth.uid() = follower_id);

-- INTERVIEW SESSIONS RLS
ALTER TABLE public.interview_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view sessions" ON public.interview_sessions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Hosts can create sessions" ON public.interview_sessions FOR INSERT WITH CHECK (auth.uid() = host_uuid);
CREATE POLICY "Hosts can update their sessions" ON public.interview_sessions FOR UPDATE USING (auth.uid() = host_uuid);
CREATE POLICY "Participants can join empty session" ON public.interview_sessions FOR UPDATE
    USING (participant_uuid IS NULL OR auth.uid() = participant_uuid)
    WITH CHECK (auth.uid() = participant_uuid);
```

---

# 9. The Design System: Modern Design Experience (MDE)

The Modern Design Experience (MDE) is Vlyxir's signature design system, engineered to provide a high-immersion developer experience.

### 9.1 Glassmorphism & Atmospheric Lighting

MDE pairs dark backdrops with translucent layers and dynamic radial lighting:
- **Base Background:** Deep slate `#0B0C15` in dark mode, clean `#F8FAFC` in light mode.
- **Translucent Glass Panels:** `backdrop-blur-2xl` coupled with semi-transparent border lines (`border-slate-800/80` or `border-white/10`) creating floating surfaces with depth.
- **Ambient Radial Gradients:** Multi-layered background lighting effects:
  ```css
  background: radial-gradient(circle at top, rgba(99, 102, 241, 0.15), transparent 45%),
              linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(11, 12, 21, 0.98));
  ```

### 9.2 Tailwind CSS v4 Configuration

Vlyxir uses Tailwind CSS v4 via `@tailwindcss/postcss`. Design tokens are managed through native CSS custom properties:

```css
@theme {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --color-brand-indigo: #6366f1;
  --color-brand-purple: #a855f7;
  --color-brand-cyan: #06b6d4;
  --color-surface-dark: #0B0C15;
  --color-surface-panel: rgba(15, 23, 42, 0.85);
}
```

### 9.3 Animation Orchestration: Framer Motion & Anime.js

- **Framer Motion (`framer-motion`):** Orchestrates component layout transitions, spring-physics modals, and list stagger animations.
- **Anime.js (`animejs`):** Drives continuous particle glows, radial border light rotations, and numerical stats counter interpolations.

### 9.4 Viewport Locking & Mobile Adaptive Drawers

- **Desktop Experience:** Core workspaces (`/arena`, `/forge`, `/insights`, `/duel`, `/interview/[id]`) enforce `h-screen overflow-hidden`. Internal elements manage their own overflow scrolling, ensuring toolbar buttons and action menus remain accessible without browser page scrolling.
- **Mobile Experience:** On screens under 1024px, split panels transform into a tabbed drawer interface. Floating pill menus auto-hide when scrolling down to maximize vertical code editing space.

---

# 10. Installation, Deployment & DevOps Runbook

### 10.1 Local Development Environment Setup

#### Prerequisites
- **Node.js:** `v18.17.0` or later (`v20.x` recommended)
- **Python:** `v3.10` or later
- **Package Managers:** `npm` (v9+) and `pip` (v23+)

#### Step 1: Clone the Repository
```bash
git clone https://github.com/DakshSingh-GitHub/Vlyxir.git
cd Vlyxir
```

#### Step 2: Configure Backend Service
```bash
cd judge-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scriptsctivate
pip install -r requirements.txt

# Start FastAPI server on port 5000
python app.py
```
*Verify: Navigate to `http://localhost:5000/`. You should receive `{"message": "Hello from FastAPI on Vercel!"}`.*

#### Step 3: Configure Frontend Application
```bash
cd ../judge-frontend
npm install

# Create local environment configuration
cp .env.example .env.local
# (Edit .env.local with your Supabase, Groq, and Google Gemini credentials)

# Start Next.js development server
npm run dev
```
*Verify: Open `http://localhost:3000` to access the Vlyxir platform.*

### 10.2 Production Deployment (Vercel & Cloud VPS)

#### Frontend Deployment (Vercel)
1. Import the repository into the Vercel Dashboard and select `judge-frontend` as the root directory.
2. In Project Settings, configure the Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `GROQ_API_KEY`
   - `GOOGLE_API_KEY`
3. Set the Framework Preset to **Next.js**. Deploy.

#### Backend Deployment (Cloud VPS / Docker)
Deploy the FastAPI backend to any cloud instance (e.g., AWS EC2, DigitalOcean, Railway) using Docker:

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY judge-backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY judge-backend/ .
EXPOSE 5000
CMD ["uvicorn", "app.py:app", "--host", "0.0.0.0", "--port", "5000", "--workers", "4"]
```

### 10.3 Electron Desktop Compilation

To compile native standalone desktop binaries:

```bash
cd judge-frontend

# 1. macOS Apple Silicon DMG
npm run build:dmg

# 2. macOS Universal Binary (Intel + Apple Silicon)
npm run build:dmg:universal

# 3. Windows Portable Executable & NSIS Installer
npm run build:exe
```
Compiled installation binaries are placed in `judge-frontend/dist/`.

### 10.4 Supabase Setup & Migration Runbook

To configure a new Supabase project:
1. Create a new Supabase project in your organization dashboard.
2. Navigate to **Project Settings > API** and copy the Project URL, Anon Key, and Service Role Key.
3. Open the **SQL Editor** in the Supabase Dashboard.
4. Execute the migration scripts located in `judge-frontend/supabase/migrations/` in chronological order:
   - `202604061_username_availability.sql`
   - `20260410105500_secure_profiles_plan.sql`
   - `20260418105501_public_profiles.sql`
   - `20260418112000_public_submissions.sql`
   - `20260531120000_follows.sql`
   - `20260531130000_duel_schema.sql`
   - `20260531140000_duel_participants.sql`
   - `20260620000000_daily_questions.sql`
   - `20260710000000_interview_sessions.sql`

### 10.5 Troubleshooting, Common Pitfalls & Operational FAQ

| Issue / Symptom | Root Cause | Resolution |
| :--- | :--- | :--- |
| **"Local backend not found, falling back to remote"** | The FastAPI backend is not running on `localhost:5000` or is blocked by a firewall. | Run `cd judge-backend && python app.py` and verify `http://localhost:5000/` responds. |
| **"Pro subscription required (403)" on Code Analysis** | The user's profile in Supabase has `plan = 'free'` or missing `user_tiers` row. | Upgrade the plan via `/upgrade-tiers` or update `profiles.plan = 'pro'` in Supabase. |
| **Pyodide WebWorker fails to load in Forge** | Cross-Origin-Embedder-Policy (COEP) or CDN block on pyodide scripts. | Check browser console network tab; verify `public/workers/pyodide.worker.ts` is served correctly. |
| **Multiplayer Duel shows "Matchmaking Timeout"** | No other players are currently active in the matchmaking queue. | Open two browser windows (or an incognito session) with different accounts to test dueling. |
| **Interview room shows "Failed to join session"** | The candidate slot is already occupied by another participant. | Check `interview_sessions.participant_uuid`. Create a fresh session code from `/interview`. |
| **Monaco Editor appears blank on mobile** | Mobile viewport height calculation discrepancy. | Clear mobile cache; verify browser supports CSS `100dvh` and WebAssembly. |

---

## 11. Appendix: Complete Problem Catalog Index (Sample Listing)

Vlyxir includes 295+ competitive algorithmic challenges. Below is a representative cross-section across core categories:

| Problem ID | Title | Difficulty | Primary Tag | Sample Input | Expected Output |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `two_sum` | Two Sum | Easy | Array, Hash Table | `2 7 11 15
9` | `0 1` |
| `binary_search` | Binary Search | Easy | Binary Search | `1 2 3 4 5
4` | `3` |
| `climbing_stairs` | Climbing Stairs | Easy | Dynamic Programming | `3` | `3` |
| `invert_binary_tree` | Invert Binary Tree | Easy | Tree | `4 2 7 1 3 6 9` | `4 7 2 9 6 3 1` |
| `longest_substring` | Longest Substring Without Repeating | Medium | Sliding Window | `abcabcbb` | `3` |
| `coin_change` | Coin Change | Medium | Dynamic Programming | `1 2 5
11` | `3` |
| `koko_eating_bananas`| Koko Eating Bananas | Medium | Binary Search | `3 6 7 11
8` | `4` |
| `trapping_rain_water`| Trapping Rain Water | Hard | Two Pointers, Stack | `0 1 0 2 1 0 1 3 2 1 2 1` | `6` |
| `median_two_arrays` | Median of Two Sorted Arrays | Hard | Binary Search, Array | `1 3
2` | `2.0` |
| `edit_distance` | Edit Distance | Hard | Dynamic Programming | `horse
ros` | `3` |

---

*Made with ❤️ for the global software engineering community. For inquiries, contributions, or security disclosures, contact `daksh.singh.2407@gmail.com`.*
