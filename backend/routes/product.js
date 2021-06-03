const express = require('express');

const router = express.Router();
const productCtrl = require('../controllers/product');
const auth = require('../middleware/auth');

router.get('/products', productCtrl.getProduct);
router.post(
  '/create',
  productCtrl.upload.single('productImage'),
  productCtrl.createProduct
);

module.exports = router;
