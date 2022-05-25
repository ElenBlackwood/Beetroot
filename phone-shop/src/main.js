/*
fetch('https://dummyjson.com/products')
    .then((response) => {
        return response.json();
        
    })

    .then((products) => {
        const colList = document.querySelector('.col');

        products.products.map((item) => {
            let card = `
            <div class="card-block">
                <div class="card-img">
                    <img src="${item.thumbnail}" alt="description">
                </div>
                <h2 class="title">${item.title}</h2>
                <span class="card-pseudo-title">Price: ${item.price} $</span>
                <div class="btn">
                    <a href="https://dummyjson.com/products/${products.id}">Buy</a>
                </div>
            </div>
            `

            
            colList.insertAdjacentHTML('beforeend', card);
        })

    });
*/

    ////



fetch("https://dummyjson.com/products/10")
.then((response) => {
    return response.json();
    
})

.then((product) => {
    const productCard = document.querySelector('.product-card');
    

    let item = `
        
            <div>
                <img src="${product.thumbnail}" alt="description">
            </div>
            <div class="product-holder">
                <h2 class="title">${product.title}</h2>
                <ul class="product-list">
                    <li class="product-item">Brand: ${product.brand}</li>
                    <li class="product-item">Price: ${product.price}</li>
                    <li class="product-item">Rating: ${product.rating}</li>
                    <li class="product-item">Category: ${product.category}</li>
                    <li class="product-item">Description: ${product.description}</li>
                </ul>
                <div class="btn-holder">
                    <a class="btn" href="https://dummyjson.com/products/10${product.id}">Buy</a>
                </div>
            </div>            
        
     `;

    productCard.insertAdjacentHTML('beforeend', item);

    const imagesList = document.querySelector(".img-holder-list")

    product.images.map((image) => {

        let imgList =
             `
            <div class="img-holder'>
                <img src="${image}" alt="description">
            </div>
            `;
    
            imagesList.insertAdjacentHTML('beforeend', imgList)
    })
    
});

GamepadButton.addEventListener('click', () => {
    fetch("google.com/buy", {
        method: "Post",
        data: {
            productId: productId,
            userId: id,
        },
    })
})



