// String Indices
// Write a program that parses the words in a string by providing a numerical index, similar to how you would access an element in array with a numerical index.
// Example:
// "Catch me outside, how about that?"
// If you asked for the word at index 3 you would get outside back (for the purposes of this challenge, our index will start at 1, not 0).
// If you ask for the word at index 7, your program should return an empty string ('') because the string contains only 6 words.
//Negative indices should also return an empty string ('').

//Prompt for input and assign to variables.
var wordInput = prompt('Please type as many words as you want:');
var wordCount = wordInput.match(/(\w+)/g).length;
//Prompt for word index to find
var nthWord = prompt("Enter the number of the word your want me to find:  ")

//alert("You entered these words:  \n\n" + wordInput + "\n\nThat's a total of " + wordCount + " words.")


//Find the word to match number input by user.

var stringIndices = function(wordString,nthWord){
//  String to array using split    http://www.w3resource.com/javascript-exercises/javascript-string-exercise-3.php
  var wordString = wordInput;
  var wordInputArray = wordInput.split(" ")
//console.log(wordInputArray);
alert("You entered these words:  \n\n" + wordInput + "\n\nThat's a total of " + wordCount + " words. \n\n" + "wordInputArray contains the following values:  \n\n" + wordInputArray + "\n\n\n You are looking for word #" + nthWord + ", which is: \n\n" + wordInputArray[nthWord -1]);
  return wordInputArray[nthWord -1]
}

stringIndices(wordInput, nthWord);
