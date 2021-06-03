const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productId: { type: mongoose.ObjectId, required: true, unique: true },
  price: { type: Number, required: true },
  selectedQuantity: { type: Number, required: true },
  name: { type: String, required: true },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

const cartSchema = mongoose.Schema(
  {
    customerId: { type: mongoose.ObjectId, required: true, unique: true },
    customerName: { type: String, required: true },
    products: [productSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cart', cartSchema);
