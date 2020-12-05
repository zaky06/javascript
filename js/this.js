'use strict'; //this.js

let someObj = {
  someProp: "свойтсво объекта",
  someVoid(){
    console.log("контекст someVoid", this);
    console.log("свойство", this.someProp);
  },
  someVoidWithArgs: function (count) {}
  console.log("контекст someVoidWithArgs", this)
  console.log("count", count);
};


let user = {
  name: 'Олег'
};

function someFunc(func){
  func();
}
//если мы метод не передаем никуда по ссылке, то this будет ссылкой на сам объект и в строгом режиме, а так же без него
someObj.someVoid(); // someObj
// потеря контекста
// someFunc(someObj.someVoid); // если мы передаем метод в функцию или какой то другой метод, то по умолчанию значение this будет undefined c use strict| window без use strict
// setInterval(someObj.someVoid, 2000);  // window / window

// привязка контекста
// метод bind(контекст, аргументы) - метод функции
someFunc(someObj.someVoid.bind(someObj));
someFunc(someObj.someVoid.bind(user));

// передача аргументов
someObj.someVoidWithArgs(100); // someObj
someFunc(someObj.someVoidWithArgs.bind(someObj, 100)); //
someFunc(someObj.someVoidWithArgs.bind(100)); //this - 100 count - undefined

someFunc(someObj.someVoidWithArgs.bind(null, 100)); //если не интересуют аргументы this - null count - 100

function newFunc(someNums) {
  console.log(this);
}
someFunc(newFunc.bind(user, [2, 5, -10]));
