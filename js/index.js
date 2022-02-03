let carrito=[];
let info = false;
let total = 0;

const Productos = [
  {producto: 'Jordan Jumpman', precio:15000},
  {producto: 'Kyrie 7', precio:13000},
  {producto: 'Pelota Wilson', precio:6000},
  {producto: 'Lebron Lakers', precio:11000}
];

function Mostrate (arr,fn){
    for (const el of arr){
        fn('Producto ' +': '+ el.producto + ' precio: ' + el.precio);
    }
}


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
                    break;
                case '2':
                    alert('Se agrego: ' + Productos[1].producto);
                    console.log('Se agrego:  ' + Productos[1].producto);
                    total = total + Productos[1].precio;
                    break;
                case '3':
                    alert('Se agrego: ' + Productos[2].producto);
                    console.log('Se agrego:  ' + Productos[2].producto);
                    total = total + Productos[2].precio;
                    break;
                case '4':
                    alert('Se agrego: ' + Productos[3].producto);
                    console.log('Se agrego:  ' + Productos[3].producto);
                    total = total + Productos[3].precio;
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


