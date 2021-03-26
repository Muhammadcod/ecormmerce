const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
