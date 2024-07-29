const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    seller: String,
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    productType: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    previewImage1: { type: String },
    previewImage2: { type: String },
    previewImage3: { type: String },
    // digitalCopy: { type: mongoose.Schema.Types.ObjectId, ref: 'DigitalCopy' }, // Reference to Digital Copy
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
