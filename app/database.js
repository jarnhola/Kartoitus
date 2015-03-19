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

var User = mongoose.model('User',user);

module.exports.User = User;