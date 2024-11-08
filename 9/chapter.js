class User {
    constructor(name){
        this.name = name;
    }
    age = 44;
    sayHi(){
        console.log('sayHi:', `Hello ${this.name}`);
    }
    changeAge(value){
        this.age = value;
    }
}
let user = new User('Dima')
let user2 = new User('Ivan')
user2.changeAge(12)
user.sayHi();
console.log('user:',user);
console.log('user2:',user2);

class Admin extends User {
    sayHi(){
        console.log('sayHi:', `Hello Hello ${this.name}`);
    }
}

let admin = new Admin('John');
admin.age = 50;
admin.sayHi()
console.log('admin:',admin);


class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name)
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);


class Clock {
    constructor ({ template }){
        this.template = template
    }
    timer = '';
    render(){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }
    start(){
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
    stop(){
        clearInterval(this.timer);
    }
}
let timer = new Clock({template: 'h:m:s'});
// timer.start();


class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
});

// lowResolutionClock.start();

class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      // помним, что this = Article
      return new this("Сегодняшний дайджест", new Date());
    }
}

class Article2 extends Article{

}
let ar = new Article2('new article', new Date())
let article = new Article('old article', new Date())
console.log("ar:", ar.title, ar.date)

let a = Article2.createTodays();
console.log('a:',a.title);

class Rabbit1 extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}
  
let rabbit1 = new Rabbit1("Кроль");  
console.log( rabbit1.hasOwnProperty('name') ); // Ошибка

console.log('Article:',article);
console.log('Article2:',ar);
console.log('Article:',article.__proto__.__proto__.__proto__);
console.log('Article2:',ar.__proto__.__proto__.__proto__.__proto__);

class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
        return this.#waterAmount;
    }
  
    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
//   console.log(machine.#waterAmount);

class MegaCoffeeMachine extends CoffeeMachine {
    method() {
        console.log( this.waterAmount ); 
    }
}

let mega = new MegaCoffeeMachine();

mega.method()


class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
    // static get [Symbol.species]() {
    //     return Array;
    // }
}
let array = []
let arr = new PowerArray(1, 2, 5, 10, 50);
console.log('arra:',arr);

console.log('proto:', Object.prototype.toString.call(PowerArray));

class Test {
    test = 123;
    static arrow () {
        console.log('this:',this.test);
    };
}

class Test2 extends Test {

}
new Test2().test
console.log('new Test2():',new Test2().test);

class CoffeeMachine2 {
    #waterLimit = 200;
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
    // set power(value){
    //     return this._power = value;
    // }
  
}


let coffeeMachine = new CoffeeMachine2(100);

coffeeMachine.power = 25;
console.log(`Мощность: ${coffeeMachine.power}W`); 
