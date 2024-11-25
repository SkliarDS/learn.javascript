const nodeEl = document.querySelector('#title');
const input = document.querySelector('#input');

let obj = {
    elValue: '',
};

let proxyObj = new Proxy(obj, {
    get(obj, value){
        obj[value] = value;
    },
    set(obj, prop, val){
        obj[prop] = val;
        nodeEl.innerHTML = val;
        return true;
    }
});

input.addEventListener('input' , (e) => {
    proxyObj.elValue = e.target.value;

})
console.log('proxyObj:',proxyObj);

// nodeEl.innerHTML = obj.elValue;

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
    get(target, prop){
        if(prop in target){
            return target[prop];
        } else {
            return prop;
        }
    }
})
console.log('dictionary:',dictionary['fff']);
console.log('dictionary:',dictionary['Bye']);

let numbers = {
    a: 2,
    b: 3
};

// numbers = new Proxy(numbers, {
//     set
// })