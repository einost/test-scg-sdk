const Mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp2')
const paginate = require('mongoose-paginate-v2')

const VendingMachineSchema = new Mongoose.Schema(
  {
    statusId: {
      type: Number,
      required: true
    },
    machineType: {
      type: String
    },
    lat: {
      type: Number
    },
    lng: {
      type: Number
    },
    address: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    subDistrict: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
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