const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

const personalMovieDb = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};



// Нам необходимо чтобы цикл сработал 2 раза
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

if (personalMovieDb.count < 10) {
   console.log('Просмотрено мало фильмов..');
} else if (personalMovieDb >= 10 && personalMovieDb.count < 30) {
   console.log('Вы классический зритель');
} else if (personalMovieDb.count >= 30) {
   console.log('Вы киноман');
} else {
   console.log('Произошла ошибка');
}



console.log(personalMovieDb);