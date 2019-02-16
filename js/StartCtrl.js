controllers

.controller('StartCtrl', function($scope, $timeout, $compile, Game, $state,$cordovaSocialSharing) {
	$scope.game = Game;

 	// $scope.shareAnywhere = function() {
 	// 		if($scope.game.hasPlayed) {

  //       $cordovaSocialSharing.share("I just scored " + $scope.game.score + " on SaveEmoji", null, null, device.platform == "Android" ? "https://play.google.com/store/apps/details?id=com.ionicframework.emojimon715922" : "https://itunes.apple.com/us/app/emojimon/id1010959753?ls=1&mt=8"); //TODO: switch for ios url
 	// 		} else {
 	// 			 $cordovaSocialSharing.share("Download Emojimon. It's awesome. Honest.", null, null, device.platform == "Android" ? "https://play.google.com/store/apps/details?id=com.ionicframework.emojimon715922" : "https://itunes.apple.com/us/app/emojimon/id1010959753?ls=1&mt=8"); //TODO: switch for ios url
 	// 		}
  //   }
  $scope.shareAnywhere = function() {

      var message = "I just scored " + $scope.game.score + " on SaveEmoji"; 
      var subject = "";
      var image = "";
      var link = "https://play.google.com/store/apps/details?id=com.enziq.saveemoji";

      $cordovaSocialSharing.share(message, subject, image, link);
  }

    $scope.usernameChange = function() {
    	$scope.game.saveLocalStorage();
    }
// console.log($state.current.name);
});
