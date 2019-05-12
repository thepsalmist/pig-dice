var player1;
var player2;
$(document).ready(function() {
  $("#rulesButton").click(function() {
    $("#rules-of-game").show();
  });
  $("#submitForm").submit(function(event) {
    event.preventDefault();

  })
});