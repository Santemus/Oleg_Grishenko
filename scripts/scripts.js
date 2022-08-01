
// -1------------------------------------------------------------------------------------------

// var number = 5+5
// console.log(number)
//
// var str = "Это какой-то текст"
// console.log(str)
//
// var qwer = true;
// console.log (qwer)
//
// var trust = undefined;
// console.log (trust)
//
// var mynyll = null
// console.log(null)
//
// var symbol = Symbol('id')
// console.log(symbol)
//
// var bigint = 100000n;
// console.log(bigint)
//
// var myObj = {
//     name:'Dead',
//     lastName:'Inside',
//     age:'66'
// };
// console.log(myObj)

// -2------------------------------------------------------------------------------------------

// var number = 5+5;
//
// number = 25;
//
// console.log(number)

// let number = 5+5;
//
// number = 25;
//
// console.log(number)

// const number = 5+5;
//
// console.log(number)

// -3------------------------------------------------------------------------------------------

//Number//


// const a1 = 5e9;
// console.log(a1); //5000000000
//
// const a2 = 5e-5;
// console.log(a2); // 0.00005
//
// const a = 0xff;
// console.log(a); // 255
//
// const b = 0x00 ;
// console.log(b); // 0

//--------------------------------------------

// const a = '4' + 9;
// console.log(a); // 49

//String//

// const name = 'Peter';
// const name1 = "Jack";
// const result = `The names are ${name} and ${name1}`;
//
// console.log(name)
// console.log(name1)
// console.log(result)

//-----------------------------------------------

// const a = 'hello';
// console.log(a[1]); // "e"

//Boolean//

// const a = true;
// const b = false;
//
// console.log(a)
// console.log(b)
//-----------------------------------------------

// console.log(5 == 6); // false

//Undefined//

// let counter = 0;
// console.log(counter); // 0
//-----------------------------------------------

// let counter = {
//     current: 0
// };
// console.log(counter.max); // undefined
//
// Null//

// var myVar = null;
//
// alert(myVar); // null
//-----------------------------------------------

// var myVar = null;
//
// if (myVar)
//     alert("myVar is not null');
// else
//     alert("myVar is null" );

//Symbol//

// const symbol1 = Symbol(); // create first symbol
// const symbol2 = Symbol(); // create second symbol
//
// console.log(symbol1 == symbol2); // false
// console.log(symbol1 === symbol2); // false
// //-----------------------------------------------
//
// const tab = [1, 7, 14, 4];
//
// for (let num of tab) {
//     console.log(num);
// }
// 1
// 7
// 14
// 4

//bigint//

// var bigint = 100000n;
// console.log(bigint)

//-----------------------------------------------

// var bigNum = BigInt(
//     "123422222222222222222222222222222222222");
// console.log(bigNum);
//
// // Parameter in hexadecimal format
// var bigHex = BigInt("0x1ffffffeeeeeeeeef");
// console.log(bigHex);
//
// // Parameter in binary format
// var bigBin = BigInt(
//     "0b1010101001010101001111111111111111");
// console.log(bigBin);


//Object//

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
// };
// person.name
// person.name[0]
// person.age
// person.bio()
// person.introduceSelf()
//-----------------------------------------------
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
//
// console.log(person.firstName);
// console.log(person.lastName);


// -3------------------------------------------------------------------------------------------

// //Number//
//
// const num1 = 5;
// const num2 = 3;
//
// // add two numbers
// const sum = num1 + num2;
//
// // display the sum
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// //String//
//
// let a = 'old';
// let b = ' tree';
//
// let c = a + b;
// console.log(c);

//Boolean//

// if (true+true == true) {
//     console.log('there is only one truth');
// }else {
//     console.log('everyone is different, after all')
// }

//Undefined//

// var anyVar=10+undefined;
// print(anyVar) //Result will be NaN

// Null//



//Symbol//



//bigint//

// const theBiggestInt = 9007199254740991n
// const alsoHuge = BigInt(9007199254740991) // 9007199254740991n
// const hugeString = BigInt("9007199254740991") // 9007199254740991n
// const hugeHex = BigInt("0x1fffffffffffff") // 9007199254740991n
// const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111") // 9007199254740991n

//Object//

// function sum( obj ) {
//     var sum = 0;
//     for( var el in obj ) {
//         if( obj.hasOwnProperty( el ) ) {
//             sum += parseFloat( obj[el] );
//         }
//     }
//     return sum;
// }
//
// var sample = { a: 1 , b: 2 , c:3 };
// var summed = sum( sample );
// console.log( "sum: "+summed );



// -5------------------------------------------------------------------------------------------

// var login = prompt('Enter login:');
// var password = prompt('Enter password');
// if (login === 'kykold' && password === '1234asdQQ') {
//     alert('Добро пожаловать');
// } else {
//     alert('Ошибка входа');
// }

// -7------------------------------------------------------------------------------------------

// var year = +prompt('Введите год рождения?')
// var age = 2022 - year;
// if ( age >= 16) {
//     alert('добро пожаловать');
// } else {
//     alert('вход воспрещен');
// }

// -8------------------------------------------------------------------------------------------
//
// var experience = +prompt('Введите стаж работы:');
// if (experience >=0 && experience < 3) {
//     alert('Ваша надбавка составляет 0% ');
// } else if (experience >= 3 && experience < 15) {
//     alert('Ваша надбавка составляет 10%');
// } else if (experience >= 10 && experience < 20) {
//     alert('Ваша надбавка составляет 20%');
// } else if (experience >= 20) {
//     alert('Ваша надбавка составляет 25%');
// } else if (experience < 0) {
//     alert('Вы ввели отрицательное число');
// } else {
//     alert('Ошибка. Повторите ввод');
// }

// -10------------------------------------------------------------------------------------------

// let value = prompt('Введите число', 0);
//
// if (value > 0) {
//     alert( 1 );
// } else if (value < 0) {
//     alert( -1 );
// } else {
//     alert( 0 );
// }


// -11------------------------------------------------------------------------------------------

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина' :
//             '';


// -12------------------------------------------------------------------------------------------


// var flat = +prompt("Введите номер квартиры:");
// if ( (flat >=1 ) && (flat <=20) ) {
//     alert('квартира находится в 1 подьезде');
// } else if ( (flat >=21) && (flat <= 48) ) {
//     alert('квартира находится в 2 подьезде');
// } else if ( (flat >= 49) && (flat <= 90) ) {
//     alert('квартира находится в 3 подьезде');
// } else {
//     alert("Вы ошиблись домом");
// }


// -13------------------------------------------------------------------------------------------

// if(browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }


// -14------------------------------------------------------------------------------------------

// const number = +prompt('Введите число между 0 и 3', '');
//
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }










