"use strict";

// If else ветвление

if (4 == 9) {
   console.log('Okay!');
} else {
   console.log('Error');
}


const num = 50;

if (num < 49) {
   console.log('Error!');
} else if (num > 100) {
   console.log('Too much');
} else {
   console.log('Ok!');
}

// Тернарный оператор: Сначала идет условие, которое проверяется и если это условие верно, то выполняется первое действие, если не верно, выполняется второе. Тернарный, потому что 3 аргумента

(num === 50) ? console.log('Ok!'): console.log('Error!');


// Switch case, если ни одни из кейсов не прошел проверку, то выполняется дефолтное условие


const digit = 42;

switch (digit) {
   case 49:
      console.log('Incorrect!');
      break;
   case 100:
      console.log('Incorrect!');
      break;
   case 50:
      console.log('Correct!!!');
      break;
   default:
      console.log('Not this time..');
      break;
}