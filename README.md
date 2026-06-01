## Refresh Tokens API

API em Node.js, TypeScript, Fastify e Prisma para estudo de autenticação com refresh tokens.

### Estrutura inicial

- `src/index.ts`: entrada da aplicação.
- `src/routes.ts`: rotas HTTP.
- `src/config`: configurações e variáveis de ambiente.
- `src/controllers`: controllers da API.
- `src/lib`: bibliotecas e integrações, como Prisma.
- `src/middlewares`: middlewares do Express.
- `src/repositories`: acesso a dados.
- `prisma/schema.prisma`: schema do banco.

### Comandos

```bash
yarn install
yarn prisma:generate
yarn prisma:migrate
yarn dev
```
