🧩 Projeto - Parte 1 (TypeScript, Prisma, PostgreSQL e Swagger)

📘 Descrição

Este projeto foi desenvolvido como parte da atividade "Projeto - Parte 1", utilizando TypeScript, Express, Zod, Prisma e PostgreSQL.
O objetivo é criar uma API REST com validações, integração com banco de dados e documentação via Swagger, demonstrando que as operações feitas na API refletem corretamente no banco de dados.


---

🚀 Tecnologias Utilizadas

Node.js

TypeScript

Express

Zod (para validações)

Prisma ORM

PostgreSQL

Swagger (para documentação da API)



---

🗂️ Estrutura do Projeto

Projeto/
├── .env                      # Variáveis de ambiente (ex: URL do banco)
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração do TypeScript
├── dist/
│   ├── server.js             # Inicializa o servidor e carrega as rotas
│   ├── swagger.js            # Configuração do Swagger
│   ├── prismaClient.js       # Conexão com o banco de dados PostgreSQL
│   ├── controllers/          # Controladores (lógica de negócio)
│   │   ├── gamesController.js
│   │   ├── movesController.js
│   │   └── ursersController.js   # Controller de usuários (nome com pequeno erro de digitação)
│   ├── routes/               # Rotas da aplicação
│   │   ├── gamesRoutes.js
│   │   ├── moveRoutes.js
│   │   └── usersRoutes.js
│   ├── schemas/              # Schemas de validação com Zod
│   │   ├── gameSchema.js
│   │   ├── moveSchema.js
│   │   └── userSchema.js
│   └── middlewares/          # Middleware de validação
│       └── validate.js

> 💡 Observação: há um pequeno erro de digitação no arquivo ursersController.js — o ideal seria renomeá-lo para usersController.js.




---

⚙️ Configuração do Projeto

1️⃣ Instalar dependências

npm install

2️⃣ Configurar o arquivo .env

Crie um arquivo .env na raiz do projeto com a URL do banco PostgreSQL, por exemplo:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

3️⃣ Rodar as migrações do Prisma

npx prisma migrate dev

4️⃣ Iniciar o servidor

npm run dev


---

📜 Como Testar a API

1. Execute o servidor com o comando acima.


2. Acesse o Swagger no navegador:
👉 http://localhost:3000/api-docs


3. Utilize o Swagger para testar as rotas de criação, listagem, atualização e exclusão.


4. Confirme no banco PostgreSQL (via Prisma Studio ou outro gerenciador) que os dados estão sendo atualizados corretamente.




---

🎬 Vídeo de Apresentação

O vídeo de demonstração mostra:

A execução da API no terminal.

O uso do Swagger para enviar requisições.

As alterações refletindo no banco PostgreSQL.

Uma breve explicação sobre a estrutura do código.


📹 Link do vídeo: [Adicionar link do YouTube aqui]
💻 Repositório público no GitHub: [Adicionar link do repositório aqui]


---

👩‍💻 Integrantes

Nome completo e	RGM

Ysaac William Barbosa Viana Colaço	(42924171)
José Reinaldo Gomes Bezerra	(44034083)
Artur Dutra de Oliveira	()



---

🏁 Conclusão

Este projeto demonstra a criação de uma API completa com:

✅ Validações de dados utilizando Zod

✅ Integração com banco de dados PostgreSQL através do Prisma ORM

✅ Documentação interativa da API com Swagger


O sistema foi desenvolvido com foco em organização, clareza de código e boas práticas de desenvolvimento em TypeScript, cumprindo todos os requisitos propostos na atividade.
