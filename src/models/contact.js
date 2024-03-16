const mongoose=require("mongoose");
const encrypt = require('mongoose-encryption');
const contactinfo=new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String,
        unique:true,
    },
    Message:{
        type:String,
    }
});
const secret="MynameisRajankumarchaudhary"
contactinfo.plugin(encrypt, { secret: secret,encryptedFields: ['Message'] });

const Contact=new mongoose.model("Contact",contactinfo);
module.exports=Contact;