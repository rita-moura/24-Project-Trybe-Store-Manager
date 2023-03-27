const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { resultInvalidId, products, productFindById, resultInvalidIdService } = require('./mocks/productMock');

describe('Testa a camada controller de produtos', function () {

  it('Testa se retorna a lista de produtos e status 200', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findAllProduct').resolves(products);

    await productsController.findAllProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Testa se retorna produto correto na busca por id', async function () {
    const res = {};
    const req = {
      params: { id: 1 }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findProductById').resolves(productFindById);

    await productsController.findProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFindById);
  });

  // it('Testa se retorna erro, buscando com id inválido', async function () {
  //   const res = {};
  //   const req = {
  //     body: {},
  //     params: { id: 33 }
  //   };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'findProductById').resolves(resultInvalidIdService);

  //   await productsController.findProductById(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   expect(res.json).to.have.been.calledWith(resultInvalidId);
  // });

  afterEach(function () {
    sinon.restore();
  });
})