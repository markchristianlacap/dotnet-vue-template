FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine as server
WORKDIR /app

COPY *.sln .
COPY src/Application/*.csproj ./src/Application/

RUN dotnet restore

COPY src/Application/. ./src/Application/

WORKDIR /app
RUN dotnet publish -c Release -o out

FROM node:lts-alpine as client

WORKDIR /app
RUN corepack enable
COPY src/Client/.npmrc src/Client/package.json ./src/Client/
COPY ./pnpm-lock.yaml ./pnpm-workspace.yaml ./package.json ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile
COPY src/Client ./src/Client
RUN pnpm --filter client build

FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine
COPY --from=server /app/out ./
COPY --from=client /app/src/Client/dist ./dist
RUN apk add --no-cache tzdata icu-libs
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false
COPY scripts/ ./scripts/
RUN chmod +x ./scripts/entrypoint.sh
CMD /bin/sh ./scripts/entrypoint.sh
