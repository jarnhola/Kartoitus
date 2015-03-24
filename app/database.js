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

//-----------esitiedot---------------
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
//-----------taidot-------------------
    a10:String,
    a11:String,
    a12:String,
    a13:String,
    a14:String,
//-----------some--------------------
    a15:String,
    a16:String,
    a17:String,
    a18:String,
//-----------itsetunto---------------
    a20:String,
    a21:String,
    a22:String,
    a23:String,
    a24:String,
    a25:String,
    a26:String,
    a27:String,
    a28:String,
    a29:String,
    a30:String,
//-----------kunto------------------
    a31:String,
    a32:String,
    a33:String,
    a34:String,
    a35:String,
    a36:String,
    a37:String,
    a38:String,
    a39:String,
    a40:String,
    a41:String,
    a42:String,
    a43:String,
    a44:String,
    a45:String,
    a46:String,
    a47:String,
    a48:String,
    a49:String,
    a50:String,
    a51:String,
    a52:String,
    a53:String,
    a54:String,
    a55:String,
    a56:String,
    a57:String,
    a58:String,
    a59:String,
    a60:String,
    a61:String,
    a62:String,
    a63:String,
    a64:String,
    a65:String,
    a66:String,
//---------yhteystiedot--------------
    name:String,
    birth:Number,
    email:{type:String,unique:true},
    phone:String,    
    timestamp:Date
});

//=============================================================
var User = mongoose.model('User',user);
var Vastaukset = mongoose.model('Vastaukset',vastaukset);

module.exports.User = User;
module.exports.Vastaukset = Vastaukset;