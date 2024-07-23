/*
[Конструктор заказа. Основы. learnjs 1.1..1.4]
1. написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы
addItem(item, count) - добавить итем в чек (+ имя +цена)
removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке

3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов

*/ 


function Order(product){
    this.product = product;
    this.productTotalPrice = 0;
    this.productItems = {};
    this.productCount = 0;
    this.isLocked = true;
    this.addItem = function(item, count, price){
        if(this.isLocked){

            let newItems = {
                name: item,
                count: count,
                price: price,
                totalPrice: count * price,
            };
    
            this.productItems[item] = newItems;
            this.productCount = Object.keys(this.productItems).length;
    
            for(let key in  this.productItems[item]) {
                if (key == 'totalPrice') {
                    this.productTotalPrice = this.productTotalPrice + newItems[key];                
                };
            };        
        }
    };

    this.removeItem = function(item, count){  
        if(this.isLocked){

            for(let key in this.productItems){     
    
                if(key == item){   
                    count = (!count || this.productItems[key].count == count) ? 0 : count;        
                    this.productItems[key].count = this.productItems[key].count - count;
                    this.productItems[key].totalPrice = this.productItems[key].count * this.productItems[key].price;
                    this.productTotalPrice = this.productTotalPrice - this.productItems[key].totalPrice;
    
                    if(count == 0 || !count || this.productItems[key].count == 0) {              
                        delete this.productItems[key];
                        this.productCount = this.productCount - 1;
                    };
                };
            };
        }       
    };

    this.getCheck = function(){
        console.log(`${this.product} на сумму ${this.productTotalPrice} руб. Общее кол-во: ${this.productCount}`);
        for(let key in this.productItems){
            console.log(` - ${key}, кол-во: ${this.productItems[key].count} x ${this.productItems[key].price} руб., Цена: ${this.productItems[key].count * this.productItems[key].price} руб.`);
        };
    };
    this.lockOrder = function(){
        this.isLocked = false;
    };
    this.unlockOrder = function(){
        this.isLocked = true;
    }
};

let product = new Order('Заказ № 1');
product.addItem('Молоко', 2, 150);
product.addItem('Колбаса', 1, 100);
product.addItem('Хлеб', 2, 50); 
product.lockOrder();
product.addItem('Лимонад', 2, 50); 
product.unlockOrder();
product.addItem('Cok', 2, 50); 
product.removeItem('Молоко', 2);
product.removeItem('Хлеб', 1);
// 150
product.getCheck();



