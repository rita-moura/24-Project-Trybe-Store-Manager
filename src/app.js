const express = require('express');
const { productsRouter, salesRouter } = require('./routers');
const errorHandler = require('./middlewares/errorHandle');

const app = express();

app.use(express.json());

app.use('/sales', salesRouter);
app.use('/products', productsRouter);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorHandler);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;