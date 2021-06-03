const express = require('express');

const router = express.Router();
const cartCtrl = require('../controllers/cart');
const auth = require('../middleware/auth');

router.get('/cart', cartCtrl.getUserCart);
router.post('/add-to-cart', cartCtrl.createCart);

module.exports = router;
