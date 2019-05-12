# PIG-DICE-GAME
#### Pig-dice game is a two player game where the players take turns in rolling the dice until either rolls a 1, where the score is 0 or until the player decides to "hold" upon which their scores are added to the final tally. The player who hits 100 the first wins the game. May-11-2019.
#### By Xavier Frankline.
## Description
Pig-dice game is a two player game where the players take turns in rolling the dice until either rolls a 1, where the score is 0 or until the player decides to "hold" upon which their scores are added to the final tally. The player who hits 100 the first wins the game.
The rules of the game are as follows;
1. If the player rolls a 1, they score nothing and it becomes the next player's turn.
2. If the player rolls any other number, it is added to their turn total and the player's turn continues.
3. If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn

The first player to score 100 or more points wins.

## BDD
| Behavior Our program should handle                                  | Input Example When it Receives      | Output Example When it Receives |
|---------------------------------------------------------------------|-------------------------------------|---------------------------------|
| Allow the two players to enter their names when register is clicked | Player1: Dinos Player2: Gianis      | Players: Dinos   Gianis         |
| Player 1 clicks the roll button, the diceroll and score are shown   | 'Roll' button clicked, Dice Roll:3  | Score:3 Dice Roll:3             |
| Player 1 clicks hold button, the total points are shown             | 'Hold' button clicked,Dice Roll: 4  | Total Points: 7                 |
| Player 2 clicks the roll button, the diceroll and score are shown   | 'Roll' button clicked, Dice Roll:5  | Score:5 Dice Roll:5             |
| Player 1 clicks hold button, the total points are shown             | 'Hold' button clicked, diceroll 2   | Total point;7                   |
| If any player diceroll is 1, their score is reduced to 0            | 'Roll' button clicked, Dice Roll:1  | previous score: 15 score:0      |
## Setup/Installation Requirements
To start using this project use the following commands:
1. git clone https://github.com/thepsalmist/pig-dice
2. cd PIG-DICE to navigate to project directory
3. atom .(to open in atom editor)
4. code .(to open in atom)
To play the game as a user click on the link

## Technologies Used
1. HTML
2. CSS
3. JavaScript
4. jQuery 
5. Bootstrap
## Support and contact details
Contact: xf.xavierfrank4@gmail.com
### License
MIT License
Copyright (c) 2019 thepsalmist
