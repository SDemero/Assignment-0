class MySolution {
  countDownSum(num) {
     if (num == 1) {
      return 1;
    } else {
      return (num + this.countDownSum(--num));
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
