//  [[Prototype]] __proto__
let animal = {
    eats: true,
    run: true,
    sleep: true,
    jumps: null,
    eat() {
        this.full = true;
    },
    walk() {
        console.log("Animal walk");
    }, 
    walk2() {
        console.log("Animal walk2");
    }, 
    set method(value) {
        this.run = value;
       console.log('this.run.set:',this.run);
    },
    
    get method() {
        console.log('this:',this);
    }   
}
let rabbit = {
    jumps: false,
    eats: false,
    run: 'run',
    name: 'Pink',
    __proto__: animal,
}

// rabbit.walk()
rabbit.method
// rabbit.method = false;

console.log('animal:', animal);
console.log('rabbit:', rabbit);
console.log('rabbit.run:',rabbit.run);

Object.defineProperty(rabbit, 'walk', {
    enumerable: false
})

for(let key in rabbit){
    if(rabbit.hasOwnProperty(key)){
        console.log('св-ва которые есть:',key);
    } else {
        console.log('св-ва которых нет:',key);
    }
}
console.log('Object.animal:',Object.entries(animal));
console.log('Object.rabbit:',Object.entries(rabbit));

//  F.prototype
let animal1 = {
    eats: true,
    name: 'Pink',
};
function Rabbit(name) {
    if(name){
        this.name = name;
    }
}
let arr2 = [1, 2, 3];
let arr3 = new arr2.constructor();
console.log('arr3:',arr3);


Rabbit.prototype = animal1;
Rabbit.prototype.run = true;
let rabbit1 = new Rabbit('White'); //  rabbit.__proto__ == animal
let rabbit2 = new Rabbit("Black Rabbit"); //  rabbit.__proto__ == animal

console.log( 'rabbit1', rabbit1 ); // true

// Встроенные прототипы

let obj = {};
let arr = [1, 2, 3];

console.log('obj:',obj);
console.log('arr', arr);

// Методы прототипов

let pig = Object.create(rabbit, {
    color: {
        value: 'Black',
    }
});
console.log('pig:', pig);
console.log('rabbtitOfpig:', rabbit);
console.log('Object.getPrototypeOf:', Object.getPrototypeOf(pig));


// Задачи
  
console.log( '1', rabbit.jumps ); // ? (1) false

delete rabbit.jumps;

console.log('2', rabbit.jumps ); // ? (2) null

delete animal.jumps;

console.log('3', rabbit.jumps ); // ? (3) undefined


let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};
console.log('pockets:',pockets.glasses);

rabbit.eat();
console.log('rabbit:',rabbit);
console.log('animal:',animal);

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food];
    }
};
  
let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};


speedy.eat('apple');
speedy.eat('bread');
console.log( speedy.stomach ); // apple
console.log( lazy.stomach ); // apple


function Rabbit3() {}

Rabbit3.prototype = {
    eats: true
};

let rabbit3 = new Rabbit3();
Rabbit3.prototype = {eats: false} // не влияет на уже созданные объекты
let rabbit4 = new Rabbit3();
Rabbit3.prototype.eats = 'bla'
console.log('rabbit3', rabbit3.eats)
console.log('rabbit4', rabbit4.eats)

Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
}
Function.prototype.defer2 = function(ms) {
    let f = this;
    return function (...args){
        setTimeout(() => {f.apply(this, args), ms})
    }
}
function f(){
    console.log('f:','Hello');
}
function f2(a, b){
    console.log('f:',a + b);
}

f.defer(1000);
f2.defer2(1000)(2, 3);
console.log('fuction:',Object.getOwnPropertyNames(Function.prototype));

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join(',');
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";


for(let key in dictionary) {
  console.log('key',key); 
}

console.log('dictionary',dictionary.toString()); // "apple,__proto__"


const obj11 = {};
const num = 42;
const str = "Hello";
const func = function() {};

// Получение прототипов
console.log(Object.getPrototypeOf(obj11));  // Вывод: {} (Object.prototype)
console.log(Object.getPrototypeOf(num));  // Вывод: [Number: 0] (Number.prototype)
console.log(Object.getPrototypeOf(str));  // Вывод: {} (String.prototype)
console.log(Object.getPrototypeOf(func)); // Вывод: f() (Function.prototype)
console.log(Object.getPrototypeOf(arr2)); // Вывод: [] (Array.prototype)


  