function makeUser() {
    return {
        name: "John",
        ref: this,
        say(){
            return this.name;
        }
    };
}

let user = makeUser();
console.log('user:',user.say());

let user3 = {
	name: "John",
	age: 22,
	parent: {
		mother: 'Poza',
		father: 'Puslan'
	},
	sayTell() {
		console.log('heello:', this.name);
	}
};
let admin = {
  	name: 'Pete'
}
function sayHi() {
  	console.log('Hello:', this.name);
}

admin.f = sayHi;
user3.f = sayHi;
admin.f()
user3.f()


let calculator = {
    read(a, b){
        return this.a = a, this.b = b     
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
}
console.log('calculator:',calculator.read(2, 5));
console.log('sum:',calculator.sum());
console.log('mul:',calculator.mul());

let ladder = {
    step: 0,
    up(){
       this.step++;
       return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log('step:',this.step);
        return this;
    },
};
ladder.up().up().down().showStep().down().showStep(); 

function User(name){
    this.name = name;
    this.sayHi = function(){
        console.log('name:',this.name);
    }
}

let john = new User('John');
john.sayHi();

function Calculator(){
    this.read = function(){
        this.a = +prompt('a?', );
        this.b = +prompt('b?', );
    }
    this.sum = function(){
        let sum = this.a + this.b;
        console.log('sum = ',sum);
    }
    this.mult = function(){
        let mult = this.a * this.b;
        console.log('mult = ',mult);
    }
}
let calculator1 = new Calculator();
// calculator1.read()
// calculator1.sum();
// calculator1.mult();

function Accumulator(startValue){
    this.value = startValue;
    this.read = function(){
        this.promt = +prompt('value?',);
        this.value =  this.value + this.promt;
    }
}
let accum = new Accumulator(1);
// accum.read();
// accum.read();
// console.log('accum.value:',accum.value);