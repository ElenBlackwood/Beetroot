//щоб вивести та перевірити кукі

let cookies = document.cookie;

document.cookie = 'name=Serg';

console.log(cookies);

///
///save data - local storage
// по кліку ми вводимо дані і визиваємо фуекцію і дані зберігаються у консолі

let button = document.querySelector('.btn');
button.addEventListener('click', ()=> {

    let nameInput = document.getElementById('name').value;
    let textInput = document.getElementById('surname').value;
    let ageInput = document.getElementById('age').value;
    let hobbyInput = document.getElementById('hobby').value;

    localStorage.setItem('name', nameInput);
    localStorage.setItem('surname', textInput);
    localStorage.setItem('age', ageInput);
    localStorage.setItem('hobby', hobbyInput);

    console.log(localStorage.getItem('name'), localStorage.getItem('surname'), localStorage.getItem('age'), localStorage.getItem('hobby'));
    

});

//записує ключ - обєкт

/*
sessionStorage.setItem('name', 'Serg');
sessionStorage.setItem('age', '32');
sessionStorage.setItem('text', 'other text');

//get data -- потрібно звернутись саме до ключа


console.log(sessionStorage.getItem('name'), sessionStorage.getItem('age', '32'),
sessionStorage.getItem('text', 'other text'));
*/






/// events in local storage 
let btnStorage = document.querySelector('.storage-btn');

btnStorage.addEventListener('click', () => {
    // записується всі наші дані і обробляються там, щоб достукатись до даних з локал стор ми можемо з ними витягувати / отримувати / зчитувати / перезаписувати дані / старі дані, які були раніше
    // localStorage.oldValue('name'); // знайти видалені ключі дані напротягом одного дня, якщо не вказано час зберігання
    
    localStorage.removeItem('name'); //знаходит прибирає ключ-дані
    
    localStorage.clear('name');// прибирає ключ-дані

    window.onstorage = event => {
        console.log(event);
        event.oldValue('name', this.value);
    }

});
