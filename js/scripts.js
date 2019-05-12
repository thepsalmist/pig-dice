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
    $("playerTurn").text("Sorry! You lost this turn its the Next player's Turn")

  } else {
    this.score += randomNumber;
  }
}
Player.prototype.hold = function() {
  this.totalPoints += this.score;
  this.score = 0;
  alert(this.name + "Its the Next player's turn")
};








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
});