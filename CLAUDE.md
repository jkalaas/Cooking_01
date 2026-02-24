# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

**Cooking_01** is a website for cooking recipes. The project is in its initial setup phase — the tech stack and architecture have not yet been established. When making implementation decisions, prefer widely-adopted, maintainable options and document any choices made.

## Repository State

| Aspect | Status |
|---|---|
| Source code | Not yet created |
| Build system | Not configured |
| Test framework | Not configured |
| Linting / formatting | Not configured |
| CI/CD | Not configured |
| Dependency management | Not configured |

When infrastructure is added, update the relevant sections below.

## Development Workflows

### Git Conventions

- **Branch naming**: Feature branches follow the pattern `claude/<description>-<session-id>`
- **Commit signing**: GPG/SSH commit signing is enabled. Do not pass `--no-gpg-sign`
- **Commit messages**: Write clear, descriptive messages in the imperative mood (e.g., "Add recipe search feature")
- **Push**: Always use `git push -u origin <branch-name>`

### Starting Work

1. Verify you are on the correct branch before making changes:
   ```bash
   git branch
   ```
2. Make changes in small, focused commits
3. Push to the designated feature branch (never directly to `master` without permission)

### Making Changes

- Read files before editing them
- Prefer editing existing files over creating new ones
- Keep changes minimal and focused on the task at hand
- Do not add features, refactoring, or cleanup beyond what is requested

## Tech Stack

Not yet determined. When a stack is chosen, document it here. Common candidates for a recipe website:

- **Frontend**: React, Vue, or plain HTML/CSS/JS
- **Backend**: Node.js (Express/Fastify), Python (FastAPI/Django/Flask), or a static site generator
- **Database**: PostgreSQL, SQLite, or a headless CMS
- **Styling**: Tailwind CSS, CSS Modules, or plain CSS

Once a stack is decided, add setup instructions and any relevant commands below.

## Commands

> Commands will be added here once the project is bootstrapped. Common commands to document:

```bash
# Install dependencies
# <command>

# Start development server
# <command>

# Run tests
# <command>

# Lint / format code
# <command>

# Build for production
# <command>
```

## Testing

No tests exist yet. When tests are added:
- Document the test runner and how to run tests
- Describe the testing conventions (unit, integration, e2e)
- Note any test file naming patterns (e.g., `*.test.ts`, `*_test.py`)

## Code Style

No style configuration exists yet. When linting/formatting tools are added, document:
- The tools used (ESLint, Prettier, Black, Ruff, etc.)
- How to run them
- Any key rules or style decisions

## Project Structure

To be defined as development begins. Update this section when a directory structure is established. Example placeholder:

```
Cooking_01/
├── CLAUDE.md          # AI assistant guidance (this file)
├── README.md          # Project overview
└── ...                # Source code to be added
```

## Key Conventions for AI Assistants

- **Minimal changes**: Only modify what is explicitly requested. Avoid scope creep.
- **Read before editing**: Always read a file before proposing changes to it.
- **No speculative features**: Do not add error handling, fallbacks, or abstractions for hypothetical future requirements.
- **Security**: Avoid introducing vulnerabilities — no SQL injection, XSS, command injection, or insecure defaults.
- **No time estimates**: Focus on what needs to be done, not how long it takes.
- **Update this file**: When infrastructure, stack choices, or conventions are established, update the relevant sections of CLAUDE.md to reflect the current state.
