let col = document.querySelector('.col');
let lorem = document.querySelector('.lorem-text');
let text = document.querySelector('p');

lorem.addEventListener('click', ( ) => {
    alert(lorem);
});

col.addEventListener('click', ( ) => {
    alert(col);
});

text.addEventListener('click' ,( ) => {
    alert(text);
});


document.addEventListener('click', ( ) => {
    alert('document');
});

//document.addEventListener('click',
// col.addEventListener('click', (e ) => {
//     console.log(e.target);
// });








//повертає ел по якому був саме зроблений клік

document.addEventListener('click', (e ) => {
    console.log(e.target);
});


//db click

col.addEventListener('dblick', (e ) => {
    console.log(e)
});

//contextmenu - правою нажимаємо і показує де перший був евент зроблений

col.addEventListener('contextmenu', (e ) => {
    console.log(e)
});




// focus - always for inputs 

/* для d`n`drop
//mouseover просто виводить мишку

col.addEventListener('mouseover', (e ) => {
    console.log(e)
});


//mouseout мишка вийшла з елемента

col.addEventListener('mouseout', (e ) => {
    console.log(e)
});
*/

