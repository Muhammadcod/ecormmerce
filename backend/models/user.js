const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    productId: {type: String, required: true, unique: true},
    price: {type: Number, required: true, },
    selectedQuantity: {type: Number, required: true, },
}, {
    timestamps: true,
})


const userSchema = mongoose.Schema({
    userTokenId: {type: String, required: true, unique: true},
    userFirstName: {type: String, required: true, },
    userLastName: {type: String, required: true, },
    cart: [cartSchema],
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)
