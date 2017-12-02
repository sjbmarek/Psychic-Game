 // Creates an array off all letter choices.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wins = 0;
    var losses = 0;
    var guessNumber = 10;
    var yourGuesses =[]
    var userGuess
    var computerGuess

    // Loop through 10 times which is the max number of guesses.
// for (i=1;i=10;i++){
    // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
        // console.log('event:  ', event);
        // userText.textContent=event.key;

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. 
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


      // This is the user guess
      alert("You guessed: " + userGuess);


      // // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);


      if (userGuess===computerGuess){
        wins++;
        i=10;
      }
      else {guessNumber=guessNumber-1;
          yourGuesses.push(userGuess);
          if(guessNumber=0){losses++}
      }
    

     console.log("wins  " + wins);
     console.log("losses  " + losses);
     console.log("guessNumber  " + guessNumber);
     console.log("yourGuesses  " + yourGuesses);


    var html=
      "<p>You choose: " + userGuess + "</p>" +
      "<p>Computer choose: " + computerGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Loses: " + losses + "</p>" +
      "<p>Number of Guesses Remaining: " + guessNumber + "</p>";

      document.querySelector("#game").innerHTML = html;

  // }
}

    
