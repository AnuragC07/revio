const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const path = require('path');
const fs = require('fs');
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

const digitalstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "coverFile") {
      cb(null, path.join(__dirname, "../uploads/files/coverFile"));
    } else if (file.fieldname === "digitalFile") {
      cb(null, path.join(__dirname, "../uploads/files"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

const digitalUpload = multer({ storage: digitalstorage });





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
router.post(
  "/digital-copy",
  jwtAuth,
  extractUsernameFromToken,
  digitalUpload.fields([
    { name: "coverFile", maxCount: 1 },
    { name: "digitalFile", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      console.log("Received request to upload digital copy");

      const { title, category, description, price } = req.body;
      const files = req.files;

      console.log("Files:", files);

      if (!title || !category || !description || !files.coverFile || !files.digitalFile) {
        return res.status(400).json({ message: "Please enter all fields and upload both cover and digital files" });
      }

      const digitalCopyData = {
        title,
        category,
        seller: req.username,
        sellerID: req.user.id,
        description,
        price,
        image: files.coverFile[0].filename,
        file: files.digitalFile[0].filename,
      };

      const digitalCopy = await DigitalCopy.create(digitalCopyData);
      res.status(200).json(digitalCopy);
    } catch (error) {
      console.error("Digital Upload Error:", error);
      res.status(500).json({ message: "Failed to upload digital copy", error: error.message });
    }
  }
);

// API to show all products
router.get("/", async (req, res) => {
  try {
    const [products, digitalCopies] = await Promise.all([
      Product.find({}),
      DigitalCopy.find({})
    ]);

    const combinedResults = [...products, ...digitalCopies];

    res.status(200).json({ data: combinedResults });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API to show a specific product
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // First, try to find a digital copy
    let item = await DigitalCopy.findById(id);

    // If no digital copy is found, try to find a regular product
    if (!item) {
      item = await Product.findById(id);
    }

    // If neither is found, return a 404 error
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // If an item is found (either digital copy or product), return it
    res.status(200).json({
      data: item,
      itemType: item instanceof DigitalCopy ? 'digitalCopy' : 'product'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/download/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the digital copy
    const digitalCopy = await DigitalCopy.findById(id);

    if (!digitalCopy) {
      return res.status(404).json({ message: "Digital copy not found" });
    }

    const filePath = path.join(__dirname, '../uploads/files', digitalCopy.file);

    // Check if file exists
    if (fs.existsSync(filePath)) {
      // Set headers
      res.setHeader('Content-disposition', 'attachment; filename=' + digitalCopy.file);
      res.setHeader('Content-type', 'application/octet-stream');

      // Create read stream
      const fileStream = fs.createReadStream(filePath);
      // Pipe the file to the response
      fileStream.pipe(res);
    } else {
      res.status(404).json({ message: "File not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// API to delete a specific product
router.delete("/:id", jwtAuth, async (req, res) => {
  console.log("Attempting to delete product with ID:", req.params.id);
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product deleted successfully:", product);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error during deletion:", error.message);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
