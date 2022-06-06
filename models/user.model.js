const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDate');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    dateCreate :{
        type: Date
    },
    price:{
        type: Number
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User;