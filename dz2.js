'use strict'
let sum = 9990
if (sum < 1000) {
    console.log(`скидки нет, к оплате: ${sum} `);
} else if (1000 <= sum & sum <= 2000) {
    console.log(`Ваша скидка - 5%, сумма к оплате: ${sum * 0.95}`);
} else if (2000 <= sum & sum <= 3000) {
    console.log(`Ваша скидка - 10%, сумма к оплате: ${sum * 0.9}`);
} else
    console.log(`Ваша скидка - 10% + подарок, сумма к оплате: ${sum * 0.9}`);

let lang = 'javascript';
let salary = 95000;
let result = null;

if (lang === 'javascript') {
if (salary <= 100000) {
result = 'Приглашаем Вас на собеседование.';
  } else {
result = 'Мы перезвоним Вам в ближайшее время.'
  }
}
  console.log(result);


const MONTH = 'апрель';
let season;
switch (MONTH) {
  case 'декабрь':
  case 'январь':
  case 'февраль':
    season = 'Зима'
    break;
  case 'март':
  case 'апрель':
  case 'май':
    season = 'Весна'
    break;
  case 'июнь':
  case 'июль':
  case 'август':
    season = 'Лето'
    break;
  case 'сентябрь':
  case 'октябрь':
  case 'ноябрь':
    season = 'Осень'
    break;
  }
  console.log(season);
