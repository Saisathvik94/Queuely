FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable \
 && corepack prepare pnpm@10.33.2 --activate

# PRUNE MONOREPO
FROM base AS pruner
WORKDIR /app

COPY . .
RUN pnpm dlx turbo prune @queuely/worker --docker


# BUILD STAGE
FROM base AS builder
WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .

# Prisma client generation (shared package)
RUN pnpm --filter @queuely/db run generate

# Build worker
RUN pnpm turbo run build --filter=@queuely/worker


# RUNTIME STAGE (CLEAN)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable \
 && corepack prepare pnpm@10.33.2 --activate

# ONLY production deps for worker graph
RUN pnpm install --frozen-lockfile --filter @queuely/worker... --prod

# Copy only compiled output
COPY --from=builder /app/apps/worker/dist ./dist
COPY --from=builder /app/apps/worker/package.json ./package.json

CMD ["node", "dist/index.js"]