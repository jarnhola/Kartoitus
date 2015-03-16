var app = angular.module('Kartoitus',['ngRoute','ngResource','ngAnimate']);

app.config(function($routeProvider,$locationProvider,$httpProvider){
    
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/',{
        templateUrl:'views/main.html'
    });
    
    $routeProvider.when('/form',{
        templateUrl:'views/carousel.html',
        controller:'FormController'
    });
    
    $routeProvider.when('/login',{
        templateUrl:'views/login.html',
        controller:'LoginController'
    });
    
    $routeProvider.when('/admin',{
        templateUrl:'views/admin.html',
        controller:'AdminController',
        //resolve:{loginRequired:loginRequired}
    });
        
    $routeProvider.otherwise({redirectTo: '/'});
    //$httpProvider.interceptors.push(authenticationFailed);
});
