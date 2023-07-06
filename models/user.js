const { Schema, model }=require('mongoose');

const User_Schema=Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: Buffer,
    }
});

const User=model(User_Schema);

module.exports=User;