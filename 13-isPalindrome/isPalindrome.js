function isPalindrome(word) {
  let palindome =true;
  for(var i =0;i<word.length/2;i++){
		if(word[i] !== word[word.length-1-i]){
			palindrome= false;
			return palindrome;
		}
  }
  return palindome;
}

// Do not edit this line;
module.exports = isPalindrome;