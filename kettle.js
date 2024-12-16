class Kettle {
    #amountWater = 0;
    _workingTime = 0;
    constructor(amountWater){
        this.amountWater = amountWater;
        this.progressElement = document.querySelector('progress');
        this.buttonTurnOnKettle = document.querySelector('[type="checkbox"]');
        this.fieldQuantityWater = document.querySelector('[type="number"]');
        this.title = document.querySelector('.kettle__title span');
        this.buttonTitle = this.buttonTurnOnKettle.nextElementSibling;
        this.isTurn = false;
        this.timerId = null;
        this.timeoutID = null;        
    }
    addWater() {
        this.#amountWater = this.fieldQuantityWater.value;  
        this.title.textContent = `${this.#amountWater}` 
        this.title.style.color = 'green';  
    }
    onKettle() {
        if(this.#amountWater <= 0 || this.#amountWater > 1000){
            this.title.textContent = `${this.#amountWater}`;
            this.title.style.color = 'red';
            this.offKettle();
            return;
        }       
       
        if(this.progressElement.value) {this.buttonTurnOnKettle.checked = false; return;} 

        this.progress();     
        this.buttonTitle.textContent = 'выкл.'  
    }
    offKettle() {
        this._workingTime = 0;
        this.buttonTurnOnKettle.checked = false;
        this.progressElement.value = 0;
        clearInterval(this.timerId)
        clearTimeout(this.timeoutID)
        this.buttonTitle.textContent = 'вкл.' 
    }
    autoOffKettle() {
        this.buttonTurnOnKettle.checked = false;
        this.buttonTitle.textContent = 'вкл.' 
    }
    progress() {
        this._workingTime = this.#amountWater * 10;
        let countProgress = 0;
        let inc = 1 / (this._workingTime / 1000);

        this.timerId = setInterval(() => {
            countProgress += inc;
            this.progressElement.value = countProgress;
        }, 1000);

        this.timeoutID = setTimeout(() => {
            this.autoOffKettle();
            clearInterval(this.timerId)
        }, this._workingTime); 
    }
}

const k = new Kettle();
console.log("k:", k)

document.querySelector('[type="checkbox"]').addEventListener('change', (e) => {
    if(e.target.checked){
        k.onKettle()
    } else {
        k.offKettle()
    }
})

document.querySelector('[type="number"]').addEventListener('input', (e) => {
    k.addWater();
})

let array = ["федя", "петя", "дима"];
function f(arr) {
    return arr.map(name => name[0].toUpperCase() + name.slice(1));
}
console.log(f(array));


function* pseudoRandom(previous){
    yield Math.random(previous * 16807 % 214783647);
}
let generator = pseudoRandom(1);

console.log(' generator 1:', generator.next().value);

async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
  
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        yield i;
    }
  
}

(async () => {
  
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        console.log('ffff',value); // 1, потом 2, потом 3, потом 4, потом 5
    }
  
})();


function* asyncGenerator() {
    const result1 = yield new Promise(resolve => setTimeout(() => resolve("Result 1"), 1000));
    console.log(result1);
    const result2 = yield new Promise(resolve => setTimeout(() => resolve("Result 2"), 1000));
    console.log(result2);
}

function run(generator) {
    const iterator = generator();
    
    function handle(result) {
        if (result.done) return result.value;
        return result.value.then(res => handle(iterator.next(res)));
    }
  
    handle(iterator.next());
}

// Используем генератор
run(asyncGenerator);