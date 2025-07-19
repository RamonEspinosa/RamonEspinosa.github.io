FROM node:20-bullseye-slim AS base


FROM base AS deps

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci


FROM base as static_build

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build


FROM base AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules

COPY . .

ENV NEXT_OUTPUT=standalone

RUN npm run build

COPY --from=static_build /usr/src/app/.next/static .next/standalone/.next/static

COPY --from=static_build /usr/src/app/public .next/standalone/public


FROM base as prod

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

ENV PORT=80

CMD ["node", ".next/standalone/server.js"]