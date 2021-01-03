function countOfAllBooleans(arr) {
  var x ;
	var counter = 0;
	for(x = 0; x < arr.length; x++){
    
		if (typeof arr[x] === "boolean"){
			counter++;
    }
  }return counter;
      
}

// Do not edit this line;
module.exports = countOfAllBooleans;
