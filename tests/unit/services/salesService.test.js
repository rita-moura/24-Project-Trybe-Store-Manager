const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { sales } = require('./mocks/salesMock');


describe('Testa a camada service de vendas', function () {

  it('Testa se recupera a lista de vendas', async function () {
    sinon.stub(salesModel, 'findAllSales').resolves(sales);

    const result = await salesService.findAllSales()

    expect(result).to.be.deep.equal(sales);
  });

  it('Testa se recupera uma venda por id', async function () {

    sinon.stub(salesModel, 'findSalesById').resolves(sales[0])

    const result = await salesService.findSalesById(1)

    expect(result).to.be.deep.equal(sales[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
})