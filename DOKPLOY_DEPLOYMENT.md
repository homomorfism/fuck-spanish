# Deploying to Dokploy

This guide explains how to deploy the FuckLanguage landing page using [Dokploy](https://dokploy.com/), a self-hosted Platform as a Service (PaaS) similar to Vercel/Netlify.

## Prerequisites

- A Dokploy instance running on your server
- Access to Dokploy dashboard
- Git repository connected to Dokploy

## Deployment Options

### Option 1: Direct Deployment (Recommended)

Dokploy can automatically detect and deploy Next.js applications.

#### Steps:

1. **Login to Dokploy Dashboard**
   - Access your Dokploy instance (e.g., `https://your-dokploy-instance.com`)

2. **Create New Application**
   - Click "Create Application"
   - Choose "Git" as the source
   - Connect your repository: `homomorfism/fuck-spanish`
   - Select the branch: `main` (or your production branch)

3. **Configure Build Settings**
   - **Root Directory**: `landing`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Port**: `3000`
   - **Node Version**: `20.x` or higher

4. **Environment Variables** (if needed)
   ```
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Dokploy will automatically install dependencies and build your application

### Option 2: Docker Deployment

For more control, use Docker with the provided Dockerfile.

#### Steps:

1. Create a `Dockerfile` in the `landing/` directory (see file structure below)
2. In Dokploy dashboard:
   - Create Application
   - Choose "Dockerfile" as the build method
   - Set **Root Directory**: `landing`
   - Set **Dockerfile Path**: `Dockerfile`
3. Deploy

## File Structure

The deployment requires the following structure:

```
landing/
├── Dockerfile          # For Docker deployment
├── .dockerignore       # Files to exclude from Docker build
├── src/
├── public/
├── package.json
└── next.config.ts
```

## Dockerfile Configuration

A `Dockerfile` has been created at `landing/Dockerfile` with multi-stage build for optimal performance:

- **Stage 1**: Install dependencies
- **Stage 2**: Build application
- **Stage 3**: Production runtime with minimal footprint

## .dockerignore Configuration

A `.dockerignore` file has been created to exclude unnecessary files from the Docker build, reducing image size and build time.

## Post-Deployment

### Verify Deployment

1. Once deployed, Dokploy will provide a URL
2. Visit the URL to see your landing page
3. Check the application logs in Dokploy dashboard for any issues

### Custom Domain

To use a custom domain:

1. In Dokploy dashboard, go to your application settings
2. Navigate to "Domains" section
3. Add your custom domain (e.g., `fucklanguage.com`)
4. Configure DNS records as instructed by Dokploy
5. Enable SSL/TLS (usually automatic with Let's Encrypt)

### Environment Variables

If you need to add environment variables later:

1. Go to application settings in Dokploy
2. Navigate to "Environment Variables"
3. Add variables and redeploy

## Troubleshooting

### Build Fails

- Check build logs in Dokploy dashboard
- Ensure Node.js version is 20.x or higher
- Verify all dependencies are in `package.json`

### Application Won't Start

- Check that the start command is `npm start`
- Verify port 3000 is exposed
- Check application logs for errors

### Out of Memory

- Increase memory limits in Dokploy application settings
- Consider using Docker deployment for better resource control

## CI/CD Integration

Dokploy supports automatic deployments:

1. Enable "Auto Deploy" in application settings
2. Select the branch to auto-deploy (e.g., `main`)
3. Every push to that branch will trigger a new deployment

## Monitoring

Monitor your application in Dokploy dashboard:

- **Logs**: Real-time application logs
- **Metrics**: CPU, Memory, Network usage
- **Health Checks**: Automatic health monitoring

## Scaling

To scale your application:

1. Go to application settings
2. Adjust the number of replicas/instances
3. Configure load balancing if needed

## Additional Resources

- [Dokploy Documentation](https://dokploy.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Docker Documentation](https://docs.docker.com/)

## Quick Commands

```bash
# Test production build locally
cd landing
npm run build
npm start

# Test Docker build locally
docker build -t fucklanguage-landing ./landing
docker run -p 3000:3000 fucklanguage-landing
```

## Support

If you encounter issues:
- Check Dokploy logs
- Review Next.js build output
- Ensure all environment variables are set correctly
