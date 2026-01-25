# AI PE Job Market Analysis

> **Purpose:** Aggregate patterns from collected job descriptions to align roadmap with market demands
> **Strategy:** Collect 10+ JDs → Identify patterns → Adjust roadmap
> **Status:** Active collection (1/10 collected)
> **Last Updated:** 2026-01-25

---

## Quick Summary

**Total Collected:** 1 JD
**Date Range:** 2026-01-25 ~ ongoing
**Target:** 10+ JDs by Month 3 (April 2026)
**Update Frequency:** After every 2-3 new JDs added

---

## Common Requirements Patterns

### Technical Skills Frequency

**AI/LLM Core:**
- Python: 1/1 (100%)
- LLM APIs (OpenAI, Anthropic): 1/1 (100%)
- Prompt engineering: 1/1 (100%)
- Agent orchestration: 1/1 (100%)
- RAG/Vector DB: 0/1 (0%) - *will update as we collect more*

**Backend/API:**
- FastAPI: 1/1 (100%) ⚠️ **Not in current roadmap!**
- Node.js: 1/1 (100%)
- GraphQL: 1/1 (100%)
- REST APIs: 1/1 (100%)

**Frontend:**
- TypeScript: 1/1 (100%) ✅ *Your strength*
- React: 1/1 (100%) ✅ *Your strength*
- Tailwind: 1/1 (100%)

**Infrastructure:**
- Docker: 1/1 (100%) ✅ *In roadmap (Phase 0a, 5)*
- Kubernetes: 0/1 (0%)
- CI/CD: 1/1 (100%) ⚠️ *Partially covered*
- Monitoring: 1/1 (100%) ✅ *In roadmap (LGTM)*

**Experience Requirements:**
- 4+ years: 1/1 (100%) ✅ *You have 4 years*
- Production AI deployment: 1/1 (100%) ⚠️ *Need to build*
- Full-stack: 1/1 (100%) ✅ *Your background*

---

## Key Insights (Updated as we collect)

### 1. Full-Stack > Pure AI Skills
**Pattern:** "Product Engineer" roles want TypeScript + Python, not just AI expertise
**Your Advantage:** Frontend background is actually valuable, not a weakness
**Source:** Flank

### 2. "Shipped to Production" is Critical
**Pattern:** Emphasis on "shipping AI-powered applications to production"
**Action:** Must demonstrate production deployment in portfolio
**Source:** Flank

### 3. FastAPI is Common
**Pattern:** 1/1 JDs require FastAPI (need more data)
**Action:** Add FastAPI to Week 0 or Phase 1 roadmap
**Priority:** HIGH (similar to NestJS, quick to learn)
**Source:** Flank

### 4. Shipping Velocity Matters
**Pattern:** "Deploy to production multiple times per week"
**Action:** Document frequent deployments, setup CI/CD
**Portfolio Impact:** Show Git commit frequency
**Source:** Flank

---

## Roadmap Gap Analysis

### ✅ Well Covered by Current Roadmap
- Python fundamentals → Week 0
- Prompt engineering → Phase 1
- AI agents → Phase 1-4
- Docker/Infrastructure → Phase 0a, Phase 5
- Production deployment → Phase 5
- TypeScript/React (your existing strength)

### ⚠️ Needs Addition
- **FastAPI** → Add to Week 0 or Phase 1 (HIGH priority)
- **CI/CD pipeline** → Add to Phase 5 (MEDIUM priority)
- **GraphQL** → Optional, can learn on job (LOW priority)

### ❌ Not Covered (Monitor as we collect more JDs)
- Cloud platforms (AWS/GCP/Azure) - may be needed
- Fine-tuning - likely not needed for "Product Engineer" roles
- ML model training - likely not needed (focus on LLM APIs)

---

## Collected Job Descriptions

### Active Listings

1. **[Flank - Product Engineer (AI-Focused)](./flank.md)**
   - **Location:** Berlin, Germany (Remote)
   - **Stage:** Series A ($10M)
   - **Experience:** 4+ years
   - **Stack:** TypeScript, React, Python, FastAPI, Node.js
   - **Key Insight:** Full-stack + AI, emphasis on shipping velocity
   - **Fit:** HIGH - perfect match for your background
   - **Added:** 2026-01-25

### To Collect (Target: 9 more)

**Priority Companies:**
- [ ] Anthropic - AI Product Engineer
- [ ] OpenAI - Product Engineer (AI)
- [ ] Perplexity - AI Engineer
- [ ] Cursor - Product Engineer
- [ ] Replit - AI Product Engineer

**Why These:**
- Well-known AI companies
- Product-focused (not research)
- Likely similar to Flank's requirements

**Collection Strategy:**
- LinkedIn: "AI Product Engineer" search
- Company career pages
- Y Combinator jobs board
- 1-2 JDs per week

---

## Action Items (Updated After Each Collection)

### Immediate (Based on Current Data)

**High Priority:**
- [ ] Add FastAPI to roadmap
  - Week 0: FastAPI tutorial (4 hours)
  - Phase 1: Wrap Prompt Reviewer in FastAPI endpoint
  - Compare to NestJS in learning notes

**Medium Priority:**
- [ ] Add CI/CD to Phase 5
  - GitHub Actions or similar
  - Document deployment frequency
  - Prove "ship to production multiple times per week"

### Monitor (Need more data)
- [ ] After 5 JDs: Review if GraphQL is common
- [ ] After 5 JDs: Check if cloud platforms (AWS/GCP) are required
- [ ] After 10 JDs: Final gap analysis and roadmap adjustment

---

## Portfolio Optimization (Based on Market)

### What to Emphasize (Based on JD Patterns)

**In README.md:**
- ✅ TypeScript + Python dual expertise
- ✅ Full-stack capability (your strength)
- ⚡ FastAPI for production AI APIs (add after learning)
- ✅ Shipped AI-powered product to production
- ✅ User-centric AI UX design

**In Git Activity:**
- Show frequent commits (2-3x per week minimum)
- Demonstrate agile iteration
- Clear PR descriptions explaining user value

**In Blog Posts:**
- "From Frontend to AI PE: Why Full-Stack Matters"
- "Shipping AI Products Daily: Lessons Learned"
- "Human-AI Interaction: UX Principles"

---

## Interview Prep (Common Questions Emerging)

### Question: "Show me an AI product you've shipped to production."

**What They Want:**
- Not just "I built something"
- But "I deployed, users used it, I iterated based on feedback"

**Your Answer Template:**
[Will update with specific answer after Phase 5 completion]

### Question: "How do you think about AI UX?"

**Common Theme:** Transparency, control, user-centric design

**Your Answer Template:**
[Will document learnings from building agents]

---

## Monthly Review Checklist

**After Month 1 (Feb 2026):**
- [ ] Collected 3-4 JDs
- [ ] Updated pattern analysis
- [ ] Identified new gaps
- [ ] Adjusted roadmap if needed

**After Month 2 (Mar 2026):**
- [ ] Collected 6-7 JDs
- [ ] Clear patterns emerging
- [ ] Portfolio optimization plan
- [ ] Interview prep materials ready

**After Month 3 (Apr 2026):**
- [ ] Collected 10+ JDs
- [ ] Final gap analysis complete
- [ ] Roadmap adjustments implemented
- [ ] Ready to start applications

---

## How to Use This Document

### For Claude Code Sessions:
```
"Based on JOB-DESCRIPTIONS.md patterns, should I adjust my roadmap?"
"What gaps exist between market requirements and my current plan?"
"Help me prioritize learning based on JD frequency data"
```

### For Yourself:
1. **Weekly:** Add 1-2 new JDs to this directory
2. **Bi-weekly:** Update pattern analysis in this file
3. **Monthly:** Review action items and adjust roadmap
4. **Before applying:** Use collected JDs for interview prep

---

## Related Documents

- **Individual JD Analysis:** See `./flank.md`, `./anthropic.md`, etc.
- **Learning Roadmap:** [ROADMAP.md](../../planning/ROADMAP.md)
- **Career Plan:** [CAREER-TRANSITION.md](../CAREER-TRANSITION.md) (if exists)
- **Your Background:** [PROFILE.md](../PROFILE.md)

---

**Created:** 2026-01-25
**Purpose:** Pattern aggregation and market alignment
**Next Update:** After collecting 2-3 more JDs
**Target Date for 10 JDs:** April 2026

---

## Notes

**Collection Tips:**
- Focus on "Product Engineer" + AI roles (not pure ML/Research)
- Prioritize companies building AI products (not AI infrastructure)
- Look for full-stack requirements (matches your background)
- Remote-friendly companies preferred

**Analysis Tips:**
- Track frequency, not just presence
- Look for "must-have" vs "nice-to-have"
- Notice patterns in company stage (Series A/B vs FAANG)
- Different requirements = different career paths
