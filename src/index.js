import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
//functions and arrow functions as well

// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// const newNumbers = numbers.map( x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
// const newNumbers = numbers.filter( x => x<10)

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
// const newNumbers = numbers.reduce( (acu, x) => acu+=x)

////Find - find the first item that matches from an array.
// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// })
// const newNumbers = numbers.find( x => x>10);

////FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(function (num) {
//   return num > 10;
// })
// const newNumbers = numbers.findIndex( x => x>10);

// console.log(newNumbers)
