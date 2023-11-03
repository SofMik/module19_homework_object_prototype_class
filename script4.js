/* Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.
*/

console.log('Number 4')

const lamp= new Device('lamp', 25);
const tv = new Device('tv', 800);
const comp = new Device('comp', 100);
const fridge = new Device('fridge', 400);

function Device(name, price){
    this.name = name,
    this.category = 'electric',
    this.voltage = '220V',
    this.price = price
}

Device.prototype.getPower = function(power){
    console.log(this.name + ' - ' + `power ${power} W`)
}
  
console.log(lamp)//Device {name: 'lamp', category: 'electric', voltage: '220V', price: 25}
console.log(comp.price)//100
console.log(fridge.voltage)//220V
tv.getPower(600)//tv Power is 600 W
tv.getPower.call(tv, "0000");// zamenit znatsenije tv power 600 na 0000
const phone = new Device('phone', 1); // tv - power is 0000 W
phone.getPower(17) //phone - power is 17 W
fridge.getPower(300)// fridge - power 300 W
console.log(phone.price)//1
  
function KitchenDevice(name, kitchen, price){
  this.name = name,
  this.kitchen = kitchen
  this.price = price
}

KitchenDevice.prototype = new Device()
KitchenDevice.prototype.getPower = function(power){
  console.log('KitchenDevice: ' + this.name + ' - ' + `power ${power} W`)//Weight is 47 g Weight is 50 g
}

const oven =  new KitchenDevice('oven', 'kitchen', 22);
const heater =  new Device('heater', 9);

console.log(oven)//KitchenDevice {name: 'oven', kitchen: 'kitchen', price: 22}
console.log(heater)//Device {name: 'heater', category: 'electric', voltage: '220V', price: 9}
oven.getPower(88)//KitchenDevice: oven - power 88 W
heater.getPower(5)//heater - power 5 W