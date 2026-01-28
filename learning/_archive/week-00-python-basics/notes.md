# Week 0: Python Basics

> **Goal**: Quick Python adoption for TypeScript developers
> **Duration**: 2026-01-18 ~ 2026-01-25 (1 week)

## Learning Objectives

- [ ] Understand basic Python syntax
- [ ] Virtual environment and package management
- [ ] Successfully call Claude API
- [ ] Data validation with Pydantic
- [ ] Ready to start Phase 1

## Day 1-2: Python Fundamentals

### TypeScript vs Python Comparison

#### Variable Declaration
```typescript
// TypeScript
const name: string = "Kim";
let age: number = 30;
```

```python
# Python - type hints are optional
name: str = "Kim"
age: int = 30

# Or without types
name = "Kim"
age = 30
```

#### Functions
```typescript
// TypeScript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

```python
# Python
def greet(name: str) -> str:
    return f"Hello, {name}!"  # f-string (similar to template literals)
```

#### Classes
```typescript
// TypeScript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
```

```python
# Python
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def greet(self) -> str:
        return f"Hi, I'm {self.name}"
```

#### Arrays/Lists
```typescript
// TypeScript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 2);
```

```python
# Python
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]  # List comprehension!
filtered = [n for n in numbers if n > 2]
```

### Key Learnings

#### 1. Indentation Matters!
- TypeScript: Curly braces `{}`
- Python: Indentation (4 spaces)

```python
# Correct
if age > 18:
    print("Adult")
    print("Can vote")

# Wrong - Will cause error!
if age > 18:
print("Adult")  # IndentationError!
```

#### 2. Type Hints Are Optional
- TypeScript: Types required
- Python: Type hints for documentation only (not checked at runtime)

```python
# Works without type hints
def add(a, b):
    return a + b

# More clear with type hints
def add(a: int, b: int) -> int:
    return a + b
```

#### 3. None vs null
```typescript
// TypeScript
const value: string | null = null;
```

```python
# Python
value: str | None = None
```

### Exercises

#### Exercise 1: First Python Program
```python
# learning/week-00/exercises/hello.py
def main():
    name = input("Enter your name: ")
    print(f"Hello, {name}!")

if __name__ == "__main__":
    main()
```

**Learned**:
- `input()`: Get user input
- `f-string`: String formatting
- `if __name__ == "__main__"`: Entry point

---

## Day 3-4: Python AI Ecosystem

### Package Management

#### TypeScript (npm/yarn)
```bash
npm install anthropic
npm install dotenv
```

```typescript
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
```

#### Python (pip)
```bash
pip install anthropic
pip install python-dotenv
```

```python
import anthropic
from dotenv import load_dotenv
```

**Differences**:
- TypeScript: `package.json`
- Python: `requirements.txt`

### Virtual Environment

```bash
# Create
python3 -m venv venv

# Activate
source venv/bin/activate  # Mac/Linux

# Deactivate
deactivate
```

**Why needed?**:
- Independent package versions per project
- Similar concept to Node.js `node_modules`

### First Claude API Call

```python
# src/hello_claude.py
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

client = anthropic.Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content[0].text)
```

**Result**:
```
✅ Claude's response:
[Claude's response content]
```

---

## Day 5: Pydantic (Data Validation)

### TypeScript Interface vs Pydantic

```typescript
// TypeScript
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Kim",
  age: 30,
  email: "kim@example.com"
};
```

```python
# Python with Pydantic
from pydantic import BaseModel, EmailStr

class User(BaseModel):
    name: str
    age: int
    email: EmailStr  # Automatic email format validation!

user = User(
    name="Kim",
    age=30,
    email="kim@example.com"
)

# Invalid data throws error automatically!
# user = User(name="Kim", age="thirty")  # ValidationError!
```

**Pydantic Advantages**:
- Runtime validation (TypeScript only at compile time)
- Automatic conversion (string → int)
- Detailed error messages

---

## Day 6-7: First Mini Project

### Project: Claude Chatbot (CLI)

```python
# mini_chatbot.py
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

def chat():
    client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

    print("💬 Claude chatbot started! (Type 'quit' to exit)\n")

    while True:
        user_input = input("You: ")

        if user_input.lower() == 'quit':
            print("👋 Goodbye!")
            break

        message = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1024,
            messages=[
                {"role": "user", "content": user_input}
            ]
        )

        response = message.content[0].text
        print(f"\n🤖 Claude: {response}\n")

if __name__ == "__main__":
    chat()
```

**Run**:
```bash
python mini_chatbot.py
```

---

## Week Reflection

### Most Challenging
- Adapting to indentation syntax
- Type hints being optional (different from TypeScript)
- Special methods like `__init__` and `__main__`

### Most Interesting
- List comprehensions are concise and powerful
- f-strings more intuitive than template literals
- Pydantic's automatic validation feature

### TypeScript vs Python Comparison
| Feature | TypeScript | Python |
|---------|-----------|--------|
| Type System | Strong (compile) | Weak (runtime) |
| Syntax | Curly braces | Indentation |
| Async | async/await | async/await |
| Packages | npm | pip |
| Execution | Compile → Run | Direct execution |

### Next Week Plan
- [ ] Start Phase 1 (Prompt Reviewer)
- [ ] Learn LangChain basics
- [ ] Practice System Prompt design

---

## Resources

### Materials Read
- [Python for JavaScript Developers](https://www.valentinog.com/blog/python-for-js/)
- [Real Python - Python Basics](https://realpython.com/python-basics/)
- [Anthropic API Docs](https://docs.anthropic.com/)
- [Pydantic Docs](https://docs.pydantic.dev/)

### Useful Commands
```bash
# Virtual environment
python3 -m venv venv
source venv/bin/activate

# Package installation
pip install -r requirements.txt

# Save package list
pip freeze > requirements.txt

# Run Python file
python src/hello_claude.py

# Interactive Python (REPL)
python
```

### Using ChatGPT/Claude
```
Question: "Convert this TypeScript code to Python:
[paste code]"

→ Quick mapping learning!
```

---

**Week Completed**: 2026-01-25
**Next Week**: Week 1-2 (Phase 1: Prompt Reviewer)
