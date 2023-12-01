//---------------> ARROW FUNCTION <---------------

function name() {
  console.log("soy un mensaje en una function");
}

// Siempre va dentro de una constante
const nombre = () => {
  console.log("soy un mensaje en arrow function");
};

const suma = (a, b) => a + b;

// ------> funciones anonimas <------
let arreglo = [
  "string",
  12,
  true,
  [1, 2],
  function () {
    console.log("elemento function");
  },
  () => {
    console.log("elemento arrow");
  },
];

// -----> Correr una funcion anonima dentro de un arreglo <------

//arreglo[4]();
//devuelve ---> elemento function

//arreglo[5]();
//devuelve ---> elemento arrow

// ===================>>> EJERCICIOS <<<===================

//Crear una funcion llamada cadenaDeCaracteres que reciba un texto como parametro. La función deberá generar un array donde cada palabra será un nuevo elemento (no debe contar los espacios). Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra, última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. Toda está información se deberá mostrar en console.log independientes.

//EJEMPLO:
/* let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?"

cadenaDeCaracteres(texto)
 ↓ ↓ ↓ ↓ DEBERÁ RETORNAR  ↓ ↓ ↓ ↓

==> "El texto contiene 30 palabras"

==> "La primera palabra es LOREM"

==> "La última palabra es CULPA?"

==> ['culpa?', 'accusamus', 'incidunt', 'reiciendis', 'itaque', 'Vitae', 'velit!', 'optio', 'corporis', 'facilis', 'quam', 'aut', 'aperiam', 'ut', 'explicabo', 'laudantium', 'beatae,', 'doloribus', 'autem', 'adipisci', 'error', 'Ex', 'elit.', 'adipisicing', 'consectetur', 'amet', 'sit', 'dolor', 'ipsum', 'Lorem'] <== ORDEN INVERSO

==> ['accusamus', 'adipisci', 'adipisicing', 'amet', 'aperiam', 'aut', 'autem', 'beatae,', 'consectetur', 'corporis', 'culpa?', 'dolor', 'doloribus', 'elit.', 'error', 'Ex', 'explicabo', 'facilis', 'incidunt', 'ipsum', 'itaque', 'laudantium', 'Lorem', 'optio', 'quam', 'reiciendis', 'sit', 'ut', 'velit!', 'Vitae'] <== ORDEN ALFABETICO

==> ['Vitae', 'velit!', 'ut', 'sit', 'reiciendis', 'quam', 'optio', 'Lorem', 'laudantium', 'itaque', 'ipsum', 'incidunt', 'facilis', 'explicabo', 'Ex', 'error', 'elit.', 'doloribus', 'dolor', 'culpa?', 'corporis', 'consectetur', 'beatae,', 'autem', 'aut', 'aperiam', 'amet', 'adipisicing', 'adipisci', 'accusamus'] <== ALFABETICO INVERSO 
*/

let texto =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?";

let texto2 =
  "A veces faltan las palabras para expresar lo que se quiere decir. En esos casos, la poesía es una manera de manifestar sentimientos que pueden ir desde la tristeza y la angustia hasta la felicidad.";

const cadenaDeCaracteres = (texto) => {
  let arreglo = texto.split(" ");
  let cantidadDePalabras = arreglo.length;
  let primeraPalabra = arreglo[0];
  let ultimaPalabra = arreglo[arreglo.length - 1];
  let reverso = arreglo.reverse();

  let ordenAlfabetico = arreglo.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });

  let alfabeticoInvertido = ordenAlfabetico.reverse();

  console.log(`El texto contiene ${cantidadDePalabras} palabras`);
  console.log(`La primera palabra es ${primeraPalabra}`);
  console.log(`La última palabra es ${ultimaPalabra}`);
  console.log("ORDEN INVERSO ==>", reverso);
  console.log("ORDEN ALFABETICO ==>", ordenAlfabetico);
  console.log("ORDEN ALFABETICO INVERTIDO ==>", alfabeticoInvertido);
};

// CREAR una funcion llamada parOImpar donde le pregunte al usuario si el numero recibido es par o impar

const parOImpar = (numero) => {
  /* if (numero % 2 === 0) {
    console.log("es par");
  } else {
    console.log("es impar");
  } */

  numero % 2 === 0 ? alert("SOY PAR") : alert("SOY IMPAR");
};

//let pregunta = Number(prompt("decime un numero y te digo si es par o impar"));
//console.log(parOImpar(pregunta));

//Has una funcion llamada "contador" que haga un contador de 0 a al numero POSITIVO que pase el usuario

const contador = (numero) => {
  /* for (let i = 0; i <= numero; i++) {
    console.log(i);
  } */

  //variable acumuladora
  let i = 0;

  //loop
  while (i <= numero) {
    //codigo
    console.log(i);
    //condicion de corte
    i++;
  }

  console.log("SALI DEL LOOP");
};

console.log(contador(20));
