'use strict';

// alert('Hello');

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const peronalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const film1 = prompt("Один из последних просмотренных фильмов?", ""),
      film2 = prompt("На сколько вы оцениваете его?", ""),
      film3 = prompt("Один из последних просмотренных фильмов?", ""),
      film4 = prompt("На сколько вы оцениваете его?", "");

peronalMovieDB.movies[film1] = film2;
peronalMovieDB.movies[film3] = film4;

console.log(peronalMovieDB);