const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  console.log('controller', product);

  product
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Post saved successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getProduct = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
