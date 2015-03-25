app.controller('UserDataController',['$scope','$location','$rootScope','AdminFactory','$timeout',function($scope,$location,$rootScope,AdminFactory,$timeout){

    $scope.tiedot = $rootScope.tiedot;
    
    /*AdminFactory.getQuestions().then(function(data){
        $scope.kysymykset = data.kysymykset;
    });*/
    
    //console.log($scope.tiedot);
}]);
