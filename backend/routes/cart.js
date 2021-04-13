const express = require('express');

const router = express.Router();
const cartCtrl = require('../controllers/cart');
const auth = require('../middleware/auth');

router.get('/cart', cartCtrl.getCart);
router.post('/add-to-cart', auth, cartCtrl.createCart);

module.exports = router;
