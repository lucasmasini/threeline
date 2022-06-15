let addToShoppingCartButton;
setTimeout(()=>{addToShoppingCartButton = document.querySelectorAll(".addToCart");},500)
let newCardItem = document.querySelector(".cardsContainer")

const addNewItem = async () => {
    fetch('https://mocki.io/v1/ce057b3b-7058-47ab-aa6b-380b064ebcb5')
        .then(data=>data.json())
        .then((productos) => {
            productos.forEach((product)=>{
                let newCard = document.createElement("div");
                let newCardContent = `        
                <div class="col col-auto mt-5 mx-0">
                        <div class="card cardProduct">
                            <img src=${product.url} class="card-img-top" alt=${product.keyname}>
                            <div class="card-body">
                                <h5 class="card-title">${product.keyname}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="verInfoText fs-4">$${product.price}</p>
                                <button class="btn bt-md" type="submit"><img class="addToCart" id="3"
                                src="https://icongr.am/fontawesome/cart-plus.svg?size=38&color=ffffff"
                                alt="Agregar producto"></button>
                        </div>
                </div>`
                newCard.innerHTML = newCardContent;
                newCardItem.appendChild(newCard);
            })
        });
}

addNewItem();

setTimeout(()=>{
addToShoppingCartButton.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCartClick)
})},1000)

const AddCartStorage = (object)=>{
    let selectProducts = localStorage.getItem("shoppingCartObject");
    if(selectProducts === null){
        let firstProduct = [];
        firstProduct.push(object);
        firstProduct = JSON.stringify(firstProduct);
        localStorage.setItem('shoppingCartObject', firstProduct);
    } else {    
        selectProducts = JSON.parse(selectProducts);;
        selectProducts.push(object);
        selectProducts = JSON.stringify(selectProducts);
        localStorage.setItem('shoppingCartObject', selectProducts);
    }
}

function addToCartClick(e) {
    let button = e.target;
    let item = button.closest(".card");
    let itemTitle = item.querySelector(".card-title").textContent;
    let itemPrice = item.querySelector(".verInfoText").textContent;
    let itemImage = item.querySelector(".card-img-top").src;
    const productSelected = 
        {
            itemTitle: itemTitle,
            itemPrice: itemPrice,
            itemImage: itemImage
        };
    AddCartStorage(productSelected)
    notificationClick()
}

function notificationClick() {
    Toastify({
        text: "Agregado al carrito",
        duration: 1800,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "#a40009",
            borderRadius: "11px"
        },
        onClick: function () { }
    }).showToast();
}