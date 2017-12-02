 // Creates an array off all letter choices.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wins = 0;
    var losses = 0;
    var guessNumber = 10;
    var yourGuesses =[]
    // var userGuess
    // var computerGuess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Loop through 10 times which is the max number of guesses.
for (i=1;i<10;i++){
    // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
      var userGuess = event.key;

      // This is the user guess
      alert("You guessed: " + userGuess);

      //Alerts the Computer's guess.  REmove later.
      alert("Computer guess: " + computerGuess);
      //Winner
      if (userGuess===computerGuess){
        wins++;
        i=10;
      //Loser
      }
      else {guessNumber=guessNumber-1;
          //Adds guess to the array
          console.log(guessNumber);
          yourGuesses.push(userGuess);
          if(guessNumber=0){losses++
          }
      }

    

     console.log("wins  " + wins);
     console.log("losses  " + losses);
     console.log("guessNumber  " + guessNumber);
     console.log("yourGuesses  " + yourGuesses);
     console.log (i);


    var html=
      "<p>You choose: " + userGuess + "</p>" +
      "<p>Computer choose: " + computerGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Loses: " + losses + "</p>" +
      "<p>Number of Guesses Remaining: " + guessNumber + "</p>"
      "<p>Letters you have already guessed: " + yourGuesses + "</p>";

      document.querySelector("#game").innerHTML = html;

  }
}

    
