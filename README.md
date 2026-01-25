# AI Product Engineer Learning Agent

> Personal learning management system for transitioning to AI Product Engineer through meta-learning

## What Makes This Different

**Meta-Learning Approach:** Learn AI engineering by building AI agents that manage your own learning journey. The tool creation process itself becomes the learning experience.

**Self-Managing System:** AI agents review your work, generate assignments, and track progress - creating a personalized learning experience that you actually use.

**Production-Ready from Day 1:** Not just tutorials, but real production deployment skills (Docker, K8s, observability with LGTM Stack).

**Portfolio-Driven:** Every week of learning is documented and becomes part of a public portfolio demonstrating growth and expertise.

---

## Project Overview

An intelligent, self-managing learning system built to support my transition from Frontend Engineer to AI Product Engineer over 6 months.

**Why I Built This:** This project helps me deepen AI engineering skills while creating a production-ready portfolio through hands-on agent development.

**Current Phase:** Phase 0a - Infrastructure Fundamentals (Week 1 of 24)
**Timeline:** Jan 2026 - Jun 2026

## Tech Stack

**AI Engineering:**

- Python 3.11+
- Claude API (Anthropic)
- LangChain / LangGraph
- Supabase (Vector DB)
- Pydantic (Data Validation)

**Infrastructure & Production:**

- Docker & Kubernetes
- Grafana LGTM Stack (Loki, Grafana, Tempo, Mimir)
- OpenTelemetry
- Kafka (optional, for event streaming)

## Quick Start

**5-minute setup:**

```bash
# 1. Setup environment (detailed guide below)
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# 2. Configure API key
cp .env.example .env  # Then add your ANTHROPIC_API_KEY

# 3. Run first code
python src/hello_claude.py
```

**Detailed instructions:** [Getting Started Guide](docs/guides/GETTING-STARTED.md)

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

## Learning Roadmap (6 Months)

**Phase 0a: Infrastructure Fundamentals (4-8 weeks) ⭐ CURRENT**
- Docker & Kubernetes basics (user level)
- Grafana LGTM Stack (Loki, Grafana, Tempo, Mimir)
- Production observability patterns
- Local lab environment setup

**Week 0: Python Basics (1 week)**
- TypeScript → Python syntax mapping
- Virtual environments & package management
- First Claude API integration
- Mini chatbot implementation

**Phase 1: Prompt Reviewer (2-3 weeks)**
- Single agent MVP (actually use it daily)
- Structured Output & Guardrails
- Few-shot, Chain-of-Thought patterns
- 99%+ response consistency

**Phase 2: Code Critic (2-3 weeks)**
- Multi-agent collaboration foundation
- Validation & retry logic
- AI code best practices enforcement
- Pass/rewrite judgment system

**Phase 3: Vector DB + RAG (2-3 weeks)**
- Learning history management
- Hybrid Search (BM25 + Vector)
- Progress tracking and weakness identification
- Review recommendations

**Phase 4: LangGraph + Evaluation (2-3 weeks)**
- Complex workflow orchestration
- LLM-as-a-Judge evaluation system
- Golden Dataset creation
- A/B testing framework

**Phase 5: Production Deployment (2-3 weeks)**
- K8s deployment with full LGTM observability
- Cost optimization (Semantic Caching)
- Production-ready portfolio
- Blog posts and demo

**Why Infrastructure First?**
AI Product Engineer = AI Development + Production Deployment. Understanding Docker, K8s, and observability is essential for deploying AI systems to production.

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

**Last Updated**: 2026-01-25
**Current Phase**: Phase 0a - Infrastructure Fundamentals
