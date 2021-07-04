const sumOfMultiplesOfThreeOrFive = require("../src/001.js");

test("", () => {
  expect(sumOfMultiplesOfThreeOrFive(10)).toBe(23);
  expect(sumOfMultiplesOfThreeOrFive(8)).toBe(14);
});
