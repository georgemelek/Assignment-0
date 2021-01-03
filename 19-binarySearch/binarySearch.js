class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
	  let midpoint = Math.floor(nums.length/2);
	  if(nums[midpoint] == target) {return true;}
	  else if(nums[midpoint] > target){
		  var firstHalf = nums.splice(0,midpoint);
		  return binarySearch(firstHalf, target);
    }
    else{
		  var secondHalf = nums.splice(midpoint+1, nums.length);
		  return binarySearch(secondHalf, target);
	  }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;