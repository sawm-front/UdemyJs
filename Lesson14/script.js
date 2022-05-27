"use strict";

// Циклы 


// Цикл while 

let num = 50;

while (num <= 55) {
   console.log(num);
   num++;
}


// do while
let sum = 69;

do {
   console.log(sum);
   sum++;
}

while (sum < 75);

// for 1: начальная точка 2: условие при котором цикл остановит свою работу 3: шаг цикл, т е что будет происходить каждый раз в новом цилк

for (let i = 1; i < 8; i++) {
   console.log(num);
   num++;
}

for (let i = 1; i < 0; i++) {
   console.log(num);
   num++;
}

for (let i = 1; i < 10; i++) {
   if (i === 6) {
      break;
   }
   console.log(i);
}