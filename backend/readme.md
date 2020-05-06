# Back-end
### Iniciando
Requisitos: [Node.js](https://nodejs.org/en/download/)

Banco de dados:
- Crie a ".env" semelhante à ".env.example" com database, port, etc..
- Use npx knex migrate:latest
- Se estiver usando docker, use "docker-compose up -d", caso contrário coloque o usuário e senha que você tem no seu banco
- Inicie o projeto com npm start.

#

Instale dependências do projeto.
``
npm install
``

Inicializa o projeto.
``
npm start
``

Inicia e reinicia o projeto automaticamente quando houver alterações.
``
npm run dev
``

Confere se o a sintaxe do código está escrito conforme definido.
``
npm run eslint
``
