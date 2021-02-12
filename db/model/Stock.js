const _ = require('underscore')
const Stock = require('../schema/stock')

const create = async data => {
  try {
    const stock = new Stock(data)
    return await stock.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const update = async (id, data) => {
  try {
    const query = { _id: id }
    const stock = await Stock.findOne(query)
    if (stock && stock._id) {
      _.mapObject(data, (value, key) => {
        stock[key] = value
      })
      return await stock.save()
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

const find = async query => {
  try {
    return await Stock.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await Stock.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findByVendingMachineId = async id => {
  try {
    const query = { vendingMachineId: id }
    return await Stock.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findByProductId = async id => {
    try {
      const query = { productId: id }
      return await Stock.findOne(query)
    } catch (error) {
      console.log(error)
      return null
    }
  }

module.exports = {
  create,
  update,
  find,
  findOne,
  findByVendingMachineId,
  findByProductId
}
