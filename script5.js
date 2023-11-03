//Перепишите консольное приложение из предыдущего юнита на классы.

console.log('Number 5')

class DeviceByClass {
    constructor(name, price) {
        this.name = name,
        this.category = 'electric',
        this.voltage = '220V',
        this.price = price
    }
    getPower(power){
     return  this.name + ' - ' + `power ${power} W`; 
    }
  }

const lampByClass= new DeviceByClass('new lamp', 25);
const tvByClass = new DeviceByClass('new tv', 800);
const compByClass = new DeviceByClass('new comp', 100);
const fridgeByClass = new DeviceByClass('new fridge', 400);
const phoneByClass = new DeviceByClass('new phone', 1); 
console.log(lampByClass)//Device {name: 'lamp', category: 'electric', voltage: '220V', price: 25}
console.log(fridgeByClass.voltage, fridgeByClass.price)//220V 400
console.log(tvByClass.getPower(600)) //new tv - power 600 W
console.log(phoneByClass.getPower(17)) //new phone - power 17 W
console.log(fridgeByClass.getPower(300))// new fridge - power 300 W


class KitchenDeviceByClass extends DeviceByClass {     
    constructor(name, isBroken, price, power, category, voltage){
    super(name, price, category, voltage)
    this.power = super.getPower(power)
    this.isBroken = isBroken
    }	
    getInfo() {
        if (this.isBroken) {
           return `Device is broken!!!`
     } 
     else {
        return this.category
      }
    }
}

const ovenByClass =  new KitchenDeviceByClass('new oven', false, 22, 44444);
const heaterByClass =  new KitchenDeviceByClass('new heater', true, 88, 999);

console.log(ovenByClass)
console.log(heaterByClass.price)//88
console.log(ovenByClass.getPower(10000))// new oven - power 310000 W
console.log(heaterByClass.power, heaterByClass.getInfo()) // new heater - power 999 W Device is broken!!!
console.log(phoneByClass.getPower(55), phoneByClass.voltage) // new phone - power 55 W 220V






