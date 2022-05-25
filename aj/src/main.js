fetch('https://dummyjson.com/quotes') //стучимся на сервер чтобы использовать данные
    .then( (response) => { // ждем пока сервер нам ответит и ответ получаем в колл бэке response, но ответ не в том формате
    console.log(response);
    return response.json( ); // поэтому мы ответ преобразовываем в json
})
    .then( (data) => {
        const wrapper = document.querySelector('.wrapper');  
        
        const list = document.querySelector('.list');

        //выводит каждый wrapper отдельно перебираем в цикле 
        data.quotes.map((item) => {
            // const template = `  
            // <div>
            //     <h2>${item.author}</h2>
            //     <p>${item.quote}</p>
            // </div>
            // `;
            // console.log(template);

            // wrapper.insertAdjacentHTML('beforeend', template); // внутрь wrapper вставляем template и опять по следующему циклу (айтему)

            const template = `
            <li><b>${item.author} </b><br>${item.quote}</li>
            `;

            list.insertAdjacentHTML('beforeend', template);

        });

    // console.log(data);
});
// можно использовать как шаблон