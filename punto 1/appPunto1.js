// "use strict";


/*   1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/


// const registerNumber = document.getElementById("inputNumber");
// let numberAleat = -1;


// const createNumber = document.getElementById("checkOut");
// createNumber.addEventListener('click', () => {
//     numberAleat = Math.floor(Math.random()*10 + 1);
//     console.log(numberAleat);
//     // return numberAleat
// })
// console.log(numberAleat);

let inputNum = document.getElementById('inputNumber');
inputNum.addEventListener('input', leerNum, false);

let botonEnviar = document.getElementById('checkOut');
botonEnviar.addEventListener('click', aleatorio, false);


let numeroAleatorio;
let numeroIngresado;
let i = true;
function leerNum(evt){
    numeroIngresado = parseInt(evt.target.value);
}

function aleatorio() {
   

    while (i) {
        numeroAleatorio = Math.floor(Math.random()*10 +1);
        i = false ;
        console.log(numeroAleatorio);
    }
    console.log(numeroAleatorio);
    adivinanza(numeroIngresado,numeroAleatorio); //consultar porque puedo usar la funcion sin enviar las variables como parametro, y cual seria una mejor practica.
}

function adivinanza (ni,na) {
    if (ni === na) {
        alert("Adivinaste!");
    } else if (ni > na){
        alert("Tu numero es mayor al numerito magico.");
    } else{
        alert("Tu numero esta chiquito.")
    }
}