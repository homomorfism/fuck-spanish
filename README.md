# fuck-spanish
My last attempt to make application for learning spanish

## Project Structure

- **landing/** - Landing page built with Next.js, TypeScript, and Tailwind CSS

## Getting Started

### Setup

Install dependencies in the root directory to set up git hooks:

```bash
npm install
```

This will install Husky and configure the pre-commit hooks.

### Working with the landing page

```bash
# Run development server
npm run landing:dev

# Build for production
npm run landing:build

# Run linter
npm run landing:lint

# Format code
npm run landing:format
```

## Git Hooks

This repository uses pre-commit hooks to ensure code quality. When you commit changes to the `landing/` directory, the following checks run automatically:

- ESLint (code quality)
- Prettier (code formatting)
- TypeScript (type checking)

See [.husky/README.md](.husky/README.md) for more details.


