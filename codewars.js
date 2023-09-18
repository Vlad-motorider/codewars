// 1
// CONDITION
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// SOLUTION
function positiveSum(arr) {
   let result = 0;
   for(let i = 0; i<arr.length; i++) {
      if(arr[i] > 0) {
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
function createPhoneNumber(numbers){
   let format = "(xxx) xxx-xxxx";
   for(let i = 0; i<numbers.length; i++) {
      format = format.replace("x", numbers[i]);
   }
   return format;
}