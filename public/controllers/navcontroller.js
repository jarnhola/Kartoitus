app.controller('NavController',['$scope','$location','$cookies','LoginFactory',function($scope,$location,$cookies,LoginFactory){
    
    $scope.nav = {};
    
    //Read the loggenin status from $cookies
    $scope.loggedIn = $cookies.loggedIn;
    
    if ($scope.loggedIn === true) {
        $scope.loggedOut = false;
        $cookies.loggedOut = false;
    }
    if ($scope.loggedIn === false){
        $scope.loggedOut = true;
        $cookies.loggedOut = true;
    }
    
    //Read location from the pathname
    $scope.location = window.location.pathname;
    
    //Logout function
    $scope.nav.logout = function(){
        $scope.loggedIn = false;
        $cookies.loggedIn = false;
        LoginFactory.logout();
    }
    //Login function
    $scope.nav.login = function(){
        $location.path('/login');
    }
    
    //Register function
    $scope.nav.register = function(){
        $location.path('/register');
    }
    
}]);