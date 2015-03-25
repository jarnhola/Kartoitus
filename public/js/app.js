var app = angular.module('Kartoitus',['ngRoute','ngResource','ngAnimate','ngCookies']);

var authenticationFailed = function($q,$rootScope){
    var responseInterceptor = {
        response: function(response) {
            if(response.status === 401){
                console.log('Authentication failed');
            }
            return response;
        },
        responseError:function(err){
            //Login failed....
            if(err.status === 401){
                console.log('Login failed');
                //$rootScope.loggedInUser = null;
                $rootScope.$broadcast('rootScope:broadcast','Authentication Failed');
                //$location.url('/login');
            }
            
            return err;
        }
    }
    
    return responseInterceptor;
}

app.config(function($routeProvider,$locationProvider,$httpProvider){
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/',{
        templateUrl:'views/main.html',
        controller:'LoginController'
    });
    
    $routeProvider.when('/form',{
        templateUrl:'views/carousel.html',
        controller:'FormController'
    });
    
    $routeProvider.when('/login',{
        templateUrl:'views/login.html',
        controller:'LoginController'
    });
    
    $routeProvider.when('/register',{
        templateUrl:'views/register.html',
        controller:'AdminController' //LoginController
    });
    
    $routeProvider.when('/admin_all',{
        templateUrl:'views/admin_all.html',
        controller:'AdminController',
        resolve:{loginRequired:loginRequired}
    });
    
    $routeProvider.when('/user_data',{
        templateUrl:'views/user_data.html',
        controller:'UserDataController',
        resolve:{loginRequired:loginRequired}
    });
    
    $routeProvider.when('/admin_filter',{
        templateUrl:'views/admin_filter.html',
        controller:'AdminController',
        resolve:{loginRequired:loginRequired}
    });
        
    $routeProvider.otherwise({redirectTo: '/'});
    
    $httpProvider.interceptors.push(authenticationFailed);    
});

function loginRequired($q,$location,$resource){
    
    var deferred = $q.defer();
        
    $resource('/authenticate').get().$promise.then(function(auth){
        
        if(auth.authenticated){
            deferred.resolve();
        }
        else{
            deferred.reject();
            $location.path('/login');
        }
    });
    
    return deferred.promise;
}
