# Usa Node.js 20 (LTS actual)
FROM node:20-alpine AS builder

# Instala Angular CLI
RUN npm install -g @angular/cli@latest

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --configuration production --base-href "/IngenieriaProg.github.io/"

# Etapa de producción
FROM nginx:alpine
COPY --from=builder /app/dist/IngenieriaProg/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
