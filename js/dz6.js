'use strict';
let numsArr = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];
// let numsArrPlus = numsArr.map(currentValue => currentValue +10);
// console.log(numsArrPlus); так не работает(

let newNumsArr = [].concat(numsArr[0], numsArr[1], numsArr[2])
let newArr = newNumsArr.map(function(num) {
  return num + 10
})
let newArrPlus = newArr.filter(num => num > 0)
console.log(newArrPlus)
