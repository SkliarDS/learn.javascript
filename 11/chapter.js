let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve('done'), 1000);
})

promise.then(
    res => console.log('res:',res),
    err => console.log('err', err)
)

let promise1 = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(2), 1000);
    resolve(1);
});

promise1.then(console.log);

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
}).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
}).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
}).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
});

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log('Thenable' ,resolve); 
        
        setTimeout(() => resolve(this.num * 2), 1000); 
    }
}
  
new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); 
    })
    .then(console.log); 
    
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response)
    .then(res => {
    
        if(res.status == 200){
            return res.json();
        }
    })
    .then(res => res)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log('json:',json);
    })
    .catch(error => console.log('error:',error))
    

fetch('https://jsonplaceholder.typicode.co/users')
    .then(response => {
        console.log('response:',response);
        return response;
    })
    .catch(error => console.error('error:',error))
    .then(() => {
        console.log('Работаем дальше');
    })


const dataFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
};
const dataBase = await dataFetch();
console.log("dataBase:", dataBase);

dataFetch().then(data => {
    document.querySelector('#title').innerHTML = data[0].name;
})

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
])
.then(val => console.log('val:',val))
.catch(console.log);

// function loadJson(url) {
//     return fetch(url).then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

// loadJson('no-such-user.json').catch(alert);

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        console.log('response.status', response.status)
    }
}

loadJson('no-such-user.json')

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  
async function f() {
    const result = await wait();
    return console.log('result',result);
    
}
  
f();
