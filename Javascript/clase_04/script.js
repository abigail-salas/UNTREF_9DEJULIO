//pasandole 2 o más parametros (recibe cualquier cantidad de prametros)
function suma(num1, num2) {
  let resultado = num1 + num2;
  console.log(resultado);
}
suma(10, 20);

//funcion que NO RECIBE PARAMETROS (recibe cualquier cantidad de prametros)
function saludo() {
  console.log("soy una funcion que no recibe parametros");
}
saludo();

//recibe un solo parametro (recibe cualquier cantidad de prametros)
function restaDe10(params) {
  let resultado = params - 10;
  console.log(resultado);
}
restaDe10(100);

//=========> Orden de los parametros <=========
function presentacion(nombreCompleto, edad, ciudad, vocacion) {
  console.log(
    `Hola! Soy ${nombreCompleto}, tengo ${edad} años. Me dedica a ${vocacion} en la ciudad de ${ciudad}`
  );
}

//presentacion("Pablo Valiña", 25, "9 de Julio", "Pintar");
//devuelve ---> Hola! Soy Pablo Valiña, tengo 25 años. Me dedica a Pintar en la ciudad de 9 de Julio

//presentacion("9 de Julio", "Pablo Valiña", 25, "Pintar");
//devuelve ---> Hola! Soy 9 de Julio, tengo Pablo Valiña años. Me dedica a Pintar en la ciudad de 25

//=========> variables como parametros <=========
/* let nombreCompleto = prompt("Decime tu nombre completo");
let edad = prompt("Decime tu edad");
let ciudad = prompt("Decime tu ciudad");
let vocacion = prompt("Decime tu vocacion"); */

//presentacion(nombreCompleto, edad, ciudad, vocacion);

//=========> return <=========
//Los datos van a quedar guardados en memoria a diferencia del console.log() que es solo una instancia
//No existe NADA despues del return, es codigo inaccesible

function multiplicar(params) {
  let resultado = params * 2;
  return resultado;
}

console.log(`La funcion suma está devolviendo ${suma(30, 30)}`);
console.log(`La funcion multiplicar está devolviendo ${multiplicar(20)}`);

//=========> scope o alcance de variables <=========

//variables global
let global = "funciono en todas partes";

function prueba() {
  //variable local
  let local = "solo funciono dentro de la function pruba";

  //Solo va a ejecutarse dentro de su BLOQUE DE CÓDIGO
  console.log(local, "<-- soy la variable LOCAL en function prueba");

  //La variable global, puede ser llamada en cualquier parte del código
  console.log(global, "<-- soy la variable GLOBAL en function prueba");
}

prueba();

//La variable global, puede ser llamada en cualquier parte del código
console.log(global, "<-- soy la variable GLOBAL FUERA DE LA FUNCION");

//Aquí no va a existir la variable "local" porque está por fuera de su bloque de código
//console.log(local, "<-- soy la variable LOCAL FUERA DE LA FUNCION");

//en éste caso, puedo definir una variable llamada "local" porque no existe fuera de su bloque de código
let local = "soy local definida como una variable GLOBAL";

console.log(local);
