app.factory('LoginFactory',['$resource','$location','$rootScope',function($resource,$location,$rootScope){
    
    var factory = {};
    //factory.loginFailed = false;
    factory.userLogin = function(loginData){
        var res = $resource('/app/login',{},{post:{method:'POST'}});
        res.post(loginData).$promise.then(function(data){
            console.log('logged in');
            $location.path('/admin');
        });
    }
    /*
    factory.userRegister = function(userData){
        return $resource('/app/register',{},{post:{method:'POST'}}).post(userData).$promise;
    }
    */
    
    return factory;
}]);