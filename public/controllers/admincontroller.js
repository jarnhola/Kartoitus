app.controller('AdminController',['$scope','$location','$rootScope','AdminFactory',function($scope,$location,$rootScope,AdminFactory){

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

    $scope.getUserData = function(index){
     
        AdminFactory.getUserData(index).then(function(data){
            
            //Special hadling for question 8 check-box choices
            data.tiedot.a8 = "";
            if(data.tiedot.a8_1 !== undefined){data.tiedot.a8 = data.tiedot.a8 + " " + data.tiedot.a8_1}
            if(data.tiedot.a8_2 !== undefined){data.tiedot.a8 = data.tiedot.a8 + " " + data.tiedot.a8_2}
            if(data.tiedot.a8_3 !== undefined){data.tiedot.a8 = data.tiedot.a8 + " " + data.tiedot.a8_3}
            
            $rootScope.tiedot = data.tiedot;
            console.log(data.tiedot);
            $location.path('/user_data');
        });
    }
    
    // Haetaan osaamiskartoituksen vastaukset
    AdminFactory.getData().then(function(data){

        $scope.lista = data.vastaukset;
    });
    
}]);