FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable \
 && corepack prepare pnpm@10.33.2 --activate

# PRUNE MONOREPO (Turbo)
FROM base AS pruner
WORKDIR /app

COPY . .
RUN pnpm dlx turbo prune @queuely/api --docker


# BUILD STAGE (FULL DEPS)
FROM base AS builder
WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .

# Generate Prisma Client
RUN pnpm --filter @queuely/db run generate

# Build API
RUN pnpm turbo run build --filter=@queuely/api



# RUNTIME STAGE (CLEAN)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# ONLY install API production graph
RUN pnpm install --frozen-lockfile --filter @queuely/api... --prod

# Copy only built output
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json

EXPOSE 3001

CMD ["node", "dist/server.js"]