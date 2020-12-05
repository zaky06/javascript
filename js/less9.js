'use strict';
// функция addTextInput(inputData, where)
// добавления текстового поля в <div class="data-fields">
function addTextInput(inputData, where) {
    // inputData - объект с информацией о поле
    let divElem = document.createElement("div");
    let inputElem = document.createElement("input");
    // inputElem.setAttribute("type", inputData.type);
    // inputElem.setAttribute("placeholder", inputData.placeholder);
    // inputElem.setAttribute("name", inputData.name);
    // строки 9, 10, 11 можно заменить циклом
    for (let propName in inputData) {
        inputElem.setAttribute(propName, inputData[propName]);
    }
    divElem.append(inputElem);
    where.append(divElem);
}
let data = {
    type: 'email',
    placeholder: 'Введите email',
    name: 'email',
};
addTextInput(data, document.querySelector('.data-fields'));
addTextInput({
    type: 'text',
    value: 'Алексей',
    name: 'name',
}, document.querySelector('.data-fields'));

// функция addComment(commentText, authorInfo, where)
// добавления комментария в <div class="comments">
function addComment(commentText, authorInfo, where) {
    let date = new Date();
    // let a = 45, b = 90, c = 11;
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
        <div class="comment-img">
             <img src="${authorInfo.avatar}" alt="${authorInfo.name}">
        </div>
        <div class="comment-content">
             <p>
                 <span>${authorInfo.name}</span> |
                 <span>${day}.${month}.${year} ${hours}:${minutes}</span></p>
             <p>${commentText}</p>
        </div>
        `;
    where.append(commentDiv);
}
let userInfo = {avatar: "../img/avatar.jpg", name: "Ирина"};
addComment("wq eqr tt 5ywy", userInfo,
    document.querySelector(".comments"));

console.log(document.getElementById("game-field"));

// функция generateField(n) генерации игрового поля из дз #8
function generateField(n) {
    let container = document.createElement("div");
    container.style.width = '40vw';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    let size = 40/n; //'vw'
    for (let i = 0; i < n * n; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.style.border = '1px solid black';
        innerDiv.style.width = innerDiv.style.height = size + 'vw';
        container.append(innerDiv);
    }
    document.getElementById("game-field").append(container);
}
generateField(5);

// карусель
let slider = {
    init: function (id) { // метод инициализация
        // объекту slider добавили свойства slides и currentSlide
        // и присвоили им значения
        this.slides = document.getElementById(id).children;
        this.currentSlide = 0; // индекс текущего слайда
    },
    nextSlide: function () { // логика переключения слайдов
        this.slides[this.currentSlide].classList.remove("active");
        this.currentSlide += 1;
        this.currentSlide = this.currentSlide < this.slides.length ?
            this.currentSlide : 0;
        this.slides[this.currentSlide].classList.add("active");
    },
    run: function () { // метод запуск nextSlide с интервалом
        // this.nextSlide(); // this - контекст вызова функции
        setInterval(this.nextSlide.bind(this), 4000); // 4000 млс
    }
};
slider.init("slider"); // вызов метода init объекта slider
slider.run(); // вызов метода run объекта slider

// slider.slides = document.getElementById('id').children;
// slider.currentSlide = 0;

// Array.from(htmlCollection).forEach(htmlElem => );
