let verInfoText = document.querySelectorAll(".verInfoText");
let addToShoppingCartButton = document.querySelectorAll(".addToCart");
let finishButton = document.getElementById("finish");
let shoppingCartItemsContainer = document.querySelector(".shoppingCartItemsContainer");

const products = [
{keyname: 'Jordan Jumpman', price:15000, id: 0},
{keyname: 'Kyrie 7', price:13000, id: 1},
{keyname: 'Pelota Wilson', price:6000, id: 2},
{keyname: 'Lebron Lakers', price:11000, id: 3}
];

let productsJSON = JSON.stringify(products);
localStorage.setItem("productos", productsJSON);

for (let i=0;i < verInfoText.length;i++){
verInfoText[i].innerHTML = "$ " + products[i].price;
}

addToShoppingCartButton.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCartClick)
})

function addToCartClick (e) {
    let button = e.target;
    let item = button.closest(".card");
    let itemTitle = item.querySelector(".card-title").textContent;
    let itemPrice = item.querySelector(".verInfoText").textContent;
    let itemImage = item.querySelector(".card-img-top").src;
    
    notificationClick()
    addItemToCart(itemTitle,itemPrice,itemImage);
}

const addItemToCart = (itemTitle,itemPrice,itemImage) => {
    let elementsTitle = shoppingCartItemsContainer.getElementsByClassName("shoppingCartItemTitle");
    for (let i=0; i < elementsTitle.length; i++){
        if(elementsTitle[i].innerText === itemTitle){
            let elementquantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(".shoppingCartItemQuantity");
            elementquantity.value++;
            shoppingCartTotal();
            return;
        }
    }
    
    let shoppingCartRow = document.createElement("div");
    let shoppingCartCotent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex flex-wrap align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 ms-3 mb-0">${itemTitle}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 ms-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity ms-0 d-flex flex-wrap justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartCotent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector(".buttonDelete").addEventListener("click", removeItemFromCart);
    shoppingCartRow.querySelector(".shoppingCartItemQuantity").addEventListener("change", quantityItemChanged);

    shoppingCartTotal();
}

const shoppingCartTotal = () => {
    let total = 0;
    let cartTotal = document.querySelector(".shoppingCartTotal");
    let cartItems = document.querySelectorAll(".shoppingCartItem");
    
    cartItems.forEach((cartItem) => {
        let cartItemPriceElement = cartItem.querySelector(".shoppingCartItemPrice").textContent.replace("$", "");
        let cartItemPrice = Number(cartItemPriceElement);
        console.log(cartItemPrice);
        let cartItemQuantityElement = cartItem.querySelector(".shoppingCartItemQuantity").value;
        let cartItemQuantity = Number(cartItemQuantityElement);

        total += (cartItemPrice * cartItemQuantity);
    })
    cartTotal.innerHTML = `$ ${total}`;
}

const removeItemFromCart = (e) => {
    let button = e.target;
    button.closest(".shoppingCartItem").remove();
    shoppingCartTotal();
}

const quantityItemChanged = (e) => {
    let input = e.target;
    input.value <= 0 && (input.value=1);
    shoppingCartTotal();
}

//BUTTONS WITH LIBRARIES

finishButton.onmousedown = function mostrarTotal(){
Swal.fire({
    icon: 'success',
    title: 'Compra Finalizada',
    confirmButtonText: '<a href="https://www.mercadopago.com.ar/home" target="_blank" style="text-decoration: none; color: white">Ir a pagar</a>',
    confirmButtonColor: "#b10202",
    background: "antiquewhite",
});
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
    onClick: function(){}
}).showToast();
}

