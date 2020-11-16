'use strict'
// пустой массив
let arr = [];
console.log(arr);

//массив с элементами 0, 1, 2, 3 тип 0-red 1-blue 2-yellow 3-green
let colors = ["red", "blue", "yellow", "green"];
console.log(colors);
//доступ к элементам массива осуществляется по его имени через []
console.log(colors[2]);//yellow
console.log(colors[0]);//red
console.log(colors[10]);//undefined
console.log(colors[3]);

//изменение значения элемента массива
colors[3] = "black";
colors[30] = "white";
console.log(colors);

//разряжанный массив - массив, в котором данные представлены не непрерывно, а фрагментарно (не по порядку)
colors = ["red",, "blue",,,, "yellow"]
console.log(colors);

//длина массива (свойство length есть у всех массивов, но если массив разряженный, то length будет работать не корректно)
let colorLength = colors.length; //значение последнего индекса +1
console.log(colorLength);

colors.length = 2;
console.log(colors);

let nums = [34, 67, -100];
console.log(nums[2]); // -100

nums = [
  [34, 67, -100], [-2, 45, 12], [-700, 281, -152]
]
console.log(nums[0]); // [34, 67, -100]
console.log(nums[0][2]); // -100
console.log(nums[2][0]); // -700
console.log(nums[1][1]); // 45
//значение свойства length массива
console.log(nums[2].length);// 3

//последовательное обращение к элементам массива - перебор массива:
//1. с возможностью изменить значения элементов массива
//for (let i = 0; i < arr.length; i++) {arr[i]}
//2. без возможности изменить значения элементов массива
//for (let elem of arr) { элемент массива - elem }
//3. arr.foreach() - метод массива

//увеличить значение каждого четного элемента массива в 2 раза
nums = [2, 56, 66, -123, 0, 45, 45];

for (let jop = 0; jop < nums.length; jop++) {
  if (nums[jop] % 2 === 0) nums[jop] *= 2;
}
console.log(nums);

//найти сумму значений элементов массива
let sum = 0;
nums = [2, 56, 66, -123, 0, 45, 45];

// на кажной итерации в переменную elem копируется значение элемента массива, на первой итерации значение elem будет равно 2, на второй 56 и тд
for (let elem of nums) { // nums - имя массива, вместо elem может быть любое название
  sum += elem;
}
console.log(sum);
