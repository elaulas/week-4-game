// Random Number
var randomNumber = Math.floor(Math.random() * 51 + 10);
$("#startNumber").text(randomNumber);

// Crystal random numbers

var blueNum = Math.floor(Math.random() * 11 + 1);
var redNum = Math.floor(Math.random() * 11 + 1);
var tealNum = Math.floor(Math.random() * 11 + 1);
var greenNum = Math.floor(Math.random() * 11 + 1);


var userTotal = 0;
var wins = 0;
var losses = 0;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#finalTotal").text(userTotal);

// Reset function
function reset() {
  randomNumber = Math.floor(Math.random() * 51 + 10);
  $("#startNumber").text(randomNumber);
  blueNum = Math.floor(Math.random() * 11 + 1);
  redNum = Math.floor(Math.random() * 11 + 1);
  tealNum = Math.floor(Math.random() * 11 + 1);
  greenNum = Math.floor(Math.random() * 11 + 1);
  userTotal = 0;
  $("#finalTotal").text(userTotal);
}

// win/loss alerts
function winner() {
  alert("You won!");
  wins++;
  $("#wins").text("Wins: " + wins);
  reset();
}

function loser() {
  alert("You lose!");
  losses++;
  $("#losses").text("Losses: " + losses);
  reset();
}

// on click functions
$(".blue").on("click", function() {
  userTotal = userTotal + blueNum;
  $("#finalTotal").text(userTotal);
  if (userTotal === randomNumber) {
    winner();
  } else if (userTotal > randomNumber) {
    loser();
  }
});
$(".red").on("click", function() {
  userTotal = userTotal + redNum;
  $("#finalTotal").text(userTotal);
  if (userTotal === randomNumber) {
    winner();
  } else if (userTotal > randomNumber) {
    loser();
  }
});
$(".teal").on("click", function() {
  userTotal = userTotal + tealNum;
  $("#finalTotal").text(userTotal);
  if (userTotal === randomNumber) {
    winner();
  } else if (userTotal > randomNumber) {
    loser();
  }
});
$(".green").on("click", function() {
  userTotal = userTotal + greenNum;
  $("#finalTotal").text(userTotal);
  if (userTotal === randomNumber) {
    winner();
  } else if (userTotal > randomNumber) {
    loser();
  }
});
