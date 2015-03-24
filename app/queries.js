var User = require('./database').User;
var Vastaukset = require('./database').Vastaukset;

//Lisätään uusi Admin sovellukselle
module.exports.registerUser = function(req,res){
    
    var user = new User();
    user.name = req.body.username;
    user.password = user.generateHash(req.body.password);
    
    //Store model in database
    user.save(function(err){
        if(err){
            res.send({status:'Error'})
        }
        else{
            res.send({status:'Ok'});
        }
    });
}

//Talletetaan osaamiskartoituksen vastaukset
module.exports.storeData = function(req,res){
    
    var vastaukset = new Vastaukset();
    
    vastaukset.a1 = req.body.a1;
    vastaukset.a2 = req.body.a2;
    vastaukset.a3 = req.body.a3;
    vastaukset.a4 = req.body.a4;
    vastaukset.a5 = req.body.a5;
    vastaukset.a6 = req.body.a6;
    vastaukset.a7 = req.body.a7;
    vastaukset.a7_3 = req.body.a7_3;
    vastaukset.a8_1 = req.body.a8_1;
    vastaukset.a8_2 = req.body.a8_2;
    vastaukset.a8_3 = req.body.a8_3;
    vastaukset.a8_4 = req.body.a8_4;
    vastaukset.a9 = req.body.a9;
    //-----------taidot-------------------
    vastaukset.a10 = req.body.a10;
    vastaukset.a11 = req.body.a11;
    vastaukset.a12 = req.body.a12;
    vastaukset.a13 = req.body.a13;
    vastaukset.a14 = req.body.a14;
    //-----------some--------------------
    vastaukset.a15 = req.body.a15;
    vastaukset.a16 = req.body.a16;
    vastaukset.a17 = req.body.a17;
    vastaukset.a18 = req.body.a18;
    //-----------itsetunto---------------
    vastaukset.a20 = req.body.a20;
    vastaukset.a21 = req.body.a21;
    vastaukset.a22 = req.body.a22;
    vastaukset.a23 = req.body.a23;
    vastaukset.a24 = req.body.a24;
    vastaukset.a25 = req.body.a25;
    vastaukset.a26 = req.body.a26;
    vastaukset.a27 = req.body.a27;
    vastaukset.a28 = req.body.a28;
    vastaukset.a29 = req.body.a29;
    vastaukset.a30 = req.body.a30;
    //-----------kunto------------------
    vastaukset.a32 = req.body.a32;
    vastaukset.a33 = req.body.a33;
    vastaukset.a34 = req.body.a34;
    vastaukset.a35 = req.body.a35;
    vastaukset.a36 = req.body.a36;
    vastaukset.a37 = req.body.a37;
    //-----------pakki------------------
    vastaukset.a38 = req.body.a38;
    vastaukset.a39 = req.body.a39;
    vastaukset.a40 = req.body.a40;
    vastaukset.a41 = req.body.a41;
    vastaukset.a42 = req.body.a42;
    vastaukset.a43 = req.body.a43;
    vastaukset.a44 = req.body.a44;
    vastaukset.a45 = req.body.a45;
    vastaukset.a46 = req.body.a46;
    vastaukset.a47 = req.body.a47;
    //-------verkostoituminen------------
    vastaukset.a48 = req.body.a48;
    vastaukset.a49 = req.body.a49;
    vastaukset.a50 = req.body.a50;
    vastaukset.a51 = req.body.a51;
    vastaukset.a52 = req.body.a52;
    //---------työnhaku-----------------
    vastaukset.a53 = req.body.a53;
    vastaukset.a54 = req.body.a54;
    vastaukset.a55 = req.body.a55;
    vastaukset.a56 = req.body.a56;
    vastaukset.a57 = req.body.a57;
    vastaukset.a58 = req.body.a58;
    vastaukset.a59 = req.body.a59;
    vastaukset.a60 = req.body.a60;
    vastaukset.a61 = req.body.a61;
    vastaukset.a62 = req.body.a62;
    vastaukset.a63 = req.body.a63;
    vastaukset.a64 = req.body.a64;
    vastaukset.a65 = req.body.a65;
    vastaukset.a66 = req.body.a66;
    //-------yhteystiedot----------------
    vastaukset.timestamp = new Date();
    vastaukset.name = req.body.name;
    vastaukset.birth = req.body.birth;
    vastaukset.email = req.body.email;
    vastaukset.phone = req.body.phone;
    
    vastaukset.timestamp = req.body.timestamp;
    
    //Store model in database
    vastaukset.save(function(err){
        if(err){
            res.send({status:'Error'})
        }
        else{
            res.send({status:'Ok'});
        }
    });
}

module.exports.getData = function(req,res){
    
    Vastaukset.find({},function(err,data){
        
        if(err){
            console.log('error fetching user data');
            res.send('error');
        }
        else{
            res.send({vastaukset:data});
        }
    });
}