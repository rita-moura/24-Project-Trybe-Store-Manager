const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const { sales } = require('../services/mocks/salesMock');
const { salesById } = require('./mocks/salesMock');

describe('Testa a camada controller de vendas', function () {

  it('Testa se retorna a lista as vendas e status 200', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findAllSales').resolves(sales);

    await salesController.findAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sales);
  });

  it('Testa se retorna a venda correta na busca por id', async function () {
    const res = {};
    const req = {
      params: { id: 1 }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findSalesById').resolves(sales[0]);

    await salesController.findSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sales[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
})