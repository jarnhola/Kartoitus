app.factory('LoginFactory',['$resource','$location','$rootScope','$cookies',function($resource,$location,$rootScope,$cookies){
    
    var factory = {};
    
    factory.loginFailed = false;
    
    factory.userLogin = function(loginData){
        var res = $resource('/app/login',{},{post:{method:'POST'}});
        res.post(loginData).$promise.then(function(data){
            $location.path('/admin_all');
        });
    }
    
    factory.logout = function(){
        $resource('/app/logout').get().$promise.then(function(){
            $location.path('/');
        });
    }
    
    $rootScope.$on('rootScope:broadcast',function(event,data){
      factory.loginFailed = true;
    });
    
    return factory;
}]);