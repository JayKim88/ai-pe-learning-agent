# AI Product Engineer Learning Agent

> Project context for Claude Code sessions

---

## Project Overview

**Purpose:** Universal learning platform for becoming an AI Product Engineer

**Vision:** Enable anyone to transition to AI PE through an intelligent, self-managing learning agent system.

**Core Concept:** Meta-learning - building AI agents to learn AI engineering. The tool creation process itself becomes the learning journey.

**Current Status:** Phase 0a - Infrastructure Fundamentals

**Learning Progression:**

- Phase 0a: Infrastructure Fundamentals ◄─ **CURRENT**
- Week 0: Python Basics
- Phase 1-5: AI Agent Development + Production Deployment

---

## User Context

### Learning Approach

**Default assumptions for learners:**

- Coming from web development background (TypeScript/JavaScript common)
- Practical, hands-on learning preferred
- Real-world examples over academic theory
- Production-ready mindset from day 1

**Personalization:**

- Individual user profile stored in `docs/user/PROFILE.md` (gitignored)
- System adapts to user's specific background and goals
- Can reference docs/user/PROFILE.md for personalized guidance

### Learning Preferences (Platform Defaults)

- Practical, hands-on approach
- Code examples with clear explanations
- TypeScript/JavaScript comparisons when relevant (common background)
- Real-world production scenarios
- Progressive difficulty (Level 1 → Level 2 → Level 3)

---

## Target Infrastructure Stack

**Production-Ready AI Systems:**

- **Containers:** Docker, Docker Compose
- **Orchestration:** Kubernetes
- **Observability:** Grafana LGTM Stack
  - Loki (logs)
  - Grafana (visualization)
  - Tempo (distributed tracing)
  - Mimir (metrics)
- **Instrumentation:** OpenTelemetry
- **Optional:** Kafka for event streaming

**Why This Stack:**

- Industry-standard for production AI deployment
- Essential for monitoring LLM costs and performance
- Distributed tracing for multi-agent debugging
- Scales from local development to production

---

## Current Phase: Phase 0a (Infrastructure Fundamentals)

### Goals

**Part 1: Docker + Kubernetes Basics**

- Understand containerization concepts
- Build and run Docker containers
- Learn kubectl fundamentals
- Study production observability patterns

**Part 2: LGTM Stack Integration**

- Setup local Grafana + Loki + Tempo + Mimir
- Integrate simple app with OpenTelemetry
- Create first monitoring dashboard
- Document architecture

### Deliverables

```
~/infra-labs/                    # Practice environment
├── docker-basics/
├── kubernetes-basics/
└── lgtm-stack/

~/Documents/Projects/infra-learning/  # Learning notes
├── docker-kubernetes.md
└── lgtm-stack.md
```

### Success Criteria

- [ ] Can build/run Docker containers confidently
- [ ] Understand K8s Pod/Deployment/Service
- [ ] Have working local LGTM stack
- [ ] Created first Grafana dashboard
- [ ] Can explain production observability architecture

---

## Tech Stack

### Current Phase (Infrastructure)

- Docker & Docker Compose
- Kubernetes (minikube for local)
- Grafana LGTM Stack
- OpenTelemetry basics

### Future Phases (AI Engineering)

- Python 3.11+
- Claude API (Anthropic SDK)
- LangGraph (agent orchestration)
- Vector DB (Supabase/Qdrant)
- Pydantic (data validation)

---

## Work Principles

### 1. Infrastructure Depth: Level 1 Only

**Target:** User level, not DevOps expert

- ✅ Build/run containers, read YAML, use kubectl basics
- ✅ Understand LGTM architecture, create dashboards
- ❌ Cluster administration, Helm charts, service mesh
- ❌ Advanced Prometheus queries, custom exporters

**Rationale:** AI PE needs to deploy and monitor, not architect infrastructure.

### 2. Web Developer Perspective

**Provide comparisons when helpful (common background):**

```typescript
// TypeScript/JavaScript
const doubled = numbers.map(n => n * 2);

# Python
doubled = [n * 2 for n in numbers]  # List comprehension
```

**Use familiar analogies for web developers:**

- "Kubernetes Pod is like a package.json for a container"
- "docker-compose.yml is like a multi-service package.json"
- "Vector DB is like a search engine for semantic meaning"

**Note:** Check docs/user/PROFILE.md for user's specific background to provide tailored comparisons.

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

### For Python/AI Tasks

- Provide web dev comparisons when relevant (check docs/user/PROFILE.md for specifics)
- Explain Python idioms (list comprehensions, f-strings, decorators)
- Reference common web framework patterns when applicable
- Keep it practical, avoid academic theory

### For Code Reviews

- Check for production readiness (secrets, resource limits, health checks)
- Ensure code is approachable for learners (clear comments, explicit over implicit)
- Suggest documentation improvements
- Point to docs/infrastructure/INFRASTRUCTURE-TRACK.md or docs/planning/ROADMAP.md for context

---

## Current Priorities

### Getting Started

1. **Docker Basics**
   - Install Docker
   - Complete official tutorial
   - Containerize simple web app
   - Create learning notes

2. **Document Everything**
   - Write clear explanations
   - Screenshot key configurations
   - Note questions and insights

### Progress Through

1. Kubernetes basics (minikube, kubectl)
2. LGTM stack setup
3. Full LGTM integration
4. Simple app with OpenTelemetry
5. First Grafana dashboard
6. Document production observability patterns

---

## References

**Internal Docs:**

- [ROADMAP.md](docs/planning/ROADMAP.md) - Complete learning plan with all 5 phases
- [INFRASTRUCTURE-TRACK.md](docs/infrastructure/INFRASTRUCTURE-TRACK.md) - Detailed infrastructure guide
- [GETTING-STARTED.md](docs/guides/GETTING-STARTED.md) - Python environment setup
- [PROJECT-ORIGIN.md](docs/planning/PROJECT-ORIGIN.md) - Why this project exists
- [AGENTS-CONCEPTS.md](docs/reference/AGENTS-CONCEPTS.md) - Project agents vs Claude Code agents distinction

**External Resources (Phase 0a):**

- Docker: https://docs.docker.com/get-started/
- Kubernetes: https://kubernetes.io/docs/tutorials/kubernetes-basics/
- LGTM Stack: https://grafana.com/docs/

**External Resources (Future Phases):**

- Python for JS Devs: https://www.valentinog.com/blog/python-for-js/
- Anthropic Docs: https://docs.anthropic.com/
- LangGraph: https://python.langchain.com/docs/langgraph

---

## Session Expectations

**When starting a session, Claude should:**

1. Recognize current phase (Phase 0a - Infrastructure)
2. Check docs/user/PROFILE.md for user-specific background and preferences
3. Use web dev comparisons when helpful (if user has that background)
4. Maintain "production-ready" mindset
5. Encourage documentation in `infra-learning/`
6. Keep infrastructure depth at Level 1 (user, not expert)
7. Remember this is a platform for anyone, not just one user

**What NOT to do:**

- ❌ Suggest advanced DevOps patterns (Helm, Istio, etc.)
- ❌ Dive too deep into K8s internals
- ❌ Assume specific user background without checking docs/user/PROFILE.md
- ❌ Make project too personalized (keep it universal)
- ❌ Recommend creating new projects (focus on this one)

---

## Quick Commands Reference

**Infrastructure Practice:**

```bash
# Navigate to practice environment
cd ~/infra-labs/

# Navigate to learning notes
cd ~/Documents/Projects/infra-learning/

# Start local LGTM stack (Week 2)
cd ~/infra-labs/lgtm-stack
docker-compose up -d
```

**This Project:**

```bash
# Navigate to project
cd ~/Documents/Projects/ai-pe-learning-agent/

# Python environment (Future phases)
source venv/bin/activate
python src/hello_claude.py

# Git workflow
git add .
git commit -m "..."
git push
```

---

## Version Info

**Document Version:** 1.0
**Created:** 2026-01-18
**Last Updated:** 2026-01-18
**Current Phase:** Phase 0a - Infrastructure Fundamentals
**Next Milestone:** Complete Docker + K8s basics → LGTM Stack integration

---

**End of CLAUDE.md**

This file is automatically loaded by Claude Code at the start of each session.
Update this file as phases progress and priorities change.
