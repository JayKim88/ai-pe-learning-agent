# AI Product Engineer Learning Agent

> TypeScript-first multi-agent system for accelerated AI engineering learning

## What Makes This Different

**TypeScript-First Approach:** Leverage existing TypeScript/React expertise to fast-track AI agent development. Skip Python learning curve, focus on agent concepts.

**Meta-Learning:** Learn AI engineering by building AI agents in TypeScript that manage your own learning journey. The tool creation process itself becomes the learning experience.

**3-Month Timeline:** Accelerated 13-week learning path (vs 6 months), deferring infrastructure to deployment phase.

**Agent Pipeline Specialist:** Unique career positioning combining VNTG (AI DevTools) + sdd-system (9-agent architecture) + this project.

**Portfolio-Driven:** Every week of learning documented and portfolio-ready, demonstrating agent orchestration expertise.

---

## Project Overview

An intelligent TypeScript-based multi-agent system built to accelerate my transition from Frontend Engineer to AI Product Engineer (Agent Pipeline Specialist) in 3 months.

**Why TypeScript:** 4+ years TypeScript/React experience at VNTG & Bold9, current AI-powered code generation work, existing sdd-system 9-agent architecture.

**Current Phase:** Week 0 - TypeScript + AI SDK Setup
**Timeline:** Jan 2026 - Apr 2026 (13 weeks core learning)

## Tech Stack

**Core Stack (TypeScript):**

- TypeScript 5+ / Node.js 20+
- Anthropic SDK (`@anthropic-ai/sdk`)
- Zod (validation, replaces Pydantic)
- LangSmith (monitoring, replaces LGTM Stack)
- Supabase Vector (Vector DB)
- Commander.js (CLI)
- Vitest (testing)

**Deployment:**

- Vercel (serverless functions)
- Environment variables
- Production best practices

## Quick Start

**5-minute setup:**

```bash
# 1. Initialize TypeScript project
npm init -y
npm install @anthropic-ai/sdk commander zod dotenv
npm install -D typescript @types/node tsx

# 2. Configure API key
cp .env.example .env  # Then add your ANTHROPIC_API_KEY

# 3. Run first TypeScript code
npx tsx src/hello-claude.ts
```

**Detailed instructions:** [ROADMAP.md - Week 0](docs/planning/ROADMAP.md#week-0-typescript--ai-sdk-setup-optional-1-week)

## Project Structure

```
ai-pe-learning-agent/
├── src/                    # Source code
│   ├── agents/            # Agent modules (planned)
│   └── hello_claude.py    # First example ✅
├── learning/              # ⭐ Learning artifacts (core portfolio)
│   ├── blog-drafts/      # Blog post drafts ✅
│   └── week-00-python-basics/  # Python basics notes ✅
├── docs/                  # Documentation
│   ├── guides/           # Getting started guides ✅
│   ├── infrastructure/  # Infrastructure deep dive ✅
│   ├── JDs/             # Job description analysis ✅
│   ├── planning/        # Roadmaps and planning ✅
│   ├── reference/       # Reference documentation ✅
│   └── user/            # User context (partially gitignored) ✅
├── experiments/          # Experimental code (planned)
├── tests/                 # Tests (planned)
└── requirements.txt       # Python packages ✅
```

## Learning Roadmap (13 Weeks)

**Week 0: TypeScript + AI SDK Setup (1 week) ⭐ CURRENT**
- Initialize TypeScript project
- Install Anthropic SDK
- First "Hello Claude" in TypeScript
- Environment ready for Phase 1

**Phase 1: Single Agent - Prompt Reviewer (3 weeks)**
- TypeScript agent architecture
- Zod validation schemas
- CLI tool with Commander.js
- Production-ready prompt review agent

**Phase 2: Multi-Agent Collaboration - Code Critic (3 weeks)**
- Second agent (Code Critic)
- Agent orchestration patterns
- Sequential and parallel execution
- Inspired by sdd-system architecture

**Phase 3: Memory & Context - Progress Tracker (3 weeks)**
- Vector DB integration (Supabase)
- RAG implementation
- Learning history tracking
- Weak concept identification

**Phase 4: Monitoring & Optimization (2 weeks)**
- LangSmith integration
- LLM-as-Judge evaluation
- Cost tracking per agent
- Quantifiable improvements

**Phase 5: Production & Portfolio (2 weeks)**
- Vercel deployment
- README and documentation polish
- Blog post and demo video
- Portfolio-ready project

**Why TypeScript-First?**
Leverage 4+ years TypeScript expertise to fast-track agent development. Focus on agent concepts, not language learning. Infrastructure (Docker, K8s, LGTM) deferred to optional Phase 5b.

**See detailed plans:**

- [ROADMAP.md](docs/planning/ROADMAP.md) - Complete phase-by-phase plan
- [INFRASTRUCTURE-TRACK.md](docs/infrastructure/INFRASTRUCTURE-TRACK.md) - Infrastructure guide
- [GETTING-STARTED.md](docs/guides/GETTING-STARTED.md) - Environment setup

## Next Steps

**Learning Path:**

1. Phase 0a: Infrastructure Fundamentals - [INFRASTRUCTURE-TRACK.md](docs/infrastructure/INFRASTRUCTURE-TRACK.md)
2. Week 0: Python Basics
3. Phase 1-5: AI Agent Development - [ROADMAP.md](docs/planning/ROADMAP.md)

**Immediate Actions:**

- [ ] Docker + Kubernetes basics
- [ ] Setup local LGTM stack
- [ ] Run `src/hello_claude.py` successfully
- [ ] Begin Python learning

## Documentation

| Document                                                               | Purpose                                           |
| ---------------------------------------------------------------------- | ------------------------------------------------- |
| [GETTING-STARTED.md](docs/guides/GETTING-STARTED.md)                   | Environment setup, troubleshooting, initial steps |
| [ROADMAP.md](docs/planning/ROADMAP.md)                                 | Complete learning plan, all phases detailed       |
| [INFRASTRUCTURE-TRACK.md](docs/infrastructure/INFRASTRUCTURE-TRACK.md) | Docker, K8s, LGTM Stack production skills         |
| [PROJECT-ORIGIN.md](docs/planning/PROJECT-ORIGIN.md)                   | Original idea and project genesis                 |
| [AGENTS-CONCEPTS.md](docs/reference/AGENTS-CONCEPTS.md)                | Project agents vs Claude Code agents distinction  |
| [PROFILE.md](docs/user/PROFILE.md)                                     | User background for agent personalization         |

## Resources

- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [LangChain Docs](https://python.langchain.com/docs/get_started/introduction)
- [Python for JavaScript Developers](https://www.valentinog.com/blog/python-for-js/)

---

**Last Updated**: 2026-01-27
**Current Phase**: Week 0 - TypeScript + AI SDK Setup
**Approach**: TypeScript-first (13 weeks) - leveraging existing expertise
