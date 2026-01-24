# AI Product Engineer Learning Project

> Python-based AI learning management agent system

## Project Overview

This project builds a learning management system powered by AI agents to help you become an AI Product Engineer.

**Current Status**: Phase 0a - Infrastructure Fundamentals

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
- Kafka (Company context)

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
│   ├── agents/            # Agent modules
│   ├── cli.py             # CLI interface
│   └── hello_claude.py    # First example
├── learning/              # Learning artifacts
│   └── week-00-python-basics/
├── tests/                 # Tests
├── docs/                  # Documentation
│   ├── guides/           # Getting started guides
│   ├── infrastructure/  # Infrastructure docs
│   ├── planning/        # Roadmaps and planning
│   ├── reference/       # Reference documentation
│   └── user/            # User-specific (gitignored)
└── requirements.txt       # Python packages
```

## Learning Roadmap

**Phase 0a: Infrastructure Fundamentals (NEW ⭐)**
- Docker & Kubernetes basics
- Grafana LGTM Stack (Loki, Grafana, Tempo, Mimir)
- Production observability patterns

**Week 0: Python Basics**
- TypeScript → Python transition
- Virtual environments & package management
- First Claude API integration

**Phase 1: Prompt Reviewer**
- Single agent MVP
- Structured Output & Guardrails
- Few-shot, Chain-of-Thought patterns

**Phase 2: Code Critic**
- Multi-agent foundation
- Validation & retry logic
- Best practices enforcement

**Phase 3: Vector DB + Observability**
- RAG & learning history
- OpenTelemetry integration
- Basic monitoring

**Phase 4: LangGraph + Evaluation**
- Workflow orchestration
- Distributed tracing
- LLM-as-a-Judge

**Phase 5: Production Deployment**
- Kubernetes deployment
- Full LGTM monitoring
- Cost optimization

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

| Document | Purpose |
|----------|---------|
| [GETTING-STARTED.md](docs/guides/GETTING-STARTED.md) | Environment setup, troubleshooting, initial steps |
| [ROADMAP.md](docs/planning/ROADMAP.md) | Complete learning plan, all phases detailed |
| [INFRASTRUCTURE-TRACK.md](docs/infrastructure/INFRASTRUCTURE-TRACK.md) | Docker, K8s, LGTM Stack production skills |
| [PROJECT-ORIGIN.md](docs/planning/PROJECT-ORIGIN.md) | Original idea and project genesis |
| [AGENTS-CONCEPTS.md](docs/reference/AGENTS-CONCEPTS.md) | Project agents vs Claude Code agents distinction |
| [PROFILE.md](docs/user/PROFILE.md) | User background for agent personalization |

## Resources

- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [LangChain Docs](https://python.langchain.com/docs/get_started/introduction)
- [Python for JavaScript Developers](https://www.valentinog.com/blog/python-for-js/)

---

**Created**: 2026-01-18
**Author**: Jay Kim
