app.factory('LoginFactory',['$resource','$location','$rootScope',function($resource,$location,$rootScope){
    
    var factory = {};
    factory.loginFailed = false;
    factory.userLogin = function(loginData){
        var res = $resource('/app/login',{},{post:{method:'POST'}});
        res.post(loginData).$promise.then(function(data){
            $location.path('/admin_all');
        });
    }
    /*
    factory.userRegister = function(userData){
        return $resource('/app/register',{},{post:{method:'POST'}})
        .post(userData).$promise;
    }*/
    
    factory.logout = function(){
        $resource('/app/logout').get().$promise.then(function(){
            $rootScope.loggedInUser = null;
            $location.path('/');
        });
    }
    
    $rootScope.$on('rootScope:broadcast',function(event,data){
      factory.loginFailed = true;
    });
    
    return factory;
}]);