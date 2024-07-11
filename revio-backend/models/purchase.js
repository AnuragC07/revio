
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;
