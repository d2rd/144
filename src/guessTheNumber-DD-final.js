// Guess The Number
// Write a program that will generate a number between 1 and 100. Your program will ask the user
//  to guess the generated number.
// When the user types a guess, the program should tell them if they won (the guess matched the
//  computer's number), if their guess was higher than the number the computer generated,
//  OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".
// Keep asking the user to input a number if the number differs from the computer's number (loops!).


export default function guessTheNumber() {
  // *********   Only change code below this line  ************

//BEGIN my code  *************
var guessTheNumber = function() {

//Helper functions

    //Random number generator code from StackOverflow.  Cannot locate original post.
        function getRandomIntInclusive(min,max){
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    //End borrowed code

var rightNumber  =  getRandomIntInclusive(1,100);

userGuess = prompt("Guess a number between 1 and 100.");

  while(userGuess){

    if(userGuess == "exit") {
      return alert("Thanks for playing!")  //use return I need data back or I need a loop to break.  Use return when to stop.  put at top of recurrsive loops.

    } else if(userGuess == rightNumber) {
      return alert("YOU WIN!");

    } else if(userGuess < rightNumber) {
      userGuess = prompt("Uh-oh. Your guess was too low!");

    } else if(userGuess  > rightNumber) {
      userGuess = prompt("Oops.  Your guess was too high!");
    }
  }
}


//GOOD CODE ABOVE THIS LINE ---- Test code below.
