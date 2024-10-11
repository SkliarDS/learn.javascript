function printNumbers(from, to){
    let num = from - to;
    let timerId = setInterval(() => {
        console.log('print:',num--);
    }, 1000);
    setTimeout(() => {clearInterval(timerId)}, num * 1000)
};
// printNumbers(10, 2)
function printNumbersSetTime(from, to){
    let num = from - to;
    setTimeout(function timer(){
        console.log('timer:',num--);
        if(num > 0) setTimeout(timer, 1000) ;
    }, 1000);
    
};
// printNumbersSetTime(10, 2)

let worker = {
    someMethod() {
      return 2;
    },
  
    slow(x) {
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // (**)
        cache.set(x, result);
        return result;
    };
}
  
console.log('worker', worker.slow(2) ); 

worker.slow = cachingDecorator(worker.slow); 

console.log('worker2', worker.slow(2) );

function hash() {
    console.log('[]', [].join.call(arguments) ); // 1,2
}

hash(1, 2, 4, 2);

function work(a, b) {
    console.log( a + b ); 
}

function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5); 
for (let args of work.calls) {
    console.log( 'call:' + args.join() );
}

function f(x) {
    console.log(x);
}

function delay(func, num){
    return function (...args){
        setTimeout(() => {
            return func.apply(this, args);
        }, num);
    };

}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("test1"); 
f1500("test2");


function debounce(func, ms){
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), ms);
    }
}
function handelInput(e){
    console.log('input :',e.target.value);
}
let debounceInputHandler = debounce(handelInput, 1000);

document.querySelector('#elem').addEventListener('input', debounce(handelInput, 1000));



function throttle(func, ms){
    let timeout;
    return (arg) => {
        clearInterval(timeout);
        timeout = setInterval(() => func.call(this, arg), ms)
    }
}
function handlerMouse(e){
    console.log('e.target:',e.clientX);
}

let runCursor = throttle(handlerMouse, 1000);
// window.addEventListener('mousemove', runCursor)
// f1200("23"); // показывает 1

let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
};

setTimeout(() => {
    user.sayHi(); // Привет, Вася!
}, 1000);

function sayHi2() {
    console.log('sayHi2', this.name );
    
}
// sayHi.test = 5;
let bound = sayHi2.bind({name: 'Dima'});
bound();

let user12 = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
};
let f1 = user12.sayHi;
setTimeout(f1.bind(user12), 1000);

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user3 = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
};
// askPassword(user3.loginOk.bind(user3), user3.loginFail.bind(user3));
let user4 = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};
// askPassword(user4.login.bind(null, true), user4.login.bind(null, false));








