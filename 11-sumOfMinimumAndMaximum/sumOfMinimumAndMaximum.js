function sumOfMinimumAndMaximum(nums) {
  var max = Math.max.apply(null,nums)
  
	var min = Math.min.apply(null,nums);
  
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
