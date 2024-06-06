'use strict';

// =======================================================================================================
const user = {
   name: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1994',
   showMyPublickData: function() {
      console.log(`${this.name} ${this.surname}`);
   }
}
// Object.defineProperty(user, 'birthday', {writable: false});
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) {
   console.log(key);
}

Object.defineProperties(user, {
   name: {writable: false},
   surname: {writable: false}
});

// writable
// enumerable
// configurable


// =======================================================================================================
// Symbol
const obj = {
   'name': 'Test',
   [Symbol('id')]: 1,
   id: 123
}

// let id = Symbol('id');
// obj[id] = 1;

// console.log(obj);
// console.log(obj[id]);


// =======================================================================================================
// Оператор опциональной цепочки (?.)
// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
   if (box.matches('.this')) {
      console.log(box);
   } 
}); 

// boxesQuery[0].remove();
// boxesGet[0].remove();

// console.log(boxesQuery);
// console.log(boxesGet);
// console.log(document.body.children);

// console.log(Array.from(boxesGet));

// console.log(block);

// if (block) {
//    console.log(block.textContent);
// }

// console.log(block?.textContent);
// console.log(1 + 2);
// const userData = {
//    name: 'Ivan',
//    age: null,
//    say: function() {
//       console.log('Hello');
//    }
// };

// userData.say();
// userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//    console.log(userData.skills.js);
// }

// console.log(userData?.skills?.js);


// =======================================================================================================
// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//    elem.style.height = `${h ?? 200}px`; 
//    elem.style.width = `${w ?? 200}px`;  
//    elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;
// console.log(userName ?? userKey ?? 'User');

// ?? - реагирует только на null или undefined
// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.

// =======================================================================================================
// Действия формы с добавлением фильмов, добавление в стисок, сортировка и удаление, ограничение символов
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
   const poster = document.querySelector('.promo__bg');
   const genre = poster.querySelector('.promo__genre');
   const movieList = document.querySelector('.promo__interactive-list');
   const addForm = document.querySelector('form.add');
   const addInput = addForm.querySelector('.adding__input');
   const checkbox = addForm.querySelector('[type="checkbox"]');

   addForm.addEventListener('submit', (event) => {
       event.preventDefault();

       let newFilm = addInput.value;
       const favorite = checkbox.checked;

       if (newFilm) {

           if (newFilm.length > 20) {
               newFilm = `${newFilm.substring(0, 21)}...`;
           }

           if (favorite) {
               console.log('Добавляем любимый фильм');
           }

           movieDB.movies.push(newFilm);
           sortArr(movieDB.movies);
   
           createMovieList(movieDB.movies, movieList);
       }

       event.target.reset();

   });

   const deleteAdv = (arr) => {
       arr.forEach(item => {
           item.remove();
       });
   };

   const makeChanges = () => {
       genre.textContent = 'Драма';

       poster.style.backgroundImage = 'url("img/bg.jpg")';
   };

   const sortArr = (arr) => {
       arr.sort();
   };

   function createMovieList(films, parent) {
       parent.innerHTML = '';

       sortArr(films);

       films.forEach((film, i) => {
           parent.innerHTML += `
               <li class="promo__interactive-item">${i + 1}. ${film}
                   <div class="delete"></div>
               </li>
           `;
       });

       document.querySelectorAll('.delete').forEach((btn, i) => {
           btn.addEventListener('click', () => {
               btn.parentElement.remove();
               movieDB.movies.splice(i, 1 );
               
               createMovieList(movieDB.movies, movieList);
           });
       });
   }
   

   deleteAdv(adv);
   makeChanges();
   createMovieList(movieDB.movies, movieList);

});


// Test on recurs =================================================================================
function factorial(n) {
   if (typeof(n) !== 'number' || !Number.isInteger(n)) {
      return 'Error!'
   } 
   if (n >= 1) {
      return n * factorial(n - 1);
   } else {
      return 1;
   }
}
// factorial(5);
// console.log(factorial(5));
// console.log(factorial('das'));



// ================================================================================================
// function pow(x, n) {
//    let result = 1;

//    for (let i = 0; i < n; i++) {
//       result *= x;
//    }

//    return result;
// }

// function pow(x, n) {
//    if (n === 1) {
//       return x;
//    } else {
//       return x * pow(x, n - 1);
//    }
// }

// console.log(pow(2, 1)); //2
// console.log(pow(2, 2)); //4
// pow(2, 3); //8
// console.log(pow(2, 3)); //8
// console.log(pow(2, 4)); //16

let students = {
   js: [{
      name: 'Ivan',
      progress: 100
   }, {
      name: 'Ivan',
      progress: 60
   }],

   html: {
      basic: [{
         name: 'Peter',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }],

      semi: {
         students: [{
            name: 'test',
            progress: 100
         }]
      }
   }
};

function getTotalProgressByIteration(data) {
   let total = 0;
   let students = 0;

   for (let course of Object.values(data)) {
      if (Array.isArray(course)) {
         students += course.length;

         for ( let i = 0; i < course.length; i++) {
            total += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)) {
            students += subCourse.length;
            
            for ( let i = 0; i < subCourse.length; i++) {
               total += subCourse[i].progress;
            }
         }
      }
   }

   return total / students;
}

// console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) {
   if (Array.isArray(data)) {
      let total = 0;

      for ( let i = 0; i < data.length; i++) {
         total += data[i].progress;
      }

      return [total, data.length];
   } else {
      let total = [0, 0];

      for (let subData of Object.values(data)) {
         const subDataArr = getTotalProgressByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }

      return total;
   }
}

const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);


// ================================================================================================
// DOM
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector('#btn').parentNode);
// console.log(document.querySelector('#btn').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling); //next elem  
// console.log(document.querySelector('[data-current="3"]').previousSibling); //prev elem
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//    if (node.nodeName == '#text') {
//       continue;
//    }
   
//    console.log(node);
// };


// ================================================================================================
// const btn = document.querySelector('button');
// const btns = document.querySelector('button');

// Не рекомендуемый формат для записи
// btn.onclick = function() {
//    alert('Click!');
// };
// можно забыть про первый элемент и получать только последний вариант записи
// btn.onclick = function() {
//    alert('Second click!');
// };

// Правильная запись ================================
// btn.addEventListener('click', () => {
//    alert('Click!');
// });

// btn.addEventListener('mouseenter', (event) => {
//    // console.log(event);
//    console.log(event.target);
//    // event.target.remove();
//    // console.log('enter');
// });

let i = 0;

const deleteElement = (e) => {
   console.log(e.target);
   i++;
   if(i == 1) {
      btn.removeEventListener('mouseenter', deleteElement);
   }
};

// btn.addEventListener('mouseenter', deleteElement);
btns.forEach(bts => {
   bts.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
   event.preventDefault();

   console.log(event.target);
});


// ================================================================================================
/*
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 
*/
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
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});


// ================================================================================================
//  const someName = document.getElementById('');
// const box = document.getElementById('box');
// const boxTwo = document.getElementsByClassName('boxTwo');

// box.style.backgroundColor = 'blue';
// box.style.width = '100px';
// box.style.height = '100px';

// boxTwo[0].style.color = 'red';
// Для моного строчных стилей
// box.style.cssText = 'background-color: red; width: 200px';
// box.style.cssText = `background-color: red; width: ${paramWidth}`;

//Циклы стилей
// for (let i = 0; i < box; i++) {
//    box[i].style.backgroundColor = 'blue';
// }

// box.forEach(item => {
//    item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('text');

// div.classList.add('black');

box.innerHTML = "Hello!"   ;
div.textContent = "Hello";

// Вставить элемент в Конце
// document.body.append(div);

// Вставить элемент в Начале
// document.body.prepend(div);


// test 3.0 ========================================================================================
// Search error in code
const restorantData = {
   menu: [
      {
      name: 'Salad Caesar',
      price: '14$'
      },
      {
      name: 'Pizza Diavola',
      price: '9$'
      },
      {
      name: 'Beefsteak',
      price: '17$'
      },
      {
      name: 'Napoleon',
      price: '7$'
      }
   ],
   waitors: [
      {name: 'Alice', age: 22}, 
      {name: 'John', age: 24}
   ],
   averageLunchPrice: '20$',
   openNow: true
};

function isOpen(prop) {
   let answer = '';
   prop ? answer = 'Открыто' : answer = 'Закрыто';

   return answer;
}
// console.log(restorantData.openNow);
// console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
   if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
      return 'Цена ниже средней';
   } else {
      return 'Цена выше средней';
   }
}

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
   const copy = Object.assign({}, data);

   // copy.waitors = {name: 'Mike', age: 32}; 
   copy.waitors = [{name: 'Mike', age: 32}];
   return copy; 
}

// transferWaitors(restorantData); 
// console.log(transferWaitors(restorantData.waitors));


// Повтор, тесты ====================================================================================
// 1)
// let x = 5;
// console.log(x++);

// 2)
// console.log([] + false - null + true); // NaN

// 3)
// let y = 1;
// let x = y = 2;
// alert(x); // 2

// 4)
// console.log([] + 1 + 2); //"12"

// 5)
// alert("1"[0]); //1

// 6)
// console.log(2 && 1 && null && 0 && undefined); // null

// 7)
// console.log(!!( 1 && 2 ) === ( 1 && 2 )); //false

// 8)
// alert( null || 2 && 3 || 4); // 3

// 9)
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b); // false

// 10)
// alert(+"infinity");  //infinity

// 11)
// console.log("Eжик" > "яблоко"); //false

// 12)
// console.log(0 || "" || 2 || undefined || true || false); // true



// Замыкания и лексическое окружение ================================================================
// let number = 5; debugger

// function logNumber() {
//    // let number = 4; debugger
//    console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

function createCounter() {
   let counter = 0;

   const myFunction = function() {
      counter = counter + 1;
      return counter;
   }

   return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

//  console.log(c1, c2, c3);

// Динамическая типизация ============================================================================


// document.getElementById("myId").style.cssText = "background-color:pink;"


// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(5)));

// 2)
// console.log(typeof(5 + ''));
// console.log(typeof(null + ''));

// const nam = 5;
// console.log('https://domen.com/' + nam);

// const fontSize = 26 + 'px';

// To number

// 1)
// console.log(typeof(Number('5')));

// 2)
// console.log(typeof(+"5"));

// 3)
// console.log(typeof(parseInt("15px", 10)));


// To boolean
// False
0, '', null, undefined, NaN;

// 1)
// let switcher = null;

// if (switcher) {
//    console.log('Working...');
// } 

// switcher = 1;

// if (switcher) {
//    console.log('Working 2...');
// } 

// 2)
// console.log(typeof(Boolean('5')));

// 3)
// console.log(typeof(!!"5"));


// array test.01 =====================================================================================

// const itemArray = [43, 23, 4, 123];
// console.log(itemArray.sort( function(a, b) {
//    return a - b;
// }));


const itemStringArray = ['Abs', 'gava', 'bAll'];
// console.log(itemStringArray.sort());



// function itemString(arr) {
//    for (let i = 0; i <arr.length; i++) {
//       sorted = [];
//       sorted.push(arr[i].toLowerCase());
//    }
// };

// itemString(itemStringArray);
// console.log(itemString(itemStringArray));


// Object test.01 =====================================================================================
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
   arr.sort();
   
   const teamOne = [], 
         teamTwo = [], 
         teamThree = [], 
         rest = [];

   for (let i = 0; i < arr.length; i++) {
      if (i < 3) {
         teamOne.push(arr[i]);
      } else if (i < 6) {
         teamTwo.push(arr[i]);
      } else if (i < 9) {
         teamThree.push(arr[i]);
      } else {
         rest.push(arr[i]);
      }
   }

   return [teamOne, teamTwo, teamThree, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}` ]

}
// sortStudentsByGroups(students);
// console.log(sortStudentsByGroups(students));

// Object test.01 =====================================================================================
const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {
   let square = 0;
   let volume = 0;

   data.shops.forEach(shop => {
      square += shop.width * shop.length; 
   });
   
   volume = data.height * square;

   if (data.budget - (volume * data.moneyPer1m3) >= 0) {
      console.log('Бюджета достаточно');
      return 'Бюджета достаточно';
   } else {
      console.log('Бюджета недостаточно');
      return 'Бюджета недостаточно';
   }
}
// isBudgetEnough(shoppingMallData);


// Object ===========================================================================================

const peronalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      peronalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
   
      while (peronalMovieDB.count == '' || peronalMovieDB.count == null || isNaN(peronalMovieDB.count)) {
         peronalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
      }
   },
   rememberMyFilms: function() {
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
   },
   detectePersonalLevel: function() {
      if (peronalMovieDB.count < 10) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30) {
         console.log('Вы классический зритель');
      } else if (peronalMovieDB.count >= 30) {
         console.log('Вы киноман');
      } else {
         console.log('Ошибка');
      }
   },
   showMyDB: function(hidden) {
      if (!hidden) {
         console.log(peronalMovieDB);
      }
   },
   toggleVisibleMyDB: function() {
      if (peronalMovieDB.privat) {
         peronalMovieDB.privat = false;
      } else {
         peronalMovieDB.privat = true;
      }
   },
   writeYourGenres: function() {
      for (let j = 1; j <= 3; j++) {
         let genre = prompt(`Ваш любимый жанр под номером ${j}`);

         if (genre === "" || genre == null) {
            console.log("Вы ввели некорректное значение");
            j--;
         } else {
            peronalMovieDB.genres[j - 1] = genre;
         }
      }

      peronalMovieDB.genres.forEach((item, j) => {
         console.log(`Любимый жанр ${j + 1} - это ${item}`);
      });
   }
}




// OOP ==============================================================================================
// let str = "Some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const solder = {
   health: 400,
   armor: 100,
   sayHello: function() {
      console.log('Hi!');
   }
};

const john = Object.create(solder);
// const john = {
//    health: 100
// };

// Object.setPrototypeOf(john, solder);
// john.sayHello();

// Tests 3.0 =========================================================================================
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    return str.split('').reverse().join('');
}
// reverse(someString);
// console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   let str = '';
   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

   arr.forEach(function(curr, i) {
      if (curr !== missingCurr) {
         str += `${curr}\n`
      }
   });

   return str;
}
// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


// Tests 2.0 =========================================================================================
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   let str = '';

   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

   arr.forEach(member => {
      str += `${member} `
   });

   console.log(str);
   return str;
}
// showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(city => {
      console.log(city.toLowerCase());
   });
}
// standardizeStrings(favoriteCities);


// Tests =========================================================================================
const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
       languages: ['ru', 'eng'],
       programmingLangs: {
           js: '20%',
           php: '10%'
       },
       exp: '1 month'
   },
   showAgeAndLangs: function(plan) {
      let {age} = plan;
      let {languages} = plan.skills;

      let str = `Мне ${age} и я владею языками: `;

      languages.forEach(function(lang) {
         str += `${lang.toUpperCase()} `;
      });

      return str;
   }
};

function showExperience(plan) {
   let {exp} = plan.skills;
   return exp;
}
showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
   let str = ' ';

   let {programmingLangs} = plan.skills;
   for ( let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
   }
   
   return str;
}

showProgrammingLangs(personalPlanPeter);


// ES 6 - ES 9 =====================================================================================
// let a = 5,
//     b = a;

// console.log(a);
// console.log(b);

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj; // Ссылка на const obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
// console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }

const add = {
   d: 17,
   e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdaddada';

// console.log(newArray);
// console.log(oldArray);

const video = ['Youtube', 'Vimeo', 'Rutube'],
      blogs = ['Wordpress', 'Livejornal', 'Blogger'],
      internet = [...video, ...blogs, 'Vk', 'Facebook'];

// console.log(internet);

function log(a, b, c) {
   // console.log(a);
   // console.log(b);
   // console.log(c);
}
const num = [2, 5, 7];

// log(...num);

const array = ['a', 'o'];

const newAarray = [...array]

// Array ============================================================================================
// const arr = [1, 2, 3, 6, 8]
// const arr = [52, 13, 46, 38]
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//    return a - b;
// }

// =========== forEach() ==========================
// arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// =========== В консоле
// 0: 2 внутри массива 2,3,6,8
// 1: 3 внутри массива 2,3,6,8
// 2: 6 внутри массива 2,3,6,8
// 3: 8 внутри массива 2,3,6,8

// console.log(arr.length);  // Работает по принципу: считает все индексы и к последнему +1

// arr.pop(); // [ 1, 2, 3, 6]
// arr.push(10); // [ 1, 2, 3, 6, 8, 10 ]

// console.log(arr);

// ========== Цикл для перебора массива ============
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// ========== Результат цикла:
// 1
// 2
// 3
// 6
// 8

// =========== Цикл для перебора массива ============
// for (let value of arr) {
//    console.log(value);
// }
// ============ Результат цикла:
// 1
// 2
// 3
// 6
// 8

// const str = prompt("", "");
// const product = str.split(", ");
// console.log(product);

// Object ES6 =======================================================================================
const BlockOptions = {
   width: 1024,
   height: 1024,
   color: {
      bg: 'red',
      border: '1px'
   },
   makeTest: function () {
      console.log("Test");
   }
}
// Проверка работы функций в объекте
// BlockOptions.makeTest();

// Переменная для подсчета вложенных элементов
// let counterOptions = 0;
// ============== Перебор вложенных объектов =====================================
// for (let key in BlockOptions) {
//    // Проверка есть ли вложение в объекте
//    if (typeof(BlockOptions[key]) === 'object') {
//       for (let i in BlockOptions[key]) {         
//           console.log(`Свойство: ${i}, имеет значение ${BlockOptions[key][i]}`);
//           counterOptions++;
//       }
//    } else {
//        console.log(`Свойство: ${key}, имеет значение ${BlockOptions[key]}`);
//        counterOptions++;
//    }
// }
// console.log(counterOptions);

// ============== Способ для получения количества элементов в объекте ============
// console.log(Object.keys(BlockOptions).length);



// Callback function ================================================================================
function firstFunction(arg1, callback) {
   console.log(`Первая функция: ${arg1}!`);
   callback();
}

function done() {
   console.log('Good!');
}

// firstFunction(5, done);

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
// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
//    }
// }

// // start();

// const peronalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// }

// function rememberMyFilms () {
//    for (let i = 0; i < 2; i++) {
//       let a = prompt("Один из последних просмотренных фильмов?", "");
//       let b = prompt("На сколько вы оцениваете его?", "");

//       if (a != '' && b != '' && a != true && b != true && a.length != 50) {
//          peronalMovieDB.movies[a] = b;
//          console.log('Ales Good!');
//       } else {
//          console.log('Problema');
//          i--;
//       }
//    }
// }

// // rememberMyFilms();

// function detectePersonalLevel() {
//    if (peronalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов');
//    } else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30) {
//       console.log('Вы классический зритель');
//    } else if (peronalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//    } else {
//       console.log('Ошибка');
//    }
// }

// // detectePersonalLevel();

// // Выводит обьект с информацие если не стоит peronalMovieDB.privat = true
// function showMyDB(hidden) {
//    if (!hidden) {
//       console.log(peronalMovieDB);
//    }
// }

// // showMyDB(peronalMovieDB.privat);

// function writeYourGenres() {
//    for (let j = 1; j <= 3; j++) {
//       // Усовершенствованный вариант кода
//       peronalMovieDB.genres[j - 1] = prompt(`Ваш любимый жанр под номером ${j}`);

//       // Обычный вариант кода
//       // const genre = prompt(`Ваш любимый жанр под номером ${j}`);
//       // peronalMovieDB.genres[j - 1] = genre;
//    }
// }

// // writeYourGenres();




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