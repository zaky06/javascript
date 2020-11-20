'use strict'; //заставляет обрабатывать код в строгом режиме
// для своевременного выполнения ошибок
// для предотвращения использования небезопасного синтаксиса который был разрешен в прошлых версиях
// однострочный коментарий
/* многострочный
комментарий */

// Браузеры способны выполнять js код благодаря встроенным движкам javascript
// V8 - Chrome, Opera
// SpiderMonkey - FireFox

 // 1. читают js инструкции
 // 2. преобразование инструкций в машинный язык
 // 3. выполнение преобразованного кода

 // Инструкции выполняются последовательно
// В конце инструкций ставится ;

// взаимодействие с html
// обработка браузерный событий
// валидация пользовательских данных
// отправка ajax запросов
// отправка запросов на сервер без перезагрузки страницы
// расчеты на стороне клиента (в браузере)

// Программа работает с данными, например, данные пользователя
// данные, которые пришли с сервера, элементы html и тд
// данные мы будем хранить в переменных
// переменная - поименованная область памяти для хранения данных и обращения к ним по мере необходимости
// типы данных, которые мы можем использовать в javascript:
// примитивные типы: числа, строки, логический тип, null, undefined
// ссылочные типы: массивы, объекты (для хранения наборов данных)
// символ для хранения уникальных индентификаторов

// для объявления (создание) переменных используется ключевое слово let за которым идет имя переменной
let variableName;
// присвоим значение переменной
variableName = 'Данные, которые будут храниться в переменной. ' + 'к ним мы сможем обратиться по имени переменной';
// тип данных переменной задается в момент, когда мы присваиваем значение, поэтому js называют языком со слабой динамической типизацией
// если где то видишь var меняй на let так как var уже устарел

// варианты объявления переменных и присваивание значений
// объявили переменную и присвоили ей значение
let age = 67;
// объявили несколько переменных и присвоили им значения
let login = 'qwe', password = 'gnrw355'
// объявили переменные active и closed, closed присвоили значение, а active нет
let active, closed = true;

// переопредиление (изменение) значения переменной
// имя переменной уже без let тк это повторное обращение к переменной
password = 344;

// отладка
console.log(password); //доступ к значению переменной по ее имени
console.warn("Предупреждение!!!");
console.error("Здесь ошибка ...");

//замер времени выполнения кода
console.time("Счетчик №1");
//код для которого измеряем время выполнения
console.timeEnd("Счетчик №1");

//примитивные типы данных:
//Числа - тип Number, хранит целые числа и числа с плавающей точкой
age = 24; //целое число
age = 52.5; //число с плавающей точкой
// Кроме обычных чисел, существуют:
// Infinity,
// -Infinity,
// Nan - Not A Number - ошибка вычисления

console.log(age / 0); //infinity
console.log(-age / 0); //-infinity
console.log("Возраст" / age); //Nan

// Строки
// пишутся в двойных или одинарных кавычках
login = "qwe";
login = 'qwe';

// если текст внутри строки нужно выделить кавычками, то это должны быть кавычки другого типа или они должны быть экранированы
let welcome = 'Добро пожаловать на \'САЙТ\'';
welcome = 'Добро пожаловать на "САЙТ"';

let loginInfo = `Значение переменной login: ${login}, значение переменной password: ${password}`;
console.log(loginInfo);

// логический тип Boolean
// принимает только 2 значения: истина или ложь
// используется для хранения состояний
//при проверки устловий
active = true;
closed = false;

console.log(active, closed);

// undefined - значение не было присвоено (никакого значения нет)
let someVariable;
console.log(someVariable);

// null - значение неизвестно (пустое значение)
let unknownValue = null;
console.log(unknownValue);

//определить тип данных typeof имяПеременной
console.log(typeof loginInfo); //string
console.log(typeof age);
console.log(typeof someVariable); //undefined
console.log(typeof unknownValue); //object

// значение константам необходимо присваивать в момент объявления
// изменить значение константы нельзя
const ANSWER_STATE = 'OK';
//ANSWER_STATE = 'Error'; так нельзя
const state = 'Error';
