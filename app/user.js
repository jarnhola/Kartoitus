var express = require('express');
var passport = require('../server').passport;
var router = express.Router();

// Kirjaudutaan sisään Admin-käyttäjänä
router.post('/login', passport.authenticate('local-login'),function(req,res){
    res.send({name:req.user.name});
});

// Rekisteröidään uusi Admin-käyttäjä
router.post('/register',function(req,res){
    req.queries.registerUser(req,res);
});

// Kirjaudutaan ulos 
router.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    req.session = null;
    req.user = null; 
    res.clearCookie('user');
    res.send('logged out');
});

// Talletetaan tiedot osaamiskartoitus-lomakkeelta
router.post('/store',function(req,res){
    req.queries.storeData(req,res);
});

router.get('/getAllAnswers',function(req,res){
    
    req.queries.getData(req,res);
});

/*router.get('/getAllQuestions',function(req,res){
    
    req.queries.getQuestions(req,res);
});*/

router.get('/getOneById',function(req,res){
    
    req.queries.getUserData(req,res);
});

module.exports = router;