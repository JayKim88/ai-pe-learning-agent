# AI Product Engineer Learning Roadmap (TypeScript Edition)

> **Purpose:** 13-week accelerated learning plan leveraging TypeScript expertise
> **For:** Agent Pipeline Specialist career positioning
> **Timeline:** 3 months core learning (13 weeks)

---

## Strategic Overview

### Core Philosophy

"Learning to become an AI Product Engineer by building AI agents in TypeScript"

This project leverages your existing TypeScript/React expertise from VNTG to fast-track AI agent development. Instead of learning Python first, we build agents in TypeScript and defer infrastructure to deployment phase.

### Why TypeScript-First?

**Leverage Existing Expertise:**
- 4+ years TypeScript/React experience at VNTG & Bold9
- Current work: AI-powered code generation at VNTG
- sdd-system project: 9-agent architecture in TypeScript
- Faster learning curve → more time for agent concepts

**Timeline Efficiency:**
- Python approach: 24 weeks (6 months)
- TypeScript approach: 13 weeks (3 months core)
- Skip infrastructure basics (learn when deploying)
- Focus on agent development and orchestration

**Career Positioning:**
```
VNTG (TypeScript AI DevTools)
    +
sdd-system (9-agent architecture)
    +
ai-pe-learning-agent (Agent Pipeline)
    =
Agent Pipeline Specialist
```

---

## Revised Timeline: 13 Weeks

### Learning Structure

**Each Phase: 2 weeks learning + 1 week implementation**

- Weeks 1-2: Learning concepts, exercises, theory
- Week 3: Implementation, integration, testing
- Continuous documentation in `learning/` directory

**Weekly Time Commitment:**
- Weekdays: 1-2 hours (learning, reading, exercises)
- Weekends: 4-8 hours (implementation, documentation)
- Total: 10-15 hours/week

### Phase Breakdown

| Phase | Duration | Focus | Deliverable |
|-------|----------|-------|-------------|
| Week 0 (Optional) | 1 week | TypeScript + AI SDK setup | Hello Claude in TypeScript |
| Phase 1 | 3 weeks | Single Agent | Prompt Reviewer CLI tool |
| Phase 2 | 3 weeks | Multi-Agent Collaboration | Code Critic + Orchestration |
| Phase 3 | 3 weeks | Memory & Context | Progress Tracker + Vector DB |
| Phase 4 | 2 weeks | Monitoring & Evaluation | LangSmith + LLM-as-Judge |
| Phase 5 | 2 weeks | Deployment & Portfolio | Vercel + Documentation |
| **Total** | **13 weeks** | | **Production-ready portfolio** |

### Extended Timeline (Optional)

**Phase 5b: Advanced Infrastructure (Weeks 14-17)**
- Docker, Kubernetes, LGTM Stack
- Agent deployment to K8s
- Full observability setup

**Phase 6: Market Fit (Weeks 18-24)**
- Blog posts (3+)
- Resume polishing
- Job applications (10+)
- Interview preparation

---

## Technology Stack

### Core Stack (TypeScript)

**Language & Runtime:**
- TypeScript 5+
- Node.js 20+
- tsx (TypeScript execution)

**AI & LLM:**
- Anthropic SDK (`@anthropic-ai/sdk`)
- Zod (validation, replaces Pydantic)
- LangSmith (monitoring)

**Data & Storage:**
- Supabase Vector (or Pinecone)
- OpenAI Embeddings API
- JSON files (initial storage)

**Orchestration:**
- Custom orchestration (inspired by sdd-system)
- LangGraph.js (if needed in Phase 4)

**Deployment:**
- Vercel (serverless functions)
- Environment variables
- Production best practices

**Development Tools:**
- Commander.js (CLI)
- Vitest (testing)
- Prettier + ESLint (code quality)

### Key Dependencies

```json
{
  "dependencies": {
    "@anthropic-ai/sdk": "^0.27.0",
    "commander": "^12.0.0",
    "zod": "^3.22.0",
    "dotenv": "^16.4.0",
    "langsmith": "^0.1.0",
    "@supabase/supabase-js": "^2.39.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "tsx": "^4.7.0",
    "typescript": "^5.3.0",
    "vitest": "^1.2.0",
    "prettier": "^3.2.0",
    "eslint": "^8.56.0"
  }
}
```

### Stack Comparison

| Aspect | Python Approach | TypeScript Approach |
|--------|----------------|---------------------|
| Language | Python 3.11+ | TypeScript 5+ |
| Timeline | 24 weeks (6 months) | 13 weeks (3 months) |
| Infrastructure | Phase 0a (weeks 1-4) | Phase 5b (optional) |
| Validation | Pydantic | Zod |
| Orchestration | LangGraph | Custom (sdd-system inspired) |
| Monitoring | LGTM Stack | LangSmith |
| Deployment | Kubernetes | Vercel |
| Vector DB | Chroma/Qdrant | Supabase Vector |

---

## Project Structure

```
ai-pe-learning-agent/
├── src/
│   ├── agents/
│   │   ├── base-agent.ts           # Base agent class
│   │   ├── prompt-reviewer.ts      # Phase 1
│   │   ├── code-critic.ts          # Phase 2
│   │   └── progress-tracker.ts     # Phase 3
│   ├── orchestration/
│   │   ├── sequential.ts           # Sequential execution
│   │   └── parallel.ts             # Parallel execution
│   ├── vector-db/
│   │   ├── client.ts               # Vector DB client
│   │   ├── embeddings.ts           # Embedding generation
│   │   └── search.ts               # Similarity search
│   ├── monitoring/
│   │   └── langsmith.ts            # LangSmith integration
│   ├── utils/
│   │   ├── anthropic.ts            # Anthropic SDK wrapper
│   │   └── validation.ts           # Zod schemas
│   └── cli.ts                      # CLI interface
│
├── learning/
│   ├── week-01-anthropic-sdk/
│   │   ├── notes.md
│   │   ├── exercises/
│   │   │   ├── basic-chat.ts
│   │   │   └── structured-output.ts
│   │   └── reviews/
│   ├── week-02-prompt-patterns/
│   │   ├── notes.md
│   │   ├── exercises/
│   │   │   ├── few-shot.ts
│   │   │   └── chain-of-thought.ts
│   │   └── reviews/
│   └── week-03-prompt-reviewer/
│       ├── notes.md
│       ├── implementation/
│       └── reviews/
│
├── tests/
│   ├── agents/
│   │   ├── prompt-reviewer.test.ts
│   │   └── code-critic.test.ts
│   └── utils/
│       └── validation.test.ts
│
├── package.json
├── tsconfig.json
├── .env.example
├── README.md
└── CLAUDE.md
```

---

## Week 0: TypeScript + AI SDK Setup (Optional, 1 week)

### Goal

Quick environment setup and first AI interaction in TypeScript.

### Prerequisites

- Node.js 20+ installed
- TypeScript knowledge (already have)
- Anthropic API key

### Setup Tasks

**1. Initialize TypeScript Project**

```bash
# Create project
mkdir ai-pe-learning-agent
cd ai-pe-learning-agent

# Initialize package.json
npm init -y

# Install dependencies
npm install @anthropic-ai/sdk commander zod dotenv
npm install -D typescript @types/node tsx prettier eslint

# Initialize TypeScript
npx tsc --init
```

**2. Configure TypeScript**

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**3. Setup Environment**

```bash
# .env
ANTHROPIC_API_KEY=your-key-here
```

**4. First Script: Hello Claude**

```typescript
// src/hello-claude.ts
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const message = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Hello, Claude! Introduce yourself in one sentence." }
    ],
  });

  console.log(message.content[0].text);
}

main();
```

**5. Run**

```bash
# Add to package.json scripts
"scripts": {
  "dev": "tsx src/hello-claude.ts"
}

# Run
npm run dev
```

### Success Criteria

- [ ] TypeScript project initialized
- [ ] Anthropic SDK installed and configured
- [ ] `hello-claude.ts` runs successfully
- [ ] API response received and printed
- [ ] Basic environment ready for Phase 1

---

## Phase 1: Single Agent - Prompt Reviewer (3 weeks)

### Timeline

- **Weeks 1-2:** Learning (Prompt engineering, Anthropic SDK, Zod)
- **Week 3:** Implementation (Build Prompt Reviewer agent)

### Goal

Build a production-ready CLI tool that reviews prompt quality and suggests improvements. Use it daily to improve your own prompts.

### Why This Agent First?

- **Foundation:** Establishes base agent architecture
- **Practical:** Immediately useful for improving prompts
- **Simple:** Single agent, no orchestration complexity
- **Portfolio:** Shows prompt engineering depth

### Learning Topics (Weeks 1-2)

#### Week 1: Anthropic SDK Fundamentals

**Core Concepts:**
- Anthropic SDK API structure
- Messages API vs legacy Completions
- Streaming vs non-streaming responses
- Token counting and costs
- Error handling and retries

**Exercises:**

```typescript
// learning/week-01-anthropic-sdk/exercises/basic-chat.ts
// 1. Basic chat completion
// 2. Multi-turn conversation
// 3. System prompt usage
// 4. Token counting

// learning/week-01-anthropic-sdk/exercises/structured-output.ts
// 1. JSON mode responses
// 2. Zod schema validation
// 3. Error handling for invalid JSON
// 4. Retry logic
```

**Resources:**
- [Anthropic SDK Docs](https://docs.anthropic.com/en/api/client-sdks)
- [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/prompt-engineering)

#### Week 2: Prompt Engineering Patterns

**Core Concepts:**
- System prompts and roles
- Few-shot learning examples
- Chain-of-Thought prompting
- Structured outputs with Zod
- Prompt evaluation criteria

**Exercises:**

```typescript
// learning/week-02-prompt-patterns/exercises/few-shot.ts
// 1. Few-shot classification
// 2. Few-shot text generation
// 3. Dynamic few-shot selection

// learning/week-02-prompt-patterns/exercises/chain-of-thought.ts
// 1. CoT reasoning
// 2. Step-by-step problem solving
// 3. CoT + JSON output

// learning/week-02-prompt-patterns/exercises/prompt-evaluation.ts
// 1. Define evaluation criteria
// 2. Score prompt quality
// 3. Generate improvements
```

**Key Learnings:**
- Clarity vs specificity tradeoff
- Hallucination risk factors
- Token efficiency techniques
- Prompt injection defense basics

### Implementation (Week 3)

#### Architecture

```typescript
// src/agents/base-agent.ts
export abstract class BaseAgent {
  constructor(protected client: Anthropic) {}

  abstract execute(input: unknown): Promise<unknown>;

  protected async callClaude(params: MessageCreateParams) {
    // Common Claude API logic
  }
}

// src/agents/prompt-reviewer.ts
import { z } from "zod";

const ReviewSchema = z.object({
  clarity_score: z.number().min(1).max(10),
  hallucination_risk: z.number().min(1).max(10),
  specificity_score: z.number().min(1).max(10),
  issues: z.array(z.string()),
  suggestions: z.array(z.string()),
  improved_version: z.string(),
});

type Review = z.infer<typeof ReviewSchema>;

export class PromptReviewer extends BaseAgent {
  async execute(prompt: string): Promise<Review> {
    const systemPrompt = `You are an expert prompt engineer...`;

    const response = await this.callClaude({
      system: systemPrompt,
      messages: [{ role: "user", content: prompt }],
    });

    // Parse and validate response
    return ReviewSchema.parse(JSON.parse(response));
  }
}
```

#### CLI Interface

```typescript
// src/cli.ts
import { Command } from "commander";
import { PromptReviewer } from "./agents/prompt-reviewer";

const program = new Command();

program
  .name("ai-pe-agent")
  .description("AI Product Engineer learning agent system")
  .version("1.0.0");

program
  .command("review-prompt")
  .argument("<prompt>", "Prompt to review")
  .option("-o, --output <file>", "Save review to file")
  .action(async (prompt, options) => {
    const reviewer = new PromptReviewer(anthropicClient);
    const review = await reviewer.execute(prompt);

    console.log(JSON.stringify(review, null, 2));

    if (options.output) {
      await fs.writeFile(options.output, JSON.stringify(review, null, 2));
    }
  });

program.parse();
```

### Tasks (Week 3)

- [ ] Implement `BaseAgent` class
- [ ] Implement `PromptReviewer` agent
- [ ] Design system prompt with few-shot examples
- [ ] Create Zod validation schemas
- [ ] Implement CLI interface with Commander.js
- [ ] Add error handling and retries
- [ ] Write tests (Vitest)
- [ ] Document usage in README
- [ ] Create `learning/week-03-prompt-reviewer/notes.md`

### Evaluation Criteria

**PromptReviewer should assess:**

1. **Clarity (1-10):** Is the prompt clear and unambiguous?
2. **Specificity (1-10):** Does it specify format, constraints, examples?
3. **Hallucination Risk (1-10):** Could it lead to made-up information?
4. **Issues:** List specific problems (vague language, missing constraints, etc.)
5. **Suggestions:** Actionable improvements
6. **Improved Version:** Rewritten prompt addressing all issues

### Usage Example

```bash
# Review a prompt
npm run cli review-prompt "Summarize this article"

# Output:
{
  "clarity_score": 3,
  "specificity_score": 2,
  "hallucination_risk": 7,
  "issues": [
    "Vague reference: 'this article' is not defined",
    "No output format specified",
    "No length constraint"
  ],
  "suggestions": [
    "Provide the article content or context",
    "Specify desired summary length",
    "Define output format (bullet points, paragraph, etc.)"
  ],
  "improved_version": "Summarize the following article in 3 bullet points, each 1-2 sentences: [article content here]"
}

# Save review
npm run cli review-prompt "Write unit tests" -o learning/week-03/reviews/review-01.json
```

### Success Criteria

- [ ] CLI tool runs successfully
- [ ] Reviews your own prompts daily (minimum 5 reviews)
- [ ] Clear improvement in prompt quality (subjective)
- [ ] Reviews saved to `learning/week-03/reviews/`
- [ ] Documentation complete in `learning/week-03/notes.md`
- [ ] Base agent architecture reusable for Phase 2

---

## Phase 2: Multi-Agent Collaboration - Code Critic (3 weeks)

### Timeline

- **Weeks 4-5:** Learning (Multi-agent patterns, sdd-system analysis)
- **Week 6:** Implementation (Code Critic + orchestration)

### Goal

Build a second agent that reviews AI-generated code, and orchestrate both agents together. Establish foundation for multi-agent systems.

### sdd-system Reference

**Study Your Existing Project:**

```
/path/to/sdd-system/
├── src/
│   ├── commands/        # Command pattern (orchestrator)
│   ├── agents/          # 9 specialized agents
│   ├── skills/          # Reusable skills
│   └── checkpoint/      # State management
```

**Key Patterns to Study:**
- How commands delegate to agents
- Agent-to-agent communication
- Shared state management (checkpoint system)
- Parallel execution patterns
- Error handling across agents

**Apply to This Project:**
- Command pattern → Orchestration layer
- Agent communication → Context passing
- Checkpoint → Shared state between agents
- Skills → Reusable utilities

### Learning Topics (Weeks 4-5)

#### Week 4: Multi-Agent Patterns

**Core Concepts:**
- Agent communication protocols
- Sequential vs parallel execution
- State sharing between agents
- Error handling in multi-agent systems
- Agent specialization

**Exercises:**

```typescript
// learning/week-04-multi-agent/exercises/agent-communication.ts
// 1. Pass context between 2 agents
// 2. Sequential execution: Agent A → Agent B
// 3. Share state via JSON
// 4. Error propagation

// learning/week-04-multi-agent/exercises/parallel-execution.ts
// 1. Run 2 agents in parallel with Promise.all
// 2. Combine results from parallel agents
// 3. Handle partial failures
```

**Study Tasks:**
- [ ] Read sdd-system command pattern
- [ ] Analyze agent-to-agent communication
- [ ] Understand checkpoint/state management
- [ ] Document patterns in `learning/week-04/notes.md`

#### Week 5: Code Review Patterns

**Core Concepts:**
- AI code best practices
- Security vulnerabilities (prompt injection, XSS)
- Code quality metrics
- Pass/rewrite judgment logic
- Automated validation

**Exercises:**

```typescript
// learning/week-05-code-review/exercises/validation.ts
// 1. Detect prompt injection vulnerabilities
// 2. Check error handling patterns
// 3. Validate retry logic
// 4. Token efficiency analysis

// learning/week-05-code-review/exercises/judgment.ts
// 1. Severity classification (Critical/Important/Beneficial)
// 2. Pass/rewrite criteria
// 3. Improvement suggestions
```

**Review Checklist Design:**
- **Security:** Prompt injection, input sanitization, API key handling
- **Error Handling:** Try-catch, meaningful errors, retry logic
- **Validation:** Response validation, format checking, guardrails
- **Efficiency:** Token optimization, caching, rate limiting
- **Quality:** Code structure, readability, TypeScript types

### Implementation (Week 6)

#### Code Critic Agent

```typescript
// src/agents/code-critic.ts
import { z } from "zod";

const IssueSchema = z.object({
  severity: z.enum(["critical", "important", "beneficial"]),
  category: z.enum(["security", "error-handling", "efficiency", "quality"]),
  description: z.string(),
  location: z.string().optional(), // Line number or function name
  suggestion: z.string(),
});

const CodeReviewSchema = z.object({
  overall_score: z.number().min(0).max(100),
  issues: z.array(IssueSchema),
  strengths: z.array(z.string()),
  judgment: z.enum(["pass", "rewrite"]),
  summary: z.string(),
});

type CodeReview = z.infer<typeof CodeReviewSchema>;

export class CodeCritic extends BaseAgent {
  async execute(code: string, context?: string): Promise<CodeReview> {
    const systemPrompt = `You are an expert code reviewer specializing in AI-generated code...`;

    const userPrompt = `
Review the following TypeScript code:

\`\`\`typescript
${code}
\`\`\`

${context ? `Context: ${context}` : ""}

Evaluate for: Security, Error Handling, Efficiency, Quality
Provide judgment: pass (0 critical, ≤2 important) or rewrite
`;

    const response = await this.callClaude({
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    return CodeReviewSchema.parse(JSON.parse(response));
  }
}
```

#### Orchestration Layer

```typescript
// src/orchestration/sequential.ts
export class SequentialOrchestrator {
  async execute<T>(agents: BaseAgent[], input: T): Promise<unknown[]> {
    const results = [];
    let currentInput = input;

    for (const agent of agents) {
      const result = await agent.execute(currentInput);
      results.push(result);
      currentInput = result; // Pass output to next agent
    }

    return results;
  }
}

// src/orchestration/parallel.ts
export class ParallelOrchestrator {
  async execute<T>(agents: BaseAgent[], input: T): Promise<unknown[]> {
    const promises = agents.map(agent => agent.execute(input));
    return Promise.all(promises);
  }
}
```

#### Combined Workflow

```typescript
// src/workflows/code-review-workflow.ts
export class CodeReviewWorkflow {
  constructor(
    private promptReviewer: PromptReviewer,
    private codeCritic: CodeCritic,
    private orchestrator: SequentialOrchestrator
  ) {}

  async execute(code: string) {
    // 1. Extract prompts from code
    const prompts = this.extractPrompts(code);

    // 2. Review prompts
    const promptReviews = await Promise.all(
      prompts.map(p => this.promptReviewer.execute(p))
    );

    // 3. Review code (with prompt review context)
    const codeReview = await this.codeCritic.execute(
      code,
      JSON.stringify(promptReviews)
    );

    return {
      prompt_reviews: promptReviews,
      code_review: codeReview,
    };
  }

  private extractPrompts(code: string): string[] {
    // Extract system prompts and user messages from code
    // Simple regex or AST parsing
    return [];
  }
}
```

### Tasks (Week 6)

- [ ] Implement `CodeCritic` agent
- [ ] Design code review checklist
- [ ] Implement sequential orchestrator
- [ ] Implement parallel orchestrator
- [ ] Create `CodeReviewWorkflow`
- [ ] Update CLI to support code review
- [ ] Add tests for orchestration
- [ ] Document multi-agent patterns
- [ ] Test with your own code
- [ ] Save reviews to `learning/week-06/reviews/`

### CLI Updates

```bash
# Review code file
npm run cli review-code src/agents/prompt-reviewer.ts

# Review with prompt analysis
npm run cli review-code-full src/agents/prompt-reviewer.ts

# Output:
{
  "prompt_reviews": [...],
  "code_review": {
    "overall_score": 75,
    "issues": [
      {
        "severity": "important",
        "category": "error-handling",
        "description": "Missing retry logic for API failures",
        "suggestion": "Add exponential backoff retry"
      }
    ],
    "judgment": "rewrite",
    "summary": "Code has good structure but needs better error handling."
  }
}
```

### Success Criteria

- [ ] Both agents work independently
- [ ] Agents work together in workflow
- [ ] Sequential orchestration works
- [ ] Review your own code with CodeCritic (minimum 3 reviews)
- [ ] At least 1 "rewrite" → "pass" improvement cycle
- [ ] Multi-agent patterns documented in `learning/week-06/notes.md`
- [ ] Foundation ready for Phase 3 (Vector DB integration)

---

## Phase 3: Memory & Context - Progress Tracker (3 weeks)

### Timeline

- **Weeks 7-8:** Learning (Vector DB, RAG, embeddings)
- **Week 9:** Implementation (Progress Tracker with vector memory)

### Goal

Add persistent memory to your agent system using Vector DB. Track learning history, find similar past learnings, identify weak concepts.

### Why Vector DB?

- **Context Retrieval:** Find relevant past learnings
- **Pattern Recognition:** Identify recurring mistakes
- **Personalized Recommendations:** Suggest what to review
- **Portfolio Value:** Demonstrates RAG implementation

### Learning Topics (Weeks 7-8)

#### Week 7: Vector DB Fundamentals

**Core Concepts:**
- Vector embeddings and semantic similarity
- Vector databases (Supabase Vector, Pinecone)
- Similarity search (cosine, euclidean)
- Chunking strategies
- Metadata filtering

**Exercises:**

```typescript
// learning/week-07-vector-db/exercises/embeddings.ts
// 1. Generate embeddings with OpenAI
// 2. Calculate cosine similarity
// 3. Find similar texts
// 4. Experiment with different embedding models

// learning/week-07-vector-db/exercises/supabase-vector.ts
// 1. Setup Supabase project
// 2. Create vector table
// 3. Insert embeddings
// 4. Query similar vectors
// 5. Filter by metadata
```

**Resources:**
- [Supabase Vector Guide](https://supabase.com/docs/guides/ai/vector-columns)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)

#### Week 8: RAG Patterns

**Core Concepts:**
- Retrieval-Augmented Generation (RAG)
- Hybrid search (keyword + vector)
- Re-ranking strategies
- Context window optimization
- Chunking for optimal retrieval

**Exercises:**

```typescript
// learning/week-08-rag/exercises/retrieval.ts
// 1. Implement semantic search
// 2. Implement keyword search (BM25)
// 3. Combine results (hybrid search)
// 4. Re-rank with cross-encoder

// learning/week-08-rag/exercises/context-injection.ts
// 1. Retrieve relevant context
// 2. Inject into prompt
// 3. Optimize context length
// 4. Handle context overflow
```

**Key Learnings:**
- When to use vector vs keyword search
- Chunking size tradeoffs (too small vs too large)
- Metadata design for filtering
- Cost optimization (caching embeddings)

### Implementation (Week 9)

#### Vector DB Setup

```typescript
// src/vector-db/client.ts
import { createClient } from "@supabase/supabase-js";

export class VectorDBClient {
  private client;

  constructor() {
    this.client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!
    );
  }

  async insert(content: string, metadata: Record<string, any>, embedding: number[]) {
    return this.client
      .from("learning_history")
      .insert({
        content,
        metadata,
        embedding,
      });
  }

  async search(queryEmbedding: number[], limit = 5, filters?: Record<string, any>) {
    // Vector similarity search
    let query = this.client
      .rpc("match_learning_history", {
        query_embedding: queryEmbedding,
        match_count: limit,
      });

    // Apply metadata filters
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        query = query.filter(`metadata->>${key}`, "eq", value);
      });
    }

    return query;
  }
}
```

#### Embeddings Service

```typescript
// src/vector-db/embeddings.ts
import OpenAI from "openai";

export class EmbeddingService {
  private openai: OpenAI;
  private cache: Map<string, number[]> = new Map();

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateEmbedding(text: string): Promise<number[]> {
    // Check cache first
    if (this.cache.has(text)) {
      return this.cache.get(text)!;
    }

    const response = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    const embedding = response.data[0].embedding;

    // Cache for future use
    this.cache.set(text, embedding);

    return embedding;
  }

  async batchEmbeddings(texts: string[]): Promise<number[][]> {
    // OpenAI allows batch embeddings
    const response = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: texts,
    });

    return response.data.map(d => d.embedding);
  }
}
```

#### Progress Tracker Agent

```typescript
// src/agents/progress-tracker.ts
import { z } from "zod";

const LearningEntrySchema = z.object({
  week: z.number(),
  topic: z.string(),
  content: z.string(),
  review: z.object({
    score: z.number(),
    passed: z.boolean(),
  }).optional(),
  timestamp: z.date(),
});

const WeakConceptSchema = z.object({
  concept: z.string(),
  failure_count: z.number(),
  last_failed: z.date(),
  related_entries: z.array(z.string()),
});

export class ProgressTracker extends BaseAgent {
  constructor(
    client: Anthropic,
    private vectorDB: VectorDBClient,
    private embeddings: EmbeddingService
  ) {
    super(client);
  }

  async saveEntry(entry: LearningEntry) {
    const embedding = await this.embeddings.generateEmbedding(
      `${entry.topic}: ${entry.content}`
    );

    await this.vectorDB.insert(entry.content, {
      week: entry.week,
      topic: entry.topic,
      passed: entry.review?.passed,
    }, embedding);
  }

  async searchHistory(query: string, limit = 5) {
    const queryEmbedding = await this.embeddings.generateEmbedding(query);
    return this.vectorDB.search(queryEmbedding, limit);
  }

  async identifyWeakConcepts(): Promise<WeakConcept[]> {
    // Query vector DB for failed reviews
    const failedEntries = await this.vectorDB.search(
      [], // Empty query for all
      100,
      { passed: false }
    );

    // Use Claude to analyze patterns
    const analysisPrompt = `
Analyze these failed learning attempts and identify weak concepts:

${JSON.stringify(failedEntries, null, 2)}

Return a list of concepts that appear frequently in failures.
`;

    const response = await this.callClaude({
      system: "You are a learning analytics expert.",
      messages: [{ role: "user", content: analysisPrompt }],
    });

    // Parse and return weak concepts
    return JSON.parse(response);
  }

  async suggestReview(): Promise<string[]> {
    // Time-based review: content older than 1 week
    // Weakness-based: failed concepts
    // Spaced repetition: 1 day, 1 week, 1 month

    const weakConcepts = await this.identifyWeakConcepts();
    return weakConcepts.map(c => c.concept);
  }
}
```

### Tasks (Week 9)

- [ ] Setup Supabase project and vector table
- [ ] Implement `VectorDBClient`
- [ ] Implement `EmbeddingService` with caching
- [ ] Implement `ProgressTracker` agent
- [ ] Design learning entry schema
- [ ] Implement search history feature
- [ ] Implement weak concept identification
- [ ] Implement review suggestions
- [ ] Update CLI for progress tracking
- [ ] Migrate existing reviews to Vector DB
- [ ] Test semantic search accuracy
- [ ] Document RAG patterns in `learning/week-09/notes.md`

### CLI Updates

```bash
# Save learning entry
npm run cli save-entry --week 9 --topic "Vector DB" --content "Learned about embeddings..."

# Search history
npm run cli search-history "prompt engineering techniques"

# Output:
[
  {
    "week": 2,
    "topic": "Prompt Patterns",
    "content": "Studied few-shot and chain-of-thought...",
    "similarity": 0.89
  },
  {
    "week": 1,
    "topic": "Anthropic SDK",
    "content": "System prompts are crucial for...",
    "similarity": 0.76
  }
]

# Identify weak concepts
npm run cli weak-concepts

# Output:
[
  {
    "concept": "Error handling in agents",
    "failure_count": 3,
    "last_failed": "2026-02-15",
    "suggestion": "Review error handling patterns in week-05"
  },
  {
    "concept": "Prompt injection defense",
    "failure_count": 2,
    "last_failed": "2026-02-10",
    "suggestion": "Study security best practices"
  }
]

# Get review suggestions
npm run cli suggest-review

# Output:
[
  "Review 'Error handling in agents' (3 failures)",
  "Review 'Vector DB chunking' (last seen 7 days ago)",
  "Review 'Few-shot examples' (spaced repetition due)"
]
```

### Success Criteria

- [ ] Vector DB setup complete (Supabase)
- [ ] Embeddings generated and stored
- [ ] Semantic search works accurately
- [ ] Weak concepts identified from your actual reviews
- [ ] Review suggestions relevant and helpful
- [ ] All past learning entries migrated to Vector DB
- [ ] RAG patterns documented
- [ ] Foundation ready for Phase 4 (LangSmith + Evaluation)

---

## Phase 4: Monitoring & Optimization (2 weeks)

### Timeline

- **Week 10:** Learning (LangSmith, evaluation patterns)
- **Week 11:** Implementation (LangSmith integration, LLM-as-Judge)

### Goal

Add production-grade monitoring and evaluation to your agent system. Track costs, measure performance improvements, implement LLM-as-Judge.

### Why LangSmith?

- **Quick Setup:** 5 minutes (vs hours for LGTM Stack)
- **AI-Specific:** Built for LLM applications
- **Features:** Tracing, evaluation, datasets, playgrounds
- **Cost Tracking:** Per-agent cost monitoring
- **Defer Infrastructure:** Learn K8s/LGTM later (Phase 5b)

### Learning Topics (Week 10)

#### LangSmith Fundamentals

**Core Concepts:**
- Distributed tracing for LLM calls
- Cost tracking per agent
- Evaluation datasets
- LLM-as-Judge patterns
- Prompt playgrounds

**Exercises:**

```typescript
// learning/week-10-langsmith/exercises/tracing.ts
// 1. Setup LangSmith project
// 2. Trace single agent call
// 3. Trace multi-agent workflow
// 4. View traces in LangSmith UI
// 5. Analyze costs per agent

// learning/week-10-langsmith/exercises/evaluation.ts
// 1. Create evaluation dataset
// 2. Run agent on dataset
// 3. LLM-as-Judge evaluation
// 4. Compare before/after improvements
```

**LangSmith Setup:**

```typescript
// src/monitoring/langsmith.ts
import { Client } from "langsmith";

export class LangSmithMonitor {
  private client: Client;

  constructor() {
    this.client = new Client({
      apiKey: process.env.LANGSMITH_API_KEY,
    });
  }

  async traceAgent(
    agentName: string,
    input: unknown,
    output: unknown,
    metadata?: Record<string, any>
  ) {
    return this.client.createRun({
      name: agentName,
      run_type: "chain",
      inputs: { input },
      outputs: { output },
      extra: metadata,
    });
  }
}
```

**Resources:**
- [LangSmith Docs](https://docs.smith.langchain.com/)
- [LLM Evaluation Guide](https://www.anthropic.com/research/evaluating-ai-systems)

#### Evaluation Patterns

**Core Concepts:**
- Golden datasets (reference examples)
- LLM-as-Judge (GPT-4o evaluates Claude)
- Evaluation metrics (accuracy, relevance, clarity)
- A/B testing (before/after comparison)
- Regression testing (prevent quality drops)

**Evaluation Criteria:**

```typescript
const EvaluationSchema = z.object({
  accuracy: z.number().min(0).max(10),
  relevance: z.number().min(0).max(10),
  completeness: z.number().min(0).max(10),
  clarity: z.number().min(0).max(10),
  reasoning: z.string(),
  overall_score: z.number().min(0).max(10),
});
```

### Implementation (Week 11)

#### LangSmith Integration

```typescript
// src/agents/base-agent.ts (updated)
import { LangSmithMonitor } from "../monitoring/langsmith";

export abstract class BaseAgent {
  constructor(
    protected client: Anthropic,
    protected monitor?: LangSmithMonitor
  ) {}

  abstract execute(input: unknown): Promise<unknown>;

  protected async callClaude(params: MessageCreateParams) {
    const startTime = Date.now();

    try {
      const response = await this.client.messages.create(params);

      // Trace to LangSmith
      if (this.monitor) {
        await this.monitor.traceAgent(
          this.constructor.name,
          params,
          response,
          {
            duration_ms: Date.now() - startTime,
            model: params.model,
            tokens: response.usage,
          }
        );
      }

      return response;
    } catch (error) {
      // Trace errors too
      if (this.monitor) {
        await this.monitor.traceAgent(
          this.constructor.name,
          params,
          { error: error.message },
          { duration_ms: Date.now() - startTime, failed: true }
        );
      }
      throw error;
    }
  }
}
```

#### LLM-as-Judge

```typescript
// src/evaluation/judge.ts
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";

export class LLMJudge {
  private judgeClient: OpenAI; // Use GPT-4o as judge

  constructor() {
    this.judgeClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async evaluate(
    prompt: string,
    response: string,
    criteria: string[]
  ): Promise<Evaluation> {
    const judgePrompt = `
Evaluate the following AI response:

Prompt: ${prompt}
Response: ${response}

Evaluation Criteria:
${criteria.map((c, i) => `${i + 1}. ${c}`).join("\n")}

For each criterion, provide:
- Score (0-10)
- Reasoning (1-2 sentences)

Then provide an overall score (0-10) and summary.

Return as JSON matching this schema:
{
  "accuracy": number,
  "relevance": number,
  "completeness": number,
  "clarity": number,
  "reasoning": string,
  "overall_score": number
}
`;

    const judgeResponse = await this.judgeClient.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are an expert AI evaluator." },
        { role: "user", content: judgePrompt }
      ],
      response_format: { type: "json_object" },
    });

    return JSON.parse(judgeResponse.choices[0].message.content);
  }

  async compareVersions(
    prompt: string,
    versionA: string,
    versionB: string
  ): Promise<{ winner: "A" | "B" | "tie", reasoning: string }> {
    const comparePrompt = `
Compare these two AI responses:

Prompt: ${prompt}

Version A: ${versionA}
Version B: ${versionB}

Which is better? Consider accuracy, relevance, clarity, completeness.
Return JSON: { "winner": "A" | "B" | "tie", "reasoning": string }
`;

    const response = await this.judgeClient.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: comparePrompt }],
      response_format: { type: "json_object" },
    });

    return JSON.parse(response.choices[0].message.content);
  }
}
```

#### Golden Dataset

```typescript
// src/evaluation/dataset.ts
import fs from "fs/promises";

export interface GoldenExample {
  id: string;
  prompt: string;
  expected_output: Record<string, any>;
  criteria: string[];
  notes?: string;
}

export class GoldenDataset {
  private examples: GoldenExample[] = [];

  async load(filePath: string) {
    const data = await fs.readFile(filePath, "utf-8");
    this.examples = JSON.parse(data);
  }

  async save(filePath: string) {
    await fs.writeFile(
      filePath,
      JSON.stringify(this.examples, null, 2)
    );
  }

  add(example: GoldenExample) {
    this.examples.push(example);
  }

  getAll(): GoldenExample[] {
    return this.examples;
  }
}

// data/evaluations/golden-dataset.json
[
  {
    "id": "prompt-review-1",
    "prompt": "Summarize this article",
    "expected_output": {
      "clarity_score": 3,
      "issues": ["Vague reference", "No format specified"],
      "suggestions": ["Provide article content", "Specify length"]
    },
    "criteria": [
      "Identifies vagueness",
      "Suggests specific improvements",
      "Provides improved version"
    ]
  },
  {
    "id": "code-review-1",
    "prompt": "Review code with missing error handling",
    "expected_output": {
      "judgment": "rewrite",
      "issues": [
        {
          "severity": "critical",
          "category": "error-handling"
        }
      ]
    },
    "criteria": [
      "Detects missing error handling",
      "Classifies as critical",
      "Suggests retry logic"
    ]
  }
]
```

#### Evaluation Workflow

```typescript
// src/evaluation/workflow.ts
export class EvaluationWorkflow {
  constructor(
    private agent: BaseAgent,
    private judge: LLMJudge,
    private dataset: GoldenDataset
  ) {}

  async runEvaluation() {
    const results = [];

    for (const example of this.dataset.getAll()) {
      // Run agent
      const output = await this.agent.execute(example.prompt);

      // Evaluate with judge
      const evaluation = await this.judge.evaluate(
        example.prompt,
        JSON.stringify(output),
        example.criteria
      );

      results.push({
        example_id: example.id,
        output,
        evaluation,
      });
    }

    return this.summarizeResults(results);
  }

  private summarizeResults(results: any[]) {
    const avgScore = results.reduce(
      (sum, r) => sum + r.evaluation.overall_score,
      0
    ) / results.length;

    return {
      total_examples: results.length,
      average_score: avgScore,
      passed: results.filter(r => r.evaluation.overall_score >= 7).length,
      failed: results.filter(r => r.evaluation.overall_score < 7).length,
      details: results,
    };
  }
}
```

### Tasks (Week 11)

- [ ] Setup LangSmith account and project
- [ ] Integrate LangSmith tracing into `BaseAgent`
- [ ] Implement `LLMJudge` class
- [ ] Create golden dataset (10+ examples)
- [ ] Implement evaluation workflow
- [ ] Run evaluation on current agents
- [ ] Create before/after comparison (improve prompts based on evaluation)
- [ ] Document results in `learning/week-11/notes.md`
- [ ] Update CLI for evaluation commands
- [ ] Prove improvement with numbers (e.g., 70% → 85% accuracy)

### CLI Updates

```bash
# Run evaluation on agent
npm run cli evaluate --agent prompt-reviewer --dataset data/evaluations/golden-dataset.json

# Output:
{
  "total_examples": 10,
  "average_score": 7.8,
  "passed": 8,
  "failed": 2,
  "details": [...]
}

# Compare two prompt versions
npm run cli compare-prompts \
  --prompt "Summarize this" \
  --version-a "Summarize this article" \
  --version-b "Provide a 3-sentence summary of the following article"

# Output:
{
  "winner": "B",
  "reasoning": "Version B is more specific about length (3 sentences) and clearer about input format."
}

# View costs in LangSmith UI
# Visit: https://smith.langchain.com/
```

### Success Criteria

- [ ] LangSmith tracing integrated across all agents
- [ ] Golden dataset created (10+ examples)
- [ ] LLM-as-Judge evaluation working
- [ ] Quantifiable improvement demonstrated (before/after)
- [ ] Cost tracking per agent visible in LangSmith
- [ ] Evaluation results documented
- [ ] Foundation ready for Phase 5 (Deployment)

---

## Phase 5: Production & Portfolio (2 weeks)

### Timeline

- **Week 12:** Deployment (Vercel, environment setup)
- **Week 13:** Portfolio polish (README, docs, blog post)

### Goal

Deploy your agent system to production (Vercel), polish documentation, create demo, write blog post. Make it portfolio-ready.

### Why Vercel?

- **Simple Deployment:** Git push → live
- **Serverless Functions:** Perfect for agents
- **Environment Variables:** Built-in secrets management
- **Free Tier:** Sufficient for portfolio project
- **TypeScript Native:** Zero config needed

### Tasks (Week 12: Deployment)

#### Vercel Setup

```typescript
// api/agents/prompt-reviewer.ts (Vercel serverless function)
import { PromptReviewer } from "../../src/agents/prompt-reviewer";
import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const reviewer = new PromptReviewer(client);
  const review = await reviewer.execute(prompt);

  return res.status(200).json(review);
}

// vercel.json
{
  "functions": {
    "api/**/*.ts": {
      "runtime": "@vercel/node@3.0.0"
    }
  },
  "env": {
    "ANTHROPIC_API_KEY": "@anthropic-api-key",
    "OPENAI_API_KEY": "@openai-api-key",
    "LANGSMITH_API_KEY": "@langsmith-api-key"
  }
}
```

#### Web UI (Optional)

```typescript
// Simple Next.js UI for demo
// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleReview() {
    setLoading(true);
    const res = await fetch("/api/agents/prompt-reviewer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setReview(data);
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">AI PE Learning Agent</h1>

      <div className="space-y-4">
        <textarea
          className="w-full p-4 border rounded"
          rows={4}
          placeholder="Enter your prompt to review..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="px-6 py-2 bg-blue-600 text-white rounded"
          onClick={handleReview}
          disabled={loading}
        >
          {loading ? "Reviewing..." : "Review Prompt"}
        </button>

        {review && (
          <div className="p-4 bg-gray-100 rounded">
            <pre>{JSON.stringify(review, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
```

#### Deployment Checklist

- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy main branch
- [ ] Test deployed agents
- [ ] Setup custom domain (optional)
- [ ] Add usage analytics (optional)

### Tasks (Week 13: Portfolio Polish)

#### README Optimization

```markdown
# AI Product Engineer Learning Agent

> Multi-agent TypeScript system for AI engineering learning management

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-app.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🎯 Project Background

**Meta-Learning Approach:** Built AI agents in TypeScript to manage my learning journey to becoming an AI Product Engineer.

**Portfolio Highlight:** Demonstrates agent orchestration, RAG implementation, and production deployment skills.

**Career Context:**
- **VNTG Experience:** AI-powered Figma-to-Code automation
- **sdd-system:** 9-agent TypeScript architecture
- **This Project:** Agent pipeline specialist expertise

## 🏗️ System Architecture

[Include diagram showing 3 agents + Vector DB + LangSmith]

**4 Collaborating Agents:**
1. **Prompt Reviewer:** Evaluates prompt quality, suggests improvements
2. **Code Critic:** Reviews AI code for best practices and security
3. **Progress Tracker:** Manages learning history with Vector DB
4. **Assignment Generator:** (Future) Auto-generates practice tasks

**Tech Stack:** TypeScript, Anthropic SDK, Supabase Vector, LangSmith, Vercel

## 📚 Learning Process (Dogfooding)

Used this system for my own learning over 13 weeks. See full learning records in [`learning/`](./learning):

- [Week 1: Anthropic SDK](./learning/week-01-anthropic-sdk)
- [Week 2: Prompt Patterns](./learning/week-02-prompt-patterns)
- [Week 3: Prompt Reviewer Implementation](./learning/week-03-prompt-reviewer)
- ... (13 weeks)

Each week includes:
- Learning notes (`notes.md`)
- Practice exercises (`exercises/*.ts`)
- Agent reviews (`reviews/*.json`)

**Example:** [Week 6 code review failure → improvement case](./learning/week-06/reviews/)

## 🚀 Key Features

**1. Prompt Quality Review**
- Clarity, specificity, hallucination risk scoring
- Automatic improvement suggestions
- CLI + API interface

**2. AI Code Review**
- Security vulnerability detection
- Best practices enforcement
- Pass/rewrite judgment system

**3. Learning History Management**
- Vector DB for semantic search
- Weak concept identification
- Personalized review recommendations

**4. Production Monitoring**
- LangSmith tracing
- Cost tracking per agent
- LLM-as-Judge evaluation

## 📊 Results

**Quantifiable Improvements:**
- Prompt quality: 40% → 85% (LLM-as-Judge measured)
- Code review accuracy: 75% → 92%
- 13 weeks learning records (50+ exercises, 30+ reviews)

**Cost Optimization:**
- Agent-specific model selection (Haiku vs Sonnet)
- Embedding caching (50% cost reduction)
- LangSmith monitoring for optimization

## 🛠️ Tech Stack

- **Language:** TypeScript 5+
- **AI:** Anthropic SDK, OpenAI Embeddings
- **Validation:** Zod
- **Vector DB:** Supabase Vector
- **Monitoring:** LangSmith
- **Deployment:** Vercel

## 🎓 Portfolio

This project demonstrates:
- Multi-agent orchestration
- RAG implementation with Vector DB
- Production deployment and monitoring
- TypeScript expertise in AI context
- VNTG + Personal project synergy

**Contact:** [Your email]
**Blog:** [Your blog post]

## 📝 Blog Post

[Link to blog post: "Building a TypeScript Agent Pipeline in 13 Weeks"]

---

**Note:** This project is part of my transition to AI Product Engineer (Agent Pipeline Specialist).
See [learning/](./learning) for complete 13-week learning journey.
```

#### Blog Post Outline

**Title:** "Building a TypeScript Agent Pipeline in 13 Weeks: From Frontend Engineer to AI Agent Specialist"

**Structure:**
1. **Introduction (200 words)**
   - Why TypeScript for AI agents?
   - VNTG experience + Personal project synergy
   - Career positioning: Agent Pipeline Specialist

2. **Week-by-Week Highlights (1000 words)**
   - Phase 1: First agent in TypeScript (challenges)
   - Phase 2: Multi-agent orchestration (sdd-system inspiration)
   - Phase 3: Adding memory with Vector DB
   - Phase 4: Production monitoring (LangSmith)
   - Phase 5: Deployment and polish

3. **Technical Deep Dives (800 words)**
   - TypeScript advantages for AI agents
   - Agent communication patterns
   - RAG implementation details
   - Cost optimization strategies

4. **Results & Learnings (400 words)**
   - Quantifiable improvements
   - Mistakes and how I fixed them
   - What I'd do differently

5. **Conclusion (200 words)**
   - Next steps (infrastructure learning)
   - Career outcome
   - Resources for others

**Publish on:**
- Personal blog
- Dev.to
- Medium (optional)
- LinkedIn (link to full post)

#### Documentation Polish

- [ ] Complete README with architecture diagram
- [ ] Add usage examples to README
- [ ] Write API documentation
- [ ] Update CLAUDE.md with TypeScript approach
- [ ] Create ARCHITECTURE.md (system design details)
- [ ] Add CONTRIBUTING.md (for future contributors)
- [ ] Polish learning notes for each week
- [ ] Create demo video (3-5 minutes)
- [ ] Take screenshots for README
- [ ] Write blog post draft

### Success Criteria

- [ ] Deployed to Vercel and working
- [ ] README is portfolio-ready
- [ ] Architecture diagram included
- [ ] Demo video created
- [ ] Blog post published (or draft ready)
- [ ] All learning records polished
- [ ] GitHub profile updated with project
- [ ] Resume updated with quantifiable results

---

## VNTG & sdd-system Synergy

### VNTG Experience → Personal Project

**Code Generation Patterns:**
- VNTG: SDD → HTML/CSS/JS → React components
- Personal: Prompts → Agent orchestration → Validated outputs
- **Apply:** Multi-stage validation pipeline

**Production Constraints:**
- VNTG: Design fidelity, reusable components, team collaboration
- Personal: Cost optimization, response quality, agent reliability
- **Apply:** Production-ready mindset, monitoring, evaluation

**AI DevTools Experience:**
- VNTG: Claude Code Sonnet, component generation, IDE integration
- Personal: Anthropic SDK, agent patterns, orchestration
- **Apply:** Real-world AI system development

### Personal Learning → VNTG Contribution

**Multi-Agent Patterns:**
- Personal: Sequential, parallel, conditional orchestration
- VNTG: Propose pipeline improvements (faster, cheaper, better)
- **Value:** "Reduced code generation cost by X%" (if implemented)

**LangSmith Monitoring:**
- Personal: Cost tracking, tracing, evaluation per agent
- VNTG: Propose cost dashboard for code generation
- **Value:** "Increased visibility into AI costs"

**TypeScript AI Expertise:**
- Personal: Anthropic SDK, Zod validation, type-safe agents
- VNTG: Better tooling, cleaner code, fewer runtime errors
- **Value:** "Improved code generation reliability"

### sdd-system Reference Points

**Phase 2 (Multi-Agent):**
- **Study:** Command pattern (orchestrator delegates to agents)
- **Study:** Agent-to-agent communication protocols
- **Study:** Checkpoint system for shared state
- **Apply:** Similar orchestration in your agent system

**Phase 3 (Memory):**
- **Study:** How sdd-system maintains context across agents
- **Study:** Context optimization strategies
- **Apply:** Vector DB as persistent memory layer

**Phase 4 (Optimization):**
- **Study:** Parallel execution patterns
- **Study:** Agent specialization for efficiency
- **Apply:** Model selection per agent (Haiku vs Sonnet)

### Career Narrative

**Resume Positioning:**
```
AI Product Engineer - Agent Pipeline Specialist

VNTG (TypeScript AI DevTools)
→ Production AI systems at scale
→ Figma-to-Code automation
→ 4-stage validation pipeline

Personal Project (Agent Orchestration)
→ Multi-agent TypeScript system
→ RAG with Vector DB
→ Production deployment + monitoring

sdd-system (9-Agent Architecture)
→ Complex orchestration patterns
→ Agent specialization
→ State management across agents

Combined: Unique expertise in Agent Pipelines + AI DevTools
```

**Interview Talking Points:**
- "At VNTG, I work on AI-powered code generation. For my personal project, I built a multi-agent system to manage my learning..."
- "I studied the sdd-system 9-agent architecture and applied those patterns to my own project..."
- "I can show quantifiable results: 85% prompt quality improvement, 50% cost reduction through agent optimization..."

---

## Success Metrics (13 Weeks)

### Technical

- [ ] 3 agents working together (Prompt Reviewer, Code Critic, Progress Tracker)
- [ ] TypeScript codebase with proper types (80%+ type coverage)
- [ ] Vector DB with learning history (100+ entries)
- [ ] LangSmith monitoring integrated across all agents
- [ ] Deployed to Vercel and accessible online
- [ ] Tests written (Vitest, 70%+ coverage)

### Learning

- [ ] 13 weeks of learning records in `learning/`
- [ ] 30+ code examples and exercises
- [ ] 20+ agent reviews (dogfooding)
- [ ] 10+ failed → improved review cycles
- [ ] Weak concepts identified and addressed

### Portfolio

- [ ] Production-ready GitHub repository
- [ ] Comprehensive README with demos and diagrams
- [ ] 1+ blog post published (on agent patterns or learning journey)
- [ ] Demo video (3-5 minutes)
- [ ] Quantifiable results documented
- [ ] Resume updated with project

### Career

- [ ] Clear "Agent Pipeline Specialist" positioning
- [ ] VNTG + sdd-system + Personal project narrative
- [ ] Resume updated with quantifiable achievements
- [ ] GitHub profile showcases project
- [ ] Ready to apply for AI PE positions

---

## Risk Mitigation

### Risk 1: Missing Infrastructure Knowledge for Deployment

**Problem:** Vercel is simple, but what about K8s/LGTM for advanced roles?

**Mitigation:**
- Phase 5b (optional, weeks 14-17): Learn Docker, K8s, LGTM Stack
- Current agents can be deployed to K8s later
- Focus on agent concepts now, infrastructure when needed

### Risk 2: Custom Orchestration More Complex Than LangGraph

**Problem:** Building orchestration from scratch might be harder

**Mitigation:**
- Start simple (sequential execution: Agent A → Agent B)
- Learn from sdd-system patterns (proven architecture)
- Add LangGraph.js if custom approach too complex (Week 10)

### Risk 3: TypeScript AI Ecosystem Less Mature Than Python

**Problem:** Fewer libraries, examples, community support

**Mitigation:**
- Anthropic SDK is production-ready in TypeScript
- Supabase has excellent TypeScript support
- LangSmith supports TypeScript
- Community growing fast (LangChain.js, etc.)

### Risk 4: 13 Weeks Too Aggressive

**Problem:** Might not finish in 3 months

**Mitigation:**
- Each phase independently useful (can pause after any phase)
- Week 0 optional (skip if already comfortable)
- Phase 5b optional (infrastructure can wait)
- Can extend to 16-20 weeks if needed

---

## Extended Learning (Optional, Weeks 14+)

### Phase 5b: Advanced Infrastructure (Weeks 14-17)

**Goal:** Learn Docker, K8s, LGTM Stack for advanced deployment

**Topics:**
- Docker containerization
- Kubernetes deployment (minikube locally)
- Grafana LGTM Stack (Loki, Grafana, Tempo, Mimir)
- OpenTelemetry instrumentation
- Agent-specific monitoring dashboards

**Deliverable:** Agents deployed on K8s with full observability

### Phase 6: Market Fit (Weeks 18-24)

**Goal:** Polish portfolio, apply for jobs, prepare for interviews

**Tasks:**
- Write 2-3 more blog posts
- Contribute to open source (LangChain.js, etc.)
- Polish resume and LinkedIn
- Apply to 10+ AI PE positions
- Practice interview questions
- Prepare technical presentation

**Deliverable:** Job offers

---

## Resources

### Documentation

- [Anthropic SDK (TypeScript)](https://github.com/anthropics/anthropic-sdk-typescript)
- [Zod Documentation](https://zod.dev/)
- [Supabase Vector](https://supabase.com/docs/guides/ai/vector-columns)
- [LangSmith Docs](https://docs.smith.langchain.com/)
- [Vercel Deployment](https://vercel.com/docs)

### Learning

- [Anthropic Prompt Engineering](https://docs.anthropic.com/en/docs/prompt-engineering)
- [OpenAI Embeddings Guide](https://platform.openai.com/docs/guides/embeddings)
- [LLM Evaluation Best Practices](https://www.anthropic.com/research/evaluating-ai-systems)

### Inspiration

- [LangChain.js](https://js.langchain.com/docs/get_started/introduction)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [sdd-system](../../../sdd-system) (your own project)

---

## Next Steps

### This Week (Week 0)

- [ ] Review this roadmap
- [ ] Setup TypeScript project
- [ ] Install Anthropic SDK
- [ ] Run `hello-claude.ts` successfully
- [ ] Create `learning/week-01-anthropic-sdk/notes.md` template
- [ ] Plan Phase 1 start date

### Questions to Clarify

- [ ] Confirm 13-week timeline is realistic
- [ ] Decide on Phase 5b (infrastructure) priority
- [ ] Choose blog platform (Dev.to, Medium, personal site)
- [ ] Confirm repository will be public from start

---

**Last Updated:** 2026-01-27
**Document Version:** 2.0 (TypeScript Edition)
**Author:** Claude (with Jay Kim)
**Timeline:** 13 weeks core learning (3 months)

**Version History:**

- v2.0 (2026-01-27): **TypeScript-first rewrite**
  - Complete restructure for TypeScript approach
  - Removed Phase 0a (infrastructure deferred)
  - Added sdd-system synergy sections
  - Compressed to 13 weeks (3 months)
  - Added VNTG context and career positioning
  - Infrastructure moved to optional Phase 5b
- v1.0 (2026-01-25): Original Python-based roadmap (6 months)

---

**End of ROADMAP.md**
