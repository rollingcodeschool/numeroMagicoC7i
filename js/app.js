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

function adivinar(e){
    //aqui va la logica para verificar si lo que ingreso el usuario en el input es igual, menor o mayor que el numeroAdivinar
    e.preventDefault();
    let numeroIngresado = parseInt(document.querySelector('input').value);
    console.log(numeroIngresado);
    if (numeroAdivinar === numeroIngresado) {
        alert("Felicitaciones usted adivino el Numero.");
        formulario.reset();
      } else if (numeroAdivinar < numeroIngresado) {
        alert("El numero es menor al que usted ingreso.");
      } else{
          alert("El numero es mayor al que usted ingreso.")
      }
}
 