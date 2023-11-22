//------------------ARREGLOS-------------------
let colores = ["azul", "rojo", "verde", "morado"];

let datosArray = ["Maria", "Juarez", 45, "Cordoba", true];

//ACCEDER A LOS VALORES
console.log(datosArray[2]);
//devuelve --> 45

//------------------OBJETOS-------------------
let datosObjeto = {
  nombre: "Maria",
  apellido: "Juarez",
  edad: 45,
  ciudad: "Cordoba",
  trabajo: true,
};

//ACCEDER A LOS VALORES
//BRACKET NOTATION
console.log(datosObjeto["ciudad"]);
//devuelve --> Cordoba

//DOT NOTATION
console.log(datosObjeto.trabajo);

//MODIFICAR VALORES
//BRACKET NOTATION
datosObjeto["ciudad"] = "Misiones";
console.log(datosObjeto["ciudad"]);
//devuelve --> Misiones

//DOT NOTATION
datosObjeto.trabajo = false;
console.log(datosObjeto.trabajo);
//devuelve --> false

let baseDeDatos = [
  {
    nombre: "Maria",
    apellido: "Juarez",
    edad: 45,
    ciudad: "Cordoba",
    trabajo: true,
  },
  {
    nombre: "Maria",
    apellido: "Juarez",
    edad: 45,
    ciudad: "Cordoba",
    trabajo: true,
  },
  {
    nombre: "Maria",
    apellido: "Juarez",
    edad: 45,
    ciudad: "Cordoba",
    trabajo: true,
  },
  {
    nombre: "Maria",
    apellido: "Juarez",
    edad: 45,
    ciudad: "Cordoba",
    trabajo: true,
  },
];

//-----------PROPIEDADES Y METODOS DE STRING ------------------

let texto =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio doloribus nostrum! Quam dignissimos sed fuga porro perspiciatis necessitatibus";

console.log(texto.length);

//pasar a mayusculas y minusculas
console.log(texto.toLowerCase());

console.log(texto.toUpperCase());

//corta en base al parametro pasado
console.log(texto.split(" "));

//junta las variables
let mascota = "Michi";
let color = "Naranja";
let mensaje = mascota.concat(" ", color);
console.log(mensaje);

//Devuelve a partir de qué caracter se encuentra el parametro // devuelve -1 si no encuentra coincidencias
console.log(texto.indexOf("ipsum"));

//Reemplaza los parametros
console.log(texto.replace("Lorem", "Soy el reemplazo"));

//corta en base a lo pasado por parametro
console.log(texto.slice(5, 20));

//OPERADOR LOGICO AND Y OR
true && true;
//devuelve ----> true
true && false;
//devuelve ----> false
false && true;
//devuelve ----> fasle
false && false;
//devuelve ----> false

true || true;
//devuelve ----> true
true || false;
//devuelve ----> true
false || true;
//devuelve ----> true
false || false;
//devuelve ----> false

//OPERADOR DE NEGACION
!true;
//devuelve ----> false
!false;
//devuelve ----> true
!0;
//devuelve ----> true
!234;
//devuelve ----> false
!"  ";
//devuelve ----> false
!"";
//devuelve ----> true

!("67" !== 63 || " " === " ");
!(true || true);
!true;
false;

let primero = 10;
let segundo = 20;
let ultimo = "z";
let penultimo = "o";

primero === "10" && penultimo != ultimo && !(ultimo !== "z" || segundo === 20);
