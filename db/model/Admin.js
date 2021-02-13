const Admin = require('../schema/admin')

const create = async data => {
  try {
    const admin = new Admin(data)
    return await admin.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const find = async query => {
  try {
    return await Admin.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query) => {
  try {
    return await Admin.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async id => {
  try {
    const query = { _id: id }
    return await Admin.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

module.exports = {
  create,
  find,
  findOne,
  findById
}