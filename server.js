var express = require('express');
var bodyParser = require('body-parser');

var server = express();

//This middleware is called for every request
server.use(function(req,res,next){
    //Store queries object to request
    //req.queries = queries;
    //req.passport = passport;
    //Pass to next middleware
    next();
    
});

//Point static files to public folder
server.use('/',express.static(__dirname + '/public'));
server.use(bodyParser.json());
/*
server.get('/*',function(req,res){
    
    res.sendFile(__dirname + '/public/index.html');
});*/

server.listen(3000);