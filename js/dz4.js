'use strict';
let str = "дом домик домой одомашненный";
let str1 = "дом";
let count = 0;

let indexOf = str.indexOf(str1);
while (indexOf > -1) {
    count++;
    indexOf = str.indexOf(str1, (indexOf + 1));
}
console.log(count);

str = "а роза упала на лапу Азора";
str1 = str.split(' ').reverse().join('').toLowerCase();
let result = str1 === str1.split(' ').reverse().join('').toLowerCase() ? 'Полиндром' : 'Не полиндром';
console.log(result);

let str3 = "heLLo";
str3 = str3.slice(0, 1).toUpperCase() + str3.slice(1).toLowerCase();
console.log(str3);


str1 = "в предложении все слова разной длины";
let text = str1.split(' ');
let bi = "";
for (let elem of text) {
    if (elem.length > bi.length) {
        bi = elem;
    }
}
console.log(bi);
