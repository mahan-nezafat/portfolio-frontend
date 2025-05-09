# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /frontend

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner

WORKDIR /frontend


COPY --from=builder /frontend/.next/standalone ./.next/standalone
COPY --from=builder /frontend/.next/static ./.next/standalone/.next/static
COPY --from=builder /frontend/public ./.next/standalone/.next/public


ENV PORT=3003

EXPOSE 3003

CMD ["node", "./.next/standalone/server.js"]
