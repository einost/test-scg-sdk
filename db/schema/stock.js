const Mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp2')
const paginate = require('mongoose-paginate-v2')

const StockSchema = new Mongoose.Schema(
  {
    vendingMachineId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'VendingMachine',
      required: true
    },
    productId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
)

StockSchema.plugin(timestamp)
StockSchema.plugin(paginate)

const Stock = Mongoose.model('Stock', StockSchema)
module.exports = Stock