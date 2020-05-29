const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
{
    timeStamps:true
}

const user = mongoose.model('Logins', LoginSchema);

module.exports = user;
