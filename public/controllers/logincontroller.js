app.controller('LoginController',['$scope','$location','$rootScope','LoginFactory','$cookies',function($scope,$location,$rootScope,LoginFactory,$cookies){
    
    $scope.user = {};
    $scope.error = "",
    $scope.user.loginFailed = LoginFactory.loginFailed;
    
    $scope.loggedIn = $cookies.loggedIn;
    
    //Tätä kutsutaan kun "Kirjaudu"-nappia painetaan
    $scope.user.login = function(){
        
        if($scope.loggedIn == "true"){

            $scope.error="Olet jo kirjautunut! Kirjaudu ensin ulos ja kirjaudu sitten toisena käyttäjänä.";
        }
        else{
            var loginData = {};
            loginData.username = $scope.user.username;
            loginData.password = $scope.user.password;
            
            //Tämä käynnistää kirjautumisen
            LoginFactory.userLogin(loginData);
            $cookies.loggedIn = 'true';
        }
            
    }

    //Tätä kutsutaan kun kirjaudutaan ulos
    $scope.user.logout = function(){
        LoginFactory.logout();
        
    }
}]);