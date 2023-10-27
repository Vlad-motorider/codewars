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

// SOLUTION
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}



// CONDITION
// Code as fast as you can! You need to double the integer and return it.

// SOLUTION
function doubleInteger(i) {
  return i * 2;
}



// CONDITION
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// SOLUTION
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}



// CONDITION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// SOLUTION
function makeNegative(num) {
  return Math.sign(num) === 1 ? -num : num;
}



// CONDITION
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// SOLUTION
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  }
}



// CONDITION
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION
function solution(str) {
  return str.split("").reverse().join("");
}



// CONDITION
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// SOLUTION
function numberToString(num) {
  return num.toString();
}



// CONDITION
// Write a function that takes an integer n and a string s as parameters and returns a string repeating exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// SOLUTION
function repeatStr(n, s) {
  return s.repeat(n);
}



// CONDITION
//Create a function that returns the sum of the two smallest positive integers for an array of at least 4 positive integers. No floating point numbers or non-positive integers will be transmitted.
//For example, if the array is passed as [19, 5, 42, 2, 77], the result should be 7.
//[10, 343445353, 3453445, 3453545353453]should return 3453455.

// SOLUTION
function sumTwoSmallestNumbers(numbers) {
  const numbersSorted = [...numbers].sort((a, b) => a - b);
  return numbersSorted[0] + numbersSorted[1];
}



// CONDITION
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// SOLUTION
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}



// CONDITION
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// SOLUTION
function litres(time) {
  return Math.floor(time * 0.5);
}



// CONDITION
//  In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
//  For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
//  Good luck!

// SOLUTION
function solve(s) {
  return Math.max(...s.match(/\d+/g));
}



// CONDITION
//   Is the string uppercase?
//   Task
//   Create a method to see whether the string is ALL CAPS.
//   Examples (input -> output)
//   "c" -> False
//   "C" -> True
//   "hello I AM DONALD" -> False
//   "HELLO I AM DONALD" -> True
//   "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//   "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//   In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// SOLUTION
String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};



// CONDITION
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// SOLUTION
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}



// CONDITION
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// SOLUTION
function sortByLength(array) {
  return [...array].sort((a, b) => a.length - b.length);
}



// CONDITION
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
// Note: There is no newline in the end (after the pattern ends)

// SOLUTION
function pattern(n) {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push("1" + "*".repeat(i - 1) + i);
  }
  return arr.join("\n").replace("1", "");
}



// CONDITION
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.

// SOLUTION
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i] + 1;
    const consecutive = arr[i + 1];
    if (num !== consecutive) return consecutive;
  }
  return null;
}



// CONDITION
// This function should return an object, but it's not doing what's intended. What's wrong?

// SOLUTION
function mystery() {
  var results = { sanity: "Hello" };
  return results;
}



// CONDITION
// Very simple, given an integer or a floating-point number, find its opposite.

// SOLUTION
function opposite(number) {
  return -number;
}



// CONDITION
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// SOLUTION
function removeChar(str) {
  return str
    .split("")
    .slice(1, str.length - 1)
    .join("");
}



// CONDITION
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// SOLUTION
function summation(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}



// CONDITION
//We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// SOLUTION
function stringToNumber(str) {
  return Number(str);
}



// CONDITION
// Write a function that removes the spaces from the string, then return the resultant string.

// SOLUTION
function noSpace(x) {
  return x.split(" ").join("");
}



// CONDITION
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//[Make sure you type the exact thing I wrote or the program may not execute properly]

// SOLUTION
function greet(name) {
  return (name = `Hello, ${name} how are you doing today?`);
}



// CONDITION
// Write a function which converts the input string to uppercase.

// SOLUTION
function makeUpperCase(str) {
  return str.toUpperCase();
}



// CONDITION
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// SOLUTION
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}



// CONDITION
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

// SOLUTION
function century(year) {
  let result = String(year / 100).split(".");
  if (result.length === 2) {
    return Number(result[0]) + 1;
  } else {
    return Number(result[0]);
  }
}



// CONDITION
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// SOLUTION
function abbrevName(name) {
  return name
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join(".");
}



// CONDITION
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

// SOLUTION
function booleanToString(b) {
  return b ? "true" : "false";
}



// CONDITION
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//Example (Input --> Output)
//"Hello World" --> "World Hello"
//"Hi There." --> "There. Hi"
//Happy coding!

// SOLUTION
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}



// CONDITION
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// SOLUTION
function simpleMultiplication(number) {
  return number * (number % 2 === 0 ? 8 : 9);
}



// CONDITION
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// SOLUTION
function digitize(n) {
  return String(n)
    .split("")
    .reverse()
    .map((char) => Number(char));
}



// CONDITION
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// SOLUTION
function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
}



// CONDITION
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

// SOLUTION
function findNeedle(haystack) {
  const index = haystack.findIndex((junk) => junk === "needle");
  return `found the needle at position ${index}`;
}



// CONDITION
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

// SOLUTION
function fakeBin(x) {
  return x
    .split("")
    .map((num) => (Number(num) >= 5 ? 1 : 0))
    .join("");
}



// CONDITION
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
//  You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
//   Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// SOLUTION
function smash(words) {
  return words.join(" ");
}



// CONDITION
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// SOLUTION
function maps(x) {
  return x.map((number) => number * 2);
}



// CONDITION
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// SOLUTION
function past(h, m, s) {
  let hours = h * 3600000;
  let minutes = m * 60000;
  let seconds = s * 1000;

  return hours + minutes + seconds;
}



// CONDITION
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// SOLUTION
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") return `${name} plays banjo`;

  return `${name} does not play banjo`;
}



// CONDITION
// Complete the solution so that it reverses all of
//  the words within the string passed in.
// Words are separated by exactly one space
//  and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" -->
// "battle no requires which that is victory greatest The"

// SOLUTION
function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}



// CONDITION
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// SOLUTION
const sumMix = (x) =>
  x.reduce((startValue, currentValue) => startValue + Number(currentValue), 0);



// CONDITION
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// SOLUTION
function removeExclamationMarks(s) {
  const regExp = /!/g;
  return s.replace(regExp, "");
}



// CONDITION
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

// SOLUTION
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
  }
}



// CONDITION
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// SOLUTION
function reverseList(list) {
   return list.reverse();
}



// CONDITION
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// SOLUTION
function invert(array) {
   return array.map(number => (number ? -number : number));
}



// CONDITION
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SOLUTION
function grow(x){
   return x.reduce((a, b) => a * b);
}