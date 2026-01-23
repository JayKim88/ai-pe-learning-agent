# AI Product Engineer Learning Project

> Python-based AI learning management agent system

## Project Overview

This project builds a learning management system powered by AI agents to help you become an AI Product Engineer.

**Current Status**: Week 0 - Python Basics

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

## Getting Started

### 1. Environment Setup

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # Mac/Linux
# venv\Scripts\activate  # Windows

# Install packages
pip install -r requirements.txt
```

### 2. API Key Setup

```bash
# Create .env file
cp .env.example .env

# Edit .env file
# ANTHROPIC_API_KEY=your_api_key_here
```

### 3. Run First Code

```bash
python src/hello_claude.py
```

Success! Claude will respond! 🎉

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
│   ├── ROADMAP.md        # Detailed learning roadmap
│   └── GETTING-STARTED.md # Quick start guide
└── requirements.txt       # Python packages
```

## Learning Roadmap

**Infrastructure Fundamentals (NEW ⭐):**
- [ ] Week 1-2: Docker + Kubernetes + LGTM Stack basics

**AI Engineering Core:**
- [ ] Week 0: Python Basics + Environment Setup
- [ ] Week 1-2: Phase 1 - Prompt Reviewer
- [ ] Week 3-4: Phase 2 - Code Critic
- [ ] Week 5-6: Phase 3 - Vector DB + Observability Integration
- [ ] Week 7-8: Phase 4 - LangGraph + Distributed Tracing
- [ ] Week 9-10: Phase 5 - K8s Deployment + Full LGTM Monitoring

**Total Timeline:** ~8 weeks (2 weeks infrastructure + 6 weeks AI core)

**Why Infrastructure First?**
AI Product Engineer = AI Development + Production Deployment. Understanding Docker, K8s, and observability (LGTM) is essential for deploying AI systems to production and monitoring costs/performance.

See detailed plans:
- [docs/ROADMAP.md](docs/ROADMAP.md) - Complete learning roadmap
- [docs/INFRASTRUCTURE-TRACK.md](docs/INFRASTRUCTURE-TRACK.md) - Infrastructure deep dive

## Next Steps

**This Weekend (Jan 25-26):**
1. Start Phase 0a: Infrastructure Fundamentals
2. Docker basics tutorial (4 hours)
3. Containerize simple NestJS app
4. Document learnings in `~/Documents/Projects/infra-learning/`

**Next 2 Weeks:**
1. Complete Docker + Kubernetes basics
2. Setup local LGTM stack
3. Create first Grafana dashboard
4. Analyze VNTG company stack

**Then:**
1. Week 0: Python Basics (1 week)
2. Phase 1: Prompt Reviewer (2 weeks)
3. Deploy to K8s with full observability (Phase 5)

## Resources

- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [LangChain Docs](https://python.langchain.com/docs/get_started/introduction)
- [Python for JavaScript Developers](https://www.valentinog.com/blog/python-for-js/)

---

**Created**: 2026-01-18
**Author**: Jay Kim
