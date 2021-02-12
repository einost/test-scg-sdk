const Product = require('../schema/product')

const getList = async (query = {}, page = 1, limit = 10, sort = { createdAt: -1 }) => {
  try {
    const options = {
      page,
      limit,
      sort
    }
    return await Product.paginate(query, options)
  } catch (error) {
    console.log(error)
    return {}
  }
}

const create = async data => {
  try {
    const product = new Product(data)
    return await product.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const find = async query => {
  try {
    return await Product.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await Product.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async id => {
  try {
    const query = { _id: id }
    return await Product.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

module.exports = {
  getList,
  create,
  find,
  findOne,
  findById
}
