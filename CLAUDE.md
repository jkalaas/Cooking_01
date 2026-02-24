# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

**Cooking_01** is a website for cooking recipes built with vanilla HTML, CSS, and JavaScript — no framework or build step required. Open `index.html` in a browser (or serve the root with any static file server) to run it.

## Repository State

| Aspect | Status |
|---|---|
| Source code | Vanilla HTML / CSS / JS |
| Build system | None (no build step) |
| Test framework | Not configured |
| Linting / formatting | Not configured |
| CI/CD | Not configured |
| Dependency management | None (no package manager) |

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

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styles | Plain CSS (custom properties, no preprocessor) |
| Logic | Vanilla ES2020+ JavaScript (ES modules, `fetch`, `async/await`) |
| Fonts / icons | Self-hosted (drop files into `assets/fonts/`) |
| Backend / data | None yet — add a REST API or static JSON data as needed |

**Serving locally**: Any static file server works, e.g.:
```bash
npx serve .         # Node.js (one-off, no install)
python3 -m http.server 8080
```

## Commands

```bash
# Serve the app locally (choose one)
npx serve .
python3 -m http.server 8080

# No install, build, or test commands yet
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

```
Cooking_01/
├── index.html                  # App entry point — links CSS & JS, mounts header
├── assets/
│   ├── images/                 # Recipe photos, icons, logo images
│   └── fonts/                  # Custom/self-hosted font files (.woff2, .ttf)
├── styles/
│   ├── main.css                # Global styles: CSS variables, reset, typography, layout
│   └── components/             # Per-component CSS files (e.g. recipe-card.css)
├── components/
│   ├── header.html             # Site header / navigation snippet
│   └── recipe-card.html        # Reusable recipe card markup
├── js/
│   ├── main.js                 # App bootstrap — loads shared components on DOMContentLoaded
│   └── components/             # Feature/component JS modules (e.g. recipe-grid.js)
├── pages/
│   ├── recipes.html            # Recipe listing page
│   └── recipe-detail.html      # Single recipe detail page
├── README.md                   # Project overview
└── CLAUDE.md                   # AI assistant guidance (this file)
```

### Folder purposes

| Folder | Purpose |
|---|---|
| `assets/images/` | Static images — recipe photos, icons, logo. Referenced as `/assets/images/<file>` in HTML/CSS. |
| `assets/fonts/` | Self-hosted fonts. Reference them with `@font-face` in `styles/main.css`. |
| `styles/` | All CSS. `main.css` holds global rules and design tokens; add per-component files under `styles/components/`. |
| `components/` | Reusable HTML snippets (header, cards, footer). Loaded into pages at runtime via `js/main.js → loadComponent()`. |
| `js/` | JavaScript. `main.js` is the entry point; add feature modules under `js/components/`. |
| `pages/` | Secondary HTML pages. Paths are relative from here (`../styles/`, `../js/`). |

## Key Conventions for AI Assistants

- **Minimal changes**: Only modify what is explicitly requested. Avoid scope creep.
- **Read before editing**: Always read a file before proposing changes to it.
- **No speculative features**: Do not add error handling, fallbacks, or abstractions for hypothetical future requirements.
- **Security**: Avoid introducing vulnerabilities — no SQL injection, XSS, command injection, or insecure defaults.
- **No time estimates**: Focus on what needs to be done, not how long it takes.
- **Update this file**: When infrastructure, stack choices, or conventions are established, update the relevant sections of CLAUDE.md to reflect the current state.
