# Back-end
### Iniciando
Requisitos: [Node.js](https://nodejs.org/en/download/)

Banco de dados:
- Crie a ".env" semelhante à ".env.example" com database, port, etc..
- Use yarn knex migrate:latest
- Se estiver usando docker, use "docker-compose up -d", caso contrário coloque o usuário e senha que você tem no seu banco
- Inicie o projeto com yarn start.

#

Instale dependências do projeto.
``
yarn
``

Inicializa o projeto em modo de desenvolvimento.
``
yarn dev
``

Inicializa o projeto em modo de produção.
``
yarn start
``

Confere se o a sintaxe do código está escrito conforme definido.
``
yarn eslint
``
Rotas Swagger API:
[Doctors](http://127.0.0.1:3333/api-docs/doctor)
[Patients](http://127.0.0.1:3333/api-docs/patient)

