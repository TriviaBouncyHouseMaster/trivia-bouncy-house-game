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
      console.log("HEY, YOU CLICK ON ME")
      event.preventDefault(); // Don't reset the page!

      // Get the initials from form, and number of answers correct from game.
      var initials = $("#initials").val().trim();
      var numberCorrect = $("#number-correct").val().trim();
      
      // Hardcode test database
      // var initials = "JMC";
      // var numberCorrect = 20000;

      database.ref().push({
        initials: initials,
        numberCorrect: numberCorrect,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      })
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