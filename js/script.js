'use strict';


for (let i = 0; i < 5; i++) {
   console.log(i);
}


// *
// **
// ***
// ****
// *****
// ******

let yelka = '';
const ctep = 7;

for (let i = 1; i < ctep; i++) {

   for ( let j = 0; j < i; j++) {
      yelka += '*';
   }

   yelka += '\n';
}

console.log(yelka);

// ++++++++++++++++++++ let to let
// for (let i = 1; i < 3; i++) {
//    console.log(i);
//    for (let j = 1; j < 3; j++) {
//       console.log(j);
      
//    }
// }


// +++++++++++++++++++++ While
// const num = 50;

// while (num < 55) {
//    console.log(num);
//    num++;
// }

// +++++++++++++++++++++  let
// for (let i = 1; i < 10; i++) {
//    if (i === 6) {
      // break;
      // continue;
//    }

//    console.log(i);
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// // console.log(undefined || false);

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// Home
console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ); // NaN

console.log( 1 && 2 && 3 ); // 3

console.log( !1 && 2 || !3 ); // false

console.log( 25 || null && !3 ); // 25

console.log( NaN || null || !3 || undefined || 5); // 5

console.log( NaN || null && !3 && undefined || 5); // 5?

console.log( 5 === 5 && 3 > 1 || 5); // 5 || true


const burger = 3;
const fries = null; 
const cola = 2;
const nuggets = 2;

if (burger === 3 && cola || fries && nuggets) {
   console.log('Супер!')
} else {
   console.log('Уходим!')
}

console.log(burger === 3 && cola || fries && nuggets); // 2

// const burger = 5;
// const fries = null; 

// if (burger || fries) {
//    console.log('Супер!')
// }

// Работа с &&
console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && 'cola'); // 0
// Работа с ||
console.log(1 || 0); // 1
console.log(1 || 5); // 1
console.log(null || 5); // 5
console.log(0 || 'cola'); //cola


// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

// const peronalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// }

// const film1 = prompt("Один из последних просмотренных фильмов?", ""),
//       film2 = prompt("На сколько вы оцениваете его?", ""),
//       film3 = prompt("Один из последних просмотренных фильмов?", ""),
//       film4 = prompt("На сколько вы оцениваете его?", "");

// peronalMovieDB.movies[film1] = film2;
// peronalMovieDB.movies[film3] = film4;

// console.log(peronalMovieDB);