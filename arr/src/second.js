let shoppingList = [
    {product:'bread', amount:'2', bought: 'yes', unitPrice:'15 UAN', sum:'30 UAN'}, // sum == amount * unitPrice
    {product:'butter', amount:'1', bought: 'yes', unitPrice:'60 UAN', sum:'60 UAN'},
    {product:'oil', amount:'4', bought: 'no', unitPrice:'20 UAN', sum:'80 UAN'},
    {product:'lemon', amount:'3', bought: 'yes', unitPrice:'13 UAN', sum:'39 UAN'},
];


// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

shoppingList.sort((function (a, b) {
    if (a.bought > b.bought) {
      return 1;
    }
    if (a.bought < b.bought) {
      return -1;
    }
    // a должно быть равным b
    //return 0;
  }));


// Створення списку (не) придбаних продуктів.
let removeArr = shoppingList.splice(1);
console.log(removeArr);

shoppingList.push({product:'fish', amount:'3', bought: 'no', unitPrice:'45 UAN', sum:'135 UAN'}); 



console.log(shoppingList);