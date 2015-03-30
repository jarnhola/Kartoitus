app.controller('UserDataController',['$scope','$location','$rootScope','AdminFactory',function($scope,$location,$rootScope,AdminFactory){

    $scope.tiedot = $rootScope.tiedot;
    
    //console.log($scope.tiedot);
}]);
