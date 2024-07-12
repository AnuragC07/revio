const User = require("../models/userModel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require('dotenv').config();

const app = express();

app.use(express.json());


//api for user registration
router.post('/signup', async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const hash = await bcrypt.hash(password, 12);
        const user = await User.create({ username, email, password: hash });
   
        res.status(200).json({ user: { id: user.id, username: user.username, email: user.email, password: user.password }});
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}) 

//api for user login
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: "Invalid email", message: "Wrong Credentials" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            return res.status(401).json({ error: "Password is not correct" });
        }
        res.status(200).json("Login Successfull");
    }
    catch(error){
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;