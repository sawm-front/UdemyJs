"use strict";

// const obj = {
//    a: 5,
//    b: 1
// }

// const copy = obj;

// console.log(copy);

// copy.b = 55;

// console.log(copy);

// console.log(obj);


//Пройдемся по старому объекту, скопируем все свйоства что там есть и поместим в новую копию, которая изначальна была пустым объектом.

function copy(mainObj) {
   let objCopy = {};

   for (let key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
numbers.c.x = 10;
console.log(newNumbers);

console.log(numbers);

const add = {
   d: 17,
   e: 20
};

console.log(Object.assign(numbers, add)); // объединение объектов


const clone = (Object.assign({}, add)); // объединение объектов

clone.d = 20;

console.log(add);
console.log(clone);

const oldaArray = ['a', 'b', 'c'];

const newArray = oldaArray.slice();

newArray[1] = 'asdasdasdasd';
console.log(newArray);
console.log(oldaArray);


const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wp', 'lj', 'blogger'];
internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];

log(...num);