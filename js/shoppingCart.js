
let finishButton = document.getElementById("finish");
let shoppingCartItemsContainer = document.querySelector(".shoppingCartItemsContainer");
let productsSelected = JSON.parse(localStorage.getItem("shoppingCartObject"));

const addItemToCart = () => {
    productsSelected.forEach((product) => {
    let itemTitle = product.itemTitle;
    let elementsTitle = shoppingCartItemsContainer.getElementsByClassName("shoppingCartItemTitle");
        for (let i = 0; i < elementsTitle.length; i++) {
            if (elementsTitle[i].innerText === itemTitle) {
                let elementquantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(".shoppingCartItemQuantity");
                elementquantity.value++;
                shoppingCartTotal();
                return;
            }
        }
    })
}

setTimeout( () =>{
    productsSelected.forEach((product) => {
        let itemImage = product.itemImage;
        let itemTitle = product.itemTitle;
        let itemPrice = product.itemPrice;
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
    })
}, 400)



const shoppingCartTotal = () => {
    let total = 0;
    let cartTotal = document.querySelector(".shoppingCartTotal");
    let cartItems = document.querySelectorAll(".shoppingCartItem");

    cartItems.forEach((cartItem) => {
        let cartItemPriceElement = cartItem.querySelector(".shoppingCartItemPrice").textContent.replace("$", "");
        let cartItemPrice = Number(cartItemPriceElement);
        let cartItemQuantityElement = cartItem.querySelector(".shoppingCartItemQuantity").value;
        let cartItemQuantity = Number(cartItemQuantityElement);

        total += (cartItemPrice * cartItemQuantity);
    })
    cartTotal.innerHTML = `$ ${total}`;
}

const removeItemFromCart = (e) => {
    let button = e.target;
    button.closest(".shoppingCartItem").remove();

    // Intento de eliminar un producto a la vez, sin tener que comprar
    // let cartTitle = document.querySelector('.shoppingCartItemTitle').textContent;
    // let productRemove = productsSelected.filter(product=> product.keyname !== cartTitle);
    // productRemove = JSON.stringify(productRemove);
    // localStorage.setItem('shoppingCartObject', productRemove);
    
    shoppingCartTotal();
}

const quantityItemChanged = (e) => {
    let input = e.target;
    input.value <= 0 && (input.value = 1);
    shoppingCartTotal();
}

const removeAllItemAfterBuy = () =>{
    let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
    shoppingCartItemsContainer.innerHTML = '';
}

//BUTTONS WITH LIBRARIES

finishButton.onmousedown = function mostrarTotal() {
    Swal.fire({
        icon: 'success',
        title: 'Compra Finalizada',
        confirmButtonText: '<a href="https://www.mercadopago.com.ar/home" target="_blank" style="text-decoration: none; color: white">Ir a pagar</a>',
        confirmButtonColor: "#b10202",
        background: "antiquewhite",
    });
    localStorage.removeItem("shoppingCartObject");
    removeAllItemAfterBuy();
    shoppingCartTotal();
}
addItemToCart();