app.controller('UserDataController',['$scope','$location','$rootScope','AdminFactory',function($scope,$location,$rootScope,AdminFactory){

    $scope.tiedot = {};
    $scope.tiedot = $rootScope.tiedot;

    if($scope.tiedot === undefined){
        $location.path('/admin_all');
    };
    
    $scope.tiedot.q1 = "Mikä on pohjakoulutuksesi?";
    $scope.tiedot.q2 = "Valmistumisajankohtasi (kk/vuosi):";
    $scope.tiedot.q3 = "Kuinka monta työhakemusta olet lähettänyt viimeisen 6 kuukauden aikana?";
    $scope.tiedot.q4 = "Kuinka monta haastattelukutsua olet saanut viimeisen 6 kuukauden aikana?";
    $scope.tiedot.q5 = "Oletko ollut töissä viimeisen 12 kk aikana?";
    $scope.tiedot.q6 = "Vastasiko työ osaamistasi/koulutustasi?";
    $scope.tiedot.q7 = "Oletko hakemassa työpaikkaa vai koulutuspaikkaa?";
    $scope.tiedot.q8 = "Minkä tyyppinen työ kiinnostaa sinua?";
    $scope.tiedot.q9 = "Oletko kiinnostunut yrittäjyydestä?";
    $scope.tiedot.q10 = "Käytän sujuvasti Wordia";
    $scope.tiedot.q11 = "Käytän sujuvasti PowerPointia";
    $scope.tiedot.q12 = "Käytän sujuvasti Exceliä";
    $scope.tiedot.q13 = "Minulla on hyvät tiedonhakutaidot";
    $scope.tiedot.q14 = "Minulla on LinkedIn profiili ja hyödynnän sitä työnhaussa";
    $scope.tiedot.q15 = "Minulla on Facebook-profiili ja hyödynnän sitä työnhaussa";
    $scope.tiedot.q16 = "Minulla on työnhaun kotisivut ja hyödynnän sitä työnhaussa";
    $scope.tiedot.q17 = "Minulla on videoprofiili ja hyödynnän sitä työnhaussa";
    $scope.tiedot.q18 = "Kirjoitan blogia saadakseni näkyvyyttä työnhakuni tukena";
    $scope.tiedot.q20 = "Tiedän, mitkä ovat vahvuuteni työnteossa";
    $scope.tiedot.q21 = "Tiedän, mitä kehittämiskohteita minulla on ammatillisessa mielessä";
    $scope.tiedot.q22 = "Minulla on vahva ammatillinen itsetunto";
    $scope.tiedot.q23 = "Kehitän ammattitaitoani jatkuvasti opiskelemalla";
    $scope.tiedot.q24 = "Minulla on hyvä itsetunto";
    $scope.tiedot.q25 = "Minulla on selkeä minäkuva";
    $scope.tiedot.q26 = "Omaan hyvät ihmissuhdetaidot";
    $scope.tiedot.q27 = "Olen tehnyt itsetuntemukseni lisäämiseksi erityyppisiä testejä";
    $scope.tiedot.q28 = "Minut on palkittu usein työsuorituksistani";
    $scope.tiedot.q29 = "Urani on ollut nousujohteinen, tehtävänimikkeet kertovat siitä";
    $scope.tiedot.q30 = "Tiedän, mitkä asiat minua motivoi työnteossa";
    $scope.tiedot.q32 = "Pidän huolta kunnostani harrastamalla säännöllisesti (3-4 krt/vko) liikuntaa";
    $scope.tiedot.q33 = "Nukun riittävästi (7-9 tuntia yössä)";
    $scope.tiedot.q34 = "Syön monipuolisesti ja terveellisesti";
    $scope.tiedot.q35 = "Hoidan henkistä kuntoani pitämällä yllä hyviä ihmissuhteita";
    $scope.tiedot.q36 = "Talousasiani on kunnossa työttömyydestä riippumatta";
    $scope.tiedot.q37 = "Vakuutusturva (omaisuus- ja henkilövakuutukset) on ajantasalla jos jotain sattuu";
    $scope.tiedot.q38 = "Minulla on työ- ja koulutustodistukset kansioitu";
    $scope.tiedot.q39 = "Minulla on ajantasainen ja nykyaikainen työhakemus";
    $scope.tiedot.q40 = "Minulla on ajantasainen ja nykyaikainen kuvallinen ansioluettelo";
    $scope.tiedot.q41 = "Ansioluettelo löytyy myös englannin kielisenä";
    $scope.tiedot.q42 = "Minulla on osaamiskansio (työelämän portfolio)";
    $scope.tiedot.q43 = "Olen lähettänyt/tallentanut hakemukseni suorahakuyrityksiin (=Headhunter)";
    $scope.tiedot.q44 = "Olen tallentanut tietoni eri työnvälittäjien sivustolle (esim. Monster tai Työvoimatoimisto)";
    $scope.tiedot.q45 = "Olen tallentanut tietoni henkilöstöpalveluyrityksen verkkopalveluun";
    $scope.tiedot.q46 = "Minulla on käyntikortit";
    $scope.tiedot.q47 = "Olen tallentanut työhistoriaani kuvin";
    $scope.tiedot.q48 = "Verkostoidun käymällä seminaareissa";
    $scope.tiedot.q49 = "Verkostoidun käymällä erilaisissa tilaisuuksissa";
    $scope.tiedot.q50 = "Tiedän työllisyyttäni edistävät verkostot ja kuulun niihin";
    $scope.tiedot.q51 = "Minulla on laaja sähköinen verkosto";
    $scope.tiedot.q52 = "Minulla on useampi suosittelija";
    $scope.tiedot.q53 = "Olen aktiivinen työnhakija";
    $scope.tiedot.q54 = "Olen passiivinen työnhakija";
    $scope.tiedot.q55 = "Minulla on työnhakuun liittyvä suunnitelma";
    $scope.tiedot.q56 = "Olen asettanut itselleni tavoitteet työnhakuun liittyen";
    $scope.tiedot.q57 = "Olen asettanut aikataulun työnhakuun liittyen";
    $scope.tiedot.q58 = "Työnhakuni on erittäin suunnitelmallista";
    $scope.tiedot.q59 = "Työnhakuni on erittäin systemaattista";
    $scope.tiedot.q60 = "Suhtaudun työnhakuun kurinalaisesti";
    $scope.tiedot.q61 = "Seuraan työnhakuun liittyviä tuloksia kirjaamalla ne ylös";
    $scope.tiedot.q62 = "Minulla on koottuna työnantajarekisteri";
    $scope.tiedot.q63 = "Soitan useamman kerran viikossa työnantajille";
    $scope.tiedot.q64 = "Ennen haastatteluun menoa, valmistaudun perusteellisesti";
    $scope.tiedot.q65 = "Teen aina avoimeen tehtävään räätälöidyn ansioluettelon";
    $scope.tiedot.q66 = "Pääsääntöisesti haen töitä TE-palvelujen sivujen kautta (www.te-palvelut.fi)";
    
    $scope.getArray = [
        {a:1, b:$scope.tiedot.q1, c:$scope.tiedot.a1, d:""},
        {a:2, b:$scope.tiedot.q2, c:$scope.tiedot.a2, d:""},
        {a:3, b:$scope.tiedot.q3, c:$scope.tiedot.a3, d:""},
        {a:4, b:$scope.tiedot.q4, c:$scope.tiedot.a4, d:""},
        {a:5, b:$scope.tiedot.q5, c:$scope.tiedot.a5, d:""},
        {a:6, b:$scope.tiedot.q6, c:$scope.tiedot.a6, d:""},
        {a:7, b:$scope.tiedot.q7, c:$scope.tiedot.a7, d:$scope.tiedot.a7_3},
        {a:8, b:$scope.tiedot.q8, c:$scope.tiedot.a8, d:$scope.tiedot.a8_4},
        {a:9, b:$scope.tiedot.q9, c:$scope.tiedot.a9, d:""},
        {a:10, b:$scope.tiedot.q10, c:$scope.tiedot.a10, d:""},
        {a:11, b:$scope.tiedot.q11, c:$scope.tiedot.a11, d:""},
        {a:12, b:$scope.tiedot.q12, c:$scope.tiedot.a12, d:""},
        {a:13, b:$scope.tiedot.q13, c:$scope.tiedot.a13, d:""},
        {a:14, b:$scope.tiedot.q14, c:$scope.tiedot.a14, d:""},
        {a:15, b:$scope.tiedot.q15, c:$scope.tiedot.a15, d:""},
        {a:16, b:$scope.tiedot.q16, c:$scope.tiedot.a16, d:""},
        {a:17, b:$scope.tiedot.q17, c:$scope.tiedot.a17, d:""},
        {a:18, b:$scope.tiedot.q18, c:$scope.tiedot.a18, d:""},
        {a:20, b:$scope.tiedot.q20, c:$scope.tiedot.a20, d:""},
        {a:21, b:$scope.tiedot.q21, c:$scope.tiedot.a21, d:""},
        {a:22, b:$scope.tiedot.q22, c:$scope.tiedot.a22, d:""},
        {a:23, b:$scope.tiedot.q23, c:$scope.tiedot.a23, d:""},
        {a:24, b:$scope.tiedot.q24, c:$scope.tiedot.a24, d:""},
        {a:25, b:$scope.tiedot.q25, c:$scope.tiedot.a25, d:""},
        {a:26, b:$scope.tiedot.q26, c:$scope.tiedot.a26, d:""},
        {a:27, b:$scope.tiedot.q27, c:$scope.tiedot.a27, d:""},
        {a:28, b:$scope.tiedot.q28, c:$scope.tiedot.a28, d:""},
        {a:29, b:$scope.tiedot.q29, c:$scope.tiedot.a29, d:""},
        {a:30, b:$scope.tiedot.q30, c:$scope.tiedot.a30, d:""},
        {a:32, b:$scope.tiedot.q32, c:$scope.tiedot.a32, d:""},
        {a:33, b:$scope.tiedot.q33, c:$scope.tiedot.a33, d:""},
        {a:34, b:$scope.tiedot.q34, c:$scope.tiedot.a34, d:""},
        {a:35, b:$scope.tiedot.q35, c:$scope.tiedot.a35, d:""},
        {a:36, b:$scope.tiedot.q36, c:$scope.tiedot.a36, d:""},
        {a:37, b:$scope.tiedot.q37, c:$scope.tiedot.a37, d:""},
        {a:38, b:$scope.tiedot.q38, c:$scope.tiedot.a38, d:""},
        {a:39, b:$scope.tiedot.q39, c:$scope.tiedot.a39, d:""},
        {a:40, b:$scope.tiedot.q40, c:$scope.tiedot.a40, d:""},
        {a:41, b:$scope.tiedot.q41, c:$scope.tiedot.a41, d:""},
        {a:42, b:$scope.tiedot.q42, c:$scope.tiedot.a42, d:""},
        {a:43, b:$scope.tiedot.q43, c:$scope.tiedot.a43, d:""},
        {a:44, b:$scope.tiedot.q44, c:$scope.tiedot.a44, d:""},
        {a:45, b:$scope.tiedot.q45, c:$scope.tiedot.a45, d:""},
        {a:46, b:$scope.tiedot.q46, c:$scope.tiedot.a46, d:""},
        {a:47, b:$scope.tiedot.q47, c:$scope.tiedot.a47, d:""},
        {a:48, b:$scope.tiedot.q48, c:$scope.tiedot.a48, d:""},
        {a:49, b:$scope.tiedot.q49, c:$scope.tiedot.a49, d:""},
        {a:50, b:$scope.tiedot.q50, c:$scope.tiedot.a50, d:""},
        {a:51, b:$scope.tiedot.q51, c:$scope.tiedot.a51, d:""},
        {a:52, b:$scope.tiedot.q52, c:$scope.tiedot.a52, d:""},
        {a:53, b:$scope.tiedot.q53, c:$scope.tiedot.a53, d:""},
        {a:54, b:$scope.tiedot.q54, c:$scope.tiedot.a54, d:""},
        {a:55, b:$scope.tiedot.q55, c:$scope.tiedot.a55, d:""},
        {a:56, b:$scope.tiedot.q56, c:$scope.tiedot.a56, d:""},
        {a:57, b:$scope.tiedot.q57, c:$scope.tiedot.a57, d:""},
        {a:58, b:$scope.tiedot.q58, c:$scope.tiedot.a58, d:""},
        {a:59, b:$scope.tiedot.q59, c:$scope.tiedot.a59, d:""},
        {a:60, b:$scope.tiedot.q60, c:$scope.tiedot.a60, d:""},
        {a:61, b:$scope.tiedot.q61, c:$scope.tiedot.a61, d:""},
        {a:62, b:$scope.tiedot.q62, c:$scope.tiedot.a62, d:""},
        {a:63, b:$scope.tiedot.q63, c:$scope.tiedot.a63, d:""},
        {a:64, b:$scope.tiedot.q64, c:$scope.tiedot.a64, d:""}
    ];
    
    //console.log($scope.tiedot);
}]);
