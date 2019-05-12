var player1;
var player2;

function Player(name, totalPoints, diceRoll, score) {
  this.name = name;
  this.totalPoints = 0;
  this.diceRoll = 0;
  this.score = 0;
}

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


  })
});