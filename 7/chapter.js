// 'use strict'
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

function isIsogram(str){
	
	return new Set(str.toUpperCase()).size == str.length;
}

console.log('isIsogram:',isIsogram('Dermatoglyphics'));
console.log('isIsogram:',isIsogram('aba'));
console.log('isIsogram:',isIsogram('isogram'));
console.log('isIsogram:',isIsogram('moOse'));


function getCount(str) {
	let count = 0;
	let vowels = 'aeiou';
	for (let i = 0; i < str.length; i++){
		if(vowels.indexOf(str[i].toLowerCase()) !== -1){
			count++;
		}
	}
	return count;
}

console.log('getCount(str):',getCount('abracadabra'));

function dontGiveMeFive(start, end){
	let count = 1;
	for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            count++; 
        }
    }
    return count;
}

console.log('dontGiveMeFive(start, end):',dontGiveMeFive(4, 17));
console.log('dontGiveMeFive(start, end):',dontGiveMeFive(1, 9));
console.log('dontGiveMeFive(start, end):',dontGiveMeFive(1, 3));

let obj = {
	a: 2,
	get f(){
		
	},
	set f(value){
		console.log('a:',this.a);
		this.a = value;
		console.log('set.f:',this.a);
	},
}
obj.f = 4
