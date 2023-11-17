/* let nombre = "Pablo Valiña";
let edad = 24;

console.log(`Hola soy ${nombre} y tengo ${edad} años`);
console.log("Hola soy " + nombre + " y tengo " + edad + " años");
console.log(Boolean(0));
console.log(1 + 2);
console.log("12" + 1);

let nombreCompleto = prompt("Decime como te llamas");
let anios = parseInt(prompt("Decime tu edad"));

alert(`Hola ${nombreCompleto}, en 10 años vas a tener ${10 + anios}`); */

//OPERADORES DE ASIGNACION
let nn = "hola";
nn = "chau";

//OPERADORES DE COMPARACION

//DE IGUALDAD
//simple
12 == 12;
//devuelve ---> true
"hola" == "Hola";
//devuelve ---> false
"hola" == "hola";
//devuelve ---> true
"43" == 43;
//devuelve ---> true

//estricta -------> Compara el VALOR y el TIPO DE DATO ingresado
12 === 12;
//devuelve ---> true
"hola" === "Hola";
//devuelve ---> false;
"43" === 43;
//devuelve ---> false

//DE DESIGUALDAD
//simple
56 != 56;
//devuelve ---> false
"hola" != "Hola";
//devuelve ---> true
"43" != 43;
//devuelve ---> false
23 != 34;
//devuelve ---> true

//estricta
56 !== 56;
//devuelve ---> false
"hola" !== "Hola";
//devuelve ---> true
"43" !== 43;
//devuelve ---> true
23 !== 34;
//devuelve ---> true

//OPERADORES DE INCREMENTO ---> Suma de a 1
let valor = 0;
valor++;

//OPERADORES DE DECREMENTO ---> Resta de a 1
valor = 100;
valor--;

//OPERADORES DE ASIGNACION

//de adicion ---> suma en base a otro resultado
valor = 0;
valor += 5;
//suma de a 5

//IF ELSE

/*let edad = Number(prompt("Decime cuantos años tenés"));

 console.log(edad, "<--- edad");
console.log(typeof edad, "<--- typeof de la edad"); */

/* if (edad >= 18) {
  if (edad === 30) {
    alert("Bienvenido a las 3 decadas");
  } else {
    alert("Felicidades por llegar a la mayoria de edad");
  }
} else if (edad === 17) {
  alert("Te falta muy poco!!!");
} else {
  alert("Todavia no llegaste a la mayoria de edad");
}
 */
//TERNARIO

/* edad >= 18
  ? alert("Felicidades por llegar a la mayoria de edad")
  : alert("Todavia no llegaste a la mayoria de edad"); */

/* condicion ? true : false;

if (condicion) {
  true;
} else {
  false;
} */

//ARREGLOS
let numeros = [1, 2, 3, 4, 5, 6];

let datos = [12, "string", true, [1, 2]];

//.LENGTH ----> para saber la cantidad de elementos que hay en un arreglo
datos.length;
//devuelve ---> 4
numeros.length;
//devuelve ---> 6

//para traer un elemento en especifico
datos[3];
//devuelve ---> [(1, 2)];
datos[2];
//devuelve ---> true;
datos[1];
//devuelve ---> ("string");
datos[0];
//devuelve ---> 12;
