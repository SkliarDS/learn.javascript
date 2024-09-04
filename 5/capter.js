let f = new Map();
f.set('num', '22');
f.set('string', 'str');
let john = {'name' : "John", age: 44};
f.set(john, john.age);

let visitCountObj = {};

visitCountObj[john] = 123;
console.log('visitCountObj:',visitCountObj);

console.log('f:',f);

for(let key of f.entries()){
  
    console.log('key:',key);
}

let s = new Set(f);

let marry = {name: 'Marry', age: 88}
s.add(marry).add(john).add(marry);

console.log('s:',s);
for(let key of s){
    console.log('key1:',key);
}
