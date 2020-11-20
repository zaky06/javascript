'use strict';

//строки заключаются в одинарные, двойные или обратные кавычки
//строки хранятся в кодировке UTF-16 в виде массива символов
// Поезд -> ['П', 'о', 'е', 'з', 'д']
//строки в javaScript неизменимы, можно лишь создать новую строку на основе существующей

//длина строки
let train = "Поезд";
console.log(train.length);

// каждый символ хранится под индексом, нумерация начинается с 0
console.log(train[2]);//е

console.log("first" + ", " + "second");

// методы строк
train = "Поезд";

//1. приведение к верхнему / нижнему регистру
let newStr = train.toUpperCase();
console.log(newStr);

train = train.toLowerCase();
console.log(train); //поезд

//2. trim
train = "   Поезд   ";
console.log(train.length);
train = train.trim();
console.log(train.length);

// 3. includes / 4.startsWith / 5. endsWith
train = "Поезд";
// вернет true, если указанная последовательность содержится в строке
//метод чувствителен к регистру
console.log(train.includes("ез"));
// вернет true, если указанная последовательность содержится в строке
//метод чувствителен к регистру
console.log(train.startsWith("по"));
// вернет true, если указанная последовательность содержится в строке
//метод чувствителен к регистру
console.log(train.endsWith("д"));

// 6. split - массив из строчки / 7. join - строка из массива
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor"
let arrFromText = text.split(" ");
console.log(arrFromText);

let textFormArr = arrFromText.join(", ");
console.log(textFormArr);

//8. indexOff / 9. lastIndexOf
//10. slice / 11. substring

//12. сравнение строк
let str1 = "Поезд";
let str2 = "поезд";

console.log(str1 === str2);
console.log(str1 !== str2);

let compareRes = str1.localeCompare(str2, undefined,
{sensitivity: 'accent'});
//{sensitivity: 'accent'} - сравнение без учета регистра
//
console.log(compareRes);

//результат работы метода localeCompare:
// отрицательное число - если str1 меньше str2
//положительное число - если str1 больше str2
//Поезд больше, чем Автобус (потому что номер П в таблице юникода больше кода А)
//0 - если строки равны
