const _ = require('underscore')
const VendingMachine = require('../schema/vending-machine')

const getList = async (query = {}, page = 1, limit = 10, sort = { createdAt: -1 }) => {
  try {
    const options = {
      page,
      limit,
      sort
    }
    return await VendingMachine.paginate(query, options)
  } catch (error) {
    console.log(error)
    return {}
  }
}

const create = async data => {
  try {
    const vendingMachine = new VendingMachine(data)
    return await vendingMachine.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const update = async (id, data) => {
  try {
    const query = { _id: id }
    const vendingMachine = await VendingMachine.findOne(query)
    if (vendingMachine && vendingMachine._id) {
      _.mapObject(data, (value, key) => {
        vendingMachine[key] = value
      })
      return await vendingMachine.save()
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

const find = async query => {
  try {
    return await VendingMachine.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await VendingMachine.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async id => {
  try {
    const query = { _id: id }
    return await VendingMachine.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

module.exports = {
  getList,
  create,
  update,
  find,
  findOne,
  findById
}
