'use strict'
let num = 1;
for (let i = 1; num < 2**20;) {
    num *= 2;
    console.log(num);
}
//зачем тут let i?, изначально сделал без него, но выдавал ошибку, пошел искать решение. Решение нашел, но так и не понял

num = 95
for (let i = 1; num > 0;) {
    num -= 5;
    console.log(num);
}
//эту сделал так же(

let tarelka = 100;
let sredstvo = 55;
while (tarelka > 0 && sredstvo > 0) {
    tarelka -= 1;
    sredstvo -= 0.5;

        console.log(`остаток средства ${sredstvo}`);


}
console.log(`Осталось ${tarelka} тарелок и ${sredstvo} средства`);


let arr = [];
arr.length = 10;
let arra = [];
let b = 0;
let i = 0;
while (i < 10) {

    arr[0] = Math.floor(Math.random() * 10);

    arra.push(arr[0]);
    b += arr[0];
    i++;

}
console.log(arra);
console.log(`Среднее арифметическое${b/10}`);


arr = [];
arr.length = Math.floor(Math.random() * 10);

while (i < arr.length) {
    arr[0] = Math.floor(Math.random() * 10);
    arra.push(arr[0]);
    i++
}
console.log(arra);
let arrb = arra;
for (let i = 0; i < arrb.length; i+=1) {
    console.log(`Индекс элемента ${i} равен ${arrb[i]}`);
}
let arrc = arrb;
let sum = 0;

for (let i = 0; i < arrc.length; i++) {
    sum = arrc[i] + arrc[i+1];
    if (sum === 7) {

        console.log(`Сумма элементов ${i} и ${i+1} равна 7`);
        break;
    }

}

let summ = 0;
let newArr = [
  [23, 56, 78, 12, -900],
      [0, 0, 67, -3, 621],
      [89, 67, 12],
      [23, 56, 78, 12, -900, 89, 33, 21]
 ];
 console.log(newArr);
 for (let i = 0; i < newArr.length; i++) {
     for (let b = 0; b < newArr[i].length; b++) {
         newArr[i][b] += 10;
         summ += newArr[i][b];
     }
 }
 console.log(`Сумма элементов: ${summ}`);
