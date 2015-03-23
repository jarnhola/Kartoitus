var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

mongoose.connect('mongodb://localhost/kartoitus',function(err,success){
    
    if(err){
        console.log(err + " check that your mongodb is running.");
    }
    else{
        console.log('Connected to database');
    }
});

var Schema = mongoose.Schema;

//======================== user ===============================

var user = new Schema({
    name:{type:String,unique:true},
    password:String
});

user.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

user.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//=================== vastaukset ==============================

var vastaukset = new Schema({
    name:String,
    birth:Number,
    email:{type:String,unique:true},
    phone:String,
    a1:String,
    a2:String,
    a3:String,
    a4:String,
    a5:String,
    a6:String,
    a7:String,
    a7_3:String,
    a8:String,
    a8_4:String,
    a9:String,
    timestamp:Date
});

//=============================================================
var User = mongoose.model('User',user);
var Vastaukset = mongoose.model('Vastaukset',vastaukset);

module.exports.User = User;
module.exports.Vastaukset = Vastaukset;