let currentDate = new Date();
console.log('Число ' + currentDate.getDate());
console.log('День недели ' + currentDate.getDay()); // отсчет начинается с 0 - воскресенье, и последний день - 6 - суббота
console.log('Месяц ' + currentDate.getMonth()); // отсчет начинается с нуля, то есть 0 - январь
console.log('Год ' + currentDate.getFullYear());
console.log('Полная дата строкой ' + currentDate.toDateString());
console.log('Часы ' + currentDate.getHours()); // от 0 до 23
console.log('Минуты ' + currentDate.getMinutes()); // от 0 до 59
console.log('Секунды ' + currentDate.getSeconds()); // от 0 до 59
console.log('Время строкой ' + currentDate.toTimeString());
