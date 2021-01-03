function fizzBuzz(start, end) {
  let arr = new Array((end-start)+1);
	for (var i =start; i<end; i++){
		var multiple3 = (i%3 == 0);
		var multiple5 = (i%5 == 0);
		if(multiple3 && multiple5) {arr[i] = "FizzBuzz";}
		else if(multiple3 && !multiple5) {arr[i] = "Fizz";}
		else if(!multiple3 && multiple5) {arr[i] = "Buzz";}
		else if(!multiple3 && !multiple5) {arr[i] = i;}
  }
  return arr;
// Do not edit this line;
module.exports = fizzBuzz; 