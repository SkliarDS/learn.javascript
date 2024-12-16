import { func, func2 } from './module_1.js'
import DefaultFucn from './module_2.js'
// import {hi, bye} from './module_3.js'
let {hi, bye} = await import ('./module_3.js')

func('Hello'); 
func2('Dima')
DefaultFucn('John')

let b = await hi(2000);

if(b) bye(2000)