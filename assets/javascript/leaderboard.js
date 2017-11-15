$(document).ready(function(){

var database; 
var scores = [];

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
    
    //
    $("#addScore").on("click", function(event) {

      event.preventDefault(); // Don't reset the page!

      // Get the username from form, and number of answers correct from game.
      var username        = $("#username").val().trim();
      var numberCorrect = $("#number-correct").val().trim();

      // Push that train info!
      // The dateAdded value gives us a way to retrieve the entries by the time/date they were entered.
      database.ref().push({
        username:        username,
        numberCorrect: numberCorrect,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      }, function(error));
    });

    database.ref().on('value', function(snapshot) {
        console.log("I got here");
        scores = [];
        $("#trains").empty();
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          scores.push(
                    {trainName: childData.trainName,
                     trainDestination: childData.trainDestination,
                     firstTrain: childData.firstTrain,
                     trainFrequency: childData.trainFrequency
                    }
          );
        });
        scores.forEach(outputOneRow);
    });

    

    
});