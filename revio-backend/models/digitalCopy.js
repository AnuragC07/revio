const mongoose = require("mongoose");

const digitalCopySchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    seller: String,
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    // productType: { type: String, required: true },
    // quantity: { type: Number, required: true },
    price: { type: Number},
    image: { type: String, required: true },
    file: { type: String, required: true },

  },
  { timestamps: true }
);

const DigitalCopy = mongoose.model('DigitalCopy', digitalCopySchema);
module.exports = DigitalCopy;
