# Week 1: Anthropic SDK Fundamentals

> Learning the TypeScript Anthropic SDK and basic AI interactions

**Status:** Not Started
**Duration:** Week 1-2 of Phase 1
**Goal:** Master Anthropic SDK basics and TypeScript AI patterns

---

## Learning Objectives

- [ ] Understand Anthropic SDK API structure
- [ ] Master Messages API vs legacy Completions
- [ ] Implement streaming vs non-streaming responses
- [ ] Track token usage and costs
- [ ] Implement error handling and retries

---

## Core Concepts

### 1. Anthropic SDK Basics

**Installation:**
```bash
npm install @anthropic-ai/sdk
```

**Basic Usage:**
```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Hello, Claude!" }
  ],
});

console.log(message.content[0].text);
```

**Key Points:**
- (Add learnings here as you progress)

### 2. System Prompts

**Usage:**
```typescript
const message = await client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1024,
  system: "You are a helpful AI assistant specializing in...",
  messages: [
    { role: "user", content: "..." }
  ],
});
```

**Key Points:**
- (Add learnings here)

### 3. Token Counting and Costs

**Usage:**
```typescript
const message = await client.messages.create({...});

console.log("Input tokens:", message.usage.input_tokens);
console.log("Output tokens:", message.usage.output_tokens);

// Calculate cost (example rates, check current pricing)
const inputCost = message.usage.input_tokens * (3 / 1_000_000); // $3 per 1M tokens
const outputCost = message.usage.output_tokens * (15 / 1_000_000); // $15 per 1M tokens
const totalCost = inputCost + outputCost;
```

**Key Points:**
- (Add learnings here)

---

## Exercises

### Exercise 1: Basic Chat (`exercises/basic-chat.ts`)

**Goal:** Create a simple chat completion

**Tasks:**
- [ ] Setup Anthropic client
- [ ] Send a single message
- [ ] Print response
- [ ] Handle errors

**Learnings:**
- (Add notes after completing)

### Exercise 2: Multi-Turn Conversation (`exercises/multi-turn.ts`)

**Goal:** Implement a multi-turn conversation

**Tasks:**
- [ ] Maintain conversation history
- [ ] Send multiple messages
- [ ] Handle context window

**Learnings:**
- (Add notes after completing)

### Exercise 3: Structured Output (`exercises/structured-output.ts`)

**Goal:** Get JSON responses and validate with Zod

**Tasks:**
- [ ] Request JSON format response
- [ ] Define Zod schema
- [ ] Validate response
- [ ] Handle invalid JSON

**Learnings:**
- (Add notes after completing)

### Exercise 4: Retry Logic (`exercises/retry-logic.ts`)

**Goal:** Implement exponential backoff retry

**Tasks:**
- [ ] Detect rate limit errors
- [ ] Implement retry with backoff
- [ ] Set maximum retry count

**Learnings:**
- (Add notes after completing)

---

## Practice Work

### What I Built

(Describe exercises completed, experiments run)

### Code Samples

(Link to exercises/*.ts files)

### Results

(What worked, what didn't, lessons learned)

---

## Weekly Reflection

### Most Challenging

(What was difficult and why)

### Most Interesting

(What was fascinating or surprising)

### Apply Next Week

(How will this knowledge be used in Week 2)

### Questions for Further Study

- (List unanswered questions)

---

## Resources

- [Anthropic SDK Docs](https://docs.anthropic.com/en/api/client-sdks)
- [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/prompt-engineering)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**Started:** (Date)
**Completed:** (Date)
**Total Hours:** (Track time spent)
