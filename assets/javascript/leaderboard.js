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
    
  function outputOneRow(row) {
    var scoreRow;
    var initialsLB;
    var scoreLB;
    var playerNum;
    var leaderboardList = [];

    console.log("You have accessed the score row.")

    // Build a new train schedule table row
    playerNum = "playerNum"+playerCount; 
  
    initialsLB = "<td>"+row.trainName+"</td>";
    scoreLB = "<td>"+row.trainDestination+"</td>";        
   
    var scoreRow = $("<tr>"+initialsLB+scoreLB+"</tr>");
    scoreRow.attr("id",playerNum);
    console.log(scoreRow);
    
    // And write it out!
    $("#leaderboard").append(scoreRow);
  }

  database.ref().on('value', function(snapshot) {
      console.log("I got here");
      leaderboardList = [];
      $("#leaderboard").empty();
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        leaderboardList.push(
          {initials: childData.initials,
           numberCorrect: childData.numberCorrect,
          }
        );
      });

      leaderboardList.forEach(outputOneRow);
  });
});