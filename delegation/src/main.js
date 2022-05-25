// делегирование -перехвачивание события и на каком моменте был сделан ивент 
/// мы вылавливаем всплытие ивента ниже пример
//когда кликаем на любой области мы узнаем куда именно кликнули + изменение блока

let activeBlock;
let container = document.querySelector('.container');

container.addEventListener('click', (e) => { // создаем на контейнер событые click
    // console.log(e.target); // где именно проходит клик
    // console.log(e.target.classList.contains ('col')); // проверяет какой клас 
    let col = e.target;

    // проверяем есть ли класс col и на него когда клик тру то вызываем функцию и с помощью этой функции мы накидываем класс
    if (col.classList.contains ('col')) {
        activeFunc(col);
    }
});

function activeFunc(arg) {
    //проверяем наличие класса
    if (activeBlock) {
        activeBlock.classList.remove('.active');        
    }
    
    // данные равны аргументу который прилетает и добавляем класс active
    activeBlock = arg;
    activeBlock.classList.add('.active');
}