# Quando o container entrar em execução irá rodar este script

#!/bin/bash

npm install
npm run build
npx typeorm migration:run
npm run start:dev