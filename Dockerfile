# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner

WORKDIR /frontend

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/src ./src

RUN npm install --omit=dev

EXPOSE 3003

CMD ["npm", "run", "start"]
