FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# instala dependências
RUN npm ci --only=production || npm install --production

# copia o restante do código
COPY . .

# expõe a porta da app
EXPOSE 3000

# comando para rodar o servidor
CMD ["node", "src/server.js"]