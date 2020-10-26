const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    id:Number,
    name:String,
    phone:Number,
    email:String,
    password:String,
    googleId:String,
    facebookId:String,
});

const Profile = mongoose.model('Profile',schema);
module.exports=Profile;