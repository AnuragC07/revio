const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Revio backend !!!");
});
app.get("/about", (req, res) => {
    return res.send("Msg from Dev: WE CAN DO THIS!!!!!");
});

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Database");
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error("Connection Failed:", error);
    });


    