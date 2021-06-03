const Cart = require('../models/cart');

exports.createCart = (req, res, next) => {
  const {
    productId,
    price,
    selectedQuantity,
    name,
    customerId,
    customerName,
  } = req.body;

  Cart.findOne({ customerId }).then((cart) => {
    if (!cart) {
      const cart = new Cart({
        customerId,
        customerName,
        products: [
          {
            productId,
            price: price,
            selectedQuantity,
            name: name,
          },
        ],
      });
      cart
        .save()
        .then(() => {
          res.status(201).json(cart);
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    } else {
      let inCart = cart.products.findIndex((p) => p.productId == productId);

      if (inCart == -1) {
        cart.products.push({
          productId,
          price,
          selectedQuantity,
          name,
        });
      } else {
        let productItem;
        productItem = cart.products[inCart];
        productItem.selectedQuantity += selectedQuantity;
        cart.products[inCart] = productItem;
      }
      cart
        .save()
        .then((cart) => {
          res.status(201).json(cart);
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    }
  });
};

exports.getUserCart = (req, res, next) => {
  Cart.findOne({ customerId: req.query.id })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
