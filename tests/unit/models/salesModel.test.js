const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { sales } = require('./mocks/salesMock');

describe('Testa a camada model de vendas', function () {

  it('Testa se recupera a lista de vendas', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);

    const result = await salesModel.findAllSales();

    expect(result).to.be.deep.equal(sales);
  })

  it('Testa se recupera uma venda por id', async function () {
    const id = 1;

    sinon.stub(connection, 'execute').resolves([sales[0]])

    const result = await salesModel.findSalesById(id)

    expect(result).to.be.deep.equal(sales[0]);
  })

  afterEach(function () {
    sinon.restore();
  });
});