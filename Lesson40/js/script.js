'use strict';

// console.log(document.body);

// console.log(document.head);

// console.log(document.documentElement);


console.log(document.body.childNodes);

console.log(document.body.firstChild);

console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);


console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

console.log(document.querySelector('[data-current="3"]').previousElementSibling);

console.log(document.querySelector('[data-current="3"]').previousElementSibling);