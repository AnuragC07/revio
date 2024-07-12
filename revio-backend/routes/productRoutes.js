const Product = require("../models/productModel");
const express = require("express");
const cors = require("cors");
const router = express.Router();
const multer = require("multer");
require('dotenv').config();

router.use(cors());
router.use(express.json())


//all backend apis


//api to list a new product
router.post('/', async (req, res) => {
    try {
        if(!req.body.title || !req.body.category || !req.body.description || !req.body.productType || !req.body.quantity || !req.body.price){
            return res.status(400).json({
                message: "Please enter all fields",
            });
        }
        const newProduct = {
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            productType: req.body.productType,
            quantity: req.body.quantity,
            price: req.body.price
        };
        const product = await Product.create(newProduct);
        return res.status(200).json(product);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

//api to show all products
router.get('/', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            data: products,
        });
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
});

//api to show a specific product
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});

//api to delete a specific product
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully" });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;