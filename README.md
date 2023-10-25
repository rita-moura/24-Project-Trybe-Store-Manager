# API de Gerenciamento de Vendas Dropshipping
Esta é uma API desenvolvida com a arquitetura MSC (model-service-controller) que permite gerenciar produtos e vendas em um sistema de dropshipping. A API é RESTful e utiliza o banco de dados MySQL para a gestão de dados.

## Funcionalidades
- Criar, visualizar, deletar e atualizar produtos
- Criar, visualizar, deletar e atualizar vendas

## Tecnologias utilizadas
- Node.js
- Express.js
- MySQL
- Docker

## Como utilizar
1 - Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
2 - Instale as dependências:

```bash
npm install
```

3 - Crie o banco de dados MySQL e a tabela necessária utilizando o script migration.sql e seed.sql

4 - Altere o arquivo .env.exemple.

5 - Inicie o servidor:

```bash
npm start || npm run dev
```

6 - Utilize as rotas disponíveis para gerenciar produtos e vendas. Exemplos:

- GET /produtos - Retorna uma lista de todos os produtos
- POST /produtos - Cria um novo produto
- PUT /produtos/:id - Atualiza um produto existente
- DELETE /produtos/:id - Deleta um produto existente
- GET /vendas - Retorna uma lista de todas as vendas
- POST /vendas - Cria uma nova venda
- PUT /vendas/:id - Atualiza uma venda existente
- DELETE /vendas/:id - Deleta uma venda existente

