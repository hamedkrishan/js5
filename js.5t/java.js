// Task 1
function findSmallest() {
  let numbers = [30, 45, 60, 7];
  document.write(Math.min(...numbers));
}
document.write("<br>");

// Task 2
function sortAlphabetically(inputString) {
  return inputString.split("").sort().join("");
}
document.write(sortAlphabetically("hello"));
document.write("<br>");

// Task 3
function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
document.write(checkEvenOrOdd(4));
document.write("<br>");
document.write(checkEvenOrOdd(7));
document.write("<br>");

// Task 4
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}
document.write(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
document.write("<br>");

// Task 5
function calculateAbsoluteSum(numbersArray) {
  return numbersArray.reduce((totalSum, num) => totalSum + Math.abs(num), 0);
}
document.write(calculateAbsoluteSum([-1, -3, -5, -4, -10, 0]));
document.write("<br>");

//  Task 6
function calculateFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
document.write(calculateFactorial(8));
document.write("<br>");

// Task 7
function filterNonStringValues(inputArray) {
  return inputArray.filter((item) => typeof item !== "string");
}
document.write(filterNonStringValues(["Ayham", 3, 7, "Alaa", 13, "coding"]));
document.write("<br>");

//  Task 8
function sumFromZeroToN(limit) {
  let total = 0;
  for (let i = 0; i <= limit; i++) {
    total += i;
  }
  return total;
}
document.write(sumFromZeroToN(8));
document.write("<br>");

//  Task 9
function summarizeArray(inputArray) {
  let lowest = Math.min(...inputArray);
  let highest = Math.max(...inputArray);
  let length = inputArray.length;
  let totalSum = inputArray.reduce((sum, current) => sum + current, 0);
  let average = totalSum / inputArray.length;
  return [lowest, highest, length, average];
}
document.write(summarizeArray([7, 13, 3, 77, 100]));
document.write("<br>");

//  Task 10
function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}
document.write(convertToRoman(1989));
document.write("<br>");


