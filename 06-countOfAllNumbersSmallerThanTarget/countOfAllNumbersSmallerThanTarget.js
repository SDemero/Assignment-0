function countOfAllNumbersSmallerThanTarget(nums, target) {
 var i;
  var counter = 0 ;
	
	for(i = 0; i < nums.length; i++){
		if(nums[i] < target){
			counter++;
		}}
	return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
