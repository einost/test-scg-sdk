const Mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp2')
const paginate = require('mongoose-paginate-v2')

const ProductSchema = new Mongoose.Schema(
  {
    productCode: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
)

ProductSchema.plugin(timestamp)
ProductSchema.plugin(paginate)

const Product = Mongoose.model('Product', ProductSchema)
module.exports = Product