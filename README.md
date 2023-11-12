# User CRUD API Server

Este é um servidor simples que fornece operações CRUD (Create, Read, Update, Delete) para entidades de usuário. Ele utiliza o framework Express.js e o Prisma como ORM para interagir com o banco de dados.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, execute o seguinte comando para instalar as dependências:

npm install prisma --save-dev

npm install

## Uso

npm start

O servidor estará disponível em
http://localhost:3333.

## Rotas

* GET /User: Retorna uma lista de todos os usuários.
* POST /User: Adiciona um novo usuário. Envie um JSON no corpo da solicitação com os campos name e email.
* PUT /User/:id: Atualiza os detalhes de um usuário existente com o ID fornecido. Envie um JSON no corpo da solicitação com os campos name e/ou email.
* DELETE /User/:id: Exclui um usuário com o ID fornecido.
