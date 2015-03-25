app.controller('FormController',['$scope','$location','FormFactory',function($scope,$location,FormFactory){
    
    $scope.kartoitus = {};

    // Lähetetään osaamiskartoituksen vastaukset
    $scope.kartoitus.send = function(){

        //Special checking to the question number 8
        if($scope.kartoitus.a8_1 === undefined && $scope.kartoitus.a8_2 === undefined && 
           $scope.kartoitus.a8_3 === undefined && $scope.kartoitus.a8_4 === undefined){
                $scope.kartoitus.a8 = undefined;
                console.log("a8 undefined");
        }
        
        if($scope.kartoitus.a1 === undefined || $scope.kartoitus.a2 === undefined ||
           $scope.kartoitus.a3 === undefined || $scope.kartoitus.a4 === undefined ||
           $scope.kartoitus.a5 === undefined || $scope.kartoitus.a7 === undefined ||
           $scope.kartoitus.a8 === undefined || $scope.kartoitus.a9 === undefined ||
           
           $scope.kartoitus.a10 === undefined || $scope.kartoitus.a11 === undefined ||
           $scope.kartoitus.a12 === undefined || $scope.kartoitus.a13 === undefined ||
           $scope.kartoitus.a14 === undefined || $scope.kartoitus.a15 === undefined ||
           $scope.kartoitus.a16 === undefined || $scope.kartoitus.a17 === undefined ||
           $scope.kartoitus.a18 === undefined ||
           
           $scope.kartoitus.a20 === undefined || $scope.kartoitus.a21 === undefined ||
           $scope.kartoitus.a22 === undefined || $scope.kartoitus.a23 === undefined ||
           $scope.kartoitus.a24 === undefined || $scope.kartoitus.a25 === undefined ||
           $scope.kartoitus.a26 === undefined || $scope.kartoitus.a27 === undefined ||
           $scope.kartoitus.a28 === undefined || $scope.kartoitus.a29 === undefined ||
           $scope.kartoitus.a30 === undefined ||
           
           $scope.kartoitus.a32 === undefined || $scope.kartoitus.a33 === undefined ||
           $scope.kartoitus.a34 === undefined || $scope.kartoitus.a35 === undefined ||
           $scope.kartoitus.a36 === undefined || $scope.kartoitus.a37 === undefined ||
           
           $scope.kartoitus.a38 === undefined || $scope.kartoitus.a39 === undefined ||
           $scope.kartoitus.a40 === undefined || $scope.kartoitus.a41 === undefined ||
           $scope.kartoitus.a42 === undefined || $scope.kartoitus.a43 === undefined ||
           $scope.kartoitus.a44 === undefined || $scope.kartoitus.a45 === undefined ||
           $scope.kartoitus.a46 === undefined || $scope.kartoitus.a47 === undefined ||
           
           $scope.kartoitus.a48 === undefined || $scope.kartoitus.a49 === undefined ||
           $scope.kartoitus.a50 === undefined || $scope.kartoitus.a51 === undefined ||
           $scope.kartoitus.a52 === undefined ||
           
           $scope.kartoitus.a54 === undefined || $scope.kartoitus.a55 === undefined){
            
                $scope.kartoitus.showError = true; 
        }
        else{

            var kartoitus = {};
            //-----------esitiedot---------------
            kartoitus.a1 = $scope.kartoitus.a1;
            kartoitus.a2 = $scope.kartoitus.a2;
            kartoitus.a3 = $scope.kartoitus.a3;
            kartoitus.a4 = $scope.kartoitus.a4;
            kartoitus.a5 = $scope.kartoitus.a5;
            kartoitus.a6 = $scope.kartoitus.a6;
            kartoitus.a7 = $scope.kartoitus.a7;
            kartoitus.a7_3 = $scope.kartoitus.a7_3;
            kartoitus.a8_1 = $scope.kartoitus.a8_1;
            kartoitus.a8_2 = $scope.kartoitus.a8_2;
            kartoitus.a8_3 = $scope.kartoitus.a8_3;
            kartoitus.a8_4 = $scope.kartoitus.a8_4;
            kartoitus.a9 = $scope.kartoitus.a9;
            //-----------taidot-------------------
            kartoitus.a10 = $scope.kartoitus.a10;
            kartoitus.a11 = $scope.kartoitus.a11;
            kartoitus.a12 = $scope.kartoitus.a12;
            kartoitus.a13 = $scope.kartoitus.a13;
            kartoitus.a14 = $scope.kartoitus.a14;
            //-----------some--------------------
            kartoitus.a15 = $scope.kartoitus.a15;
            kartoitus.a16 = $scope.kartoitus.a16;
            kartoitus.a17 = $scope.kartoitus.a17;
            kartoitus.a18 = $scope.kartoitus.a18;
            //-----------itsetunto---------------
            kartoitus.a20 = $scope.kartoitus.a20;
            kartoitus.a21 = $scope.kartoitus.a21;
            kartoitus.a22 = $scope.kartoitus.a22;
            kartoitus.a23 = $scope.kartoitus.a23;
            kartoitus.a24 = $scope.kartoitus.a24;
            kartoitus.a25 = $scope.kartoitus.a25;
            kartoitus.a26 = $scope.kartoitus.a26;
            kartoitus.a27 = $scope.kartoitus.a27;
            kartoitus.a28 = $scope.kartoitus.a28;
            kartoitus.a29 = $scope.kartoitus.a29;
            kartoitus.a30 = $scope.kartoitus.a30;
            //-----------kunto------------------
            kartoitus.a32 = $scope.kartoitus.a32;
            kartoitus.a33 = $scope.kartoitus.a33;
            kartoitus.a34 = $scope.kartoitus.a34;
            kartoitus.a35 = $scope.kartoitus.a35;
            kartoitus.a36 = $scope.kartoitus.a36;
            kartoitus.a37 = $scope.kartoitus.a37;
            //-----------pakki------------------
            kartoitus.a38 = $scope.kartoitus.a38;
            kartoitus.a39 = $scope.kartoitus.a39;
            kartoitus.a40 = $scope.kartoitus.a40;
            kartoitus.a41 = $scope.kartoitus.a41;
            kartoitus.a42 = $scope.kartoitus.a42;
            kartoitus.a43 = $scope.kartoitus.a43;
            kartoitus.a44 = $scope.kartoitus.a44;
            kartoitus.a45 = $scope.kartoitus.a45;
            kartoitus.a46 = $scope.kartoitus.a46;
            kartoitus.a47 = $scope.kartoitus.a47;
            //-------verkostoituminen------------
            kartoitus.a48 = $scope.kartoitus.a48;
            kartoitus.a49 = $scope.kartoitus.a49;
            kartoitus.a50 = $scope.kartoitus.a50;
            kartoitus.a51 = $scope.kartoitus.a51;
            kartoitus.a52 = $scope.kartoitus.a52;
            //---------työnhaku-----------------
            kartoitus.a53 = $scope.kartoitus.a53;
            kartoitus.a54 = $scope.kartoitus.a54;
            kartoitus.a55 = $scope.kartoitus.a55;
            kartoitus.a56 = $scope.kartoitus.a56;
            kartoitus.a57 = $scope.kartoitus.a57;
            kartoitus.a58 = $scope.kartoitus.a58;
            kartoitus.a59 = $scope.kartoitus.a59;
            kartoitus.a60 = $scope.kartoitus.a60;
            kartoitus.a61 = $scope.kartoitus.a61;
            kartoitus.a62 = $scope.kartoitus.a62;
            kartoitus.a63 = $scope.kartoitus.a63;
            kartoitus.a64 = $scope.kartoitus.a64;
            kartoitus.a65 = $scope.kartoitus.a65;
            kartoitus.a66 = $scope.kartoitus.a66;
            //-------yhteystiedot----------------
            kartoitus.timestamp = new Date();
            kartoitus.name = $scope.kartoitus.nimi;
            kartoitus.birth = $scope.kartoitus.vuosi;
            kartoitus.email = $scope.kartoitus.email;
            kartoitus.phone = $scope.kartoitus.puhelin;

            console.log(kartoitus);

            FormFactory.storeData(kartoitus).then(function(data){

                if(data.status === 'Error'){
                    $scope.kartoitus.showError = true;
                }
                else{
                    $scope.kartoitus.showError = false;
                    $location.path('/');
                }
            });
        }
    }
    
}]);