const express = require('express');

const router = express.Router();
const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getProduct);

router.post('/', productCtrl.createProduct);

module.exports = router;
