const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type:String,
        validate:{
            validator: (name)=> name.length > 5,
            message:'Name must be longer than 5 charactors'
        },
        required:[true, 'First name must be 5 char']
    }
})

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;