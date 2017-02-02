/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
var Mynumber=[2,3,5,7,11,14,13,17,19,22,23,29,31];

var filterOutLessThan10 = function(num) {
  if(num>10){
    console.log(num);
  }
};
_.each(Mynumber,filterOutLessThan10);

console.log("This is another lab");

var isEven = function(num) {
  if(num%2===0){
    console.log(num);
  }
};

_.each(Mynumber,isEven);
