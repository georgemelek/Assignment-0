function sumOfNumsWithinARange(nums, start, end) {
  var counter =0;
	for(var i =0; i<nums.length; i++){
		if(start<=nums[i] && nums[i]<=end){counter++;}
	}
	return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;