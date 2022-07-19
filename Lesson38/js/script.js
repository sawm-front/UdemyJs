/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


document.addEventListener('DOMContentLoaded', () => {

   const movieDB = {
      movies: [
         "Логан",
         "Лига справедливости",
         "Ла-ла лэнд",
         "Одержимость",
         "Скотт Пилигрим против..."
      ]
   };

   const adv = document.querySelectorAll('.promo__adv img');
   const genre = document.querySelector('.promo__genre');
   const poster = document.querySelector('.promo__bg');
   const movieList = document.querySelector('.promo__interactive-list');
   const addForm = document.querySelector('form.add');
   addInput = addForm.querySelector('.adding__input');


   document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
         btn.parentElement.remove();
         movieDB.movies.splice(i, 1);
      })
   });


   adv.forEach(function(item) {
      item.remove();
   });

   genre.textContent = 'Драма';

   poster.style.backgroundImage = 'url(img/bg.jpg)';

   movieList.innerHTML = ""; // Очистили 

   movieDB.movies.sort();

   console.log(poster.innerHTML);


   // Записали новую строку
   movieDB.movies.forEach((film, i) => {
      movieList.innerHTML += ` 

   <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
   </li>
   `;
   });
});