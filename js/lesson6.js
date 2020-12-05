'use strict';

// напишите функцию, которая принимает на вход функцию и массив
// функция возвращает новый массив, каждый элемент нового массива - элемент исходного массива, обработанный переданной функцией

function some(func) {}
function doSmth() {}
let someVar = function () {;}

some(doSmth);
some(someVar);
some(function () {});

//some(doSmth());

function getNewArr(func, arr) {
  let resultArr = [];

  for (let elem of arr) {
    resultArr.push(func(elem)); //передавать функцию в функцию очень распространено в js, так делать можно
  }

  return resultArr;
}

let sqrt = function (num) {
  return num * num;
};

let numsArr = [56, 0, 12, -4, 1, 601];

let result = getNewArr(sqrt, numsArr);
console.log(result);

let divTwo = function (num) {
  return num / 2;
};
result = getNewArr(divTwo, numsArr);
console.log(result);

numsArr = [2, 0, -3, -4, 1, 9];
let resArr = [];
for (let elem of numsArr){
  //let result = sqrt(elem);
  //resArr.push(result);
  resArr.push(sqrt(elem));//это тоже самое что верхние 2 строчки, просто это более быстрый способ записи
}
console.log(resArr);

/*for (let elem of numsArr){
  console.log(divTwo(elem));
}*/

numsArr = [2, 0, -3, -4, 1, 9];
resArr = [];
for (let elem of numsArr){
  resArr.push(divTwo(elem));
}
console.log(resArr);


// функция принимает на вход функцию и строку, возвращает новую строку
//

function getNewString(func1, string) {
  return func1(string);
}
function toUpper(string){
  return string.toUpperCase();
}
console.log(getNewString(toUpper,"помидор"));


sqrt = function (num){
  return num * num;
};

// стрелочные функции:
// 1. аргументы функции:
// если функция принимает на вход один аргумент, то круглые скобки можно не писать
// во всех остальных случаях () необходимы (больше 1 аргумента или вообще нет аргументов)
// 2. =>
// 3. тело функции:
// если инструкция одна, тело функции не заключается в {}, при этом функция по умолчанию возвращает результат выполнения данной инструкции (return не пишется)
// sqrt = num => num * num; (пример)
// * если инструкций несколько, тело функции помещается в {}, при этом если необходимо вернуть данные из функции, return необходимо указывать явно

let div = (a, b) => {
  if (b === 0) {
    console.error("На 0 длеить нельзя!");
    return;
  }
  return a / b;
};
console.log(div(34, 12));

// функция принимает на вход число, возвращает true, если онон меньше 0 и false, если больше

let lessZero = n => n < 0;
console.log(lessZero(34));
console.log(lessZero(-12));

// методы массивов
numsArr = [6, 8, 1, -2, -200, 0, 5, -1];
// метод filter(func) возвращает новый массив, состоящий из элементов исходного массива, которые прошли проверку переданной функцией (func)

result = numsArr.filter(lessZero);
console.log(result);

result = numsArr.filter(n => n < 0); // аналогично (lessZero) на 107 строчке
console.log(result);
//  filter работает аналогично:
/*
let filterArr = [];
for (let i = 0; i < numsArr.length; i++) {
  if (lessZero(numsArr[i])) filterArr.push(numsArr[i]);
}
*/

// метод .map(func) возвращает новый массив, состоящий из элементов исходного массива, которые были преобразованны переданной функцией

numsArr = [6, 8, 1, -2, -200, 0, 5, -1];
sqrt = elem => elem * elem;

result = numsArr.map(sqrt);
console.log(result);
//result = numsArr.map(n => n + '$');
result = numsArr.map(n => n < 0 ? -n  + '$' : n + '$');

console.log(result);
/*
let n = -23;
console.log(n * -1, -n);
*/

// метод .every(func) возвращает true, если все элементы массива прошли проверку данной функцией (func) и false если наоборот

numsArr = [6, 8, 1, 0, 5];
let pos = num => num > 0;
result = numsArr.every(pos);
console.log(result);

/* метод работы every
for (let i = 0; i < numsArr.length; i++) {
  if (!pos(numsArr[i])) return false;
}
return true;
*/

// метод .esome(func) возвращает true, если хотя бы один элемент массива прошел проверку данной функцией (func) и false если нет
numsArr = [6, 8, 1, 0, 5];
result = numsArr.some(n => n === 0);
console.log(result);

// метод .forEach(func) - перебор массива
numsArr = [6, 8, 1, 9, 5];
let func = (elem, index, arr) => {
  console.log(`Элемент массива ${elem}`);
  console.log(`Индекс массива ${index}`);
  console.log(`Массив целиком ${arr}`);
  arr[index] *= 2;
};
numsArr.forEach(func); // позволяет менять исходный массив!
/*
for (let i = 0; i < numsArr.length; i++){
    func(numsArr[i], i, numsArr);
  }
    */
console.log(numsArr);

numsArr = [
  [3, 5, -1, 6, 0],
  [56, -9, 111, 6],
  [11, 86, -12],
];
// numsArr.filter(elem => ); //что такое elem? это массив 
// elem - [3, 5, -1, 6, 0]
// elem - [56, -9, 111, 6]
// elem - [11, 86, -12]
