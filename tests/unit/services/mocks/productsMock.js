const product = [
	{
		"id": 1,
		"name": "Martelo de Thor"
	},
]

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

const resultFindByIdModel = { type: null, message: product }
const resultFindAllModel = { type: null, message: products }
const messageErro = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }

module.exports = {
  product,
  products,
  messageErro,
  resultFindAllModel,
  resultFindByIdModel
}