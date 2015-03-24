app.factory('AdminFactory',['$resource','$location','$rootScope',function($resource,$location,$rootScope){
    
    var factory = {};
    
    factory.userRegister = function(userData){
        return $resource('/app/register',{},{post:{method:'POST'}})
        .post(userData).$promise;
    }
    
    factory.getData = function(){ 
        return $resource('/app/getAll').get().$promise;
    }
    
    return factory;
}]);