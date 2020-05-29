const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    email:
    {
        type:String,
        required:true
    }
})
{
    timeStamps:true
}

const user = mongoose.model('Logins', LoginSchema);

module.exports = user;
