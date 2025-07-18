function isPalindrome(word) {
  // Write your algorithm here
  
  const reversed = word.split('').reverse().join('');
return word === reversed;

}

/* 
  Add your pseudocode here
  
  - First, I’ll take the word and break it into individual letters
  - Then, I’ll reverse the order of the letters
  - After that, I’ll join the letters back into one word
  - I’ll check if this new reversed word is the same as the original one
  - If it is the same, then it’s a palindrome, so I return true
  - If not, I return false


*/

/*
  Add written explanation of your solution here
  
  So I’m trying to check if a word is the same when you read it backwards.
  What I did was break the word into letters, reverse them, and then make
  a new word from that. If the reversed word is exactly like the original,
  then I know it’s a palindrome and return true. If not, I return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
