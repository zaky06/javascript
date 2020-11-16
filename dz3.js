'use strict'
let num = 1;
for (let i = 1; num < 2**20;) {
    num *= 2;
    console.log(num);
}
//зачем тут let i?, изначально сделал без него, но выдавал ошибку, пошел искать решение. Решение нашел, но так и не понял

num = 91
for (let i = 1; num > 0;) {
    num -= 1;
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


let mass = ["red", 1, 10, true, "boss", "OG", -10, false, 4, "blue"];
mass = Math.floor(Math.random() * 10); {
}
// :(
