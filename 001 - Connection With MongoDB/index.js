const express = require('express');
const app = express();

app.use(express.json());

const PORT = 4000;

const userModel = require("./connection");

// post request to send data in db
app.post("/register" , async (req,res) => {

    const {name} = req.body;

    const data = await userModel.create({
        name
    });

    res.send(data);

});

// get request to get data from db
app.get("/getuserdata", async (req,res) => {
    
    const userdata = await userModel.find();

    return res.status(200).send(userdata);
})

app.get("/getuserdatabyid/:id", async (req,res) => {
    
    // const {id} = req.body;
    const {id} = req.params;

    const userData = await userModel.findById(id);

    return res.status(200).send(userData);

});

app.get("/getsingleuserdata", async (req,res) => {
    
    const {name} = req.body;

    const userData = await userModel.findOne({
        name:name
    });

    return res.status(200).send(userData);

});


app.listen(PORT , () => {
    console.log(`server start at port ${PORT}`);
});