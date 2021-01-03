function countOfAllBooleans(arr) {
  var counter =0;
	for(var i=0; i<arr.length; i++){
		if (typeof arr[i] === "boolean"){counter++;}
	}
	return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;