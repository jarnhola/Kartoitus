app.controller('AdminController',['$scope','$location','$rootScope','AdminFactory','$timeout',function($scope,$location,$rootScope,AdminFactory,$timeout){

    $scope.user = {};

    //Tätä kutsutaan kun "Rekisteröi"-nappia painetaan
    $scope.user.register = function(){
        var userData = {};
        userData.username = $scope.user.username;
        userData.password = $scope.user.password;
        
        AdminFactory.userRegister(userData).then(function(data){
            
            if(data.status === 'Error'){
                $scope.user.showError = true;
            }
            else{
                $scope.user.showError = false;
                $location.path('/admin_all');
            }
        });
    }
}]);
