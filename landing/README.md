# Landing Page

This is the landing page for FuckLanguage - the best application for learning Spanish.

## Tech Stack

- **Next.js 16.1.1** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Deployment

### Dokploy Deployment

See [DOKPLOY_DEPLOYMENT.md](../DOKPLOY_DEPLOYMENT.md) for detailed instructions on deploying to Dokploy.

**Quick Start:**

1. Create application in Dokploy dashboard
2. Connect Git repository
3. Set root directory to `landing`
4. Deploy

### Docker Deployment

Build and run with Docker:

```bash
docker build -t fucklanguage-landing .
docker run -p 3000:3000 fucklanguage-landing
```

The Dockerfile uses multi-stage builds for optimal image size and performance.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Dokploy Documentation](https://dokploy.com/docs)
