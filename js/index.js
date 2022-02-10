let carrito=[];
let info = false;
let total = 0;
let enCarrito = document.getElementsByClassName("enCarrito");
let verInfoText = document.getElementsByClassName("verInfoText");
let infoButton1 = document.getElementById("infoButton-1");
let infoButton2 = document.getElementById("infoButton-2");
let infoButton3 = document.getElementById("infoButton-3");
let infoButton4 = document.getElementById("infoButton-4");

const Productos = [
  {producto: 'Jordan Jumpman', precio:15000},
  {producto: 'Kyrie 7', precio:13000},
  {producto: 'Pelota Wilson', precio:6000},
  {producto: 'Lebron Lakers', precio:11000}
];

infoButton1.onmousedown = function(){verInfoText[0].innerHTML = "Precio: " + Productos[0].precio}
infoButton2.onmousedown = function(){verInfoText[1].innerHTML = "Precio: " + Productos[1].precio}
infoButton3.onmousedown = function(){verInfoText[2].innerHTML = "Precio: " + Productos[2].precio}
infoButton4.onmousedown = function(){verInfoText[3].innerHTML = "Precio: " + Productos[3].precio}


setTimeout(() => {
    let compra = prompt('Quiere realizar alguna compra');
    if(compra == 'Si' || compra == 'si'){
        while(compra == 'Si' || compra == 'si'){
            carrito[1]= prompt('Ingrese el codigo del producto que quiera comprar');
            switch (carrito[1]){
                case '1':
                    alert('Se agrego: ' + Productos[0].producto);
                    console.log('Se agrego:  ' + Productos[0].producto);
                    total = total + Productos[0].precio;
                    enCarrito[0].innerHTML = "Agregado al carrito";
                    break;
                case '2':
                    alert('Se agrego: ' + Productos[1].producto);
                    console.log('Se agrego:  ' + Productos[1].producto);
                    total = total + Productos[1].precio;
                    enCarrito[1].innerHTML = "Agregado al carrito";
                    break;
                case '3':
                    alert('Se agrego: ' + Productos[2].producto);
                    console.log('Se agrego:  ' + Productos[2].producto);
                    total = total + Productos[2].precio;
                    enCarrito[2].innerHTML = "Agregado al carrito";
                    break;
                case '4':
                    alert('Se agrego: ' + Productos[3].producto);
                    console.log('Se agrego:  ' + Productos[3].producto);
                    total = total + Productos[3].precio;
                    enCarrito[3].innerHTML = "Agregado al carrito";
                    break;
                default:
                    alert('Dicho producto no se encuentra en nuestro catalogo');
                    break;
            }  
            compra = prompt("Va a seguir comprando?");
        }
        alert('El total de su compra es: ' + total);
    } else {
        alert('Gracias por su visita');
    }
  }, 8000);

let miForm = document.getElementById("formCuotas");
miForm.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let form = e.target;
    console.log(form.children[1].value);
    console.log(form.children[3].value);
    console.log(form.children[5].value);

    let coutas = form.children[5].value;

    alert("Se pagara: $" + total + " en: " + coutas + " coutas");
};

