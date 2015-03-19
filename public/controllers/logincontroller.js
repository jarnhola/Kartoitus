app.controller('LoginController',['$scope','$location','$rootScope','LoginFactory','$timeout',function($scope,$location,$rootScope,LoginFactory,$timeout){
    
    $scope.user = {};
    $scope.error = "",
    $scope.user.loginFailed = LoginFactory.loginFailed;
    
    //Tätä kutsutaan kun "Kirjaudu"-nappia painetaan
    $scope.user.login = function(){
        if($rootScope.loggedInUser !== undefined && $rootScope.loggedInUser !== null){
            console.log($rootScope.loggedInUser);
            $scope.error="Olet jo kirjautunut. Kirjaudu ensin ulos ja kirjaudu sitten toisena käyttäjänä";
            //$location.path('/login');
        }
        else{
            var loginData = {};
            loginData.username = $scope.user.username;
            loginData.password = $scope.user.password;
            
            //Tallennetaan käyttäjänimi rootScopen muuttujaan
            $rootScope.loggedInUser = $scope.user.username;
            console.log($rootScope.loggedInUser)
            
            //Tämä käynnistää kirjautumisen
            LoginFactory.userLogin(loginData);
        }
            
    }
    /*
    //Tätä kutsutaan kun "Rekisteröi"-nappia painetaan
    $scope.user.register = function(){
        var userData = {};
        userData.username = $scope.user.username;
        userData.password = $scope.user.password;
        
        LoginFactory.userRegister(userData).then(function(data){
            
            if(data.status === 'Error'){
                $scope.user.showError = true;
            }
            else{
                $scope.user.showError = false;
            }
        });
    }*/

    $scope.user.logout = function(){
        LoginFactory.logout();
    }
}]);