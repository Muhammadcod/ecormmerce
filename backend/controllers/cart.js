const Cart = require('../models/cart');

exports.createCart = (req, res, next) => {
  const cart = new Cart({
    customerId: req.body.customerId,
    customerName: req.body.customerName,
    products: [
      {
        productId: req.body.productId,
        price: req.body.price,
        selectedQuantity: req.body.selectedQuantity,
        name: req.body.name,
      },
    ],
  });

  cart
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Cart saved successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getCart = (req, res, next) => {
  Cart.find({ customerId: req.body.user._id })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
