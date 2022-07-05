"use strict";

let str = "some";

let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


console.dir([1, 2, 3]);

// Большой прототип, который описывает всех солдат
const soldier = {
   health: 400,
   armor: 100,
   gun: 'm16',
   rank: 'sergeant'
};

// Экземпляр который содержит в себе все  данные прототипа все свйоства и все методы


// const john = {
//    health: 100,
//    rank: 'copral'
// };

// john.__proto__ = soldier;

// console.log(john.gun);


// Мы создаем новый объект Джон, котрый будет прототипно наследовать от объекта soldier
const john = Object.create(soldier);