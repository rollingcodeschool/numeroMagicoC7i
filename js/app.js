let btnComenzar = document.querySelector('#btnComenzar');
let numeroAdivinar =0;
//agregar eventos desde javascript
btnComenzar.addEventListener('click', generarNumeroAleatorio);

let formulario = document.querySelector('#formJuego');
formulario.addEventListener('submit', adivinar);


function generarNumeroAleatorio() {
    let numAleatorio = Math.round(Math.random() * (0 - 10) + 10);
    numeroAdivinar = numAleatorio;
    console.log(numeroAdivinar);
}

function adivinar(){
    //aqui va la logica para verificar si lo que ingreso el usuario en el input es igual, menor o mayor que el numeroAdivinar
}
 