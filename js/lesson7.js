'use strict';
// объекты используется для хранения свойств
// например данные о статье, товаре и тд

let userData = {}; //создали пустой объект
console.log(userData);

// обращение к свойствам объекта:
// имяОбъекта.имяСвойства
// свойствами могут быть строки (все, что преобразуется к строке) или тип symbol
// в качестве значений можно использовать любые типы данных
// (примитивы и ссылочные типы)

// в объеекте userData добавили свойство name со значением Павел
userData.name = 'Павел';
console.log(userData);

// получили значение свойства name
console.log(userData.name);

// в объект userData добавили свойство age со значением 26
userData.age = 26;
console.log(userData);

// изменили значение свойства age объекта userData
userData.age = 31;

userData.favouriteColors = ['red', 'orange', 'yellow'];

for (let color of userData.favouriteColors) {
  console.log(color);
}

userData.favouriteColors.forEach(color => console.log(color));

console.log(userData);

console.log(userData.avatar); // undefined

// способы проверки существования свойства в объеекте
// 1. сравнения с undefined
if (userData.avatar === undefined) userData.avatar = 'default.png';
userData.login = null; //если есть необходимость добавить свойство в объект, но значение свойству собираетесь присвоить позже, то такое свойство должно быть равно null (или 0, false, ' ')

// 2. проверка оператаром in
// если в объекте не свойств githubLink, добавить его со значением null
// if ('githubLink' in userData) если свойство githubLink содержится в объекте userData, оператор in вернет true, если такого свойства нет в объекте то вернет false

if (!('githubLink' in userData)) userData.githubLink = null; //разница между 47 строкой в том, чо там мы проверяли присутсвие, а здесь отсуцтвие

console.log(userData.githubLink); // обращение к свойству через .
console.log(userData["githubLink"]); // обращение к свойству через ['имя символа'], когда свойство записано строкой

let link = 'githubLink';
console.log(userData[link]); // -> userData['githubLink']

// создали объект jsBook со следующими свойствами:
// свойством title и значением About JS
// свойством author и значением JS Junior
// свойством pageCount и знвчением 341
let jsBook = {
  title: 'About JS',
  author: 'JS Junior',
  pageCount: 341
};

jsBook.pics = ['array.png', 'objects.png'];

let phpBook = {
  title: 'About PHP 7.4',
  author: 'PHP Middle',
  pageCount: 712,
  pics: ['session.png', 'orm.png']
};

// вывести значения свойства title, если оно есть в объекте
if ('title' in jsBook) console.log(jsBook.title);
if ('title' in phpBook) console.log(phpBook.title);

userData.books = [jsBook, phpBook];
console.log(userData);
console.log(jsBook.pics[0]);
console.log(userData.books[1].pics[0]);

// перербор объектов  используется цикл for ... in ...
// переберем jsBook
phpBook = {
  title: 'About PHP 7.4',
  author: 'PHP Middle',
  pageCount: 712,
  pics: ['session.png', 'orm.png']
};
// на каждой итерации данного цикла переменной propName будет свойство объекта
// for (let свойство in объект)
for (let propName in phpBook) {
  console.log(`имя свойства ${propName}, значение своства ${phpBook[propName]}`);
  console.log(propName, phpBook[propName]);
}
// вывестии в консоль названия книг объекта userData
// вывести в консоль название книг с количеством страниц больше 500

for (let book of userData.books) {
  console.log(book);
  if (book.pageCount > 500) {
    console.log(book.title);
  }
}
let arr = userData.books.filter(book=>book.pageCount > 500);
console.log(arr);

let messages = [
  {
    text: 'some text',
    priority: 'high',
    code: 231
  },
  {
    text:'message text',
    priority: 'low',
    code: 23
  },
  {
    text: 'text',
    priority: 'high',
    code: 1000
  }
];

// написать функцию, которая принимает на вход число (massegeCode) и массив сообщений и возвращает объект сообщения, код, которого равне massegeCode



phpBook = {
  title: 'About PHP 7.4',
  author: 'PHP Middle',
  pageCount: 712,
};
// let {title: переменная 1, price: переменная 2} = phpBook;
// объявили переменную titleVar, ей будет присвоено значение своства title объекта phpBook
// let titleVar = 'About PHP 7.4'
let {title: titleVar, price: priceVar = 5000, ...others} = phpBook;
console.log(titleVar, priceVar);
console.log(others); // {author: 'PHP Middle', pageCount: 712}

// Дескрипторы свойств объекта
// У каждого свойства объекта кроме значения есть флаги:
// writable: если значение true, свойство можно изменить
// если значение false , свойство доступно только для чтения
// enumerable:
// если значение true, свойство будет доступно в цикле
// если значение false, свойство будет игнорироваться циклом
// configurable:
// если значение true, свойство можно удалить, а флаги можно менять
// если значение false, свойство нельзя удалить, а флаги менять нельзя

// набор дескриптеров свойства title объекта phpBook
let titleDescr = Object.getOwnPropertyDescriptor(phpBook, 'title');
console.log(titleDescr);

// изменим флаги
Object.defindeProperty(phpBook, 'title', {
  writable: false // свойство title будет доступно только для чтения
});

phpBook.title = 'PHP 7.0'; // не можем изменить значение , тк writable: false

Object.defindeProperty(phpBook, 'author', {
  enumerable: false // свойство 'author' бужет игнорироваться циклом
});


// удаление своства из объекта
delete userData.login;
console.log(userData.login);
