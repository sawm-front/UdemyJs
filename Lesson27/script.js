"use strict";

const arr = [1, 2, 3, 6, 8, 9];

arr.pop(); // удаляет последний элемент из массива

arr.push(10); // добавляет элемент в конец массива

console.log(arr);

// shit и unshift не самые лучшие методы


//Переборы массивов 

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


for (let value of arr) {
   console.log(value);
}
// arr[99] = 0; // запись элемента на 99 позицию
console.log(arr.length); // выведет что у длинна массива = 100 элементам, тк свойство lenght состоит из последнего индекса +1

console.log(arr); // увимдим что получаем 93 пустых ячейки

// Перебор forEach
//перебор всех элементов внутри массива, принимает в себя callback функцию, метод проходит по каждому элементу массива и применяет эту функцию на каждом из этих элементов, функция может себя прнимать 3 аргумента (1:(item/button/i) тот элемент который мы сейчас перебираем, 2: номер по порядку(i), 3: ссылка на тот массива, который мы перебираем) 

arr.forEach(function(item, i, arr) {
   console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", "); // указываем через какой разделитель будут идти товары в строке
products.sort();
console.log(products);
console.log(products.join('/'));


const kaif = [10, 13, 26, 2, 13, 8, 7];
kaif.sort();
console.log(kaif);

function compareNum(a, b) {
   return a - b;
}