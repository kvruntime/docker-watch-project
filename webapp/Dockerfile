FROM node:20-alpine as build
WORKDIR /src
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit dev
COPY . .
RUN ["npm", "run", "build"]


FROM nginx:alpine as deploy
EXPOSE 80
COPY --from=build /src/dist /usr/share/nginx/html