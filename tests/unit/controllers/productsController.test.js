const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { resultFindAllService, resultFindByIdService, resultInvalidId } = require('./mocks/productMock');

describe('Testa a camada controller de produtos', function () {

  it('Testa se retorna a lista de produtos e status 200', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findAllProduct').resolves(resultFindAllService);

    await productsController.findAllProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resultFindAllService.message);
  });

  it('Testa se retorna produto correto na busca por id', async function () {
    const res = {};
    const req = {
      params: { id: 1 }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findProductById').resolves(resultFindByIdService);

    await productsController.findProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resultFindByIdService.message);
  });

  // it('Testa se retorna erro, buscando com id inválido', async function () {
  //   const res = {};
  //   const req = {
  //     params: { id: 666 }
  //   };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'findById').resolves(resultInvalidId);

  //   await productsController.getProductById(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   expect(res.json).to.have.been.calledWith({ message: `${resultInvalidId.message}` });
  // });

  afterEach(function () {
    sinon.restore();
  });
})