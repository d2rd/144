// The Disemvowling
//  Disemvoweling means removing the vowels (a, e, i, o, u) from text.
//
//  **Input:**
//  A string that contains several words to disemvowel. It will consist of all lowercase letters without punctuation. The only non a-z character you should handle is spaces.
//
//  **Output:**
//  The disemvowled text with spaces removed.
//
//  **Example Input:**
//
//  `i am groot`
//
//  **Example Output:**
//
//  `mgrt`

//Prompt for words
var wordInput = prompt("Enter three or more words");

var noVowels;

disemvowel(wordInput)

 function disemvowel(wordInput){


  noVowels = wordInput.replace(/[ |a|e|i|o|u]/gi,"");  //replace all instances of "a|e|i|o|u" with null
    return noVowels;
 }

alert("Your words: " + wordInput + " look like this without vowels: \n" + noVowels);
