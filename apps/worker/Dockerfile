FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare pnpm@10.33.2 --activate

# ─── PRUNER ───────────────────────────────────────────────
FROM base AS pruner
WORKDIR /app
COPY . .
RUN pnpm dlx turbo prune @queuely/worker --docker

# ─── BUILDER ──────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY --from=pruner /app/out/full/ .
RUN pnpm turbo run build --filter=@queuely/worker...

# ─── RUNNER ───────────────────────────────────────────────
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

# Copy compiled dist
COPY --from=builder /app/apps/worker/dist ./apps/worker/dist
COPY --from=builder /app/packages/config/dist ./packages/config/dist
COPY --from=builder /app/packages/types/dist ./packages/types/dist
COPY --from=builder /app/packages/db/dist ./packages/db/dist

# Copy Prisma generated client
COPY --from=builder /app/packages/db/generated ./packages/db/generated

# Copy Prisma runtime deps
COPY --from=builder /app/node_modules/.pnpm/@prisma+client-runtime-utils@7.8.0/node_modules/@prisma/client-runtime-utils ./node_modules/@prisma/client-runtime-utils

WORKDIR /app/apps/worker
CMD ["node", "dist/index.js"]