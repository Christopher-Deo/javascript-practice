
// Exercise 1

// Define a function logBetween(lowNum, highNum) that will print every number 
// from lowNum to highNum, inclusive. 
// Inclusive means that the range includes lowNum and highNum.

// Hint: this function only needs to print using console.log it does not need to return.
console.log('This is Exercise 1');


//   data to be passed into the parameter as arguments when function is called
// Examples:
logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
// 4
// 5
// 6



//   Exercise 2

//   Write a function printFives(max) that prints out the multiples of 5 
//   that are less than the max.

//   Try to solve this in two ways, one using an if statement, and one without.


// create a function printFives with a parameter of max.

console.log('This is Exercise 2');
//your code here:


// data to be passed into function when called

// prints out:
// 0
// 5
// 10
// 15




// Exercise 3

// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers 
// as parameters. The function should print out numbers between min and max 
// at step intervals. See the following examples.

// Hint: this function only needs to print using console.log it does not need to return.

console.log('This is Exercise 3');
//your code here:

// Examples:
// un-comment the code below before running your code.
//logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9

// un-comment the line below before running your code
//logBetweenStepper(-10, 15, 5);
// prints out:
// -10
// -5
// 0
// 5
// 10
// 15


// Exercise 4

// Define a function fizzBuzz(max) that takes a number and prints every 
// number from 0 to max (not inclusive) that is divisible by either 3 or 5, 
// but not both.

console.log('Exercise 4');
//Your code here:

// Examples:
// un-comment the line below before running your code

//fizzBuzz(20);

// expected returns listed below
// 3
// 5
// 6
// 9
// 10
// 12
// 18



// Exercise 5 (arrays)

// Write a function combineArray(array1, array2) that takes in two arrays 
// of numbers and returns the two arrays combined into a single array.

// Hint: Use the Array.concat method but be aware that calling 
// this method won't permanently change, also known as mutate, either array.

console.log('Exercise 5');
//write your code below:

// un-comment the lines below before running your code
//console.log(combineArray([1, 2], [3, 4])); // Expected returns => [1, 2, 3, 4]
//console.log(combineArray([17, 5], [6, 7]));  //Expected returns => [17, 5, 6, 7]




// Exercise 6

// Write a function doubler(numbers) that takes an array of numbers 
// and returns a new array where every element of the original array 
// is multiplied by 2.

console.log('Exercise 6');
//your code here


// // un-comment lies below before running your code
// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]



// Exercise 7

// Write a function, countVowels(word), that takes in a string word and 
// returns the number of vowels in the word.
// Vowels are the letters "a", "e", "i", "o", "u".

console.log('Exercise 7');

const vowels = ['a', 'e', 'i', 'o', 'u'];
//your code here:

// un-comment lines below before running your code

//console.log(countVowels("bootcamp")); // expected return => 3
//console.log(countVowels("apple")); //expected return  => 2
//console.log(countVowels("pizza")); //expected return => 2


//   Exercise 8
console.log('Exercise 8');
// 1. Print all even numbers from 0 – 10


// 2. Print all numbers divisible by 5 from 10 to 1 (inclusive)


// 3. Print all numbers divisible by 5 and 3 from 10 to 1 (inclusive)
//your code here:



// Exercise 9

// Print a table containing multiplication tables

// Let's start with the tables that many of us had to memorize in school.
//  Can you print a table that contains all the answers to the multiplication 
//  tables from 1 through 10?

console.log('Exercise 9');

// set up a list of numbers 1-10
// loop over that list, adding 1 to each cycle of for loop
// multiply the value of each item in the list by 10
// push the new value to another list containing the multiples of 10 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplier(arr) {
//your code here:    
}



// Exercise 10

// Create a length converter function

// Let's start with a conversion from kilometers to miles. 
// The function should include the input in kilometers and 
// return the answer in miles.

console.log('Exercise 10');
//Your code here:



// Exercise 11

// Calculate the sum of numbers within an array

// You can create your own array of numbers but consider trying this problem 
// with a few different sets to verify your solution. 
// Have one array with negative and positive numbers and another with 
// integers and decimals.

// You could also try using arrays of different lengths. If you're feeling comfortable with this, 
// try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the 
// sum of a particular column or row number in a table.

console.log("Exercise 11");

//Your code here:





// Exercise 12

// Create a function that reverses an array

// This challenge is particularly helpful if you're planning to become a 
// Data Scientist. Manipulating data is a significant part of the role, and 
// building the foundations now will help you later down the road when 
// you're working with large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, 
// and then try your program with a larger array to verify its success.

console.log('Exercise 12');
//Your code here    
// Bonus intermediate challenge: Create a function that can return the
    // sum of a particular column or row number in a table.







// Exercise 13

// Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to 
// try your program with varying lengths and types of arrays. 
// Try one with all integers, another with negative numbers, and 
// another with decimals.

console.log('Exercise 13');

let arr1 = [2, 9, 1, 15, 32, 3, 10, 99];
let arr2 = [-1, -9, -10, -12, -15, -99];
//Your code here



// Exercise 14

// Create a function that filters out negative numbers

// In this challenge, you'll have a function that takes an array as an input 
// and returns an array. But if all goes according to plan, it'll remove the 
// negative numbers. This is another example of a task that'll be useful 
// when combing through data and looking for clever ways to eliminate "bad data."

console.log("Exercise 14");

// write function that takes array of numbers as argument
// remove all negative numbers 
// return only the positive numbers
//let arr3 = [2, 9, -1, 15, -32, -3, -10, 99];
//Write code below


// Exercise 15
// Remove the spaces found in a string

// Yet another way to clean up data is to remove any errors or unnecessary spaces.
//  This function will take in a string and then return it with all spaces removed.
//  Think about if you were tasked with cleaning up customer data at your job.
//  You could scale this function to clean up specific fields of data, 
//  such as zip codes.

console.log("Exercise 15");
//Place your code here

// Exercise 16

// Return a Boolean if a number is divisible by 10

// Here, you'll create a function that'll give you a "true" or "false" Boolean 
// as its output. The inputted number should only 
// return a "true" if it's divisible by 10. 
// Otherwise, your program should return a "false" answer.

console.log("Exercise 16");
//Place your code here
//let arr4 = [2, 9, 1, 15, 32, 3, 10, 99];







// Exercise 17
// Return the number of vowels in a string

// Create a function that'll return an integer of the number of vowels found 
// in a string. This is a great way to practice determining the features of a 
// dataset. If you use JavaScript later in your career, you'll be well-prepared
//  to determine what datasets (or just strings) consist of. 
//  If you feel like an extra challenge, consider returning the number 
//  of characters.

console.log("Exercise 17");
// place your code here
