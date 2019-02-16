// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var controllers = angular.module('starter.controllers', ['ngAnimate', 'ngCordova','firebase']);
var factories = angular.module('starter.factory', ['firebase']);
angular.module('starter', ['ionic','ngCordova', 'starter.directives', 'starter.factory','starter.controllers','firebase' ])

.run(function($ionicPlatform, $ionicPopup, $state, $timeout) {
  $ionicPlatform.ready(function() {

	if ('addEventListener' in document) {
	    document.addEventListener('DOMContentLoaded', function() {
	        FastClick.attach(document.body);
	    }, false);
	}
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    // if (window.StatusBar) {
    //   // org.apache.cordova.statusbar required
    //   StatusBar.styleLightContent();
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      // StatusBar.styleDefault();
      StatusBar.styleBlackTranslucent();
    }

    // var admobid = {};
    //       // select the right Ad Id according to platform
    //       if( /(android)/i.test(navigator.userAgent) ) { 
    //           admobid = { // for Android
    //               banner: 'ca-app-pub-9658667839326477/1667771286',
    //               interstitial: 'ca-app-pub-9658667839326477/6317462731'
    //           };
    //       } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    //           admobid = { // for iOS
    //               banner: 'ca-app-pub-9658667839326477/1667771286',
    //               interstitial: 'ca-app-pub-9658667839326477/6317462731'
    //           };
    //       } else {
    //           admobid = { // for Windows Phone
    //               banner: 'ca-app-pub-9658667839326477/1667771286',
    //               interstitial: 'ca-app-pub-9658667839326477/6317462731'
    //           };
    //       }

    // if(window.AdMob) AdMob.createBanner({
    //     adId:admobid.banner,
    //     // isTesting:true,//comment this out before publishing the app
    //     position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    //     // position: AdMob.AD_POSITION.TOP_CENTER,
    //     autoShow: true
    //   });

    // if(window.AdMob) AdMob.prepareInterstitial({
    //     adId:admobid.interstitial,
    //     // isTesting:true,//comment this out before publishing the app
    //     autoShow: false
    //   });      

  });

  $ionicPlatform.registerBackButtonAction(function(event) {

    // if(window.AdMob.isInterstitialReady()){
    // //Do Nothing  
    // }else{
    //   window.AdMob.prepareInterstitial();
    // };  
    // if(window.AdMob) AdMob.showInterstitial();


    if($state.current.name=="start"){ // your check here
      $ionicPopup.confirm({
        title: 'Quit SaveEmoji!',
        template: 'Are you sure you want to quit the game?'
      }).then(function(res) {
        if (res) {
            
          // $timeout(function() {
            navigator.app.exitApp();
          // }, 3000);
        }
      })
    } else {
          // navigator.app.backHistory();
          window.location.href="#/";
        }
  }, 100);  
})

.config(function($stateProvider, $urlRouterProvider) {

	if(typeof document.body.style.filter !== 'undefined' || typeof document.body.style.webkitFilter !== 'undefined' ) {
		document.body.classList.add('filter-supported');
	}
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
   $stateProvider
    .state('game', {
      url: "/game",
      templateUrl: "templates/game.html",
      controller: 'GameCtrl',
      cache: false
    })
    .state('tutorial', {
      url: "/tutorial",
      templateUrl: "templates/tutorial.html",
      controller: 'TutorialCtrl',
      cache: false

    })
    .state('start', {
      url: "/",
      templateUrl: "templates/start.html",
      controller: 'StartCtrl'
    })
    .state('leaderboard', {
      url: "/leaderboard",
      templateUrl: "templates/leaderboard.html",
      controller: 'LeaderboardCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCzUrQrc6MbEvPDC27Di8pDeZZL2N7Dsq4",
  //   authDomain: "saveemoji-save-our-souls-27721.firebaseapp.com",
  //   databaseURL: "https://saveemoji-save-our-souls-27721.firebaseio.com",
  //   projectId: "saveemoji-save-our-souls-27721",
  //   storageBucket: "saveemoji-save-our-souls-27721.appspot.com",
  //   messagingSenderId: "67807606599"
  // };
  // firebase.initializeApp(config);
});
