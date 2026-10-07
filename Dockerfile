# Build frontend estático React/Vite
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Servidor de produção
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN chmod -R a+r /usr/share/nginx/html && chmod -R a+X /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
