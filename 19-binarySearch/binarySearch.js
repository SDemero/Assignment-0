class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
     let x = Math.floor(nums.length / 2);
	  if(nums.length === 1 && nums[0] != target){
		  return false;
	  }
	  if(nums[x] === target){
		 return true;
	  }else if (nums[x] > target){
		 return this.binarySearch(nums.slice(0, x), target);
	  }else if (nums[x] < target){
		 return this.binarySearch(nums.slice(x), target);
  }}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
