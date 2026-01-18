# AI Product Engineer Learning Roadmap Project

## Project Overview

### Core Idea
"Learning to become an AI Product Engineer together with AI agents"

This project is a meta-learning initiative that builds a multi-agent system to manage the learning process for transitioning to an AI PE role. By creating the tools, you naturally acquire AI engineering capabilities, and the results become your portfolio.

### Why This Project?

**1. Meta-Learning Effect**
- Building AI agents to become an AI engineer reflects the actual work cycle
- Directly experience prompt design, agent orchestration, and evaluation system construction

**2. Portfolio Value**
- Not "following tutorials" but solving a real problem (your own learning management)
- Clear story for "Why did you build this?"
- Gradual development process all recorded in Git history

**3. Practicality**
- Use and improve the tool daily
- Immediate iteration based on user feedback (yourself)

## Project Goals

### Learning Objectives
- [ ] AI agent design and implementation capabilities
- [ ] Prompt engineering (System Prompt, Few-shot, Chain-of-Thought)
- [ ] Agentic workflows (Planning → Execution → Evaluation)
- [ ] Complex state management with LangGraph
- [ ] Context management with Vector DB
- [ ] Evaluation and quality management system construction

### Deliverable Goals
- [ ] Functioning learning management agent system
- [ ] GitHub repository (code + docs + learning artifacts)
- [ ] Technical blog posts (development process and insights)
- [ ] Portfolio-ready project for resume

### Success Criteria
- [ ] **Phase 1 Complete**: Single feature (prompt reviewer) working and used daily
- [ ] **Phase 2 Complete**: 2+ agents collaborating
- [ ] **Phase 3 Complete**: Learning history tracking with Vector DB
- [ ] **Final**: Actually using for 3+ months with tangible learning benefits

## Repository Structure (Separate Repository)

This project is managed in a separate repository called `ai-pe-learning-agent`.

### Overall Structure

```
ai-pe-learning-agent/
├── README.md                    # Project introduction (for portfolio)
├── docs/
│   ├── ARCHITECTURE.md          # System architecture details
│   ├── DEVELOPMENT.md           # Development log (progress by phase)
│   ├── LEARNINGS.md             # AI Engineering learning summary
│   └── API.md                   # Usage and API documentation
│
├── src/                         # Agent system code
│   ├── agents/                  # Agent implementations
│   │   ├── prompt_reviewer.py
│   │   ├── code_critic.py
│   │   ├── assignment_generator.py
│   │   └── progress_tracker.py
│   ├── workflows/               # LangGraph workflows
│   │   ├── review_workflow.py
│   │   └── learning_cycle.py
│   ├── vector_db/               # Vector DB management
│   │   ├── embeddings.py
│   │   └── storage.py
│   ├── utils/                   # Utilities
│   └── cli.py                   # CLI interface
│
├── learning/                    # 🌟 Learning artifacts (CORE!)
│   ├── week-01-prompt-engineering/
│   │   ├── notes.md             # Learning notes
│   │   ├── exercises/           # Practice code
│   │   │   ├── exercise-01.py
│   │   │   └── exercise-02.py
│   │   ├── assignments/         # Agent-generated assignments
│   │   │   └── assignment-01.md
│   │   └── reviews/             # Code review results
│   │       └── review-01.json
│   │
│   ├── week-02-structured-output/
│   │   ├── notes.md
│   │   ├── exercises/
│   │   └── ...
│   │
│   ├── week-03-rag-basics/
│   ├── week-04-agents/
│   └── ...
│
├── experiments/                 # Experiments and prototypes
│   ├── prompt-variations/       # Prompt A/B testing
│   ├── evaluation-metrics/      # Evaluation metric experiments
│   └── langgraph-poc/           # LangGraph learning POC
│
├── data/                        # Agent system data
│   ├── vector_store/            # Vector DB storage
│   ├── learning_history.json   # Learning history
│   └── evaluations/             # Evaluation results
│
├── tests/                       # Tests
│   ├── test_agents.py
│   └── test_workflows.py
│
├── examples/                    # Usage examples
│   ├── 01-review-prompt.md
│   ├── 02-review-code.md
│   └── 03-weekly-plan.md
│
├── .env.example                 # Environment variable template
├── requirements.txt             # Python dependencies
├── pyproject.toml               # Poetry configuration
└── .gitignore
```

### Core: `learning/` Directory

This directory is the key differentiator of the project.

**Structure**:
```
learning/
├── week-01-prompt-engineering/
│   ├── notes.md                 # Learning notes
│   │   # - Core concepts summary
│   │   # - Reading material summaries
│   │   # - Personal insights
│   │
│   ├── exercises/               # Self-written code
│   │   ├── basic_prompt.py      # Basic prompt practice
│   │   ├── few_shot.py          # Few-shot learning
│   │   └── chain_of_thought.py  # CoT practice
│   │
│   ├── assignments/             # Agent-generated assignments
│   │   ├── assignment-01.md     # "Build JSON extractor with Pydantic"
│   │   └── solution-01.py       # Submitted solution
│   │
│   └── reviews/                 # Code Critic agent review results
│       ├── review-01.json       # First submission (failed)
│       ├── review-02.json       # Resubmission (passed)
│       └── final-feedback.md    # Final feedback summary
│
├── week-02-structured-output/
│   └── ...
```

**Weekly Template**:
```markdown
# Week N: [Topic]

## Learning Objectives
- [ ] Objective 1
- [ ] Objective 2

## Learning Resources
- [Resource title](link)
- [Resource title](link)

## Core Concepts
### Concept 1
Explanation...

### Concept 2
Explanation...

## Practice Work
### Exercise 1: [Title]
- Purpose: ...
- Code: `exercises/exercise-01.py`
- Result: ...
- Learnings: ...

## Assignments
### Assignment 1 (Agent-generated)
- Content: `assignments/assignment-01.md`
- Submission: `assignments/solution-01.py`
- Review result: `reviews/review-01.json`
- Improvements: ...

## Weekly Reflection
- Most challenging:
- Most interesting:
- Apply next week:

## References
- ...
```

### Portfolio Value

Benefits of this structure:

**1. Transparent Learning Process**
- Weekly learning content fully public
- Mistakes and improvements visible (review-01.json → review-02.json)
- Shows "growth process" not "perfect results"

**2. Dogfooding Evidence**
- Managing your own learning with agents you built
- `reviews/` directory proves agents actually work

**3. Real-world Examples**
- When recruiters ask "How does this work?"
- Show actual files like `learning/week-03-rag-basics/reviews/review-01.json`

**4. Blog Post Material**
- Each week's `notes.md` becomes blog post draft
- Publish as series like "Week 3: What I Learned Building RAG"

**5. Interview Preparation**
- "Most challenging technical problem?"
  → Reference `learning/week-05-langgraph/notes.md` "Weekly Reflection"
- "Failure and recovery experience?"
  → Show failed → improved → passed cases from `reviews/` directory

### .gitignore Considerations

Exclude sensitive information:
```gitignore
# Environment variables
.env

# Data containing API keys
data/vector_store/*.db
data/learning_history.json

# Private notes (if you don't want to share)
learning/**/*private*.md

# Failed experiments (optional)
experiments/failed/
```

But make most learning process public:
```
# Commit these!
learning/**/notes.md
learning/**/exercises/
learning/**/assignments/
learning/**/reviews/
```

## System Architecture

### Overall Vision: Multi-Agent Learning Management System

```
┌─────────────────────────────────────────────────────────────┐
│                   AI PE Roadmap Agent                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Curriculum   │  │  Assignment  │  │    Code      │       │
│  │  Architect   │  │  Generator   │  │   Critic     │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
│         │                 │                 │                │
│         └─────────────────┼─────────────────┘                │
│                           │                                  │
│                  ┌────────▼─────────┐                        │
│                  │    Progress      │                        │
│                  │    Tracker       │                        │
│                  └──────────────────┘                        │
│                           │                                  │
│                  ┌────────▼─────────┐                        │
│                  │   Vector DB      │                        │
│                  │ (Learning Log)   │                        │
│                  └──────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

### Agent Role Definitions

#### 1. Curriculum Architect (Planner)
**Responsibility**: Weekly learning goals and reading curation
**Input**: Overall 6-month roadmap, user's current level
**Output**: This week's concepts, recommended resources, learning sequence

#### 2. Assignment Generator (Task Creator)
**Responsibility**: Generate practical assignments applying learned theory
**Input**: This week's learned concepts
**Output**: Specific coding tasks (e.g., "Build JSON extractor with Pydantic")

#### 3. Code Critic (Code Reviewer)
**Responsibility**: Quality check and feedback on submitted code
**Input**: User-written code
**Output**:
- AI Engineering Best Practice compliance
- Improvement suggestions (prompt injection defense, error handling, token efficiency)
- Pass/rewrite judgment

#### 4. Progress Tracker (Progress Manager)
**Responsibility**: Save learning history and suggest review schedule
**Input**: Completed assignments, review feedback
**Output**:
- Learning progress status
- Identify weak concepts
- Items requiring review

### Agentic Workflow

```
1. [Planning Phase]
   - Curriculum Architect: Select this week's learning keywords (e.g., RAG)
   - Output: Generate learning/week-N-[topic]/notes.md template

2. [Learning Phase]
   - User: Study materials and write notes.md
   - User: Write practice code in exercises/ directory

3. [Assignment Phase]
   - Assignment Generator: Create assignment
   - Output: learning/week-N/assignments/assignment-01.md

4. [Submission Phase]
   - User: Write assignments/solution-01.py

5. [Evaluation Loop]
   - Code Critic: Analyze code and provide feedback
   - Output: reviews/review-01.json
   - IF low quality → Request rewrite (review-02.json)
   - ELSE → Pass

6. [Memory Logging]
   - Progress Tracker: Save learning results to Vector DB
   - Output: Update data/learning_history.json
   - Reflect in next week's plan
```

## Phase-by-Phase Implementation Plan

### Phase 0: Project Preparation (1 week)
**Goal**: Project design and environment setup

**Tasks**:
- [x] Write project planning document (this document)
- [ ] Create separate Git repository (`ai-pe-learning-agent`)
- [ ] Initialize repository structure
- [ ] Decide tech stack
- [ ] Setup development environment (Python, Claude API)
- [ ] Create `learning/week-01-prompt-engineering/` directory
- [ ] Detailed design for first Phase

**Deliverables**:
- Git repository with initial structure
- README.md (project introduction)
- docs/ARCHITECTURE.md (system design)
- learning/week-01/ template
- Development environment ready

---

### Phase 1: MVP - Prompt Reviewer (2 weeks)
**Goal**: Get a single feature working perfectly for actual use

**Core Feature**:
CLI tool that evaluates prompt quality and suggests improvements

**Tech Stack** (simplified):
- Python 3.11+
- Claude API (Anthropic SDK)
- File-based storage (JSON)
- CLI interface (argparse)

**Learning Topics** (Week 1-2):
- [ ] **Advanced Prompt Patterns**: Few-shot, Chain-of-Thought, ReAct
- [ ] **Structured Output**: Enforce JSON Schema using Pydantic
- [ ] **Guardrails**: Auto-retry logic when response format breaks
- [ ] **JSON Mode vs Function Calling**: Pros/cons and use cases

**Tasks**:
- [ ] Implement `src/agents/prompt_reviewer.py`
- [ ] Design and document System Prompt
  - Include Few-shot examples
  - Chain-of-Thought induction strategy
- [ ] Define Structured Output (JSON) response structure
  - Validate responses with Pydantic models
- [ ] Implement Guardrails
  - Auto-retry on format deviation (max 3 times)
  - Error handling and logging
- [ ] Implement CLI interface (`src/cli.py`)
- [ ] Establish evaluation criteria:
  - Clarity (1-10 score)
  - Hallucination risk (1-10 score)
  - Improvement suggestions (specific text)
- [ ] Test: Validate with 10 diverse prompts
- [ ] Write README (usage, examples)
- [ ] Write practice code in `learning/week-01/exercises/`
  - `few_shot.py`: Few-shot learning practice
  - `chain_of_thought.py`: CoT pattern practice
  - `react_pattern.py`: ReAct pattern practice
- [ ] Document real usage cases in `examples/01-review-prompt.md`

**Practice Assignment 0**:
```bash
python src/cli.py review-prompt "Summarize this article"

# Example output:
# {
#   "clarity_score": 3,
#   "hallucination_risk": 7,
#   "feedback": "Prompt is too vague. 'this article' is unclear.",
#   "improved_version": "Summarize the 3 main arguments from the following article, each in 1-2 sentences: [article content]"
# }

# Save this result to learning/week-01/reviews/review-01.json
```

**Success Criteria**:
- [ ] Review every prompt you write daily with this tool
- [ ] After 1 week of use, feel actual prompt quality improvement
- [ ] Accumulate at least 5 review results in `learning/week-01/`

---

### Phase 2: Add Code Reviewer (2 weeks)
**Goal**: Add second agent to build multi-agent foundation

**Core Feature**:
Review AI code and suggest Best Practices

**New Technologies**:
- Code parsing (basic AST analysis)
- State sharing between agents (simple JSON)

**Learning Topics** (Week 3-4):
- [ ] **Validation & Retry Logic**: Auto-recovery design when AI results are wrong
- [ ] **Hallucination Prevention**: Response validation and fact-checking logic
- [ ] **Cost Optimization**: Token usage tracking and caching strategies
- [ ] **Security**: Prompt injection pattern detection and defense

**Tasks**:
- [ ] Implement `src/agents/code_critic.py`
- [ ] Define review checklist (expanded):
  - **Prompt injection defense**: Check user input sanitization
  - **Error handling**: try-except structure, meaningful error messages
  - **Validation & Retry**: Auto-retry logic on failure
  - **Hallucination prevention**: Response validation mechanism
  - **Token efficiency**: Remove unnecessary prompt duplication
  - **API call optimization**: Caching, rate limiting
  - **Guardrails**: Format deviation prevention logic
- [ ] Integrate prompt reviewer and code reviewer
  - Example: "Review the prompt used in this code too"
- [ ] Pass/rewrite judgment logic
  - Score by severity (Critical/Important/Beneficial)
  - Pass criteria: 0 Critical, ≤ 2 Important
- [ ] Create `learning/week-02-structured-output/` directory
- [ ] Document assignment and review cycle
- [ ] Experiment with various validation patterns in `experiments/validation-patterns/`

**Learning Integration**:
```bash
# Submit assignment
python src/cli.py review-code learning/week-02/assignments/solution-01.py

# Review result saved
# → learning/week-02/reviews/review-01.json

# If failed
# → learning/week-02/reviews/review-02.json created
```

**Success Criteria**:
- [ ] Review every AI code you write with this tool
- [ ] Receive and improve from "rewrite" feedback at least 3 times
- [ ] At least 2 failed→success cases in `learning/week-02/reviews/`

---

### Phase 3: Vector DB Integration (2 weeks)
**Goal**: Store learning history and utilize context

**Core Features**:
- Search past learning content
- Find similar assignments
- Auto-identify weak concepts

**New Technologies**:
- Supabase Vector (or Chroma)
- Embedding (OpenAI text-embedding-3-small)
- Similarity search

**Learning Topics** (Week 5-6):
- [ ] **RAG Pipeline**: Document chunking, embedding, storage, retrieval
- [ ] **Hybrid Search**: Combine keyword + vector search
- [ ] **Re-ranking**: Improve accuracy by reordering search results
- [ ] **Data Cleaning**: Process unstructured data for AI readability

**Tasks**:
- [ ] Setup Vector DB environment
- [ ] Design learning data structure
  - Metadata: week, topic, difficulty, status
  - Text: notes, code, reviews
- [ ] Implement `src/vector_db/embeddings.py`
  - Chunking strategy (semantic chunking)
  - Embedding generation and caching
- [ ] Implement `src/vector_db/search.py`
  - **Hybrid Search**: BM25 (keyword) + Vector (semantic similarity)
  - **Re-ranking**: Cross-encoder reordering
  - Filter search results (using metadata)
- [ ] Implement `src/agents/progress_tracker.py`
- [ ] Review recommendation feature
  - Time-based: After 1 day, 1 week, 1 month
  - Weakness-based: Prioritize failed assignments
- [ ] Learn RAG in `learning/week-03-rag-basics/`
- [ ] Save learned content to Vector DB
- [ ] Experiment with various chunking strategies in `experiments/chunking-strategies/`

**Learning Integration**:
```bash
# Search past learning content
python src/cli.py search "Content related to RAG"

# Output:
# Week 3: RAG Basics (similarity: 0.95)
# Week 5: Vector DB Integration (similarity: 0.87)

# Identify weak concepts
python src/cli.py weak-concepts

# Output:
# - Prompt injection defense (2/5 assignments failed)
# - Error handling (1/3 reviews mentioned)
```

**Success Criteria**:
- [ ] Queries like "Show past RAG-related learning" work
- [ ] Automatically identify 3 weak concepts
- [ ] Learning history embeddings saved in `data/vector_store/`

---

### Phase 4: LangGraph Migration + Evaluation System (2 weeks)
**Goal**: Systematize complex workflows with LangGraph and build performance evaluation system

**Core Features**:
- State-based workflows
- Conditional branching (retry based on evaluation)
- Circular structure (feedback loops)
- Automated AI performance evaluation

**New Technologies**:
- LangGraph
- StateGraph
- Conditional Edges
- **LLM-as-a-Judge** (KEY!)

**Learning Topics** (Week 7-8):
- [ ] **LangGraph**: State-based agent orchestration
- [ ] **Evaluation (Evals)**: Quantitative AI performance measurement
- [ ] **LLM-as-a-Judge**: Auto-grade lower model responses with upper model
- [ ] **Golden Dataset**: Build reference points for good responses
- [ ] **A/B Testing**: Compare before/after prompt modifications

**Tasks**:
- [ ] Convert existing agents to LangGraph nodes
- [ ] Design workflow graph
- [ ] Define state management structure
- [ ] Implement evaluation loop
- [ ] Implement `src/workflows/learning_cycle.py`
- [ ] **Implement LLM-as-a-Judge system**:
  - [ ] Create `src/evaluation/judge.py`
  - [ ] Use GPT-4o as Judge to evaluate Claude responses
  - [ ] Evaluation criteria: Accuracy, relevance, completeness, clarity
  - [ ] Scoring (1-10 points) and improvement suggestions
- [ ] **Build Golden Dataset**:
  - [ ] `data/evaluations/golden_dataset.json`
  - [ ] 10+ excellent prompt-response pairs
  - [ ] Failure cases and improvement examples
- [ ] **A/B Testing Framework**:
  - [ ] Prompt version management
  - [ ] Auto performance comparison (before/after)
  - [ ] Result visualization (simple table format)
- [ ] Learn LangGraph in `learning/week-04-langgraph/`
- [ ] Apply learned content to actual system

**Success Criteria**:
- [ ] Complex workflows visually represented
- [ ] Debugging becomes easier
- [ ] Circular structure (retry logic) works clearly
- [ ] **Can prove performance improvement numerically** (e.g., accuracy 70% → 85%)

---

### Phase 5: Assignment Generator + Optimization + Integration (2 weeks)
**Goal**: Integrate all 4 agents and optimize costs

**Core Features**:
- Auto assignment generation
- Full workflow automation
- Cost optimization (Semantic Caching)
- Dashboard (optional)

**New Technologies**:
- Streamlit (or Next.js) - optional
- **Semantic Caching**
- **Streaming responses**

**Learning Topics** (Week 9-10):
- [ ] **Cost Optimization**: Reduce API costs with Semantic Caching
- [ ] **UX Optimization**: Improve perceived speed with Streaming
- [ ] **Multi-Agent Collaboration**: Sequential/parallel execution of multiple agents
- [ ] **Monitoring**: Track token usage, response time, costs

**Tasks**:
- [ ] Implement `src/agents/assignment_generator.py`
- [ ] Implement `src/agents/curriculum_architect.py`
- [ ] **Implement Semantic Caching**:
  - [ ] Create `src/utils/semantic_cache.py`
  - [ ] Detect similar queries with question embeddings
  - [ ] Return cached response if similarity > 0.95
  - [ ] Goal: Identical/similar questions → $0 cost
- [ ] **Implement Streaming responses**:
  - [ ] Server-Sent Events (SSE) or async generator
  - [ ] Display responses in real-time
  - [ ] Improve user experience
- [ ] **Monitoring Dashboard** (optional):
  - [ ] `src/monitoring/tracker.py`
  - [ ] Track token usage
  - [ ] Calculate costs (per input/output token)
  - [ ] Cache hit rate
  - [ ] Simple CLI command for statistics
- [ ] Connect entire workflow
- [ ] (Optional) Build web dashboard
- [ ] Use complete system in `learning/week-05-multi-agent/`
- [ ] Update final README (complete usage examples)
- [ ] **Document performance improvements**:
  - Before: Cost/response time
  - After: Cost/response time
  - Calculate improvement rate

**Fully Automated Workflow**:
```bash
# Start weekly learning
python src/cli.py weekly-cycle --week 6 --topic "Evaluation Metrics"

# Auto execution:
# 1. Curriculum Architect: Create learning/week-06-evaluation-metrics/
# 2. Recommend learning resources
# 3. (After user studies)
# 4. Assignment Generator: Create assignments/assignment-01.md
# 5. (After user writes code)
# 6. Code Critic: Auto-review and save to reviews/
# 7. Progress Tracker: Update Vector DB
```

**Success Criteria**:
- [ ] Full cycle automated: "Generate this week's plan" → assignment → review → save
- [ ] Actually use for at least 4 weeks
- [ ] 12+ weeks of learning records in `learning/` directory

---

## Tech Stack

### Language Strategy

**Python-Centric Approach** (this project):
- **Primary**: Python 3.11+
- **Reason**: Center of AI ecosystem, optimal for learning tool development
- **Advantage**: LangChain, LangGraph, most AI libraries prioritize Python

**TypeScript Later** (optional):
- **When**: After Phase 5, when web UI is needed
- **Purpose**: Next.js, Vercel AI SDK for productization stage
- **Strategy**: Complete core logic in Python, add TypeScript if needed

### Framework Strategy

**Go Deep on One**:
- **Choice**: LangGraph (optimal for state-based workflows)
- **Reason**:
  - Supports complex agent orchestration
  - Easy to implement circular structures (retry logic)
  - Provides visualization and debugging tools
- **Caution**: Don't try to learn all of LangChain
  - Focus intensively on LangGraph only
  - Selectively use necessary components

### Essential (Phase 1-2)
- **Language**: Python 3.11+
- **LLM**: Claude 3.5 Sonnet (Anthropic API)
- **Storage**: JSON files
- **Interface**: CLI (argparse)
- **Validation**: Pydantic (Structured Output)

### Expansion (Phase 3-4)
- **Vector DB**: Supabase Vector or Chroma
- **Embedding**: OpenAI text-embedding-3-small
- **Orchestration**: LangGraph
- **Dependency Management**: Poetry or uv
- **Evaluation**: LLM-as-a-Judge (GPT-4o)

### Optional (Phase 5)
- **Frontend**: Streamlit (or Next.js)
- **Deployment**: Docker, Railway/Render
- **Monitoring**: LangSmith or Helicone (optional)

### Development Tools
- **Version Control**: Git + GitHub
- **Code Quality**: ruff, mypy
- **Documentation**: Markdown, docstrings
- **Testing**: pytest

## Expected Learning Outcomes

### Technical Capabilities
- **AI Engineering Fundamentals**
  - Prompt engineering (System Prompt, Few-shot, Chain-of-Thought)
  - Structured Output design
  - Token optimization

- **Agent Design**
  - Role separation and responsibility definition
  - Inter-agent communication
  - State management

- **Evaluation Systems**
  - Quality metrics definition
  - Automated evaluation logic
  - Feedback loop implementation

- **Vector DB Utilization**
  - Embedding generation and storage
  - Similarity search
  - Context management

- **Complex Workflows**
  - State-based flow with LangGraph
  - Conditional branching
  - Circular structures (retry logic)

### Product Capabilities
- Real problem definition and solution design
- MVP-first development strategy
- Gradual feature expansion
- User feedback integration (you are the user)

### Portfolio Value
- "Why did you build this?" → Clear motivation
- "How did you approach it?" → Phase-by-phase evolution
- "What difficulties?" → Summarized in technical blog
- "Results?" → 12 weeks of learning records in `learning/` directory

## Risks and Mitigation Strategies

### Risk 1: Scope Creep
**Problem**: Failing to complete by trying to build perfect system

**Mitigation**:
- Set clear completion criteria per Phase
- Each Phase independently usable
- "Works even if not perfect → next stage"

### Risk 2: Only Focus on Tool Development
**Problem**: Not properly learning AI engineering fundamentals

**Mitigation**:
- 70% of weekly time on concept learning/practice
- Only 30% on tool development
- Study related concepts before each Phase
- Must fill `learning/` directory (no coding without learning)

### Risk 3: Excessive Tech Stack
**Problem**: Trying to learn too many technologies at once

**Mitigation**:
- Phase 1-2 use minimal technologies only
- Add new technologies one at a time
- "Learn when needed" approach

### Risk 4: Lack of Motivation
**Problem**: Losing interest and giving up midway

**Mitigation**:
- Each Phase produces "actually usable" results
- Small achievements weekly (completing `learning/week-N/`)
- Maintain accountability by sharing on technical blog
- Growing `learning/` directory itself motivates

## Portfolio Utilization Strategy

### GitHub Repository README Structure

```markdown
# AI PE Learning Agent

Multi-agent system managing the learning process to become an AI Product Engineer

## 🎯 Project Background

This project started with a meta-learning approach: "Building AI agents to become an AI engineer."
Naturally learned prompt engineering, agent orchestration, and evaluation systems while creating the tools.

## 🏗️ System Architecture

[System diagram]

4 collaborating agents:
- **Curriculum Architect**: Generate weekly learning plans
- **Assignment Generator**: Auto-generate practice assignments
- **Code Critic**: Code review based on AI Best Practices
- **Progress Tracker**: Track learning history and recommend reviews

## 📚 Learning Process (Dogfooding)

Built and used this system simultaneously. See 12 weeks of learning records in [`learning/`](./learning) directory:

- [Week 1: Prompt Engineering](./learning/week-01-prompt-engineering)
- [Week 2: Structured Output](./learning/week-02-structured-output)
- [Week 3: RAG Basics](./learning/week-03-rag-basics)
- ...

Each week includes:
- Learning notes (`notes.md`)
- Practice code (`exercises/`)
- Agent-generated assignments (`assignments/`)
- Code review results (`reviews/`)

**Example**: [Week 2 code review failure → improvement case](./learning/week-02/reviews/)

## 🚀 Key Features

[Usage example screenshots/GIFs]

## 🛠️ Tech Stack

- Python 3.11+ / LangGraph / Claude API
- Vector DB (Supabase) / OpenAI Embeddings

## 📖 Documentation

- [Architecture](./docs/ARCHITECTURE.md) - Detailed system design
- [Development Log](./docs/DEVELOPMENT.md) - Development process by Phase
- [Learnings](./docs/LEARNINGS.md) - Core AI Engineering learnings

## 💡 Key Insights

What I learned through this project:
- Meta-prompting for automated prompt evaluation
- Personalized learning recommendations with Vector DB
- Quality assurance loop with LangGraph's circular structure

Details: [Technical blog series](#)

## 🎓 Portfolio

This project is a portfolio for transitioning to AI Product Engineer career.

**Contact**: [email]
```

### Technical Blog Series

**Writing Strategy**:
- **Frequency**: Weekly or biweekly (12+ posts over 6 months)
- **Format**: Focus on "solving technical challenges" (not simple summaries)
- **Structure**: Before/After comparison, share failures, quantitative results

**Post List**:

1. **"Building AI PE Learning Roadmap Agent - 0. Planning"**
   - Why I started this project
   - Meta-learning approach
   - Phase-by-phase plan

2. **"Building Prompt Reviewer - System Prompt Design Process"**
   - Conditions for good System Prompt
   - Utilizing Structured Output
   - Actual review result examples
   - **Before/After**: Initial vs optimized prompt

3. **"100% Control AI Responses with Guardrails"**
   - Format deviation problem and solution
   - Implementing auto-retry logic
   - **Result**: Response format consistency 60% → 99%

4. **"Implementing Code Review Agent - Auto Best Practice Checks"**
   - Defining AI code quality metrics
   - Security vulnerability detection with AST parsing
   - Pass/rewrite judgment logic
   - **Failure cases**: Vulnerabilities found in first submission

5. **"How I Reduced AI Hallucination to 0%"**
   - Defining hallucination problem
   - Validation & Retry logic design
   - **Before/After**: Hallucination rate 25% → 0%

6. **"Managing Learning History with Vector DB"**
   - Embedding strategy
   - Hybrid Search + Re-ranking implementation
   - Review recommendations with similarity search
   - Auto-identify weak concepts
   - **Performance**: Search accuracy measurement results

7. **"LLM-as-a-Judge: Evaluating AI with AI"**
   - Need for evaluation system
   - Auto-grading Claude responses with GPT-4o
   - Golden Dataset building process
   - **Result**: Quantifying prompt improvement effects

8. **"Handling Complex Workflows with LangGraph"**
   - State-based workflow design
   - Conditional branching and circular structures
   - Infinite loop problem and solution
   - Debugging experience

9. **"70% Cost Reduction with Semantic Caching"**
   - Cost problem analysis
   - Similar question detection mechanism
   - **Before/After**: Monthly API cost comparison

10. **"Multi-Agent Collaboration: 4 Agents Working Together"**
    - State sharing between agents
    - Sequential vs parallel execution strategy
    - Real workflow execution examples

11. **"Insights from 12 Weeks of Learning Data"**
    - Vector DB analysis results
    - Top 3 most difficult concepts
    - Learning pattern analysis

12. **"3 Months Studying with AI Agents - Retrospective"**
    - Actual usage experience
    - Most useful features
    - What to improve
    - Next project plans

### Resume Optimization

**One-line Project Description**:
"Multi-agent system project building the learning process itself as an AI system for transitioning to AI Product Engineer"

**Include Quantitative Results** (important!):
- **Users**: Self + 10+ testers (when Phase 5 complete)
- **Learning Records**: 12 weeks, 50+ assignments, 100+ code reviews
- **Performance Improvements**:
  - Prompt quality: 40% → 85% accuracy improvement (LLM-as-a-Judge measured)
  - Response format consistency: 60% → 99% (Guardrails introduction)
  - Hallucination: 25% → 0% (Validation logic)
- **Cost Reduction**:
  - API cost 70% decrease (Semantic Caching)
  - Cache hit rate: 45%
- **Technical Blog**: 12 posts, cumulative views (tracked)
- **Code**: Python 5,000+ lines, test coverage 80%+

**Project Section Example**:
```
AI PE Learning Agent (2026.01 - 2026.06)
- Developed multi-agent system for managing AI learning process
- 4 collaborating agents with LangGraph (prompt reviewer, code evaluator, progress manager)
- Improved prompt quality 40% → 85% with LLM-as-a-Judge (45%p improvement)
- Reduced API cost 70% with Semantic Caching introduction
- Built learning history search system with Vector DB + Hybrid Search
- Wrote 12 technical blog posts (focused on solving technical challenges)
- Tech: Python, LangGraph, Claude API, Vector DB, Pydantic
```

### Interview Preparation

**Interview Question Responses**:

Q: "What was the biggest technical challenge in this project?"
A: "[Reference learning/week-05-langgraph/notes.md 'Weekly Reflection'] Implementing the code review feedback loop using LangGraph's circular structure. Initially had infinite loop problems, but solved with maximum retry counts and state tracking. Result was significantly improved code quality, with pass rate increasing from 40% to 85%."

Q: "Failure experience and recovery process?"
A: "During Week 2, first assignment submission, Code Critic agent pointed out prompt injection vulnerability. [Show reviews/review-01.json] There was no user input sanitization. I improved and resubmitted [review-02.json] and passed. This experience made me realize the importance of AI security, and I added input validation as mandatory for all subsequent code."

Q: "What did you actually learn from this project?"
A: "[Show learning/ directory] Here are 12 weeks of learning records. Each week went through theory learning, practice, assignment completion, and code review, all managed through this agent system. Especially with LLM-as-a-Judge, I confirmed numerically that my prompt quality actually improved by 45%."

Q: "Why did you build this project?"
A: "While preparing for AI PE career transition, I judged that actually designing and implementing AI agents would be more effective than just attending lectures. And I improved in real-time while using the tool I built myself (Dogfooding). Through this process, I also gained practical optimization experience like reducing API costs by 70%."

Q: "Most proud achievement?"
A: "Reducing API costs by 70% with Semantic Caching implementation. Detected similar queries with question embeddings, returning cached responses when similarity is 95%+ . Actually achieved 45% cache hit rate, reducing monthly API costs from $150 to $45. When I summarized this experience on my blog, many people showed interest."

## Next Steps

### Immediate Action (This Week)
- [ ] Re-read and revise/supplement this document
- [ ] Create separate Git repository (`ai-pe-learning-agent`)
- [ ] Initialize repository structure (create directories)
- [ ] Setup Python development environment
- [ ] Issue Claude API key and test
- [ ] Write `learning/week-01-prompt-engineering/` template
- [ ] Write Phase 1 detailed design document (docs/DEVELOPMENT.md)

### Questions to Clarify
- [ ] How much time can you invest daily?
- [ ] When to set Phase 1 target completion date?
- [ ] Which platform for technical blog? (Medium, personal blog, velog, etc.)
- [ ] Repository publicity strategy?
  - Public from start? (Share learning process transparently)
  - Private first, public after Phase 3 complete?
- [ ] `learning/` directory publicity scope?
  - Make all mistakes and failures public? (recommended)
  - Only publish successes?

---

**Last Updated**: 2026-01-18
**Document Version**: 3.0 (test.md insights integrated)
**Author**: Jay Kim

**Version History**:
- v3.0 (2026-01-18): Integrated specific technologies and strategies from test.md
  - Detailed learning topics per Phase
  - Added specific technologies like LLM-as-a-Judge, Semantic Caching
  - Added quantitative performance measurement criteria
  - Enhanced technical blog strategy
- v2.0 (2026-01-18): Integrated learning artifacts (learning/) directory
- v1.0 (2026-01-18): Initial project planning
