Trivia Bouncy House Game
Multi-user Trivia Game

This project will extend the Trivia Game homework assignment to a competitive multiplayer game that offers a choice of categories and difficulty levels. Player names and scores will be held in persistent storage and displayed as a leader board which will display user names and high scores.

Scoring is currently based on the number of right answers selected per round.  Later development will extend the score calculation to include factors like the difficulty of questions and time taken to answer questions.
    
When the number of questions reaches the game limit (currently set to 10), the user will be prompted to enter in his/her initials at that point the users current game score will be posted to the leaderboards and displayed alongside the entered initial.

Users will play against the machine. However, the leader board will provide the competitive element, as users try to rack up the highest score.
    
APIs Used

--opentdb.com. OpenTDB -- open trivia database. Over 3,000 verified trivia questions and answers in ~20 categories.

--pixabay.com/api. A RESTful API interface for searching and retrieving free images and videos released on Pixabay under Creative Commons CC0

Database Storage
Persistent Storage -- Firebase

Game UI
Materialize responsive CSS design will be intergrated into the HTML for a smooth responsive design. 

Downloading Instructions:
The game can be clone directly to your pc from the Trivia Bouncy House Game Git Hub Repository.

Git Hub Repository
https://github.com/TriviaBouncyHouseMaster/trivia-bouncy-house-game

Built With
HTML
Materialize CSS
opentdb.com. OpenTDB API
pixabay.com/api
Firebase

Authors
Emmanuel Mosqueda
Steve Hulme
Jamal Patterson 
John Carroll

-----------------------
Future Development

1) Refactor the html pages so that they are responsive to screen size. This will be a relatively simple upgrade since we have used the Materialize framework for this project. 

2) Increase the complexity of the scoring algorithm to include consideration of the difficulty of the question asked as well as the time taken to answer it.

3) Replace the javascript "Prompt" to enter user initials with a Materialize element like a Modal.

4) Create a mode in which users can compete against each other in real time. The game will ask the users the same question simultaneously; the first user to select the correct answer gets credit for it. The slower users do not get credit, but are not docked points.

5) Allow the selection of categories of trivia other than Historical. The Open Trivia Database has more than 20 categories of questions.

