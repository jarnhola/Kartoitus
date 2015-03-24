app.factory('FormFactory',['$resource','$location','$rootScope',function($resource,$location,$rootScope){
    
    var factory = {};
    
    factory.storeData = function(kartoitus){
        return $resource('/app/store',{},{post:{method:'POST'}})
        .post(kartoitus).$promise;
    }
    
    return factory;
}]);