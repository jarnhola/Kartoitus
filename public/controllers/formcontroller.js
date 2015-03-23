app.controller('FormController',['$scope',function($scope){ //,['$scope','FormFactory',function($scope,FormFactory){
    
    $scope.kartoitus = {};

    //Esitiedot 
    $scope.kartoitus.q1 = "Mikä on pohjakoulutuksesi?";
    $scope.kartoitus.q2 = "Valmistumisajankohtasi (kk/vuosi)";
    $scope.kartoitus.q3 = "Kuinka monta työhakemusta olet lähettänyt viimeisen 6 kuukauden aikana?";
    $scope.kartoitus.q4 = "Kuinka monta haastattelukutsua olet saanut viimeisen 6 kuukauden aikana?";
    $scope.kartoitus.q5 = "Oletko ollut töissä viimeisen 12 kk aikana?";
    $scope.kartoitus.q6 = "Vastasiko työ osaamistasi/koulutustasi?";
    $scope.kartoitus.q7 = "Oletko hakemassa työpaikkaa vai koulutuspaikkaa?";
    $scope.kartoitus.q8 = "Minkä tyyppinen työ kiinnostaa sinua?";
    $scope.kartoitus.q9 = "Oletko kiinnostunut yrittäjyydestä?";

    /*
    // Tekstinkäsittely- ja tiedonhakutaidot
    $scope.kartoitus.q10 = "";
    $scope.kartoitus.q11 = "";
    $scope.kartoitus.q12 = "";
    $scope.kartoitus.q13 = "";
    $scope.kartoitus.q14 = "";
    $scope.kartoitus.q15 = "";
    $scope.kartoitus.q16 = "";
    $scope.kartoitus.q17 = "";
    $scope.kartoitus.q18 = "";
    $scope.kartoitus.q19 = "";
    $scope.kartoitus.q20 = "";
    $scope.kartoitus.q21 = "";*/
    
    $scope.kartoitus.send = function(){
        
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
        
        kartoitus.timestamp = new Date();
        kartoitus.name = $scope.kartoitus.nimi;
        kartoitus.birth = $scope.kartoitus.vuosi;
        kartoitus.email = $scope.kartoitus.email;
        kartoitus.phone = $scope.kartoitus.puhelin;
        
        console.log(kartoitus);
    }

}]);