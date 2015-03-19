app.controller('NavController',['$scope','$location','LoginFactory',function($scope,$location,LoginFactory){
    
    $scope.nav = {};
    
    $scope.location = window.location.pathname;
    
    $scope.nav.logout = function(){
        LoginFactory.logout();
    }
    
    $scope.nav.login = function(){
        $location.path('/login');
    }
    
    $scope.nav.register = function(){
        $location.path('/register');
    }
    
}]);