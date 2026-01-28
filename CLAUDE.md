# AI Product Engineer Learning Agent

> Project context for Claude Code sessions

---

## Project Overview

**Purpose:** TypeScript-first AI agent learning platform

**Vision:** Accelerated transition to AI Product Engineer (Agent Pipeline Specialist) by leveraging existing TypeScript expertise.

**Core Concept:** Meta-learning - building AI agents in TypeScript to learn AI engineering. Fast-track agent development, defer infrastructure.

**Current Status:** Week 0 - TypeScript + AI SDK Setup

**Learning Progression:**

- Week 0: TypeScript + AI SDK Setup ◄─ **CURRENT**
- Phase 1-5: AI Agent Development (13 weeks)
- Phase 5b: Infrastructure Learning (optional)

---

## User Context

### Learning Approach

**Current User Context:**

- Strong TypeScript/React background (4+ years at VNTG & Bold9)
- Currently working on AI-powered code generation at VNTG
- Existing sdd-system project (9-agent TypeScript architecture)
- 3-month timeline (13 weeks core learning)
- Target: Agent Pipeline Specialist career positioning

**Personalization:**

- User profile in `docs/user/PROFILE.md` (gitignored)
- TypeScript-first approach (skip Python learning curve)
- Reference sdd-system patterns when applicable
- VNTG work synergy with personal project

### Learning Preferences

- Practical, hands-on TypeScript development
- Agent orchestration patterns focus
- Production-ready from day 1
- Real-world application over theory
- Quantifiable results and metrics

---

## Target Technology Stack

**Core Stack (TypeScript):**

- **Language:** TypeScript 5+ / Node.js 20+
- **AI SDK:** Anthropic SDK (`@anthropic-ai/sdk`)
- **Validation:** Zod (replaces Pydantic)
- **Vector DB:** Supabase Vector
- **Monitoring:** LangSmith (replaces LGTM Stack initially)
- **Orchestration:** Custom (inspired by sdd-system) + LangGraph.js (optional)
- **CLI:** Commander.js
- **Testing:** Vitest
- **Deployment:** Vercel (serverless functions)

**Why TypeScript-First:**

- Leverage existing 4+ years TypeScript expertise
- Faster learning curve → focus on agent concepts
- VNTG work experience directly applicable
- sdd-system patterns can be referenced
- 3-month timeline (vs 6 months with Python)

**Infrastructure (Optional Phase 5b):**

- Docker & Kubernetes (defer to weeks 14-17)
- Grafana LGTM Stack (learn when deploying)
- OpenTelemetry (advanced monitoring)

---

## Current Phase: Week 0 (TypeScript + AI SDK Setup)

### Goals

**Setup TypeScript Project:**

- Initialize TypeScript + Node.js project
- Install Anthropic SDK and dependencies
- Configure tsconfig.json
- Setup environment variables
- Run first "Hello Claude" script

**Quick Start:**

- TypeScript knowledge (already have ✅)
- Node.js 20+ installed
- Anthropic API key
- 1-week optional setup (can skip if confident)

### Deliverables

```
ai-pe-learning-agent/
├── package.json
├── tsconfig.json
├── .env
├── src/
│   └── hello-claude.ts
└── learning/
    └── week-01-anthropic-sdk/
        └── notes.md
```

### Success Criteria

- [ ] TypeScript project initialized
- [ ] Anthropic SDK working
- [ ] `hello-claude.ts` runs successfully
- [ ] Environment ready for Phase 1
- [ ] Learning directory structure created

---

## Tech Stack

### Current Phase (Week 0)

- TypeScript 5+
- Node.js 20+
- Anthropic SDK
- tsx (TypeScript execution)
- dotenv (environment variables)

### Future Phases (Phase 1-5)

- Zod (validation)
- Commander.js (CLI)
- Supabase Vector (Vector DB)
- OpenAI Embeddings API
- LangSmith (monitoring)
- Vitest (testing)
- Vercel (deployment)

---

## Work Principles

### 1. TypeScript-First Development

**Leverage TypeScript Expertise:**

- Use TypeScript idioms and patterns
- Zod for validation (similar to Yup/io-ts)
- Type-safe agent interfaces
- Commander.js for CLI (familiar API)

**Reference Existing Projects:**

- VNTG: AI-powered code generation patterns
- sdd-system: 9-agent architecture for inspiration
- TypeScript best practices from 4+ years experience

### 2. Agent Pipeline Focus

**Target:** Agent orchestration specialist, not infrastructure expert

- ✅ Agent design patterns, communication protocols
- ✅ Multi-agent orchestration, state management
- ✅ RAG implementation, Vector DB integration
- ✅ Cost optimization, LangSmith monitoring
- ❌ Deep DevOps (defer to Phase 5b if needed)
- ❌ Advanced K8s, LGTM Stack (optional later)

**Career Positioning:**

- "Agent Pipeline Specialist" (unique positioning)
- VNTG + sdd-system + ai-pe-learning-agent synergy
- 13-week accelerated timeline

### 3. Production-Ready Mindset

- Not "just make it work" but "deploy to production"
- Security considerations (no hardcoded secrets)
- Resource limits (CPU, memory)
- Health checks and monitoring
- Cost awareness

### 4. Documentation as Learning

**All learning must be documented:**

- `learning/` directory is core portfolio value
- Markdown notes with code examples
- Before/after comparisons
- Mistakes and improvements visible

### 5. Dogfooding

- Use built tools for actual learning management
- `reviews/` directory proves system works
- Real usage drives real improvements

---

## File Structure

```
ai-pe-learning-agent/
├── CLAUDE.md                       # This file
├── README.md                       # Project overview
├── docs/
│   ├── guides/
│   │   └── GETTING-STARTED.md      # Quick start guide
│   ├── infrastructure/
│   │   └── INFRASTRUCTURE-TRACK.md  # Infrastructure deep dive
│   ├── JDs/
│   │   ├── JOB-DESCRIPTIONS.md     # JD analysis and patterns
│   │   └── flank.md                # Individual JD analysis
│   ├── planning/
│   │   ├── ROADMAP.md              # Complete learning roadmap
│   │   └── PROJECT-ORIGIN.md      # Genesis of the project
│   ├── reference/
│   │   └── AGENTS-CONCEPTS.md      # Project agents vs Claude Code agents
│   └── user/
│       └── PROFILE.md              # User profile (gitignored)
│
├── src/
│   ├── agents/                     # AI agent implementations
│   │   ├── prompt_reviewer.py      # Phase 1
│   │   ├── code_critic.py          # Phase 2
│   │   ├── assignment_generator.py # Phase 5
│   │   └── progress_tracker.py     # Phase 3
│   ├── workflows/                  # LangGraph workflows
│   ├── utils/                      # Utilities
│   └── hello_claude.py             # First example
│
├── learning/                       # ⭐ Core portfolio value
│   └── week-00-python-basics/
│       ├── notes.md                # Learning notes
│       ├── exercises/              # Practice code
│       ├── assignments/            # Agent-generated
│       └── reviews/                # Agent reviews
│
├── requirements.txt                # Python dependencies
├── .env.example                    # Environment template
└── .gitignore                      # Excludes PROFILE.md
```

**Separate Practice Environment:**

```
~/infra-labs/                       # Infrastructure practice
├── docker-basics/
├── kubernetes-basics/
└── lgtm-stack/

~/Documents/Projects/infra-learning/  # Infrastructure notes
└── week-01-docker-kubernetes.md
```

---

## Communication Style

### For Infrastructure Tasks

- Explain concepts with web development analogies
- Compare to web framework patterns when relevant (check docs/user/PROFILE.md)
- Reference industry-standard production patterns
- Focus on "user level" depth, not DevOps expert

### For TypeScript/AI Tasks

- Use TypeScript best practices (types, interfaces, generics)
- Reference web dev patterns when relevant
- Explain AI concepts with web dev analogies when helpful
- Keep it practical, focus on agent patterns
- Reference sdd-system architecture when applicable

### For Code Reviews

- Check for production readiness (secrets, resource limits, health checks)
- Ensure code is approachable for learners (clear comments, explicit over implicit)
- Suggest documentation improvements
- Point to docs/infrastructure/INFRASTRUCTURE-TRACK.md or docs/planning/ROADMAP.md for context

---

## Current Priorities

### This Week (Week 0)

1. **TypeScript Project Setup**
   - Initialize npm project
   - Install Anthropic SDK
   - Configure TypeScript
   - Create hello-claude.ts

2. **Environment Configuration**
   - Setup .env file
   - Get Anthropic API key
   - Test API connection
   - Verify TypeScript compilation

### Next 13 Weeks

1. Phase 1 (Weeks 1-3): Prompt Reviewer agent
2. Phase 2 (Weeks 4-6): Code Critic + orchestration
3. Phase 3 (Weeks 7-9): Vector DB + Progress Tracker
4. Phase 4 (Weeks 10-11): LangSmith + evaluation
5. Phase 5 (Weeks 12-13): Vercel deployment + portfolio

---

## References

**Internal Docs:**

- [ROADMAP.md](docs/planning/ROADMAP.md) - Complete learning plan with all 5 phases
- [INFRASTRUCTURE-TRACK.md](docs/infrastructure/INFRASTRUCTURE-TRACK.md) - Detailed infrastructure guide
- [GETTING-STARTED.md](docs/guides/GETTING-STARTED.md) - Python environment setup
- [PROJECT-ORIGIN.md](docs/planning/PROJECT-ORIGIN.md) - Why this project exists
- [AGENTS-CONCEPTS.md](docs/reference/AGENTS-CONCEPTS.md) - Project agents vs Claude Code agents distinction

**External Resources (Week 0):**

- Anthropic SDK (TypeScript): https://github.com/anthropics/anthropic-sdk-typescript
- Anthropic Docs: https://docs.anthropic.com/
- TypeScript Handbook: https://www.typescriptlang.org/docs/

**External Resources (Future Phases):**

- Zod Documentation: https://zod.dev/
- LangSmith Docs: https://docs.smith.langchain.com/
- Supabase Vector: https://supabase.com/docs/guides/ai/vector-columns
- LangChain.js: https://js.langchain.com/docs/get_started/introduction

---

## Session Expectations

**When starting a session, Claude should:**

1. Recognize current phase (Week 0 - TypeScript Setup)
2. Check docs/user/PROFILE.md for user context (VNTG, sdd-system)
3. Use TypeScript idioms and patterns
4. Maintain "production-ready" and "agent pipeline specialist" mindset
5. Encourage documentation in `learning/` directory
6. Reference sdd-system patterns when applicable
7. Focus on agent orchestration, defer infrastructure

**What NOT to do:**

- ❌ Suggest Python or recommend switching to Python
- ❌ Suggest advanced infrastructure (Docker, K8s) unless user requests Phase 5b
- ❌ Ignore VNTG work synergy opportunities
- ❌ Forget the 13-week timeline constraint
- ❌ Skip documentation in `learning/` directory

---

## Quick Commands Reference

**TypeScript Development:**

```bash
# Navigate to project
cd ~/Documents/Projects/ai-pe-learning-agent/

# Run TypeScript files with tsx
npx tsx src/hello-claude.ts

# Install dependencies
npm install

# Run CLI (future phases)
npm run cli review-prompt "Your prompt here"

# Test
npm test

# Build
npm run build
```

**Git Workflow:**

```bash
# Standard workflow
git add .
git commit -m "feat: implement prompt reviewer agent"
git push

# Learning documentation
cd learning/week-01-anthropic-sdk/
# Write notes.md, exercises, reviews
```

---

## Version Info

**Document Version:** 2.0 (TypeScript Edition)
**Created:** 2026-01-18
**Last Updated:** 2026-01-27
**Current Phase:** Week 0 - TypeScript + AI SDK Setup
**Timeline:** 13 weeks (3 months core learning)
**Next Milestone:** Complete Week 0 setup → Phase 1 (Prompt Reviewer)

**Version History:**

- v2.0 (2026-01-27): TypeScript-first rewrite
  - Changed from Python to TypeScript approach
  - Updated timeline (24 weeks → 13 weeks)
  - Deferred infrastructure to optional Phase 5b
  - Added VNTG + sdd-system context
  - Agent Pipeline Specialist positioning
- v1.0 (2026-01-18): Original Python-based approach

---

**End of CLAUDE.md**

This file is automatically loaded by Claude Code at the start of each session.
Update this file as phases progress and priorities change.
