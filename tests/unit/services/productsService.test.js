const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const { messageErro, resultFindAllModel, products, product, resultFindByIdModel } = require('./mocks/productsMock');

describe('Testa a camada service de produtos', function () {

  it('Testa se recupera a lista de produtos', async function () {
    sinon.stub(productsModel, 'findAll').resolves(products);

    const result = await productsService.findAll()

    expect(result).to.be.deep.equal(resultFindAllModel);
  })

  it('Testa se recupera o produto por id', async function () {
  const VALID_ID = 1;

  sinon.stub(productsModel, 'findById').resolves(product)

  const result = await productsService.findById(VALID_ID)

    expect(result).to.be.deep.equal(resultFindByIdModel);
  })

  it('Testa se retorna um erro quando busca um id inválido', async function () {
    const INVALID_ID = 99;
    
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const result = await productsService.findById(INVALID_ID);

    expect(result).to.be.deep.equal(messageErro);
  })

    afterEach(function () {
    sinon.restore();
  });
})