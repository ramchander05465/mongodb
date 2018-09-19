const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = require('./post');

const UserSchema = new Schema({
    firstName:{
        type:String,
        validate:{
            validator: (name)=> name.length > 2,
            message:'Name must be longer than 12 charactors'
        },
        required:[true, 'First name is required']
    },
    posts:[PostSchema]
})

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;