# Escolha a imagem base
FROM node:18

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Expõe a porta onde o serviço vai rodar
EXPOSE 3000

# Comando para rodar o microsserviço
CMD ["npm", "start"]
