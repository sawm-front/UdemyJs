"use strict";

const options = {
   name: 'test',
   width: 1024,
   height: 768,
   colors: {
      border: 'black',
      bg: 'red'
   },
};

console.log(Object.keys(options).length);


console.log(options["colors"]["border"]);
console.log(options.name);

// Удаление объекта
delete options.name;

console.log(options);

// Перебор свойств внутри объекта
for (let key in options)
   // Дословно - дай нам свойства от объекта options.
   console.log(`Свойство ${key} имеет значение ${options[key]}`);

// Перебор внутри перебора 

let counter = 0;
for (let key in options) {
   if (typeof(options[key]) === 'object') {
      for (let i in options[key][key]) {
         console.log(`Свойство ${i} имеет значение ${options[key]}`);
         counter++;
      }
   } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
   }

}


console.log(counter);