const express = require('express');
const app = express();

app.use(express.json());

const PORT = 4000;

const userModel = require("./connection");

app.post("/register" , async (req,res) => {

    const {name} = req.body;

    const data = await userModel.create({
        name
    });

    res.send(data);

});

app.listen(PORT , () => {
    console.log(`server start at port ${PORT}`);
});