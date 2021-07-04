function sumOfMultiplesOfThreeOrFive(top) {
  return sumDivisibleBy(3, top - 1) + sumDivisibleBy(5, top - 1);
}

function sumDivisibleBy(n, target) {
  p = Math.floor(target / n);
  return n * (p * (p + 1)) / 2;
}

console.log("Answer:", sumOfMultiplesOfThreeOrFive(1000));
console.log(sumOfMultiplesOfThreeOrFive(1000000000));

module.exports = sumOfMultiplesOfThreeOrFive;
