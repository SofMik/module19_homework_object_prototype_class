  // Задание 3. Напишите функцию, которая создает пустой объект, но без прототипа.
  console.log('Number 3')
  const obja = {}; //объект c прототипом
  const objb = Object.create(Object.prototype); //объект c прототипом
  const emptyObj = Object.create(null) //пустой объект без прототипа.
  console.dir(obja) //объект c прототипом
  console.dir(objb) //объект c прототипом
  console.dir(emptyObj) //пустой объект без прототипа.