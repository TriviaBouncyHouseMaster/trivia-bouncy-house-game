# #Project_1_MVP_for_Advanced_Trivia_Game
# Project 1 Advanced Trivia Game
## Overview
Jamal, Steve, John, Emmanuel

This project will extend the Trivia Game homework assignment to a competitive game that offers a choice of categories and difficulty levels. It will have a leader board.

Scoring will be based on number right, difficulty of questions and time taken to answer questions.

We will offer sounds to make the experience more like an arcade game.

When user completes a quiz, he will be prompted to enter in his initials. The score will be posted to the leaderboards and displayed alongside the entered initial.

Possibly user can select and store an avatar which will be associated and displayed.

Bells and whistles will be key to making the user experience like that of an arcade game.

User will play against the machine. However, the leader board will provide the competitive element, as users try to rack up the highest score.

### APIs Used

* opentdb.com. OpenTDB -- open trivia database. Over 3,000 verified trivia questions and answers in ~20 categories.
* googleapi.com/customsearch to retrieve images appropriate to the trivia category.
* Persistent Storage -- [Firebase](https://firebase.google.com/)

## Minimum Viable Product
The Minimum Viable Product (MVP) will implement the following user stories for the roles “Player” and “Administrator”:

### Player Stories
* As a player, I will play against myself.
* As a player, there can be other players using the game simultaneously but my category, my score and my totals will be presented, stored and updated individually and separate from other players.
* As an player I want to pick a category of trivia  from a dropdown list of pre-defined categories.
* As a player, I will play a game that consists of ***questionNum*** questions.
* As a player, I want the game to display the running total of my points, plus the number of questions I answered correctly and incorrectly.
* As a player, when I have had the opportunity to answer ***questionNum*** questions, the game will end.
* As a player, when the game ends my total score, number of correct answers and number of incorrect answers will be displayed until I click “Restart Game”.
* As a player, when the game ends I want the leader board to prompt me for my initials if my score is in the top ***numLeaders***.
* As a player, on ***Restart Game*** I want the game to zero-out the running total of my points, plus zero-out the running total of questions answered correctly and incorrectly.
* As a player, I want the point  value for any question to be increased if the question is difficult.
* As a player, I want the game to display an image that relates to the trivia category I chose.
* As a player, I want to have ***questionDelay*** seconds to pick the answer.
* As a player, I want to select 1 of four possible answers to  each question.
* As a player, I want to be able to view the leaderboard by clicking a button or icon.
* As a player, I want to have my high score displayed on the leaderboard if my score is higher than the previous high score.
* As a player, I want the game to display the number of questions I answered correctly.
* As a player, I want the game to display the number of questions I answered incorrectly.
* As a player, I want the game to display a countdown timer of the time allowed to answer the current question.
* As a player, I want the game to mark a my answer wrong if the timer expires before I click an answer.
* As a player, I want the game to show me the correct answer after I have selected an answer.
* As a player, I want to restart the game at any time while keeping my previous scores.
* As a player, I want my points

### Administrator Stories
* As  the administrator, I want to input and store the ***questionDelay*** value.
* As  the administrator, I want to input 30 seconds for the ***questionDelay***.
* As the administrator, I want to input and store the number of questions that user will answer (***questionNum***).
* As the administrator, I want to input and store the number of high game scores to be posted (***LeaderBoard***)
