const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const { resultFindAllService, products } = require('./mocks/productMock');

describe('Testa a camada controller de produtos', function () {

  it('Testa se retora a lista de passageiros e status 200', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findAll').resolves(resultFindAllService);

    await productsController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resultFindAllService.message);
  });

  afterEach(function () {
    sinon.restore();
  });
})