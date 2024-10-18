'use strict'
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
    set fullName(value){
      this.name = value; 
    }
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log('user:',user.fullName = 'Dima');
console.log( JSON.stringify(descriptor, null, 2) );


let a = {}
Object.defineProperty(a, 'name', {
	value: "Dmitriy",
	writable: true,
	enumerable: true,
	configurable: false
})

console.log('a:',a);

let descriptor2 = Object.getOwnPropertyDescriptor(a, 'name');

console.log('descriptor2:', JSON.stringify(descriptor2, null, 2));

a.name = 'Alex';
console.log('a.Alex:',a);


Object.defineProperty(a, 'method', {
	get(){
		return this.name;
	},
	set(value){
		return this.name = value;
	}
})
a.method = 'IVAN'
console.log('a.method:',a.method);
console.log('a:',a);

// let person = {};
let person =  Object.defineProperties({}, {
	name: {value: 'Max', writable: true},
	yourCar: {value: 'Tesla',  writable: true, configurable: false},
})
Object.defineProperty(person, 'method', {
	get(){
		console.log('person.method:',this.name);
	},
	set(value){
		console.log('person.metod.set:',this.yourCar = value);
	}
})
person.method;
person.method = 'Mersedes';

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person));
Object.defineProperty(clone, 'surName', {
	value: 'Ivanov'
})
console.log('person:',person);
console.log("clone:", clone)

console.log('compare:',clone == person);