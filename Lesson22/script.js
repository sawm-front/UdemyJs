"use strict";

const str = "test";
const arr = [1, 2, 4];


console.log(str.toUpperCase());

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //с какой позиции начинается слово fruit, узнать ли есть буквы или еще что-нибудь внутри искомой строки

const logg = "Hello world";

console.log(logg.slice(6, 11)); // (start, end)что мы хотим вернуть из этой строки и задаем два параметры, первый - с какой части строки возвращать, второй - где заканчивать вырезание кусочка, но не включая

console.log(logg.substring(6, 11)); // тоже поддерживает отрицательные значения(будет приниматься за 0) и первый аргумент можно задавать больше чем второй

console.log(logg.substr(6, 11));

const num = 12.2;

console.log(Math.round(num));

const test = '57.7px';
console.log(parseInt(test));