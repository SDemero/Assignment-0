function countOfAllBooleansAndStrings(arr) {
 var x;
 var counter = 0;
	for(x = 0; x < arr.length; x++){
    
		if(typeof arr[x] === "boolean" || typeof arr[x] === "string"){
			counter++;
		}
	}
	return counter;
}


// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
