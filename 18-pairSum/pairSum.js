function pairSum(nums, target) {
  var sumIsTarget = false;
  if(nums.length ==1 || nums.length<1){throw "Not enough numbers to test with.";}
	for(var i =0;i<nums.length;i++){
		var firstNum = nums[i];
		for(var j=i+1;j<nums.length;j++){
			var secondNum = nums[j];
			if(firstNum+secondNum == target){
				sumIsTarget = true;
				return sumIsTarget;
			}
		}
	}
  return sumIsTarget;
}

// Do not edit this line;
module.exports = pairSum;