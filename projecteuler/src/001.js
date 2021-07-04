function sumOfMultiplesOfThreeOrFive(top) {
  let sum = 0;

  for (let i = 1; i < top; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
}

console.log("Answer:", sumOfMultiplesOfThreeOrFive(1000));

module.exports = sumOfMultiplesOfThreeOrFive;
