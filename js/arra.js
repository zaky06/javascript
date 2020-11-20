'use strict';
//для переменных объявленных через let областью видимости является блок if {}, циклы {}, {}
let some = "переменная";

if (some === "переменная") {
  let varInIf = "переменная в if";//переменная varInIf только ввнутри блока, ты не сможешь ее вывести, по этому после {} я назначил ее еще раз
}
let varInIf = "переменная вне {}";
console.log(varInIf);
//переменные на 74 и 76 строчках - разные переменные

// у вар нет такой проблемы, так как он глобальный, но это и плохо, по этому все перешли на let

//примитивные типы данных
let x = 56;
let y = x; // переменной y присвоили значение переменной x
console.log(x,y); //56, 56

x = 1000;
console.log(x,y); // 1000, 56

//ссылочные типы данных
let arr = [2, 5, -9, 0];
let newArr = arr;
console.log(arr, newArr);

arr[2] = 1000;
console.log(arr, newArr);//[2, 5, 1000, 0] [2, 5, 1000, 0]

/*
arr ---> [2, 5, -9, 0] <--- newArr
*/

//деструктуризация массива
let sizes = [18, 190];
//let height = 18, width = 90;
let [height, width] = sizes; // <-- деструктуризация массива

console.log(height, width); // 19 190

let info = ["Илья", "Тарасов", "23 года", "родился в Москве"];
//оператор ... используется после остальных переменных
let [name, surname, ...others] = info;
//переменной name будет присвоено значение "Илья"
//переменной surname будет присвоено значение "Тарасов"
//переменной others будет присвоено значение ["23 года", "родился в Москве"]
console.log(name, surname, others);

//задать значение по умолчанию
let elemMargins = [10, 40, 10];
let [topM = 0, rightM = 20, bottomM = 0, leftM = 20] = elemMargins;
console.log(topM, rightM, bottomM, leftM,);

// let [без_значений_по_умолчанию, со_значениями_по_умолчанию, ...переменная]

let someArr = [2, 6, 8];
console.log(someArr[someArr.length - 1]);

console.log(someArr[Math.floor(Math.random() * someArr.length)]);
let colors = [];
//методы массивов
colors = ["red", "blue", "yellow", "green"];
//1. добавление/удаление первого/последнего элемента
let lastColor = colors.pop(); //удаляет и возвращает последний элемент
//добавление 1го или нескольких элементов в конец массива
colors.push("white", "black");

//удаляет и возвращает первый элемент
let firstColor = colors.shift();
//добавление 1го или нескольких элементов в начало массива
colors.unshift("orange", "purple");
//["orange", "purple", "blue", "yellow", "white", "black"];

//2. splice / 3. splice
colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let removeColors = colors.splice(1, 0, "greenyellow", "gold");
console.log(colors);
console.log(removeColors);

arr = [-3, 56, 78, 90, 97];
//убрать элемент если он четный
for (let i = arr.length - 1; i >= 0; i--){}

for (let i = 0; i < arr.length; i++) {
  if (!(arr[i] % 2)) {
    arr.splice(i, 1);
    i--;
  }
}

//возвращает новый массив, содержащий копию части исходного массива [индекс_от; индекс_до)
let newColors = colors.slice(1, 4); // не изменяет содержимое массива
console.log(newColors);

// 4. includes
// 5. reverse
// 6. concat
// 7. indexOf / lastIndexOf

let nums = [
  [34, 67, -100],
  [-2, 45, 12],
  [-700, 281, -152]
];

for (let elemArr of nums) { // for (let i = 0; i < nums.length; i++)
  for (let elem of elemArr) { // for (let j = 0; j < nums[i].length; j++) nums [i][j]
    console.log("elem = " + elem);
  }
}
