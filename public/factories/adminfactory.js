app.factory('AdminFactory',['$resource','$location','$rootScope',function($resource,$location,$rootScope){
    
    var factory = {};
    
    factory.userRegister = function(userData){
        return $resource('/app/register',{},{post:{method:'POST'}})
        .post(userData).$promise;
    }
    
    factory.getData = function(){ 
        return $resource('/app/getAllAnswers').get().$promise;
    }
    
    /*factory.getQuestions = function(){ 
        return $resource('/app/getAllQuestions').get().$promise;
    }*/
    
    factory.getUserData = function(index){ 
        return $resource('/app/getOneById',{id:index}).get().$promise;
    }
    
    return factory;
}]);