
function invert(array) {

    return  array.map(item => {
        console.log("invert  item:", item)
        if(Math.sign(item) == -1){
            
            return item * -1;
        } else if(Math.sign(item) == 1){
           
            return item * 1;
        } else if(array.length == 0){
            return array = [];
        } else if(item == 0){
            return 0;
        }
        
    });
};

const array0 = [1, 2, 3, 4, 5]; //--> [-1, -2, -3, -4, -5];
const array1 =  [1, -2, 3, -4, 5] ;//--> [-1, 2, -3, 4, -5];
const array2 =  []; //--> []

invert(console.log('array:',array0));
invert(console.log('array1:',array1));
invert(console.log('array:2',array2));