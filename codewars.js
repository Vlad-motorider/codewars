// 1
// CONDITION
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// SOLUTION
function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

// 2
// CONDITION
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// SOLUTION
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}

// CONDITION
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// SOLUTION
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

// CONDITION
// For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

// For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :

//  3 =  2*1 +1
//  6 =  2*3
//  13 = 2*6 +1
// Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.

// SOLUTION
function climb(n) {
  let seq = [];
  while (n >= 1) {
    seq.push(n);
    n = Math.floor(n / 2);
  }
  return seq.reverse();
}

// CONDITION
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// SOLUTION
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor == 0);
}

// CONDITION
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1
// 2
//  +2
// 2
//  +2
// 2
//  =9.

// SOLUTION
function squareSum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }
  return total;
}

// CONDITION
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}

// SOLUTION
// Code as fast as you can! You need to double the integer and return it.

// CONDITION
function doubleInteger(i) {
  return i * 2;
}

// SOLUTION
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// CONDITION
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// SOLUTION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// CONDITION
function makeNegative(num) {
  return Math.sign(num) === 1 ? -num : num
  }



// SOLUTION
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// CONDITION
function boolToWord( bool ){
  if(bool === true) {
    return "Yes";
  } else if(bool === false) {
    return "No";
  }
}



// SOLUTION
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// CONDITION
function solution(str){
  return str.split('').reverse().join('');
}
