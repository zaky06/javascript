'use strict';

function getGoods() {
    return {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: "https://picsum.photos/id/345/300"
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: "https://picsum.photos/id/988/300"
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: "https://picsum.photos/id/123/300"
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: "https://picsum.photos/id/162/300"
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: "https://picsum.photos/id/163/300"
        }
    };
}

// ГЕНЕРАЦИЯ КАРТОЧЕК ТОВАРОВ
function generateCards(cardsElem) {
    // cardsElem - элемент, в который будут добавлены
    let goods = getGoods();
    for (let item in goods) {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("h2");
        title.innerText = goods[item].title;

        let pic = document.createElement("img");
        pic.setAttribute("src", goods[item].img);

        let price = document.createElement("p");
        price.innerText = `Цена: ${goods[item].price}`;

        card.append(title, pic, price);
        cardsElem.append(card);
    }
}

generateCards(document.querySelector(".goods"));

// ГЕНЕРАЦИЯ КАРТОЧЕК КНИГ
function getBooks() {
    return [
        {author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5, count: 12},
        {author: 'Гоголь', title: 'Мертвые души', pageCount: 470, count: 0},
        {author: 'Лермонтов', title: 'Тамань', pageCount: 190, count: 2},
        {author: 'Гончаров', title: 'Обломов', pageCount: 610, count: 0},
        {author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191, count: 4},
        {author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50, count: 1},
        {author: 'Лермонтов', title: 'Бородино', pageCount: 2, count: 151},
    ];
}

function generateBooksCard(sectionForBooks) {
    let books = getBooks();
    for (let book of books) {
        if (book.count <= 0) continue; // переход на следующую итерацию
        let card = document.createElement("div");
        card.style.border = '1px solid #333';

        let title = document.createElement("p");
        title.innerText = `Название: ${book.title}`;

        let info = document.createElement("div");
        let author = document.createElement("span");
        author.innerText = `автор: ${book.author}, `;
        let pages = document.createElement("span");
        pages.innerText =`количество страниц: ${book.pageCount} `;
        info.append(author, pages);

        card.append(title, info);
        sectionForBooks.append(card);
    }
}
generateBooksCard(document.getElementById("books"));
