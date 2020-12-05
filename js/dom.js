'use strict';
// DOM - Document Object Model - объектная модель документа.
// Согласно этой модели каждый html элемент является объектом.
// Элементы, которые расположены радом - соседние элементы.
// Вложенные элементы являются дочерними элементы своих родителей.

console.log(document); // весь HTML документ, объект используется для поиска и добавления элементов
console.log(document.body); // body

let list = document.getElementById("list"); //  получение объектов по id
console.log(list);

// перемещение по DOM дереву
console.log(list.childNodes); // все дочерние узлы
console.log(list.children); // все дочерние узлы теги
// нельзя добавить стиль к коллекции, надо будет взять отдельные элементы коллекции и с ними работать
// вот снизу пример перебора коллекции
// так же в коллекицю добавить просто так элементы нельзя, а так же пользоваться html коллекцией как массивом

// перебор DOM коллекций
for (let elem of list.children) {
    console.log(elem);
}

console.log(list.firstChild); // первый дочерний узел
console.log(list.lastChild);// последний дочерний узел

console.log(list.firstElementChild);// первый дочерний узел тег
console.log(list.lastElementChild);// последний дочерний узел тег

console.log(list.previousSibling); // предыдущий соседний узел
console.log(list.nextSibling);// следующий соседний узел

console.log(list.previousElementSibling);// предыдущий соседний узел-тег
console.log(list.nextElementSibling);// следующий соседний узел-тег

console.log(list.parentNode); // родительский узел
console.log(list.parentElement); // родительский узел-тег

// поиск элементов в DOM дереве
// 1. по id
list = document.getElementById("list");
// 2. по значению атрибута name, возвращает коллекцию, даже если элемент один
let elemsByName = document.getElementsByName("data");
console.log(elemsByName);
// 3. по имени тега, возвращает коллекцию, даже если элемент один
let elemsByTag = document.getElementsByTagName("li");
console.log(elemsByTag);
// 4. по имени css класса возвращает коллекцию, даже если элемент один
let elemsByClassName = document.getElementsByClassName("orange-border");
console.log(elemsByClassName);
// 5. по css селектору
// первый элемент, который удовлетворяет селектору ul>li
let elemByCSS = document.querySelector("ul>li"); // .orange-border
console.log(elemByCSS);
// коллекция элементов, которые удовлетворяют селектору input[type=text]
let elemsByCSS = document.querySelectorAll("input[type=text]");
console.log(elemsByCSS);

// создание элементов
let div = document.createElement("div"); // элемент создан, но в html его пока нет
// <div></div>
// работа с атрибутами
div.setAttribute("id", "container"); // установили атрибут id со значением container для созданного элемента
// <div id="container"></div>
console.log(div.hasAttribute("id")); // проверяет наличие атрибута
console.log(div.getAttribute("id")); // возвращает значение атрибута по id
div.removeAttribute("id"); // удаление атрибута

// атрибут style
// cssText позволяет добавить несколько css свойств в атрибут style
div.style.cssText = `
    text-align: center;
    font-size: 1.7rem;
`;
// выше строчки через cssText пишем нормально как в css, смотри разницу с нижней строчкой
div.style.background = "#FBE9E7";
div.style.fontWeight = "bold"; // font-weight то есть то, что в css пишется через - тут с большой буквы, тип border-left в css, а тут borderLeft
console.log(div.style.background); // yellow

// получить все стили элемента
let listStyles = getComputedStyle(list);
console.log(listStyles);
console.log(listStyles.background);
console.log(listStyles.marginTop);

// работа с css классами
div.classList.add("orange-border");
// <div class="orange-border"></div>
div.classList.remove("orange-border");
// <div></div>
div.classList.toggle("orange-border"); // добавить / удалить
div.classList.contains("orange-border"); // проверка наличия

// добавление элементов (в HTML)
// elem.append(...other_elem)
// elem.prepend(...other_elem)
// elem.before(...other_elem)
// elem.after(...other_elem)

// elem.replaceWith(...other_elem) замена
// elem.remove() удаление
// elem.clone() копирование

for (let i = 0; i < 5; i++) {
    let p = document.createElement("p"); // создали элемент p
    // p.textContent доступ к тексту за вычетом всех тегов
    console.log(p.textContent);
    // p.textContent = `Текстовый абзац ${i}`; // добавили текст
    p.innerText = `Текстовый абзац ${i + 1}`;
    p.classList.add("p-class"); // добавили класс
    div.append(p); // элемент p добавили в элемент div, который был создан ранее
}

document.body.prepend(div); // элемент div , который был создан ранее добавили первым в body

// работа с таблицами
let tableArea = document.getElementById("users-block");
let table = document.createElement("table");

// заголовок
let caption = table.createCaption();
caption.innerText = "Заголовок таблицы";

// ряд
let row = table.insertRow(0);

// ячейки
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerText = "Содержимое ячейки 1";
cell2.innerText = "Содержимое ячейки 2";

tableArea.append(table);
