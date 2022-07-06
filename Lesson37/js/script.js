'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');



box.style.width = '300px';
box.style.backgroundColor = 'lightgreen';
box.style.cssText = 'background-color: black; width: 700px';


btns[2].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
circles[1].style.backgroundColor = 'yellow';
circles[2].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'yellow';
// }



hearts.forEach(item => {
   item.style.backgroundColor = 'orange';
});



const div = document.createElement('div');
const text = document.createTextNode('Текст на странице');

div.classList.add('black');

document.body.append(div);
document.body.append(text);

document.querySelector('.wrapper').append(div);

hearts[1].before(div);
hearts[0].after(div);

div.innerHTML = '<h1>Zdarova banditi</h1>';

// div.textContent = "Hello";

div.insertAdjacentHTML('beforebegin', '<h2> Hello2 </h2>');