# ==============================================================================
# Multi-stage Dockerfile for NEXOVIRA AI Solution (Production-Ready SPA)
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Build Application
# ------------------------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies (cached if package files don't change)
COPY package.json package-lock.json ./
RUN npm ci

# Copy full application source code
COPY . .

# Run production build (outputs to /app/dist)
RUN npm run build

# ------------------------------------------------------------------------------
# Stage 2: Serve via High-Performance Nginx
# ------------------------------------------------------------------------------
FROM nginx:alpine-slim AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration optimized for React SPA and caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Healthcheck to ensure container is healthy
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
