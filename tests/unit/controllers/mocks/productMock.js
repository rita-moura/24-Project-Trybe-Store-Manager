const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const productFindById = {
  "id": 1,
  "name": "Martelo de Thor"
}

const resultFindAllService = { type: null, message: products }

const resultFindByIdService = { type: null, message: productFindById }

const resultInvalidId = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }

module.exports = {
  products, 
  resultFindAllService,
  productFindById,
  resultFindByIdService,
  resultInvalidId
}