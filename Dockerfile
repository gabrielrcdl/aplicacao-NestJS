# Qualquer container que criar virá com as seguintes especificações:
# Este dockerfile irá construir a imagem de tudo que foi desenvolvido na API


# Definindo a partir de qual imagem irá pegar
FROM node:14.17.1-alpine3.12

# Executar comandos (pode ter várias isntruções RUN) essa irá excutar a instalação do bash para pode acessar o shel
RUN apk add --no-cache bash


# Excutar o comando para instalar a CLI do nest de forma global para termos isso na imagem
RUN  npm install -g @nestjs/cli

# Definindo usuário
USER node

# Definindo diretório de trabalho
WORKDIR /home/node/app

