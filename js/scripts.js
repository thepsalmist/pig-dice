//Business Logic
var player1;
var player2;

function Player(name, totalPoints, diceRoll, score) {
  this.name = name;
  this.totalPoints = 0;
  this.diceRoll = 0;
  this.score = 0;
}

Player.prototype.roll = function() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  this.diceRoll = randomNumber;
  if (randomNumber === 1) {
    this.score = 0;
    $("#playerTurn").text("Hey " + this.name + " Sorry! You rolled 1 and lost this turn it's the next player's turn")

  } else {
    this.score += randomNumber;
  }
};
Player.prototype.hold = function() {
  this.totalPoints += this.score;
  this.score = 0;
  if (this.totalPoints > 99) {
    $("#playerTurn").text(this.name + " Congratulations you win")
  } else {
    $("#playerTurn").text("Thanks " + this.name + " It's the next player's turn")
  }
}


// User Interface

$(document).ready(function() {
  $("#rulesButton").click(function() {
    $("#rules-of-game").show();
  });
  $("#submitForm").click(function(event) {
    event.preventDefault();
    var firstPlayer = $("#namePlayer1").val();
    var secondPlayer = $("#namePlayer2").val();
    player1 = new Player(firstPlayer);
    player2 = new Player(secondPlayer);
    console.log("works")

    $("#player1Name").text(player1.name);
    $("#player2Name").text(player2.name);
    console.log("no-work")
  });
  $("#rollP1").click(function(event) {
    event.preventDefault();
    console.log("no-work here")
    player1.roll();
    $("#diceRollP1").text(player1.diceRoll);
    $("#scoreP1").text(player1.score);
  });
  $("#rollP2").click(function(event) {
    event.preventDefault();
    player2.roll();
    $("#diceRollP2").text(player2.diceRoll);
    $("#scoreP2").text(player2.score);
  });
  $("#holdP1").click(function() {
    event.preventDefault();
    player1.hold();
    $("#totalPointsP1").text(player1.totalPoints);
    player1.diceRoll = 0;
    player1.score = 0;
    $("#diceRollP1").text(player1.diceRoll);
    $("#scoreP1").text(player1.score);
  });
  $("#holdP2").click(function() {
    event.preventDefault();
    player2.hold();
    $("#totalPointsP2").text(player2.totalPoints);
    player2.diceRoll = 0;
    player2.score = 0;
    $("#diceRollP2").text(player2.diceRoll);
    $("#scoreP2").text(player2.score);
  });
  $("#newGame").click(function() {
    location.reload();
  });
});