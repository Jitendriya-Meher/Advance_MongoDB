const express = require('express');
const app = express();

app.use(express.json());

const PORT = 4000;

const userModel = require("./connection");

// post request to send data in db
app.post("/register" , async (req,res) => {

    const {name} = req.body;

    const data = await userModel.create({
        name,
        email,
        password
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

// put request for update
app.put("/updateuserdata/:id" , async (req,res) => {

    const {id} = req.params;
    const {email,password} = req.body;

    const data = await userModel.findByIdAndUpdate({
        _id:id
    },{
        email,
        password
    },{
        new:true
    });

    return res.status(200).send(data);

});


app.put("/updateuserdata" , async (req,res) => {

    const {email,password,id} = req.body;

    const data = await userModel.findByIdAndUpdate({
        _id:id
    },{
        email,
        password
    },{
        new:true
    });

    return res.status(200).send(data);

});


app.put("/updateuserdatabyname" , async (req,res) => {

    const {email,password,name} = req.body;

    const data = await userModel.findOneAndUpdate({
        name:name
    },{
        email,
        password
    },{
        new:true
    });

    return res.status(200).send(data);

});

// delete
app.delete("/deleteuserbyid/:id", async (req,res) => {

    const {id} = req.params;

    const data = await userModel.findByIdAndDelete({
        _id:id
    });
    
    return res.status(200).send(data);

});

app.delete("/deleteuserbyname", async (req,res) => {

    const {name} = req.body;

    const data = await userModel.findOneAndDelete({
        name:name
    });
    
    return res.status(200).send(data);

});

app.listen(PORT , () => {
    console.log(`server start at port ${PORT}`);
});