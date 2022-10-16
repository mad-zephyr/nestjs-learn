FROM node:14-alpine

WORKDIR /opt/app

# копируем package.json и package-lock.json 
COPY package*.json ./

# Устанавливаем node_modules за счет package.json
RUN npm i

# копируем проект полностью 
COPY . .

RUN npm run build
RUN npm prune --production

CMD ["node", "./dist/main.js"]