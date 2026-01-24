# Agents Concepts

> **Purpose:** Clarify the distinction between project agents (implementation target) and Claude Code agents (development tools)  
> **For:** Understanding the two-layer agent concepts in this project  
> **See also:** [ROADMAP.md](../planning/ROADMAP.md) for agent implementation phases

---

## Overview

This project involves two completely different types of "agents" operating at different layers:

1. **Project Agents** (Implementation Target) - The AI agents we're building
2. **Claude Code Agents** (Development Tools) - Tools that help build the project

Understanding this distinction is crucial for development clarity.

---

## 1. Project Agents (Implementation Target)

**Location:** `src/agents/`

These are the AI agents we're implementing as part of the learning management system.

### Example Implementation

```python
# src/agents/prompt_reviewer.py
class PromptReviewer:
    """사용자가 작성한 프롬프트를 평가하는 AI 에이전트"""

    def __init__(self):
        self.client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

    async def review(self, user_prompt: str):
        # Claude API 호출
        response = await self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            messages=[{"role": "user", "content": user_prompt}]
        )
        return response
```

### Characteristics

- **Direct implementation** - Business logic we write ourselves
- **Orchestration** - Using LangGraph/LangChain for workflow management
- **Claude API calls** - Application code that calls Claude API
- **System components** - Part of the learning management system

### Agent Roles

| Agent | Purpose |
|-------|---------|
| **Prompt Reviewer** | 프롬프트 품질 평가 |
| **Code Critic** | 코드 리뷰 |
| **Assignment Generator** | 과제 생성 |
| **Progress Tracker** | 학습 진도 관리 |

### Execution

```bash
# Final user runs the learning management system
$ python src/cli.py review-prompt "Summarize this article"

# Internally:
# → PromptReviewer agent executes
# → Claude API call
# → Returns prompt quality score
```

---

## 2. Claude Code Agents (Development Tools)

**Location:** Claude Code tool internals

These are sub-agents/tools within Claude Code that help during development.

### Characteristics

- **Claude Code CLI functionality** - Built into the Claude Code tool
- **Development helpers** - Assist me (Claude) during this session
- **Codebase operations** - Codebase exploration, deployment, test execution, etc.

### Examples

- **Explore agent** - Codebase search
- **Bash agent** - Terminal command execution
- **Plan agent** - Implementation planning

### Usage During Development

**Current conversation (during development):**

```
User: "src/agents/ 디렉토리 구조 확인해줘"

Claude: [Internally uses Explore agent]
        → Uses Glob tool
        → Returns file list
```

---

## Layer Comparison

| Aspect | Project Agents | Claude Code Agents |
|--------|----------------|-------------------|
| **Level** | Application level | Tool level (meta) |
| **Purpose** | Learning management system implementation | Development process support |
| **User** | End users (learners) | Developer (Claude) |
| **Implementation** | Direct Python code writing | Built into Claude Code |
| **Execution** | `python src/cli.py review-prompt` | Task tool calls |
| **API** | Direct Claude API calls | Internal system |

---

## Real-World Usage Scenarios

### Project Agents Usage (End User)

```bash
# End user uses the learning management system
$ python src/cli.py review-prompt "Summarize this article"

# Internally:
# → PromptReviewer agent executes
# → Claude API call
# → Returns prompt quality score
```

### Claude Code Agents Usage (Development Process)

**Current development session:**

```
User: "src/agents/ 디렉토리 구조 확인해줘"

Claude: [Internally uses Explore agent]
        → Glob tool usage
        → Returns file list
```

---

## Analogy: Web Development

Think of it like web development:

**Claude Code Agents = VS Code Extensions/Plugins**
- Development tools
- ESLint (code checking)
- Prettier (formatting)
- GitHub Copilot (code suggestions)

**Project Agents = Business Logic Being Built**
- Actual application functionality
```typescript
class UserService {
  async validateUser() { /* ... */ }
  async sendNotification() { /* ... */ }
}
```

---

## Development Flow Example

1. **Claude uses Claude Code Agents**
   - Explore agent to understand codebase
   - Bash agent to run tests

2. **Based on results, implement Project Agents**
   - Write `src/agents/prompt_reviewer.py`
   - Design LangGraph workflow

3. **User uses completed Project Agents**
   - `python src/cli.py review-prompt "..."`
   - PromptReviewer calls Claude API and returns results

---

## Key Summary

| | Project Agents | Claude Code Agents |
|--|----------------|-------------------|
| **Implementation target** | ✅ | ❌ |
| **Development tool** | ❌ | ✅ |
| **For end users** | ✅ | ❌ |
| **Meta level** | ❌ | ✅ |

**Simple analogy:**
- **Claude Code agents** = Tools for building a house (hammer, saw)
- **Project agents** = The house being built (rooms, kitchen)

---

## Implementation Status

See [ROADMAP.md](../planning/ROADMAP.md) for detailed implementation phases:

- **Phase 1:** Prompt Reviewer
- **Phase 2:** Code Critic
- **Phase 3:** Progress Tracker
- **Phase 4:** Workflow Orchestration
- **Phase 5:** Assignment Generator

---

**Created:** 2026-01-18  
**Last Updated:** 2026-01-18
