$(document).ready(function(){

var database; 
var scores = [];
var playerCount = 0;

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXghKHSKVyem-iUc6YXpbS9pDb2osTCmI",
    authDomain: "trivia-game-leaderboard.firebaseapp.com",
    databaseURL: "https://trivia-game-leaderboard.firebaseio.com",
    projectId: "trivia-game-leaderboard",
    storageBucket: "",
    messagingSenderId: "649135365795"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  database.ref().orderByChild("numberCorrect").on('child_added', function(childSnapshot) {
      var childData;
      leaderboardList = [];
      childData = childSnapshot.val();
      leaderboardList.push({
        initials: childData.initials,
        numberCorrect: childData.numberCorrect,
      });

      var initialsLB = "<td>"+childData.initials+"</td>";
      var scoreLB = "<td>"+childData.numberCorrect+"</td>";        
      var scoreRow = $("<tr>"+initialsLB+scoreLB+"</tr>");
      $("#leaderboard").prepend(scoreRow);
  });
});