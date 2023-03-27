const { expect } = require('chai');
const sinon = require('sinon');
// const chaiAsPromised = require('chai-as-promised');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { products, product, } = require('./mocks/productsMock');

// chai.use(chaiAsPromised);


describe('Testa a camada service de produtos', function () {

  it('Testa se recupera a lista de produtos', async function () {
    sinon.stub(productsModel, 'findAllProduct').resolves(products);

    const result = await productsService.findAllProduct()

    expect(result).to.be.deep.equal(products);
  })

  it('Testa se recupera o produto por id', async function () {
  const VALID_ID = 1;

    sinon.stub(productsModel, 'findProductById').resolves(product)

  const result = await productsService.findProductById(VALID_ID)

    expect(result).to.be.deep.equal(product);
  })

  // it('Testa se retorna um erro quando busca um id inválido', async function () {
  //   const INVALID_ID = 99;
    
  //   sinon.stub(productsModel, 'findProductById').resolves(undefined);

  //   await expect(productsService.findProductById(INVALID_ID)).to.be.rejectedWith(error);
  // })

    afterEach(function () {
    sinon.restore();
  });
})