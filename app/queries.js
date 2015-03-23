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
module.exports.registerUser = function(req,res){
    
    var vastaukset = new Vastaukset();
    vastaukset.name = req.body.username;
    vastaukset.birth = req.body.birth;
    vastaukset.email = req.body.email;
    vastaukset.phone = req.body.phone;
    vastaukset.a1 = req.body.a1;
    vastaukset.a2 = req.body.a2;
    vastaukset.a3 = req.body.a3;
    vastaukset.a4 = req.body.a4;
    vastaukset.a5 = req.body.a5;
    vastaukset.a6 = req.body.a6;
    vastaukset.a7 = req.body.a7;
    vastaukset.a7_3 = req.body.a7_3;
    vastaukset.a8 = req.body.a8;
    vastaukset.a8_4 = req.body.a8_4;
    vastaukset.a9 = req.body.a9;
    vastaukset.timestamp = req.body.timestamp;
    
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
