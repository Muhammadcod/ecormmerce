const express = require('express');

const router = express.Router();
const productCtrl = require('../controllers/product');
const auth = require('../middleware/auth');

router.get('/', productCtrl.getProduct);
router.post('/', auth, productCtrl.createProduct);

module.exports = router;
