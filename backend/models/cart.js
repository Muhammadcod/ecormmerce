const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  selectedQuantity: { type: Number, required: true },
  name: { type: String, required: true },
});

const cartSchema = mongoose.Schema(
  {
    userTokenId: { type: String, required: true, unique: true },
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    products: [productSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', cartSchema);
