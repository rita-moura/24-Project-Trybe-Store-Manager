const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { products } = require('./mocks/productsMock')

describe('Testa a camada model de produtos', function () {

  it('Testa se recupera a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productsModel.findAll

    expect(result).to.be.deep.equal(products);
  })

  it('Testa se recupera o produto por id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]])

    const result = await productsModel.findById(1)

    expect(result).to.be.deep.equal(products[0]);
  })
})