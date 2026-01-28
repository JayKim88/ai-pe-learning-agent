# Week 0: Quick Start Guide

> Get your TypeScript + AI SDK environment ready in 30 minutes

---

## Prerequisites

- **Node.js 20+** installed ([Download](https://nodejs.org/))
- **npm 10+** (comes with Node.js)
- **Anthropic API key** ([Get one here](https://console.anthropic.com/))

---

## Setup Steps

### 1. Install Dependencies

```bash
cd ~/Documents/Projects/ai-pe-learning-agent

# Install all packages
npm install
```

This will install:
- `@anthropic-ai/sdk` - Anthropic TypeScript SDK
- `commander` - CLI framework
- `zod` - TypeScript validation
- `tsx` - TypeScript execution
- And more...

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Anthropic API key
nano .env  # or use your preferred editor
```

Your `.env` file should look like:
```bash
ANTHROPIC_API_KEY=sk-ant-api03-...your-actual-key-here
```

### 3. Run Your First Script

```bash
npm run dev
```

This runs `src/hello-claude.ts` using `tsx`.

**Expected output:**
```
🚀 Sending message to Claude...

💬 Claude's response:
I'm Claude, an AI assistant created by Anthropic, and TypeScript excels...

📊 Token Usage:
  Input tokens: 28
  Output tokens: 95
  Total tokens: 123

💰 Approximate Cost:
  Input: $0.000084
  Output: $0.001425
  Total: $0.001509

✅ Success! Your TypeScript + Anthropic SDK setup is working.
```

---

## Troubleshooting

### Error: "ANTHROPIC_API_KEY not found"

**Fix:**
1. Make sure `.env` file exists in project root
2. Check that `ANTHROPIC_API_KEY=...` line is uncommented
3. Verify you copied the full API key from Anthropic console

### Error: "Cannot find module '@anthropic-ai/sdk'"

**Fix:**
```bash
npm install
```

### Error: "command not found: tsx"

**Fix:**
```bash
# Install tsx globally (optional)
npm install -g tsx

# Or use npx
npx tsx src/hello-claude.ts
```

---

## Project Structure

After setup, your project should look like:

```
ai-pe-learning-agent/
├── node_modules/          # ✅ Installed packages
├── src/
│   ├── hello-claude.ts    # ✅ Your first script
│   ├── agents/            # Empty (Phase 1+)
│   ├── orchestration/     # Empty (Phase 2+)
│   └── utils/             # Empty (Phase 1+)
├── learning/
│   └── week-01-anthropic-sdk/
│       └── notes.md       # ✅ Start documenting here
├── package.json           # ✅ Project config
├── tsconfig.json          # ✅ TypeScript config
├── .env                   # ✅ Your secrets (gitignored)
└── .env.example           # Template
```

---

## Next Steps

### Start Phase 1 (Week 1)

1. **Read the roadmap:**
   ```bash
   open docs/planning/ROADMAP.md
   # Or use your editor
   ```

2. **Begin learning:**
   - Open `learning/week-01-anthropic-sdk/notes.md`
   - Follow the exercises
   - Document your learnings

3. **First exercise:**
   Create `learning/week-01-anthropic-sdk/exercises/basic-chat.ts`

   ```typescript
   import Anthropic from "@anthropic-ai/sdk";
   import dotenv from "dotenv";

   dotenv.config();

   async function main() {
     const client = new Anthropic({
       apiKey: process.env.ANTHROPIC_API_KEY!,
     });

     const message = await client.messages.create({
       model: "claude-3-5-sonnet-20241022",
       max_tokens: 1024,
       messages: [
         { role: "user", content: "Explain TypeScript generics in 2 sentences." }
       ],
     });

     console.log(message.content[0].text);
   }

   main();
   ```

   Run it:
   ```bash
   npx tsx learning/week-01-anthropic-sdk/exercises/basic-chat.ts
   ```

---

## Useful Commands

```bash
# Run hello-claude.ts
npm run dev

# Run any TypeScript file
npx tsx src/some-file.ts

# Build project (compile to JavaScript)
npm run build

# Run tests (when you add them)
npm test

# Format code with Prettier
npm run format

# Lint code with ESLint
npm run lint
```

---

## Tips

### 1. Use tsx for Quick Runs

Instead of compiling TypeScript first, use `tsx`:
```bash
npx tsx src/any-file.ts
```

### 2. Watch Mode (Auto-reload)

```bash
npx tsx watch src/hello-claude.ts
```

### 3. Check TypeScript Errors

```bash
npx tsc --noEmit
```

### 4. Cost Tracking

The Anthropic SDK returns token usage:
```typescript
const message = await client.messages.create({...});

console.log("Tokens used:", message.usage.input_tokens + message.usage.output_tokens);
```

### 5. VSCode Setup

Install recommended extensions:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features (built-in)

---

## Resources

- [Anthropic SDK Docs](https://docs.anthropic.com/en/api/client-sdks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ROADMAP.md](docs/planning/ROADMAP.md) - Full 13-week plan

---

## Success Checklist

- [ ] Node.js 20+ installed
- [ ] `npm install` completed successfully
- [ ] `.env` file created with valid API key
- [ ] `npm run dev` runs without errors
- [ ] Claude responds to your message
- [ ] Token usage and cost displayed

**If all checked:** ✅ You're ready for Phase 1!

---

**Estimated Time:** 30 minutes
**Next:** Start `learning/week-01-anthropic-sdk/notes.md`
