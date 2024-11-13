"use strict";

// Use this array to test and practice with your code

const bookArray = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "1984", author: "George Orwell", year: 1949 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
  },
];

const primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// 1. For Each: Exectutes a provided function once for each array element
function forEach(array, callback) {
  // loop
}

// 2. Filter: Returns a copy of an array with only the elements that pass a provided test
function filter(array, callback) {
  // output array
  // loop
  // condition
  // return
}

// 3. Map: Returns a new array populated with results of the original array with a function executed on each element
function map(array, callback) {
  // output array
  // loop
  // return
}

// 4. Reduce: Returns a single value after performing a provided "reducer" callback function ie. add all numbers in an array together
function reduce(array, callback, initialValue) {
  // accumulator
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  // loop
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  // return
  return accumulator;
}

const sumOfPrimes = reduce(
  primeArray,
  (accumulator, current) => accumulator + current,
  0
);

console.log(sumOfPrimes);

// 5. Find: Returns the first element in an array that satisfies the provided test function
function find(array, callback) {
  // loop
  // condition
  // return
}
