// var for comp guesses, to keep score, to keep track of guesses left, and user guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var score = 0;
var guessesLeft = 10;
var uGuesses = [];

//onkeyup event defintion
document.onkeyup = function(event) {

  // pick up user keypress and push into array and grab computer guess
  var keypressed = event.key;
  uGuesses.push(keypressed);
  var compGuess = computerChoices [Math.floor(Math.random()*computerChoices.length)];

  // console logs
  console.log(keypressed);
  console.log(compGuess);

  // compare keypressed to computer guess to fit with game parameters
  if (keypressed === compGuess[0] && guessesLeft > 0) {
    score++;
    alert("CONGRATULATIONS YOU ARE PSYCHIC");
    guessesLeft=10;
    uGuesses.length = 0;
  } else if (keypressed !== compGuess[0] && guessesLeft > 0) {
    guessesLeft--;
  } else {
    alert("Sorry you're not psychic yet. Try again to increase your psychic ability!")
    guessesLeft = 10;
    uGuesses.length = 0;
  }
   
    var html =
      "<p>Score: " + score + "</p>" + 
      "<p>Guesses left: " + guessesLeft + "</p>" + 
      "<p>Guesses so far: " + uGuesses + "</p>"; 
  
      document.querySelector("#tracker").innerHTML = html;
}



