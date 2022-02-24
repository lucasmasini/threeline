let carrito=[];
let info = false;
let total = 0;
let verInfoText = document.querySelectorAll(".verInfoText");
let carritoButton1 = document.getElementById("carritoButton-1");
let carritoButton2 = document.getElementById("carritoButton-2");
let carritoButton3 = document.getElementById("carritoButton-3");
let carritoButton4 = document.getElementById("carritoButton-4");
let finishButton = document.getElementById("finish");

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

carritoButton1.onmousedown = function(){
  notificationClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[0].price;
}
carritoButton2.onmousedown = function(){
  notificationClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[1].price; 
}
carritoButton3.onmousedown = function(){
  notificationClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[2].price; 
}
carritoButton4.onmousedown = function(){
  notificationClick();
  let price = JSON.parse(localStorage.getItem("productos"));
  total += price[3].price; 
}

finishButton.onmousedown = function mostrarTotal(){
  let totalJSON = JSON.stringify(total);
  localStorage.setItem("totalprice", totalJSON);
  let finish = JSON.parse(localStorage.getItem("dataForm"));
  Swal.fire({
    icon: 'success',
    title: 'Compra Finalizada',
    text: "El total de su compra es: $" + total,
    confirmButtonText: '<a href="https://www.mercadopago.com.ar/home" target="_blank" style="text-decoration: none; color: white">Ir a pagar</a>'
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
      background: "linear-gradient(to right, #c50101, #a40009, #83000b, #630008, #440000)",
      },
      onClick: function(){}
  }).showToast();
}

