"use strict";

const obj = new Object();

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red',
   }
};


console.log(options.colors);


delete options.name;

console.log(options);

// перебор 
for (let key in options) {
   console.log(`Свойства ${key} имеет значаение ${options.;\;\\]]]key}`);
}