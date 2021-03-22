const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    quantity: {type: String, required: true, },
    price: {type: String, required: true, },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Student', productSchema)
