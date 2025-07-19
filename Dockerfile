FROM node:20-bullseye-slim AS base

FROM base AS deps

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

FROM base AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM base as prod

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

ENV PORT=80

CMD ["npm", "start"]