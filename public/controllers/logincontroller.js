app.controller('LoginController',['$scope','$location','$rootScope','LoginFactory','$timeout',function($scope,$location,$rootScope,LoginFactory,$timeout){

    //Tätä kutsutaan kun "Kirjaudu"-nappia painetaan
    $scope.login = function(){
        var loginData = {};
        loginData.username = $scope.login.username;
        loginData.password = $scope.login.password;
        
        //Tämä käynnistää kirjautumisen
        LoginFactory.userLogin(loginData);
    }
}]);