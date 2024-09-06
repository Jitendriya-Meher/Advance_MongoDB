const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/AdvanceMongoDb2024').then(() => {
    console.log('connection successful to DB');
}).catch((e) => {
    console.log("error in connection to DB",e);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

const userModel = new mongoose.model("userCollection",userSchema);

module.exports = userModel;