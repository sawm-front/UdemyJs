"use strict";

// Динамическая типизация

// Все, что мы получаем от пользователя всегда будем типом данных - строка 



// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) При сложении со стройокой - всегда получается строка

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

console.log(fontSize);

// To Number


// 1)

console.log(typeof(Number('kek')));
console.log(typeof(Number('4')));


// 2) Унарный плюс


console.log(typeof(+'5'));

// 3) 1 аргумент то, что преобразуем, второй 10чная система

console.log(typeof(parseInt("15px", 10)));


let answer = +prompt("Hello", "");




// To boolean

// Всегда false:  0, '', null, undefined, NaN

// 1)

// Не сработает, тк в приходит значение if(false)
let switcher = null;

if (switcher) {
   console.log('Working...');
}

switcher = 1;

if (switcher) {
   console.log('Working...');
}

// 2)

console.log(typeof(Boolean(4)));

// 3) !! два знака отрицания

console.log(typeof(!!"4444"));