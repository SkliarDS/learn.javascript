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
    }
});

proxyObj.elValue = 3;
console.log('proxyObj:',proxyObj);

nodeEl.innerHTML = obj.elValue;

