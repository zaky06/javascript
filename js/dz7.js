'use strict';
let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

    let cards = {};
    function getGoodsByPrice(from, to, obj) {
      if (!Number.isInteger(from, to)) return;
      for (let elem in obj) {
        if ((obj [elem].price > from) && (obj [elem].price < to)) {
          cards[elem] = obj[elem];
        }
      }
      return cards;
    }
    console.log(getGoodsByPrice(2500, 3500, goods));

    function getByTitle(title, countToCart, obj) {
    for (let elem in obj) {
        if (title === obj[elem].title) {
            if (obj[elem].count > countToCart) {
                obj[elem].count -= countToCart;
                console.log(`Товара ${obj[elem].title} есть на складе`);
            } else  {
                console.log(`Товара ${obj[elem].title} нет на складе `);
            }
            return;
        }
    }
}

getByTitle("Арфа", 3, goods);

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];

// Задание 3

function getBooks(author, arr) {
    let newArr = arr.filter(book => book.author === author);
    return newArr;
}
console.log(getBooks("Лермонтов", books));
