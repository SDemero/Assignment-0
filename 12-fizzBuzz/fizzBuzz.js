function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      output.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      output.push("Buzz");
      continue;
    }
    output.push(i)
  }

  return output;
}

// Do not edit this line;
module.exports = fizzBuzz;
