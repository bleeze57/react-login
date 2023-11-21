const mongoose=require('mongoose')

//decide the shape or how you want to list the data from mongoDB
var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },

})

const database=mongoose.model('database',schema);

//export Userdb module to be use by controller.js
module.exports = database;