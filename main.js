/*
Переменные:
var name = 'Nadiia'; <!-- it is old version -->
let name = 'Vadim'; modern version
const name = 'Businka'; modern version 
*/


/*
let: (если необходимо будет менять переменную)
let number = 16;
number = 20;
console.log(number);
number = 5;
console.log(number);

const: (если переменная не будет меняться в течении всей программы)
const number2 = 100;
number2 = 200; -- error; not change!
console.log(number2);
*/


// ***********************************************************************************************


/*
Что можно хранить в переменных:

Вариант написания №1:

const name = 'Nadiia';
const number = 8;
const colors = ['green', 'blue', 'red', 'black'];

Вариант написания №2:

const name = 'Nadiia',
      number = 8,
      colors = ['green', 'blue', 'red', 'black'],
      user = {
        id: 1,
        firstName: 'Businka'
      },
      printName = () => {
        console.log('Hello');
      };
*/


// ***********************************************************************************************


// Операции с числами:
const number1 = 100;
const number2 = 10;

let result = number1 + number2;
result = number1 - number2;
result = number1 * number2;
result = number1 / number2;

console.log(result);


// Операции со строками:
const firstName = 'Nadezhda',
      lastName = 'Sokolova';

// <!-- конкатенация -->
let result2 = firstName + ' ' + lastName;
console.log(result2); 


// ***********************************************************************************************


// Типизация в JS является динамической.
// Типы данных:

// 1. number:
const num1 = 22;
const num2 = 22.345;
// Дробное число = число с плавающей точкой.
// Так же к числовым значениям относятся: infinity и NaN (Not A Number).
// Infinity - обозначает бесконечность. Например:
let resultInf = 1 / 0;
console.log(resultInf);
// NaN - вычислительная ошибка. Например, если строку умножить на число:
let resultInf2 = 'Businka' * 2;
console.log(resultInf2);

// 2. BigInt (большое число). 
// Тип данных number в JS не может содержать числа больше, чем 2 в 53ей степени.

let maxNumb = Number.MAX_SAFE_INTEGER;
console.log(maxNumb);

let bigIntNumb = 900719925474099132n;
console.log(bigIntNumb);


// 3. string: 
// '' и "" - равнозначны. 
// Однако, если необходимо написать цитату, то можно поместить один тип кавычек в другой.
// Например:
let str1 = 'Hello';
let str2 = "She said";
let str3 = "She said: 'Hello'";

console.log(str1);
console.log(str2);
console.log(str3);

// `` - нужны для динамических строк в JS.
let fName = 'Businka';
let lName = 'Cat';
// let fullName = 'Businka Cat';
// let fullName = 'Businka' + ' ' + 'Cat';
let fullName = `${fName} ${lName}`;

console.log(fullName);


// 4. boolean - логический тип данных. 
// В нем есть либо TRUE, либо FALSE.
let variable1 = true;
let variable2 = false;


// 5. null - означает "пусто".
//  То, чего не существует или что еще просто нам неизвестно.
// При проверке выдаст что null - это какой-то объект.
let empty = null;


// 6. undefined - означает, что значение не присвоено.
let test;
console.log(test);


// 7. object
let user = {
    id: 1,
    firstNames: 'Vadim',
    age: 22
};


// 8. symbol - символ. Уникальный и неизменяемый тип данных. 
// Может выступать идентификатором.
let sym = Symbol();
console.log(sym);


// ***********************************************************************************************


// ПРОВЕРКА ТИПА ДАННЫХ:
console.log(typeof num1);
console.log(typeof bigIntNumb);
console.log(typeof variable1);
console.log(typeof empty);
console.log(typeof user);


// ***********************************************************************************************


// Условные уравнения в JS.
/* Операторы сравнения:

  >
  <
  >=
  <=
  =    -  оператор присваивания.
  ==   -  равно. Сравнение равны ли числа.
  ===  -  строгое равно. Отличается тем, что сравнение происходит еще и по типу данных.
  !=   -  не равно.
  !==  -  строгое не равно.

*/


// оператор IF (если):
if(10 > 9) {
  console.log('Hello, world');
}

if('JavaScript' == 'Python') {
  console.log('Hello, world');
}

if(1 == '1') {
  console.log('Hello, world');
}


// оператор IF Else:
if(10 < 8) {
  console.log('Да, 10 меньше чем 8');
} else {
  console.log('Нет, 10 больше чем 8');
}


// оператор IF Else If:
if(10 < 8) {
  console.log('Да, 10 меньше чем 8');
} else if (10 == 8) {
  console.log('10 равно 8');
} else {
  console.log('Нет, 10 больше чем 8');
}


// оператор switch case (если нужно проверить много условий):
const color = 'red';

switch(color) {
  case 'green' :
      console.log('Этот цвет зеленый');
      break;
  case 'red' :
      console.log('Этот цвет красный');
      break;
  case 'orange' :
      console.log('Этот цвет оранжевый');
      break;
  case 'white' :
      console.log('Этот цвет белый');
      break;
  default :
      console.log('Очень странный выбор цвета');
}

// break - обрывает выполнение совпавшего кейса.