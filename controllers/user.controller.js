const User = require('../models/user.model');
const moment = require('moment');

exports.getInfo = async (req,res) =>{
    return res.render('./add.hbs');
}

exports.postInfo = async (req,res) =>{
    console.log(req.body);
    var userPost = {
        username: req.body.email,
        dateCreate:  Date.parse("2020-12-20 10:18:00 PM"),
        price: 1000,
    }
    var user = new User(userPost);
    await user.save();
    return res.redirect('/');
}
exports.getDate = async (req,res) =>{
    const users = await User.find({});

    const date = await User.find(
        {
            dateCreate: {$gte: new Date("2020-12-17T03:24:00"), $lte: new Date("2020-12-19T03:24:00")}
        }).sort('dateCreate');
    console.log(date);
    var total = 0;
    for(var i = 0; i < date.length; i++){
        total += date[i].price;
    }
    return res.render('./info.hbs',{users:users, total: total});
}