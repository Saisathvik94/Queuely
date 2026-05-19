FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# PRUNER
FROM base AS pruner
WORKDIR /app
COPY . .
RUN pnpm dlx turbo prune @queuely/worker --docker

# INSTALLER
FROM base AS installer
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile --prod --ignore-scripts
COPY --from=pruner /app/out/full/ .

# BUILDER — needs dev deps so separate install
FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile
COPY --from=pruner /app/out/full/ .
RUN pnpm --filter @queuely/db run generate
RUN pnpm turbo run build --filter=@queuely/worker

# RUNNER — only production files
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable

# Only copy production node_modules
COPY --from=installer /app/node_modules ./node_modules
COPY --from=builder /app/apps/worker/dist ./dist
COPY --from=builder /app/apps/worker/package.json ./package.json

EXPOSE 3001
CMD ["node", "dist/index.js"]