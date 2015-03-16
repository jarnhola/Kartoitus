app.controller('LoginController',['$scope','$location','$rootScope','LoginFactory','$timeout',function($scope,$location,$rootScope,LoginFactory,$timeout){

    $scope.admin = {};
    //Tätä kutsutaan kun "Kirjaudu"-nappia painetaan
    $scope.admin.login = function(){
        var loginData = {};
        loginData.username = $scope.admin.username;
        loginData.password = $scope.admin.password;
        
        //Tämä käynnistää kirjautumisen
        LoginFactory.userLogin(loginData);
    }
}]);