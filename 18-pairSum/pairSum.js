function pairSum(nums, target) {
  if (nums.length <= 1) {
    throw 'Size of array is less than two';
 }
  for (let x = 0; x < nums.length - 1; x++) {
  	for (let y = x + 1; y< nums.length; y++) {
  	  if (nums[y] + nums[x] == target) {
  	    return true;
  	  } } }
  return false; }

// Do not edit this line;
module.exports = pairSum;
