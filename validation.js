class Validation {
    value = '';
    isValid = false;
    constructor(form){
        this.form = document.querySelector(form)
        this.input = this.form.querySelector('input')
    }
   
    valid() {
        this.input.addEventListener('input', () => {
            this.isValid = this.input.value.length > 3;
            this.addClass();
        })
    }
    addClass(){
        if(this.isValid){
            this.input.classList.add('is-valid')
            this.input.classList.remove('is-not-valid')
        } else {
            this.input.classList.remove('is-valid')
            this.input.classList.add('is-not-valid')
        }
    }
    
}

let textInput = new Validation('.form-validation')
console.log("textInput:", textInput)
textInput.valid();

// val.set()