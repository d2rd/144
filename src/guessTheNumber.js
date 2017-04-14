export default function guessTheNumber() {
  // Guess The Number

  // Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.

  // When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".

  // Keep asking the user to input a number if the number differs from the computer's number (loops!).


  function getRandomIntInclusive(min,max){
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
  var rightNumber  =  getRandomIntInclusive(1,100);
  console.log (getRandomIntInclusive);
  userGuess = prompt("Guess a number between 1 and 100.");
  console.log(userGuess);
  console.log(rightNumber);
  compareGuess(userGuess,rightNumber);
  console.log (compareGuess);
  function compareGuess(userGuess, rightNumber) {
    // Only change code below this line

    if (userGuess < rightNumber) {
      alert("Uh-oh. Your guess was too low!");
  } else if (userGuess  > rightNumber) {
    alert ("Oops.  Your guess was too high!");

  } else if (userGuess = rightNumber) {
    alert ("YOU WIN!");

  } else {
    alert ("You guessed " + userGuess + ".  \n" + "The correct number is " + rightNumber + ".");
  }
  while (userGuess !== "EXIT")
    return (alert ("END OF TEST"));
    // Only change code above this line
  }
  console.log (userGuess);
  console.log (rightNumber);

}

// loop
