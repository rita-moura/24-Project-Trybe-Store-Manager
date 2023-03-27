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

const resultInvalidIdService = { status: 404, message: 'Product not found' }

const resultInvalidId = { message: 'Product not found' }

module.exports = {
  products, 
  productFindById,
  resultInvalidId,
  resultInvalidIdService,
}