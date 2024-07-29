const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");
require("dotenv").config();
const { jwtAuth, extractUsernameFromToken } = require("../jwt");
const Product = require("../models/productModel");
const DigitalCopy = require("../models/digitalCopy");

router.use(cors());
router.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

const upload = multer({ storage });

// API to list a new product
router.post(
  "/",
  jwtAuth,
  extractUsernameFromToken,
  upload.fields([
    { name: "coverFile", maxCount: 1 },
    { name: "previewFile1", maxCount: 1 },
    { name: "previewFile2", maxCount: 1 },
    { name: "previewFile3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { title, category, description, productType, quantity, price } = req.body;
      if (!title || !category || !description || !productType || !quantity || !price) {
        return res.status(400).json({ message: "Please enter all fields" });
      }

      const newProduct = {
        title,
        category,
        seller: req.username,
        sellerID: req.user.id,
        description,
        productType,
        quantity,
        price,
        image: req.files.coverFile[0].filename,
        previewImage1: req.files.previewFile1[0]?.filename,
        previewImage2: req.files.previewFile2[0]?.filename,
        previewImage3: req.files.previewFile3[0]?.filename,
      };

      const product = await Product.create(newProduct);
      return res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
);

// API to upload a digital copy
// router.post(
//   "/upload-digital",
//   jwtAuth,
//   extractUsernameFromToken,
//   digitalUpload.single("digitalCopy"),
//   async (req, res) => {
//     try {
//       console.log("Received request to upload digital copy");

//       const { title, category, description, productType, quantity, price } = req.body;
//       const file = req.file;

//       console.log("File:", file);

//       if (!title || !category || !description || !productType || !quantity || !price || !file) {
//         return res.status(400).json({ message: "Please enter all fields and upload a digital file" });
//       }

//       const digitalCopyData = {
//         title,
//         category,
//         seller: req.username,
//         sellerID: req.user.id,
//         description,
//         productType,
//         quantity,
//         price,
//         file: file.filename,
//       };

//       const digitalCopy = await DigitalCopy.create(digitalCopyData);
//       res.status(200).json(digitalCopy);
//     } catch (error) {
//       console.error("Digital Upload Error:", error);
//       res.status(500).json({ message: "Failed to upload digital copy", error });
//     }
//   }
// );

// API to show all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API to show a specific product
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API to delete a specific product
router.delete("/:id", jwtAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
