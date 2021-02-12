const Mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp2')
const paginate = require('mongoose-paginate-v2')

const VendingMachineSchema = new Mongoose.Schema(
  {
    machineType: {
      type: String
    },
    statusId: {
      type: Number
    },
    lat: {
      type: Number,
    },
    lng: {
      type: Number
    },
    Address: {
      type: String,
    },
    province: {
      type: String
    },
    district: {
      type: String
    },
    subDistrict: {
      type: String
    },
    zipCode: {
      type: String
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
)

VendingMachineSchema.plugin(timestamp)
VendingMachineSchema.plugin(paginate)

const VendingMachine = Mongoose.model('VendingMachine', VendingMachineSchema)
module.exports = VendingMachine