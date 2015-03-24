app.controller('LoginController',['$scope','$location','$rootScope','LoginFactory','$timeout','$cookies',function($scope,$location,$rootScope,LoginFactory,$timeout,$cookies){
    
    $scope.user = {};
    $scope.error = "",
    $scope.user.loginFailed = LoginFactory.loginFailed;
    
    $scope.loggedIn = $cookies.loggedIn;
    
    //Tätä kutsutaan kun "Kirjaudu"-nappia painetaan
    $scope.user.login = function(){
        
        //if($rootScope.loggedInUser !== undefined && $rootScope.loggedInUser !== null){
        if($scope.loggedIn == "true"){
            //console.log($rootScope.loggedInUser);
            $scope.error="Olet jo kirjautunut. Kirjaudu ensin ulos ja kirjaudu sitten toisena käyttäjänä";
            //$location.path('/login');
        }
        else{
            var loginData = {};
            loginData.username = $scope.user.username;
            loginData.password = $scope.user.password;
            
            //Tallennetaan käyttäjänimi rootScopen muuttujaan
            //$rootScope.loggedInUser = $scope.user.username;
            //console.log($rootScope.loggedInUser)
            
            //Tämä käynnistää kirjautumisen
            LoginFactory.userLogin(loginData);
            $cookies.loggedIn = 'true';
        }
            
    }

    $scope.user.logout = function(){
        LoginFactory.logout();
        
    }
}]);