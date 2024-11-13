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

forEach(bookArray, (book) => {
  console.log("Titles & Years: ", book.title, book.year);
});

// 2. Filter: Returns a copy of an array with only the elements that pass a provided test
function filter(array, callback) {
  // output array
  // loop
  // condition
  // return
}

const booksAfter1950 = filter(bookArray, (book) => {
  return book.year > 1950;
});

console.log("Books Released after 1950: ", booksAfter1950);

// 3. Map: Returns a new array populated with results of the original array with a function executed on each element
function map(array, callback) {
  // output array
  // loop
  // return
}

const bookTitles = map(bookArray, (book) => {
  return book.title;
});

console.log("Book Titles: ", bookTitles);

// 4. Reduce: Returns a single value after performing a provided "reducer" callback function ie. add all numbers in an array together
function reduce(array, callback, initialValue) {
  // accumulator
  // loop
  // return
}

const sumOfPrimes = reduce(
  primeArray,
  (accumulator, current) => accumulator + current,
  0
);

console.log("Sum of Primes: ", sumOfPrimes);

// 5. Find: Returns the first element in an array that satisfies the provided test function
function find(array, callback) {
  // loop
  // condition
  // return
}

const firstPrimeOver10 = find(primeArray, (number) => {
  return number > 10;
});

console.log("First Prime Over 10: ", firstPrimeOver10);
