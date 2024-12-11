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