  /*Задание 2.
  Напишите функцию, которая принимает в качестве аргументов строку и объект, 
  а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
  Функция должна возвращать true или false.*/
  
  console.log('Number 2')
  
  const boy = {
    age: 35, 
    name: 'Max'
  }; 

  console.log('age' in boy); // true
  console.log('name' in boy); // true
  console.log('Max' in boy); // false
  console.log('adress' in boy); // false

  const person = {
    name: 'Ana',
    address:{
        city: 'San',
        street:'Nevsky', 
      },
      getName(){
        console.log(this)
    },
      
    }
person.getName();//{name: 'Ana', address: {…}, getName: ƒ}address: {city: 'San', street: 'Nevsky'}
                 //getName: ƒ getName()name: "Ana"
console.log('address'in person); // true
console.log('city' in person); // false
console.log('street' in person); // false