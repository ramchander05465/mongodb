const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    userName:String,
    userPassword:String
})

const LoginModel = mongoose.model('login', LoginSchema);

module.exports = LoginModel;