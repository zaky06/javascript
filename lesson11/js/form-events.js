'use strict';

// элементы формы можно получить через значения атрибута name
// получение формы
// document.forms - все формы в документе
// lesson - значение атрибута name формы
let form = document.forms.lesson;
console.log(form);

// доступ к элементам формы по значению атрибута name
// form - конкретная форма, полученная ранее
// elements - свойства формы, хранит все элементы форма
// login - значение атрибута name конкретного элемента формы
let LoginInput = form.elements.login;
console.log(LoginInput);
// значение атрибута value поля ввода логина
console.log(LoginInput.value);

// установим значение атрибута value
LoginInput.value = "qwe";

let PasswordInput = form.elements.pwd;
console.log(PasswordInput);
PasswordInput.value = "123321";

// name == color, элементов с name = color в html несколько,
// по этому в colorRadios получим коллекцию
let colorRadios = form.elements.color;
console.log(colorRadios);

for (let radio of colorRadios) {
  radio.addEventListener("focus", changeColor);
}

function changeColor() {
  form.elements.checkbox_fieldset.style.background = this.value;
}

// name = lang[] / programming-lang
let LangArr = form.elements["lang[]"];
// у чекбоксов и радиокнопок есть атрибут checked, получить значение
// данного атрибута можно через свойство cheked
for (let lang of LangArr){
  if (lang.checked) console.log(lang.value);
}

// name = countries выпадающий список
// у option есть атрибут selected, получить значение данного
// атрибута можно через свойство selected
let countries = form.elements.countries;
console.log(countries);

for (let elem of countries){
  if (elem.selected) console.log(elem.value);
}

// отправка формы
form.addEventListener("submit", takeForm)
// у события submit есть обработчик по умолчанию - отправка данных на сервер
function takeForm(event) {
  event.preventDefault(); // отменяет отправку данных на сервер
  console.log("takeForm");
  console.log("логин: " + this.elements.login.value);
  console.log("пароль " + this.elements.pwd.value);
  // отправка данных без перезагрузки:
  // 1. валидация
  // 2. собрать данные для отправки
  // 3. отправка

  // собирает данные формы от элементов у которых есть атрибут name
  // позволяет добавлять данные, на стороне js
  // хранит данные в паре ключ: значение,
  // где ключ - name, значение - значение value
  // login: qwe
  let formData = new FormData(this);
  // добавление данных в объект
  formData.append("newKey", "newValue");
  // получение данных из объекта
  console.log(formData.get("login"));
  console.log(formData.get("newKey"));
  console.log(formData.getAll("lang[]")); // если элемент массив, надо использовать метод getAll

  // отправка данны с перезагрузкой
  // 1. валидация
  // 2. отправка
  this.submit();
}
