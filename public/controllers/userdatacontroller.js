app.controller('UserDataController',['$scope','$location','$rootScope','AdminFactory',function($scope,$location,$rootScope,AdminFactory){

    $scope.tiedot = $rootScope.tiedot;
    
    var time = $scope.tiedot.a2(month,year);
    
    $scope.tiedot.q1 = "Mikä on pohjakoulutuksesi?"
    $scope.tiedot.q2 = "Valmistumisajankohtasi (kk/vuosi):"
    $scope.tiedot.q3 = "Kuinka monta työhakemusta olet lähettänyt viimeisen 6 kuukauden aikana?"
    $scope.tiedot.q4 = "Kuinka monta haastattelukutsua olet saanut viimeisen 6 kuukauden aikana?"
    $scope.tiedot.q5 = "Oletko ollut töissä viimeisen 12 kk aikana?"
    $scope.tiedot.q6 = "Vastasiko työ osaamistasi/koulutustasi?"
    $scope.tiedot.q7 = "Oletko hakemassa työpaikkaa vai koulutuspaikkaa?"
    $scope.tiedot.q8 = "Minkä tyyppinen työ kiinnostaa sinua?"
    $scope.tiedot.q9 = "Oletko kiinnostunut yrittäjyydestä?"
    $scope.tiedot.q10 = "Käytän sujuvasti Wordia"
    $scope.tiedot.q11 = "Käytän sujuvasti PowerPointia"
    $scope.tiedot.q12 = "Käytän sujuvasti Exceliä"
    $scope.tiedot.q13 = "Minulla on hyvät tiedonhakutaidot"
    $scope.tiedot.q14 = "Minulla on LinkedIn profiili ja hyödynnän sitä työnhaussa"
    $scope.tiedot.q15 = "Minulla on Facebook-profiili ja hyödynnän sitä työnhaussa"
    $scope.tiedot.q16 = "Minulla on työnhaun kotisivut ja hyödynnän sitä työnhaussa"
    $scope.tiedot.q17 = "Minulla on videoprofiili ja hyödynnän sitä työnhaussa"
    $scope.tiedot.q18 = "Kirjoitan blogia saadakseni näkyvyyttä työnhakuni tukena"
    $scope.tiedot.q20 = "Tiedän, mitkä ovat vahvuuteni työnteossa"
    $scope.tiedot.q21 = "Tiedän, mitä kehittämiskohteita minulla on ammatillisessa mielessä"
    $scope.tiedot.q22 = "Minulla on vahva ammatillinen itsetunto"
    $scope.tiedot.q23 = "Kehitän ammattitaitoani jatkuvasti opiskelemalla"
    $scope.tiedot.q24 = "Minulla on hyvä itsetunto"
    $scope.tiedot.q25 = "Minulla on selkeä minäkuva"
    $scope.tiedot.q26 = "Omaan hyvät ihmissuhdetaidot"
    $scope.tiedot.q27 = "Olen tehnyt itsetuntemukseni lisäämiseksi erityyppisiä testejä"
    $scope.tiedot.q28 = "Minut on palkittu usein työsuorituksistani"
    $scope.tiedot.q29 = "Urani on ollut nousujohteinen, tehtävänimikkeet kertovat siitä"
    $scope.tiedot.q30 = "Tiedän, mitkä asiat minua motivoi työnteossa"
    $scope.tiedot.q32 = "Pidän huolta kunnostani harrastamalla säännöllisesti (3-4 krt/vko) liikuntaa"
    $scope.tiedot.q33 = "Nukun riittävästi (7-9 tuntia yössä)"
    $scope.tiedot.q34 = "Syön monipuolisesti ja terveellisesti"
    $scope.tiedot.q35 = "Hoidan henkistä kuntoani pitämällä yllä hyviä ihmissuhteita"
    $scope.tiedot.q36 = "Talousasiani on kunnossa työttömyydestä riippumatta"
    $scope.tiedot.q37 = "Vakuutusturva (omaisuus- ja henkilövakuutukset) on ajantasalla jos jotain sattuu"
    $scope.tiedot.q38 = "Minulla on työ- ja koulutustodistukset kansioitu"
    $scope.tiedot.q39 = "Minulla on ajantasainen ja nykyaikainen työhakemus"
    $scope.tiedot.q40 = "Minulla on ajantasainen ja nykyaikainen kuvallinen ansioluettelo"
    $scope.tiedot.q41 = "Ansioluettelo löytyy myös englannin kielisenä"
    $scope.tiedot.q42 = "Minulla on osaamiskansio (työelämän portfolio)"
    $scope.tiedot.q43 = "Olen lähettänyt/tallentanut hakemukseni suorahakuyrityksiin (=Headhunter)"
    $scope.tiedot.q44 = "Olen tallentanut tietoni eri työnvälittäjien sivustolle (esim. Monster tai Työvoimatoimisto)"
    $scope.tiedot.q45 = "Olen tallentanut tietoni henkilöstöpalveluyrityksen verkkopalveluun"
    $scope.tiedot.q46 = "Minulla on käyntikortit"
    $scope.tiedot.q47 = "Olen tallentanut työhistoriaani kuvin"
    $scope.tiedot.q48 = "Verkostoidun käymällä seminaareissa"
    $scope.tiedot.q49 = "Verkostoidun käymällä erilaisissa tilaisuuksissa"
    $scope.tiedot.q50 = "Tiedän työllisyyttäni edistävät verkostot ja kuulun niihin"
    $scope.tiedot.q51 = "Minulla on laaja sähköinen verkosto"
    $scope.tiedot.q52 = "Minulla on useampi suosittelija"
    $scope.tiedot.q53 = "Olen aktiivinen työnhakija"
    $scope.tiedot.q54 = "Olen passiivinen työnhakija"
    $scope.tiedot.q55 = "Minulla on työnhakuun liittyvä suunnitelma"
    $scope.tiedot.q56 = "Olen asettanut itselleni tavoitteet työnhakuun liittyen"
    $scope.tiedot.q57 = "Olen asettanut aikataulun työnhakuun liittyen"
    $scope.tiedot.q57 = "Työnhakuni on erittäin suunnitelmallista"
    $scope.tiedot.q58 = "Työnhakuni on erittäin systemaattista"
    $scope.tiedot.q59 = "Suhtaudun työnhakuun kurinalaisesti"
    $scope.tiedot.q50 = "Seuraan työnhakuun liittyviä tuloksia kirjaamalla ne ylös"
    $scope.tiedot.q60 = "Minulla on koottuna työnantajarekisteri"
    $scope.tiedot.q61 = "Soitan useamman kerran viikossa työnantajille"
    $scope.tiedot.q62 = "Ennen haastatteluun menoa, valmistaudun perusteellisesti"
    $scope.tiedot.q63 = "Teen aina avoimeen tehtävään räätälöidyn ansioluettelon"
    $scope.tiedot.q64 = "Pääsääntöisesti haen töitä TE-palvelujen sivujen kautta (www.te-palvelut.fi)"
    
    
    if($scope.tiedot === undefined){
        $location.path('/admin_all');
    };
    
    $scope.getArray = [
        {a:1, b:$scope.tiedot.q1, c:$scope.tiedot.a1, d:""},
        {a:2, b:$scope.tiedot.q2, c:$scope.tiedot.a2, d:""},
        {a:3, b:$scope.tiedot.q3, c:$scope.tiedot.a3, d:""},
        {a:4, b:$scope.tiedot.q4, c:$scope.tiedot.a4, d:""},
        {a:5, b:$scope.tiedot.q5, c:$scope.tiedot.a5, d:""},
        {a:6, b:$scope.tiedot.q6, c:$scope.tiedot.a6, d:""},
        {a:7, b:$scope.tiedot.q7, c:$scope.tiedot.a7, d:$scope.tiedot.a7_3},
        {a:8, b:$scope.tiedot.q8, c:$scope.tiedot.a8, d:$scope.tiedot.a8_4},
        {a:9, b:$scope.tiedot.q9, c:$scope.tiedot.a9, d:""}
    ];
    
    //console.log($scope.tiedot);
}]);
