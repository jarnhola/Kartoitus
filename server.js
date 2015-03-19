var express = require('express');
var bodyParser = require('body-parser');
//These are needed for passport
var session = require('express-session');
var passport = require('passport');
module.exports.passport = passport;

//Initialize our passport
require('./app/passport')(passport); 

var db = require('./app/database');
var user = require('./app/user');
var queries = require('./app/queries');

var app = express();
//These are needed for sockets
var server = require('http').Server(app);

//This middleware is called for every request
app.use(function(req,res,next){
    //Store queries object to request
    req.queries = queries;
    req.passport = passport;
    //Pass to next middleware
    next();
    
});

// all environments
app.use('/',express.static(__dirname + '/public'));
app.use(bodyParser.json());
//app.use(logger({path: "./logs/logfile.txt"}));
app.use(session({cookieName:'user',
                 secret: 'mvo87a4tam3u20jm0q283rnm09q834yh', 
                 saveUninitialized: true, 
                 resave: true,
                 cookie: {maxAge: null}}));
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization

//Here is my middleware
app.use('/app',user);
app.get('/authenticate',function(req,res){
    if(req.user){
        res.send({authenticated:true});
    }
    else{
        res.send({authenticated:false});
    }
});

server.listen(3000);