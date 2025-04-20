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


COPY --from=builder /frontend/.next ./.next
COPY --from=builder /frontend/public ./public
COPY --from=builder /frontend/package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 3003

CMD ["npm", "run", "start"]
