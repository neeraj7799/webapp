const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName : {type: String, unique: true, required: true},
    firstName : {type: String},
    lastName: {type: String},
    age:Number
});

module.exports = mongoose.model('user', userSchema);
