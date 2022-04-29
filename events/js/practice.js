//вложеность в 4 эл див и по клику на самый низший эл, чтобы у бат. эл добавлялся текст

let col = document.querySelector('.col');
let lorem = document.querySelector('.lorem-text');
let text = document.querySelector('p');

lorem.addEventListener('click', ( ) => {
    alert('lorem');
});

col.addEventListener('click', ( ) => {
    alert('col');
});

text.addEventListener('click' ,( ) => {
    alert('text');
});


document.addEventListener('click', ( ) => {
    alert('document');
});

parent.addEventListener('click', ( ) => {
    
});


// 1 - keyup // 2 - sort // 3 - with events mouse 