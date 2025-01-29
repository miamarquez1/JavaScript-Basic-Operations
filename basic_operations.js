function sumTwoNumbers(num1, num2) {
  return num1 + num2;
}
const example1 = sumTwoNumbers(1, 2);
console.log("Sum of 1+2=", example1);
// defines function named sumTwoNumbers
// calculates sum of num1 and num 2 and displays it to the console

function printEvenElements(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("Even elements:", array[i]);
    }
  }
}
const elements = [0, 3, 25, 20, 4, 9, 11];
printEvenElements(elements);
// creates function that takes array as input
// for loop iterates through each element
// if statement checks if array is even by diving element by 2

function findCommonElements(a1, a2) {
  const sharedElements = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i])) {
      sharedElements.push(a1[i]);
    }
  }
  return sharedElements;
}

const sample1 = [3, 0, 5, 7, 8, 6];
const sample2 = [4, 0, 8, 7, 1, 2];
const commonElements = findCommonElements(sample1, sample2);
console.log("Common elements:", commonElements);
// findCommonElements takes array a1 and a2 as input
// = [] creates empty array for storage
// .includes checks for shared elements
// .push adds element to array

const arrayNumbers = [6, 2, 28, 9, 19, 8, 12];
const sum = arrayNumbers
  .filter((num) => num >= 10)
  .map((num) => num * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum of transformed array:", sum);
// .filter() creates array w/ numbers from arrayNumbers that are >= 10
// uses .map () method to create array where the previous array elements are doubled
// uses .reduce to calc sum acc- means accumulator and curr- current number

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

const num = 5;
const factorialResult = calculateFactorial(num);
console.log("Factorial of", num, "is:", factorialResult);
//   if statements checks if n is 0 or 1
//  for loop iterates from 2 to n
// *=i multiplies variable by the current i
