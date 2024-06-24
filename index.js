// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a, b) {
    return a + b;
  }
  
  // 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  // 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
  function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized.
  function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
//   // Testing the functions
//   console.log(calculateSum(5, 3)); // Output: 8
//   console.log(isEven(4)); // Output: true
//   console.log(isEven(5)); // Output: false
//   console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
//   console.log(reverseString("hello")); // Output: "olleh"
//   console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
//   console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
//   console.log(sortArray([3, 1, 4, 2, 5])); // Output: [1, 2, 3, 4, 5]
//   console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
  