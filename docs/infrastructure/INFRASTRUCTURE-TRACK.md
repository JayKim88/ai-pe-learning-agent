# Infrastructure Learning Track

> **Purpose:** Complete guide to production deployment skills (Docker, K8s, LGTM Stack)
> **For:** Phase 0a (Infrastructure Fundamentals) and Phase 3-5 (Production Integration)
> **See also:** [ROADMAP.md](../planning/ROADMAP.md) for full learning plan

**Strategy:** Manual Learning → AI Core → Infrastructure Integration
**Goal:** Production-ready AI systems with full observability
**Industry Stack:** Docker, Kubernetes, Grafana LGTM, Kafka

---

## Why Infrastructure Matters for AI PE

### AI Product Engineer ≠ AI Researcher

```
AI Researcher:
├── Model architecture design
├── Paper implementation
├── Experiments and evaluation
└── "Works in Jupyter notebook" ✓

AI Product Engineer (Your Goal):
├── Prompt engineering           ◄─ AI Skills
├── Agent orchestration          ◄─ AI Skills
├── Vector DB, RAG               ◄─ AI Skills
├── Production deployment        ◄─ Infrastructure ⭐
├── Cost optimization            ◄─ Infrastructure ⭐
├── Monitoring & debugging       ◄─ Infrastructure ⭐
└── "Users can actually use it" ✓
```

**Key Difference:**

- Researcher: "This model has 95% accuracy" (done)
- Product Engineer: "This model runs on K8s, responds <200ms, costs <$100/month" (start)

---

## Production Stack for AI Systems

```
┌────────────────────────────────────────────────────────┐
│  Web Apps (Traditional)    AI Systems (New Paradigm)    │
├────────────────────────────────────────────────────────┤
│  Docker                 →  AI agent containerization    │
│  Kubernetes             →  Agent deployment & scaling   │
│  Grafana LGTM           →  LLM cost/perf monitoring     │
│  Kafka                  →  Agent messaging              │
│  Alloy                  →  Observability pipeline       │
└────────────────────────────────────────────────────────┘
```

**Example: Grafana LGTM Metrics Comparison**

**Traditional Web Apps:**

```
Mimir: API response time, request rate
Tempo: HTTP request tracing
Loki: Error log analysis
```

**AI Systems:**

```
Mimir: LLM API calls, token usage, cost tracking
Tempo: Multi-agent workflow tracing (which agent is slow?)
Loki: Hallucination logs, user complaint patterns
```

→ **Same tools, different metrics!**

---

## Real AI PE Job Requirements

```
Required Skills:
✅ Python, LangChain/LangGraph
✅ Prompt Engineering, RAG
✅ LLM API (OpenAI, Anthropic)
✅ Docker, Kubernetes               ◄─ Infrastructure!
✅ Monitoring & Logging (Datadog, Grafana) ◄─ Infrastructure!
✅ Cost optimization strategies     ◄─ Infrastructure!

Preferred:
- Experience deploying AI systems to production
- Understanding of distributed tracing
- CI/CD for ML/AI pipelines
```

**Interview Questions:**

- "LLM costs suddenly doubled. How do you debug?"
  → Grafana: check token usage metrics, Tempo: trace which endpoint

- "AI agent responses are slow. Why?"
  → Distributed tracing to find bottleneck

- "Have you deployed AI systems to production?"
  → "Yes, containerized with Docker, deployed on K8s, monitored with LGTM"

→ **Cannot answer without infrastructure knowledge**

---

## Required Depth: Level 1 (User)

### Level 1: User (Your Goal) ✅

```
Docker:
✓ Read and modify Dockerfile
✓ Use docker-compose for local setup
✓ Build/run/debug images

Kubernetes:
✓ Understand Pod, Deployment, Service
✓ Basic kubectl commands
✓ Read and understand YAML files

Grafana LGTM:
✓ Read dashboards and identify issues
✓ Correlate logs/metrics/traces
✓ Write simple queries

→ "Can deploy and monitor AI systems"
→ Sufficient for AI PE hiring!
```

### Level 2: Operator (Optional)

```
Docker:
- Multi-stage build optimization
- Security scanning, vulnerability patches

Kubernetes:
- Helm, Kustomize
- Ingress, Network Policies
- Auto-scaling, Resource tuning

→ "DevOps Engineer level"
→ Overkill for AI PE
```

### Level 3: Architect (Unnecessary)

```
- Build K8s clusters from scratch
- Service mesh (Istio)
- Multi-cloud architecture

→ Not needed for AI PE
```

**Target: Level 1 only**

---

## 3-Stage Strategy

```
┌─────────────────────────────────────────────────────────┐
│  Stage 1 (Now ~ 2 weeks): Manual Learning               │
│  ─────────────────────────────────────────────────────   │
│  Focus: Understand production stack + AI deployment prep │
│  Method: Direct hands-on practice                        │
│  Output: Local lab + learning notes                      │
└─────────────────────────────────────────────────────────┘
                          ↓ (2 weeks)
┌─────────────────────────────────────────────────────────┐
│  Stage 2 (Week 0 ~ Phase 2): AI Core Focus              │
│  ─────────────────────────────────────────────────────   │
│  Focus: Build AI agent skills                            │
│  Method: Follow original AI PE roadmap                   │
│  Output: Working multi-agent system                      │
│  Parallel: Containerize agents with Docker               │
└─────────────────────────────────────────────────────────┘
                          ↓ (6 weeks)
┌─────────────────────────────────────────────────────────┐
│  Stage 3 (Phase 3-5): AI + Infrastructure Integration    │
│  ─────────────────────────────────────────────────────   │
│  Focus: Production-ready deployment                      │
│  Method: K8s deployment + Full LGTM observability        │
│  Output: Portfolio-ready AI system                       │
└─────────────────────────────────────────────────────────┘
```

---

## Stage 1: Manual Learning (2 weeks)

### Week 1: Docker + Kubernetes Basics

**Day 1-2: Docker Fundamentals (6 hours)**

```bash
# 1. Install and verify
$ docker --version
$ docker-compose --version

# 2. Follow official tutorial (4 hours)
https://docs.docker.com/get-started/

# 3. Practice: Containerize NestJS app (2 hours)
$ cd ~/practice
$ nest new docker-demo
$ cd docker-demo

# Create Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

$ docker build -t nest-demo .
$ docker run -p 3000:3000 nest-demo
$ curl http://localhost:3000

# 4. Document learnings
$ mkdir ~/Documents/Projects/infra-learning
$ code ~/Documents/Projects/infra-learning/week-01-docker.md
```

**Day 3-5: Kubernetes Fundamentals (6 hours)**

```bash
# 1. Install minikube (30 min)
$ brew install minikube
$ minikube start
$ kubectl version

# 2. Core concepts (3 hours)
# Pod: Single container runtime unit
$ kubectl run nginx --image=nginx
$ kubectl get pods
$ kubectl describe pod nginx

# Deployment: Manages pod replicas
$ kubectl create deployment web --image=nginx --replicas=3
$ kubectl get deployments
$ kubectl scale deployment web --replicas=5

# Service: Network endpoint
$ kubectl expose deployment web --port=80 --type=NodePort
$ kubectl get services
$ minikube service web

# 3. YAML practice (2 hours)
# Create pod.yaml, deployment.yaml, service.yaml
# Apply with: kubectl apply -f <file>

# 4. Study production K8s patterns (30 min)
# Review example K8s YAML files from documentation
# Understand: resource limits, health checks, env vars
```

**Day 6-7: Production Stack Practice (4 hours)**

```bash
# 1. Review production-ready docker-compose patterns
# Understand:
- Service dependencies
- Port mappings (3000, 4317, etc.)
- Volume mounts
- Environment variables
- Network configuration

# 2. Build your own stack (simplified version)
$ mkdir ~/infra-labs/production-stack
$ cd ~/infra-labs/production-stack
$ touch docker-compose.yml

# Start with just Grafana + Loki
# Gradually add Tempo, Mimir as you understand

# 3. Document architecture
$ code ~/Documents/Projects/infra-learning/production-stack-analysis.md
```

**Week 1 Deliverables:**

```
~/infra-labs/
├── docker-basics/
│   ├── Dockerfile.webapp
│   └── docker-compose.simple.yml
├── kubernetes-basics/
│   ├── pod.yaml
│   ├── deployment.yaml
│   └── service.yaml
└── production-stack/
    └── docker-compose.yml

~/Documents/Projects/infra-learning/
├── week-01-docker.md
├── week-01-kubernetes.md
└── production-stack-analysis.md
```

### Week 2: LGTM Stack Deep Dive

**Day 1-3: Setup Local LGTM (8 hours)**

```bash
# Goal: Run Grafana LGTM stack locally

$ mkdir ~/infra-labs/lgtm-stack
$ cd ~/infra-labs/lgtm-stack
$ touch docker-compose.yml
```

**docker-compose.yml (simplified):**

```yaml
version: "3.8"

services:
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml

  tempo:
    image: grafana/tempo:latest
    ports:
      - "3200:3200" # Tempo HTTP
      - "4317:4317" # OTLP gRPC
    command: -config.file=/etc/tempo/tempo.yaml

  mimir:
    image: grafana/mimir:latest
    ports:
      - "9009:9009"
    command: -config.file=/etc/mimir/demo.yaml

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_AUTH_ANONYMOUS_ENABLED=true
      - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
    volumes:
      - ./grafana-datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml
```

**grafana-datasources.yml:**

```yaml
apiVersion: 1

datasources:
  - name: Loki
    type: loki
    access: proxy
    url: http://loki:3100
    uid: loki

  - name: Tempo
    type: tempo
    access: proxy
    url: http://tempo:3200
    uid: tempo

  - name: Mimir
    type: prometheus
    access: proxy
    url: http://mimir:9009/prometheus
    uid: mimir
```

```bash
# Start stack
$ docker-compose up -d

# Verify
$ docker-compose ps
$ open http://localhost:3000

# Check data sources in Grafana
```

**Day 4-5: Integrate Simple App (8 hours)**

```bash
# Create NestJS app with OpenTelemetry
$ nest new otel-demo
$ cd otel-demo
$ npm install @opentelemetry/api @opentelemetry/sdk-node \
  @opentelemetry/auto-instrumentations-node \
  @opentelemetry/exporter-trace-otlp-grpc \
  @opentelemetry/exporter-metrics-otlp-grpc

# Create instrumentation.ts
# Configure to send:
# - Traces → Tempo (port 4317)
# - Metrics → Mimir (port 4317)
# - Logs → Console (will add Loki later)

# Run app
$ node --require ./instrumentation.js dist/main

# Generate traffic
$ curl http://localhost:3000
$ curl http://localhost:3000/users

# Verify in Grafana:
# - Explore → Tempo → Search traces
# - Explore → Mimir → Query metrics
```

**Day 6-7: Build First Dashboard (6 hours)**

```bash
# In Grafana, create dashboard with:

1. Panel: Request Rate (Mimir)
   Query: rate(http_requests_total[5m])

2. Panel: Latency P95 (Tempo metrics)
   Query: histogram_quantile(0.95, http_request_duration_seconds)

3. Panel: Error Logs (Loki)
   Query: {job="otel-demo"} |= "error"

# Export dashboard
$ curl -u admin:admin http://localhost:3000/api/dashboards/uid/<uid> \
  > my-first-dashboard.json
```

**Week 2 Deliverables:**

```
~/infra-labs/lgtm-stack/
├── docker-compose.yml
├── grafana-datasources.yml
├── otel-demo/               # NestJS + OpenTelemetry
│   ├── instrumentation.ts
│   └── ...
└── dashboards/
    └── my-first-dashboard.json

~/Documents/Projects/infra-learning/
└── week-02-lgtm-stack.md
```

### Stage 1 Success Criteria

After 2 weeks, you should be able to:

- [ ] Build and run Docker containers confidently
- [ ] Understand K8s Pod/Deployment/Service concepts
- [ ] Have working local LGTM stack
- [ ] Send traces/metrics/logs from simple app to LGTM
- [ ] Read Grafana dashboards
- [ ] Understand production observability architecture
- [ ] Explain LGTM architecture to teammates

---

## Stage 2: AI Core Focus (6 weeks)

### Week 0: Python Basics (1 week)

- Follow: `learning/week-00-python-basics/notes.md`
- Infrastructure: Weekends only (optional, 1-2 hours)
  - Experiment with containerizing Python apps
  - Compare to NestJS Dockerfile

### Phase 1: Prompt Reviewer (2 weeks)

- Focus: LangGraph, Structured Output, Guardrails
- Infrastructure integration:
  - Create Dockerfile for Python agent
  - Add basic logging (console output)
  - No LGTM integration yet (keep simple)

### Phase 2: Code Critic (2 weeks)

- Focus: Multi-agent collaboration
- Infrastructure integration:
  - docker-compose with multiple agent containers
  - Simple inter-agent communication
  - Still no LGTM (Phase 3)

**Infrastructure Learning: Paused**

- Focus 100% on AI fundamentals
- Build strong foundation before integration

---

## Stage 3: AI + Infrastructure Integration (6 weeks)

### Phase 3: Vector DB + Observability Basics (2 weeks)

**AI Track:**

- Implement RAG with Vector DB
- Search accuracy measurement

**Infrastructure Integration ⭐:**

```yaml
# docker-compose.yml for AI system
version: "3.8"

services:
  prompt-reviewer:
    build: ./src/agents/prompt_reviewer
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - OTLP_ENDPOINT=http://alloy:4317
    depends_on:
      - alloy

  code-critic:
    build: ./src/agents/code_critic
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - OTLP_ENDPOINT=http://alloy:4317

  vector-db:
    image: qdrant/qdrant
    ports:
      - "6333:6333"

  alloy:
    image: grafana/alloy:latest
    ports:
      - "4317:4317" # OTLP gRPC

  loki:
    image: grafana/loki:latest

  tempo:
    image: grafana/tempo:latest

  mimir:
    image: grafana/mimir:latest

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
```

**OpenTelemetry Integration:**

```python
# src/utils/telemetry.py
from opentelemetry import trace, metrics
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.metric_exporter import OTLPMetricExporter

# Send to Tempo
trace.set_tracer_provider(TracerProvider())
tracer = trace.get_tracer(__name__)
trace_exporter = OTLPSpanExporter(endpoint="http://alloy:4317")

# Send to Mimir
meter = metrics.get_meter(__name__)
metric_exporter = OTLPMetricExporter(endpoint="http://alloy:4317")

# Metrics
llm_tokens_counter = meter.create_counter(
    "llm_tokens_total",
    description="Total LLM tokens used"
)

llm_cost_counter = meter.create_counter(
    "llm_cost_dollars",
    description="Total LLM cost in dollars"
)
```

**Usage in Agent:**

```python
# src/agents/prompt_reviewer.py
from utils.telemetry import tracer, llm_tokens_counter, llm_cost_counter

class PromptReviewer:
    async def review(self, prompt: str):
        with tracer.start_as_current_span("review_prompt") as span:
            span.set_attribute("prompt.length", len(prompt))

            # Call Claude API
            response = await self.claude.complete(prompt)

            # Track metrics
            tokens = response.usage.total_tokens
            cost = tokens * 0.000003  # $3 per 1M tokens

            llm_tokens_counter.add(tokens, {"agent": "prompt_reviewer"})
            llm_cost_counter.add(cost, {"agent": "prompt_reviewer"})

            span.set_attribute("tokens.used", tokens)
            span.set_attribute("cost.dollars", cost)

            return response
```

**Grafana Dashboard:**

```
Panel 1: Token Usage Over Time
Query: rate(llm_tokens_total[5m]) by (agent)

Panel 2: Cost Tracking
Query: sum(rate(llm_cost_dollars[1h])) * 24 * 30

Panel 3: Agent Response Time
Query: histogram_quantile(0.95, http_request_duration_seconds)
```

### Phase 4: LangGraph + Distributed Tracing (2 weeks)

**Multi-Agent Workflow Tracing:**

```python
# src/workflows/learning_cycle.py
from langgraph.graph import StateGraph
from utils.telemetry import tracer

async def learning_cycle_workflow(state):
    with tracer.start_as_current_span("learning_cycle") as parent_span:

        # Step 1: Assignment Generation
        with tracer.start_as_current_span("generate_assignment"):
            assignment = await assignment_generator.create(state)

        # Step 2: Code Review
        with tracer.start_as_current_span("review_code"):
            review = await code_critic.review(state.user_code)

        # Step 3: Progress Update
        with tracer.start_as_current_span("update_progress"):
            await progress_tracker.save(review)

        parent_span.set_attribute("workflow.status", "completed")

    return state
```

**Tempo Service Graph:**

```
Grafana → Explore → Tempo → Service Graph

View:
┌─────────────────────────────────────────┐
│  learning_cycle                          │
│       │                                  │
│       ├─► generate_assignment   (234ms) │
│       │                                  │
│       ├─► review_code           (567ms) │
│       │                                  │
│       └─► update_progress       (123ms) │
└─────────────────────────────────────────┘
```

### Phase 5: Production Deployment (2 weeks)

**Kubernetes Deployment:**

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prompt-reviewer
spec:
  replicas: 2
  selector:
    matchLabels:
      app: prompt-reviewer
  template:
    metadata:
      labels:
        app: prompt-reviewer
    spec:
      containers:
        - name: agent
          image: your-registry/prompt-reviewer:latest
          ports:
            - containerPort: 8000
          env:
            - name: ANTHROPIC_API_KEY
              valueFrom:
                secretKeyRef:
                  name: api-keys
                  key: anthropic
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 30
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: prompt-reviewer
spec:
  selector:
    app: prompt-reviewer
  ports:
    - port: 80
      targetPort: 8000
  type: ClusterIP
```

**Deploy:**

```bash
# 1. Build image
$ docker build -t prompt-reviewer:latest src/agents/prompt_reviewer/

# 2. Push to registry (optional, for real cluster)
$ docker tag prompt-reviewer:latest your-registry/prompt-reviewer:latest
$ docker push your-registry/prompt-reviewer:latest

# 3. Create secret
$ kubectl create secret generic api-keys \
  --from-literal=anthropic=$ANTHROPIC_API_KEY

# 4. Deploy
$ kubectl apply -f k8s/deployment.yaml
$ kubectl apply -f k8s/service.yaml

# 5. Verify
$ kubectl get pods
$ kubectl logs -f deployment/prompt-reviewer

# 6. Test
$ kubectl port-forward svc/prompt-reviewer 8000:80
$ curl http://localhost:8000/health
```

**Full LGTM Integration:**

```yaml
# k8s/alloy-config.yaml
# Configure Alloy to collect from K8s pods
# Send to Loki, Tempo, Mimir
```

---

## Portfolio Impact

### Resume (After Stage 3)

**Before:**

```
AI PE Learning Agent (2026.01 - 2026.06)
- Multi-agent system with LangGraph
- Prompt quality: 40% → 85%
```

**After:**

```
AI Product Engineer Learning System (2026.01 - 2026.08)
- Production-ready multi-agent system deployed on Kubernetes
- Full observability with Grafana LGTM Stack:
  · Cost tracking: 70% reduction via Semantic Caching (Mimir)
  · Performance monitoring: <200ms P95 latency (Tempo)
  · Hallucination detection: Real-time alerts (Loki)
- Distributed tracing for multi-agent workflows
- Docker containerization with multi-stage builds
- Applied industry-standard production stack to AI system
- Tech: Python, LangGraph, K8s, Grafana LGTM, Docker
```

### Interview: "Deploy AI to Production?"

**Without Infrastructure:**
"I built a Python script that calls Claude API."
→ ❌ Junior level

**With Infrastructure (Your Future):**
"I deployed a multi-agent system on Kubernetes with full LGTM observability:

**Deployment:**

- Containerized Python agents with Docker
- K8s Deployments with resource limits and health checks
- Secrets management for API keys
- Service mesh for inter-agent communication

**Monitoring:**

- **Mimir:** Token usage per hour, cost per endpoint
- **Tempo:** Agent workflow tracing, bottleneck identification
- **Loki:** Hallucination event logs, user feedback patterns

**Optimization:**

- Semantic Caching: 70% cost reduction
- Before/After proof via Grafana dashboard

**Industry Relevance:**
This is the industry-standard observability stack, so I can apply this knowledge immediately to any production environment."

→ ✅ **Senior AI PE level**

---

## Next Steps

### This Weekend (Jan 25-26)

**Saturday (4 hours):**

```bash
# 1. Docker basics
$ brew install --cask docker  # if needed
$ docker --version
$ docker run hello-world

# 2. Official tutorial
https://docs.docker.com/get-started/

# 3. Setup learning notes
$ mkdir ~/Documents/Projects/infra-learning
$ code ~/Documents/Projects/infra-learning/week-01-docker.md

# Start documenting concepts with TypeScript analogies
```

**Sunday (4 hours):**

```bash
# 1. Containerize NestJS app
$ nest new docker-practice
$ cd docker-practice
$ touch Dockerfile

# Write Dockerfile, build, run

# 2. Update notes
# Document learnings, challenges, solutions
```

### Next Week (Evenings)

**Mon-Tue (2 hours):** Kubernetes basics
**Wed-Thu (2 hours):** LGTM stack setup
**Fri (1 hour):** Week review, update notes

### Week 2

Full LGTM integration + first dashboard

### Week 3 (Feb 7)

**Start AI PE Week 0: Python Basics**

- Infrastructure to weekends only
- Focus shifts to AI

---

## Success Metrics

**Stage 1 (2 weeks):**

- [ ] Confident with Docker commands
- [ ] Understand K8s core resources
- [ ] LGTM stack running locally
- [ ] First Grafana dashboard created
- [ ] Can explain production observability architecture to peers

**Stage 2 (6 weeks):**

- [ ] Python fundamentals solid
- [ ] 2+ working AI agents
- [ ] Basic containerization

**Stage 3 (6 weeks):**

- [ ] Full LGTM observability
- [ ] K8s deployment working
- [ ] Cost reduction proven with metrics
- [ ] Blog post published
- [ ] Portfolio-ready system

---

**Created:** 2026-01-18
**Status:** Ready to Execute
**Next Review:** After Stage 1 (2 weeks)
**Production Context:** Industry-standard LGTM Stack
