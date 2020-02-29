const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    present:{
        type:Boolean,
        default:false,

    }
}, {
    timestamp: true
});



module.exports = mongoose.model('login', LoginSchema);
