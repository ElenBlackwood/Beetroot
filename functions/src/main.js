// //область видимости
// /*

// let q; //глобальна
// let d = 123;

// function newFunc() {
//     const b = d;
//     secondFunc()
//     console.log(e);
// }

// // console.log(newFunc());


// function secondFunc() {
//     //let d; // з цією змінною можемо працювати тільки у цій функції
//     console.log(456);
// }
// */

// let apple = {
//     price: '12 гривень',
//     weight: '200 грам',
//     color: 'red',
// }

// function changeColor () {
//     return (apple.color = 'yellow');
// } 

// function changePrice () {
//     changeColor ()
//     return (apple.price = '25 гривень');
// } 

// // changePrice ();
// // changeColor ();
// console.log(apple);

// // let numb = 7;
// let numb = 1;

// function numberHappy () {
    
//     // test = numb; -- // numberHappy ( test: 1);
//     // if (test == 1) {
//     if (numb == 1) {
//     alert ('Happy!');
//     } else {
//         alert ('Hello!');
//     }
// }

// // numberHappy ()
// numberHappy ( numb, 4);
// // numberHappy ( numb: 2);
// // numberHappy ( test: 1);

function showMessage() {
    alert('Hello World!');
};

showMessage(); 

function showSecondMessage() {
    let message = 'Hello Java Script!';
    alert(message);
};

showSecondMessage();

let user = 'Georg!';

function showUser() {
    let greetings = 'Hello, ' + user;
    alert(greetings);
}

showUser();

//

function welcome (userFirstName, userLastName) {
    console.log( `Welcome, ${userLastName} ${userFirstName} `);
  }
 
welcome('Elena','Prokhovska!'); 

//

function number () {
    let a = prompt('Введіть число');
    let b = prompt('Введіть наступне число');

    if (a < b) {
        alert (-1);
    } else if (a > b) {
        alert (1);
    } else if (a == b) {
        alert (0);
    }
}

number ();

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
alert( factorial(3) );

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let c = 1;
let e = 4;
let f = 9;
let sum;

function calcNumb () {
    sum = c + e + f;
}

calcNumb ();


