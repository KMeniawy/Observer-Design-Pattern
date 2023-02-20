'use strict';

class IPhoneStore {
    constructor(name){
        this._name = name;
        this.observers =[]
    }

    Subscribe (Observer){
        this.observers.push(Observer);
        console.log('New Customer has Followed IPhone XYZ');
    }

    Unsubscribe (toUnsubscribe){
        this.observers = this.observers.filter(Observer =>{
            if(Observer != toUnsubscribe){
                return Observer;
            }
        })
    }

    Notify (){
        for(var i in this.observers){
            this.observers[i].Update('IPhone XYZ is now available!');
        }
    }
}

class PhoneStore extends IPhoneStore{
    constructor(){
        super();
        this.productInStock = false;
        console.log('Store Created');
    }

    GetProduct(){
        return this.productInStock;
    }

    UpdateProduct(){
        this.productInStock = this.checkStock(this.productInStock);
        if(this.productInStock){
            this.Notify();
        }
    }

    checkStock(inStock){
        if(inStock){
            return inStock = false;
        }else{
            return inStock = true;
        }
    }
}

class Customer {
    constructor(name) {
        this._name=name;
    }
    Update(msg){
        console.log(`${this._name} ${msg}`);
    }
}




function init_Observer() {
    var customer1 = new Customer('emad');
    var customer2 = new Customer('3omda');
    var phoneStore = new PhoneStore('twahed wa el noor');
    phoneStore.Subscribe(customer1);
    phoneStore.Subscribe(customer2);
    phoneStore.UpdateProduct();
    phoneStore.UpdateProduct();
    phoneStore.Unsubscribe(customer2);
    phoneStore.UpdateProduct();

    var customer = new Customer('essam');
    phoneStore.Subscribe(customer);
    phoneStore.UpdateProduct();


}