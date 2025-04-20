FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --configuration production

# Теперь можно выбрать, как отдавать статику:
# - или nginx (лучше для продакшена)
# - или просто оставить build в volume, если только в разработке
