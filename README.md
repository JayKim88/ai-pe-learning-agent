# AI Product Engineer Learning Project

> Python-based AI learning management agent system

## Project Overview

This project builds a learning management system powered by AI agents to help you become an AI Product Engineer.

**Current Status**: Week 0 - Python Basics

## Tech Stack

- Python 3.11+
- Claude API (Anthropic)
- LangChain / LangGraph
- Supabase (Vector DB)
- Pydantic (Data Validation)

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

- [x] Week 0: Python Basics + Environment Setup
- [ ] Week 1-2: Phase 1 - Prompt Reviewer
- [ ] Week 3-4: Phase 2 - Code Critic
- [ ] Week 5-6: Phase 3 - Vector DB Integration
- [ ] Week 7-8: Phase 4 - LangGraph + Evaluation
- [ ] Week 9-10: Phase 5 - Optimization

See detailed roadmap: [docs/ROADMAP.md](docs/ROADMAP.md)

## Next Steps

1. Run `src/hello_claude.py` successfully
2. Record learning in `learning/week-00-python-basics/notes.md`
3. Learn Python basics (1 week)
4. Start Phase 1

## Resources

- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [LangChain Docs](https://python.langchain.com/docs/get_started/introduction)
- [Python for JavaScript Developers](https://www.valentinog.com/blog/python-for-js/)

---

**Created**: 2026-01-18
**Author**: Jay Kim
