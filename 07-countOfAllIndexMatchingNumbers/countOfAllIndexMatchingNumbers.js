function countOfAllIndexMatchingNumbers(nums) {
  var counter = 0;
	for (var i = 0; i<nums.length; i++){
		if(i == nums[i]) {counter++;}
	}
	return counter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;