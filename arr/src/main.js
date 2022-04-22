let arr = ['serg', 'pavlo', 'ivan'];

arr.push('vanya'); //додає елементи в кінець.

arr.unshift('pert') ;//Додає елемент в початок масиву

arr.shift('serg'); //видаляє елемент в початок масиву

arr.pop('ivan');// видаляє елемент в кінці.


console.log(arr) 

// інший метод

//ми звертаємось до кожного індексу елементу в масиві, самого значення ^

let arrr = [1,2,3,4,5,6];

arrr.forEach((num) => {
    console.log(num);
});

//або

for(let i = 0; i >= arrr.length; i++) {
    console.log(arrr[i]);
}


//інший метод - створить новий масив removeArr і ми прописуємо від якого індексу і поякий індект, тобто від (1)) і скільки елементів  або (0,2) 

let removeArr = arr.splice(1);
console.log(removeArr);

//

let numb = [1,2,3,4,5,6,34,56,78];
numb.indexOf(78);

//тут ми шукаємо індекс елемента

let n = [34,56,74,'ale',23,'Wqe',23,56,'dog'];
n.sort();

//сортує спочатку числа а потім слова по юнікоду

n.isArray([]);
console.log(Array.isArray(n));

// перевіряє чи є масивом


const arr1 = ['a','b','c'];
const arr2 =['d','e','f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

let arr4 = [1,2,3,4,5,6];
let arr5 = arr4.map((index) => index + 10);
console.log(arr5);

// 


///створити маси з переліком фруктів , записати індекс елем єпл в змінну, відспортирувати перед цим, через пуш закинути фрукт

let fruits = ['Peach','Apple','Atrawberry','Pear'];

fruits.sort(); // sort of the fruits

let appleIndex = fruits.indexOf('Apple');

fruits.push('Banana');  // fruits[4] = 'Banana';  додатковий фрукт