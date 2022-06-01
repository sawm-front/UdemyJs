"use strict";

const str = "test";

// Свойства и методы
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));


const logg = "Hello World!";

console.log(logg.slice(7, 11)); // аргументы (start, end) в скобках указывается индекс с какого до какого, последний же не включительно

console.log(logg.substring(4, 11)); // нельзя указывать отрицательное значение 

console.log(logg.substr(6, 15)); // скольк символов необходимо вырезать

const num = 12.2;
console.log(Math.round(num)); // округление для ближайшего целого

const test = "18.2px";

console.log(parseInt(test));
console.log(parseFloat(test));