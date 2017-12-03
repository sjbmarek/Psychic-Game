 // Creates an array of all letter choices.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wins = 0;
    var losses = 0;
    var guessNumber = 10;
    var yourGuesses =[]
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    console.log (computerGuess);

    // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log (userGuess);

      // This is the user guess
      alert("You guessed: " + userGuess);


      //Winner, computer picks a new letter, wins increment
      if (userGuess===computerGuess){
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log (computerGuess);
      }

      //Keep guessing and array the guesses
      
      else if ((userGuess!==computerGuess)&&(guessNumber!==1)){
          guessNumber--;
          console.log(guessNumber);
          //Adds guess to the array
          yourGuesses.push(userGuess);
          console.log("yourGuesses  " + yourGuesses);
      }
      // Loser - When limit is reached, pick a new letter, increment losses, reset icrementer, reset array
      else if ((userGuess!==computerGuess)&&(guessNumber=1)){
          losses++;
          console.log(guessNumber);
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
          console.log (computerGuess);
          guessNumber=10;
          yourGuesses =[];

        
      }
    
       console.log("----------------");
       console.log("wins  " + wins);
       console.log("losses  " + losses);
       console.log("guessNumber  " + guessNumber);
       console.log("yourGuesses  " + yourGuesses);
     


    var html=
      // "<p>You choose: " + userGuess + "</p>" +
      // "<p>Computer choose: " + computerGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Loses: " + losses + "</p>" +
      "<p>Number of Guesses Remaining: " + guessNumber + "</p>" +

      "<p>Letters you have already guessed: " + yourGuesses + "</p>";

      document.querySelector("#game").innerHTML = html;
    }


    
