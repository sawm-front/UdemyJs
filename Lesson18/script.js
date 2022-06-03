"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
   }
}

start();


const personalMovieDb = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};


function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов', '');
      const b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDb.movies[a] = b;
         console.log('Done!');
      } else {
         console.log('Error!');
         i--;
      }
   }
}

rememberMyFilms();




function detectPersonalLevel() {
   if (personalMovieDb.count < 10) {
      console.log('Просмотрено мало фильмов..');
   } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalMovieDb.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Произошла ошибка');
   }
}

detectPersonalLevel();

function showMyDb(hidden) {
   if (!hidden) {
      console.log(personalMovieDb);
   }
}

showMyDb(personalMovieDb.privat);


function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGenres();