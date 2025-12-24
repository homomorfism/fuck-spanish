# Git Pre-commit Hook

This repository uses [Husky](https://typicode.github.io/husky/) to manage git hooks.

## Pre-commit Hook

The pre-commit hook automatically checks the `landing/` directory when changes are staged:

### Checks performed:
1. **ESLint** - Ensures code quality standards are met
2. **Prettier** - Verifies code formatting is consistent
3. **TypeScript** - Type checks the TypeScript code

### How it works:
- The hook only runs when there are changes in the `landing/` directory
- If any check fails, the commit will be blocked
- You'll see clear error messages indicating what needs to be fixed

### If the pre-commit hook fails:

**For formatting issues:**
```bash
cd landing
npm run format
```

**For linting issues:**
```bash
cd landing
npm run lint
```

**For TypeScript errors:**
Fix the type errors shown in the output, then try committing again.

## Setup

The git hooks are automatically installed when you run:
```bash
npm install
```

This is handled by the `prepare` script in `package.json` which runs `husky` to set up the hooks.

## Bypassing the Hook (Not Recommended)

In rare cases where you need to bypass the pre-commit hook:
```bash
git commit --no-verify -m "your message"
```

**Note:** Only use `--no-verify` when absolutely necessary, as it skips important quality checks.
