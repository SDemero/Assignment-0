function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
	for (var value of args) {
		product *= value;
	}
	return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
