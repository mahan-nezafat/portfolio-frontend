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

COPY --from=builder /frontend/.next ./.next
COPY --from=builder /frontend/public ./public
COPY --from=builder /frontend/package*.json ./
COPY --from=builder /frontend/next.config.ts ./
COPY --from=builder /frontend/tsconfig.json ./
COPY --from=builder /frontend/src ./src

RUN npm install --omit=dev

EXPOSE 3003

CMD ["npm", "run", "start"]
