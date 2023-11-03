/*Задание 1. 
Напишите функцию, которая принимает в качестве аргумента
объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

console.log('Number 1')

const boys = {
    name: 'Alan',
    age: 30
  }
 
const myBoy = Object.create(boys);   // создаем объект myBoy с прототипом boys 
myBoy.pet =  "dog" // добавляем собственное свойство объекту myBoy
  // kоторого нет в объекте boys, но есть в его прототипе myBoy
myBoy.name =  "John" // меняем объекту myBoy свойство name s alan na собственное свойство john

//1. variant
for (let key in myBoy) {
    if (myBoy.hasOwnProperty(key)) {
        console.log("svoi kluts " + key + " ego znatsenije " + myBoy[key])
        // svoi kluts pet ego znatsenije dog
        //svoi kluts name ego znatsenije John
    }   
  console.log("vse klutsy - " + key); //pet name age
 } 

//2. variant  function

function result (){
    for (let key in myBoy) {
        if (myBoy.hasOwnProperty(key)) {
            console.log("svoi klutsy " + key + " ego znatsenije " + myBoy[key])
        }
    console.log("vse klutsy - "+ key);
    }
};

result ()  



  