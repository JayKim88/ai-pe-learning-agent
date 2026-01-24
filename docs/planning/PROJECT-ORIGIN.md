# Project Origin: AI PE Roadmap Agent

> Original idea that sparked this project

---

This is a brilliant idea! **"Learning to become an AI Product Engineer together with AI agents"** - this concept itself becomes a project that demonstrates the core competencies of the position you're aiming for.

Let's name this workflow the **'AI PE Roadmap Agent'** and design an agentic structure to build it. You will naturally master Phase 3 (Agentic Workflows) capabilities while creating this agent.

## 🤖 AI PE Roadmap Agent: System Architecture

This agent is not just a simple chatbot, but a **'Multi-Agent System'** that manages your learning state and reviews practice assignments.

### 1. Agent Composition (Roles)

**Curriculum Architect (Planner):**
- Curates weekly detailed learning goals and reading materials based on the 6-month roadmap, tailored to your current level

**Assignment Generator (Task Creator):**
- Generates 'small project' assignments that require writing actual code based on learned theory
- Example: "Create a JSON extractor using the Pydantic you learned today"

**Code Critic (Code Reviewer):**
- Reviews whether your submitted code follows AI Engineering Best Practices
- Checks: Prompt injection defense, error handling, token efficiency, etc.

**Progress Tracker (Progress Manager):**
- Stores learning history in Vector DB
- Suggests review schedules if there are weak concepts

### 2. Agentic Workflow (Flow)

1. **[Planning Phase]:** Planner agent selects this week's learning keywords (e.g., RAG)
2. **[Execution Phase]:** You study and write code
3. **[Evaluation Loop]:** Reviewer agent analyzes your code. If quality is low, it doesn't pass and provides modification guidance (this process itself is the 'Evaluation' technique you'll learn)
4. **[Memory Logging]:** Learning results and feedback are stored in Vector DB and reflected in next week's plan

## 🛠️ Tech Stack for Building This Agent (Doubles as Practice)

You'll directly use these technologies while building the agent:

- **Orchestration:** LangGraph (optimal for state-based circular workflow implementation)
- **Language:** Python (AI ecosystem integration) or TypeScript (frontend integration)
- **Database:** Supabase Vector (storing learning records and concepts)
- **Interface:** Streamlit or Next.js (for dashboard visualization)

## 🚀 Phase 1 Action Items: Building the "Brain" of the Agent

As the starting point of this project, how about building the **[Reviewer Agent]** first?

### Practice Assignment 0:

**Feature:**
- Takes user-written prompts as input
- Scores "the likelihood this prompt will cause hallucination"
- Provides improvement suggestions

**Core Technologies:**
- System Prompt design
- Structured Output (JSON response)

Shall I guide you through the first step to actually build this 'learning assistant' agent (e.g., setting up LangGraph environment and basic agent design)? This will become your first 'real' portfolio project as an AI Product Engineer.

---

**Document Created:** Original idea discussion
**Purpose:** Record the genesis of the AI PE Learning Agent project
**Key Insight:** Meta-learning approach - building AI agents to become an AI engineer
