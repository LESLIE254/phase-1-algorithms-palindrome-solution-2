function isPalindrome(word) {
  // iterate from the beginning to the middle
  for(let i = 0; i < word.length / 2; i ++){
    //check each letter to the corresponding letter from the end
    const j = word.length-1 -i;
    const startChar = word[i];
    const endChar = word[j];
    //if any letters don't match return false
    if (startChar !== endChar) return false;
  }
  return true;

}

/* 
  Add your pseudocode here
  make a function that returns true if a word is palindrome.
  this means the 1st letter is same as the last letter,the 2nd letter
  is same as 2nd last letter e.tc. until we reach the middle
  if this is case return true
  iterate from the beginning to the middle 
  check each letter to the corresponding letter from the end
  if any letters do not match return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
