controllers

.controller('LeaderboardCtrl', function($scope, Game, Leaderboard) {
		

  $scope.$on('$ionicView.enter', function() {

    // if(window.AdMob){
    //   if(window.AdMob.isInterstitialReady()){
    //   // alert("Interstitial Ready Sire!");
      
    //   }else{
    //     window.AdMob.prepareInterstitial();
    //     // alert("Interstitial locked and ready to go!");
    //   }; 
    // }     

  });

		$scope.game = Game;
		$scope.leaderboard = Game.leaderboard;


  // $scope.$on("$ionicView.afterLeave", function () {

  //   if(window.AdMob) {
  //     AdMob.showInterstitial();
  //     // alert("Interstitial Shown!");
  //   }else{
  //     // alert("Nothing to show!");
  //   }
  //   // AdMob.prepareInterstitial();
  // });
  		
});
