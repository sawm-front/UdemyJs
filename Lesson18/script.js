"use strict";


const personalMovieDb = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDb.count = +prompt('Сколько фильмов уже посмотрели?', '');

      while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
         personalMovieDb.count = +prompt('Сколько фильмов уже посмотрели?', '');
      }
   },
   rememberMyFilms: function() {
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
   },
   detectPersonalLevel: function() {
      if (personalMovieDb.count < 10) {
         console.log('Просмотрено мало фильмов..');
      } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
         console.log('Вы классический зритель');
      } else if (personalMovieDb.count >= 30) {
         console.log('Вы киноман');
      } else {
         console.log('Произошла ошибка');
      }
   },
   showMyDb: function(hidden) {
      if (!hidden) {
         console.log(personalMovieDb);
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i <= 3; i++) {
         personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      }
   }

};