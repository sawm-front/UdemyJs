'use strict';

const btn = document.querySelectorAll('button');
const overlay = document.querySelector('overlay');
const link = document.querySelector('a');

// btn.addEventListener('click', () => {
//    console.log('Click!');
// });

// btn.addEventListener('mouseenter', () => {
//    console.log('Hover!');
// });

// btn.addEventListener('mouseenter', (event) => {
//    console.log(event.target);
//    event.target.remove();
// })

// let i = 0;
// const deleteElement = (e) => {
//    console.log(e.currentTarget);
//    console.group(e.type);
//    // i++;
//    // if (i == 1) {
//    //    btn.removeEventListener('click', deleteElement);
//    // }
// };

// // btn.addEventListener('click', deleteElement);

// // link.addEventListener('click', function(event) {
// //    event.preventDefault();

// //    console.log(event.target);
// // });


// btn.forEach(btn => {
//    btn.addEventListener('click', deleteElement, {
//       once: true
//    })
// });