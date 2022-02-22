let carrito=[];
let info = false;
let total = 0;
let enCarrito = document.getElementsByClassName("enCarrito");
let verInfoText = document.getElementsByClassName("verInfoText");
let infoButton1 = document.getElementById("infoButton-1");
let infoButton2 = document.getElementById("infoButton-2");
let infoButton3 = document.getElementById("infoButton-3");
let infoButton4 = document.getElementById("infoButton-4");
let carritoButton1 = document.getElementById("carritoButton-1");
let carritoButton2 = document.getElementById("carritoButton-2");
let carritoButton3 = document.getElementById("carritoButton-3");
let carritoButton4 = document.getElementById("carritoButton-4");
let finishButton = document.getElementById("finish");

const products = [
  {keyname: 'Jordan Jumpman', price:15000, id: 1},
  {keyname: 'Kyrie 7', price:13000, id: 2},
  {keyname: 'Pelota Wilson', price:6000, id: 3},
  {keyname: 'Lebron Lakers', price:11000, id: 4}
];
let productsJSON = JSON.stringify(products);
localStorage.setItem("productos", productsJSON);

carritoButton1.onmousedown = function(){
  handleClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[0].price;
}
carritoButton2.onmousedown = function(){
  handleClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[1].price; 
}
carritoButton3.onmousedown = function(){
  handleClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[2].price; 
}
carritoButton4.onmousedown = function(){
  handleClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[3].price; 
}

infoButton1.onmousedown = function(){verInfoText[0].innerHTML = "Precio: $" + products[0].price}
infoButton2.onmousedown = function(){verInfoText[1].innerHTML = "Precio: $" + products[1].price}
infoButton3.onmousedown = function(){verInfoText[2].innerHTML = "Precio: $" + products[2].price}
infoButton4.onmousedown = function(){verInfoText[3].innerHTML = "Precio: $" + products[3].price}


let miForm = document.getElementById("formCuotas");
miForm.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    localStorage.removeItem("dataForm");
    e.preventDefault();
    let form = e.target;
    let data = [form.children[2].value,form.children[4].value,form.children[6].value]
    let dataJSON = JSON.stringify(data);
    localStorage.setItem("dataForm", dataJSON);
};


finishButton.onmousedown = function mostrarTotal(){
  let totalJSON = JSON.stringify(total);
  localStorage.setItem("totalprice", totalJSON);
  let finish = JSON.parse(localStorage.getItem("dataForm"));
  alert(finish[0] + ", el total de su compra es: $" + total + " a pagar en " + finish[2] + " coutas")
}

function handleClick() {
  Toastify({
      text: "Agregado al carrito",
      duration: 1800,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
      background: "linear-gradient(to right, #c50101, #a40009, #83000b, #630008, #440000)",
      },
      onClick: function(){} // Callback after click
  }).showToast();
}