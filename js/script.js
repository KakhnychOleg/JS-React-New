'use strict';

// Callback function ================================================================================
function firstFunction(arg1, callback) {
   console.log(`Первая функция: ${arg1}!`);
   callback();
}

function done() {
   console.log('Good!');
}

firstFunction(5, done);

// Пример анонимной функции ++++++++++++++++++++++
// firstFunction(5, function() {
//    console.log('Good!');
// });


// Место для задачи по функциям ======================================================================
function calculateVolumeAndArea(calculate) {
   if (calculate < 0 || calculate == " " || !Number.isInteger(calculate)) {
      return 'При вычислении произошла ошибка';
   }

   const resultV = calculate * calculate * calculate;
   const resultS = 6 * (calculate * calculate);
    
   return `Объем куба: ${resultV}, площадь всей поверхности: ${resultS}`;
}

// calculateVolumeAndArea(15);
// console.log(calculateVolumeAndArea(15));


// Место для задачи по функциям ======================================================================
function getCoupeNumber(placeNumber) {
   if (placeNumber < 0 || placeNumber == " " || !Number.isInteger(placeNumber)) {
      return 'При вычислении произошла ошибка';
   }

   if (placeNumber === 0 || placeNumber > 36) {
      return 'Таких мест в вагоне не существует';
   }

   return Math.ceil(placeNumber / 4);
}

// getCoupeNumber(33);
// console.log(getCoupeNumber(33));


// optimaze user popup. Part 2 =======================================================================
let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
   }
}

// start();

const peronalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

function rememberMyFilms () {
   for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?", "");
      let b = prompt("На сколько вы оцениваете его?", "");

      if (a != '' && b != '' && a != true && b != true && a.length != 50) {
         peronalMovieDB.movies[a] = b;
         console.log('Ales Good!');
      } else {
         console.log('Problema');
         i--;
      }
   }
}

// rememberMyFilms();

function detectePersonalLevel() {
   if (peronalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
   } else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (peronalMovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Ошибка');
   }
}

// detectePersonalLevel();

// Выводит обьект с информацие если не стоит peronalMovieDB.privat = true
function showMyDB(hidden) {
   if (!hidden) {
      console.log(peronalMovieDB);
   }
}

// showMyDB(peronalMovieDB.privat);

function writeYourGenres() {
   for (let j = 1; j <= 3; j++) {
      // Усовершенствованный вариант кода
      peronalMovieDB.genres[j - 1] = prompt(`Ваш любимый жанр под номером ${j}`);

      // Обычный вариант кода
      // const genre = prompt(`Ваш любимый жанр под номером ${j}`);
      // peronalMovieDB.genres[j - 1] = genre;
   }
}

// writeYourGenres();




// Method String
// let someText = "Hello World!";

// console.log(someText.slice(0, 5)); // Hello
// console.log(someText.indexOf('o')); // 4
// console.log(someText.toLocaleUpperCase()); // HELLO WORLD!
// console.log(someText.toLocaleLowerCase()); // hello world!


// // Method Number
// let number = 12.2;
// console.log(Math.round(number));

// const test = "12.2px";
// console.log(parseInt(test));

// #1
// function sayHello(name) {
//    return `Привет, ${name}!`;
// }
// sayHello('Антон');

// // #2
// function returnNeighboringNumbers(number) {
//    return [number - 1, number, number + 1];
// }
// returnNeighboringNumbers(5);

// ++++++++++++++++++++++++ Dont repeat yourself +++++++++++++++++++++++

// const usdCurr = 26;
// const eurCurr = 28;
// const discount = 0.5;

// function convert(amount, curr) {
//    return curr * amount;
// }

// function discountPrice(result) {
//    console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// discountPrice(res);


// test arrow function
// const arrow = (a, b) => a * b;
// console.log(arrow(5, 5));

// test function declaration
// function summa(a, b) {
//    return (a + b);
// }

// console.log(summa(5, 12));

// test function exprassion
// const amotherNum = function() {
//    console.log('Hello!');
// };

// amotherNum();



// optimaze user popup
// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

// const peronalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// }

// for (let i = 0; i < 2; i++) {
//    let a = prompt("Один из последних просмотренных фильмов?", "");
//    let b = prompt("На сколько вы оцениваете его?", "");

//    if (a != '' && b != '' && a != true && b != true && a.length != 50) {
//       peronalMovieDB.movies[a] = b;
//       console.log('Ales Good!');
//    } else {
//       console.log('Problema');
//       i--;
//    }

// }

// console.log(peronalMovieDB);

// const film1 = prompt("Один из последних просмотренных фильмов?", ""),
//       film2 = prompt("На сколько вы оцениваете его?", ""),
//       film3 = prompt("Один из последних просмотренных фильмов?", ""),
//       film4 = prompt("На сколько вы оцениваете его?", "");

// peronalMovieDB.movies[film1] = film2;
// peronalMovieDB.movies[film3] = film4;


// *
// **
// ***
// ****
// *****
// ******

// let yelka = '';
// const ctep = 7;

// for (let i = 1; i < ctep; i++) {

//    for ( let j = 0; j < i; j++) {
//       yelka += '*';
//    }

//    yelka += '\n';
// }

// console.log(yelka);

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
// console.log( NaN || 2 || undefined ); // 2

// console.log( NaN && 2 && undefined ); // NaN

// console.log( 1 && 2 && 3 ); // 3

// console.log( !1 && 2 || !3 ); // false

// console.log( 25 || null && !3 ); // 25

// console.log( NaN || null || !3 || undefined || 5); // 5

// console.log( NaN || null && !3 && undefined || 5); // 5?

// console.log( 5 === 5 && 3 > 1 || 5); // 5 || true


// const burger = 3;
// const fries = null; 
// const cola = 2;
// const nuggets = 2;

// if (burger === 3 && cola || fries && nuggets) {
//    console.log('Супер!')
// } else {
//    console.log('Уходим!')
// }

// console.log(burger === 3 && cola || fries && nuggets); // 2

// const burger = 5;
// const fries = null; 

// if (burger || fries) {
//    console.log('Супер!')
// }

// Работа с &&
// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'cola'); // 0
// // Работа с ||
// console.log(1 || 0); // 1
// console.log(1 || 5); // 1
// console.log(null || 5); // 5
// console.log(0 || 'cola'); //cola


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