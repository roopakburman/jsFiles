factories
.factory('Leaderboard', function($firebaseArray) {

  // var scoresRef = new Firebase("https://emojimon.firebaseio.com/scores");
  // var omgwtfRef = new Firebase("https://emojimon.firebaseio.com/omgwtf");

  var scoresRef = new Firebase("https://mobilegames-da3e1.firebaseio.com/saveEmoji/scores");
  var omgwtfRef = new Firebase("https://mobilegames-da3e1.firebaseio.com/saveEmoji/insane");


  return {
    normal: $firebaseArray(scoresRef.orderByPriority()),
    omgwtf: $firebaseArray(omgwtfRef.orderByPriority())
  }
});
