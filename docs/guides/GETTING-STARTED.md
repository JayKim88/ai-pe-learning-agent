# Getting Started Guide

> **Purpose:** Step-by-step setup instructions, troubleshooting, and Week 0 checklist
> **For:** First-time setup and Python environment configuration
> **See also:** [ROADMAP.md](../planning/ROADMAP.md) for learning plan, [INFRASTRUCTURE-TRACK.md](../infrastructure/INFRASTRUCTURE-TRACK.md) for production deployment

---

## 🚀 Quick Start (5 minutes)

### Step 1: Get API Key (2 min)

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Click "API Keys" menu
3. Click "Create Key" button
4. Copy API key (starts with sk-ant-)

### Step 2: Environment Setup (2 min)

```bash
# 1. Create virtual environment
python3 -m venv venv

# 2. Activate virtual environment
source venv/bin/activate  # Mac/Linux
# venv\Scripts\activate  # Windows

# 3. Install packages
pip install -r requirements.txt

# 4. Setup environment variables
cp .env.example .env

# 5. Edit .env file (with VS Code, etc.)
# ANTHROPIC_API_KEY=paste_your_api_key_here
```

### Step 3: First Run (1 min)

```bash
python src/hello_claude.py
```

**Expected Result**:

```
🤖 Sending message to Claude...

✅ Claude's response:

[Claude's warm response message]

==================================================
🎉 Success! Your Python environment is set up correctly!
==================================================
```

---

## 🔧 Troubleshooting

### Python Not Installed

#### Mac

```bash
# Install with Homebrew
brew install python@3.11
```

#### Windows

1. Visit [Python.org](https://www.python.org/downloads/)
2. Download Python 3.11
3. During installation, check "Add Python to PATH"!

### Virtual Environment Activation Issues

#### Mac/Linux

```bash
# Permission issue
chmod +x venv/bin/activate
source venv/bin/activate
```

#### Windows (PowerShell)

```bash
# May need to change execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
venv\Scripts\activate
```

### API Key Error

```
anthropic.AuthenticationError: Invalid API key
```

**Solution**:

1. Verify `.env` file is in project root
2. Check API key starts with `sk-ant-`
3. Ensure no quotes around key

   ```
   # Correct
   ANTHROPIC_API_KEY=sk-ant-api03-xxx

   # Wrong
   ANTHROPIC_API_KEY="sk-ant-api03-xxx"
   ```

### Package Installation Error

```bash
# Upgrade pip
pip install --upgrade pip

# Install again
pip install -r requirements.txt
```

---

## 📚 Next Steps

### 1. Learn Python Basics (Day 1-2)

**Resources**:

- [Python for JavaScript Developers](https://www.valentinog.com/blog/python-for-js/)
- [Real Python Tutorial](https://realpython.com/python-first-steps/)

**Practice**:

```python
# learning/week-00/exercises/basics.py
# Practice variables, functions, classes
```

### 2. Get Familiar with AI Ecosystem (Day 3-4)

**Goals**:

- Learn Anthropic SDK usage
- Data validation with Pydantic
- Environment variable management

**Practice**:

- Understand and modify `src/hello_claude.py`
- Experiment with different prompts

### 3. Mini Project (Day 5-7)

**Project**: Build a CLI chatbot

```python
# mini_chatbot.py
# Implement conversational chatbot
```

**Features**:

- Accept user input
- Send to Claude
- Display response
- Exit conversation

---

## 🎯 Week 0 Completion Checklist

- [ ] Python environment setup complete
- [ ] Successfully run `hello_claude.py`
- [ ] Understand basic Python syntax
- [ ] Try using Pydantic
- [ ] Complete mini chatbot
- [ ] Write `learning/week-00/notes.md`

All checked → **Ready for Phase 1!** 🎉

---

## 💡 Tips

### VS Code Setup

**Recommended Extensions**:

- Python (Microsoft)
- Pylance
- Python Indent

**Settings**:

```json
{
  "python.defaultInterpreterPath": "${workspaceFolder}/venv/bin/python",
  "python.formatting.provider": "black",
  "python.linting.enabled": true
}
```

### Git Setup

```bash
# Initialize Git (if not done yet)
git init

# First commit
git add .
git commit -m "Initial commit: Project setup"

# Push to GitHub (after creating repo)
git remote add origin https://github.com/JayKim88/ai-pe-learning-agent.git
git push -u origin main
```

### Development Workflow

```bash
# 1. Activate virtual environment (daily start)
source venv/bin/activate

# 2. Write code
code src/

# 3. Run and test
python src/your_file.py

# 4. Commit
git add .
git commit -m "feat: Add new feature"

# 5. Deactivate virtual environment (when done)
deactivate
```

---

**Created**: 2026-01-18
**Last Updated**: Update this document as needed
