 // Creates an array of all letter choices.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wins = 0;
    var losses = 0;
    var guessNumber = 10;
    var yourGuesses =[]
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var imageList = ["assets/images/winner.jpg","assets/images/dontgiveup.jpg","assets/images/loser.jpg"];
    console.log (computerGuess);

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log (userGuess);

      // This is the user guess
      alert("You guessed: " + userGuess);
      // Reset image to blank space here.

      //Winner, computer picks a new letter, wins increment, reset array
      if (userGuess===computerGuess){
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log (computerGuess);

        // Get this image thing to work and then duplicate for each outcome.
        var picture = 
        "<img src =" + imageList[0] + ">";
        document.querySelector("#image").innerHTML = (picture);
        yourGuesses =[];
      }

      //Keep guessing and array the guesses
      
      else if ((userGuess!==computerGuess)&&(guessNumber!==1)){
          guessNumber--;
          console.log(guessNumber);
          //Adds guess to the array
          yourGuesses.push(userGuess);
          console.log("yourGuesses  " + yourGuesses);

          var picture = 
          "<img src =" + imageList[1] + ">";
         document.querySelector("#image").innerHTML = (picture);
      }
      // Loser - When limit is reached, pick a new letter, increment losses, reset icrementer, reset array
      else if ((userGuess!==computerGuess)&&(guessNumber=1)){
          losses++;
          console.log(guessNumber);
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
          console.log (computerGuess);
          guessNumber=10;
          yourGuesses =[];

          var picture = 
          "<img src =" + imageList[2] + ">";
          document.querySelector("#image").innerHTML = (picture);

        
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


    
