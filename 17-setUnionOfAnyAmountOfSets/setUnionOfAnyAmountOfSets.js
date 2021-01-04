function setUnionOfAnyAmountOfSets(...args) {
  let result = new Set();
	for (var set of args) {
		for (var value of set) {
			result.add(value);
		}}
	return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
