//Ejercicio 1

/* let nombre = prompt('Nombre');
let edad = prompt('¿Edad?');
alert(`Hola ${nombre} tienes ${edad} años, el próximo año tendrás ${++edad} años `); */

//Ejercicio 2

/* let respuesta = prompt('Escribe una figura geométrica');
let b = ''
let h = ''
let r = ''

switch (respuesta) {
    case 'rectángulo':
        b = parseInt(prompt('Base'));
        h = parseInt(prompt('Altura'));
        alert(`El área de tu rectángulo es ${b*h}`);
    break;
    case 'triángulo':
        b = parseInt(prompt('Base'));
        h = parseInt(prompt('Altura'));
        alert(`El área de tu triángulo es ${b*h/2}`);
    break;
    case 'círculo':
        r = parseInt(prompt('Radio'));
        alert(`El área de tu círculo es ${Math.PI*Math.pow(r,2)} `);
    break;
    default:
        alert('Por favor escoge una figura que sea un triángulo, un rectángulo o un círculo');       
} */

// Ejercicio #4

/* number = parseInt(prompt("Escribe un número"));
let primo;

if (number === 1) {
  console.log(`El número no es válido`);
} else {
  for (let i = 2; i < number; i++)
    if (number % i == 0) {
      console.log(i);
      console.log(`${number} no es un número primo`);
      primo = false;
      break;
    }

  if (primo != false) {
    console.log(`${number} es un número primo`);
  }
} */ 

// Ejercicio #5

/* let number = parseInt(prompt('Escribe un número'));
let result = 1;

for (i = number; i>0; i-- ) {    
    result *= i;
}

console.log(result); */

// Ejercicio #6

/* let number
let suma = 0;
let vueltas = 0;

do {
  number = parseInt(prompt(`Introduce un número para una suma`))
  console.log(number)
  suma += number
  vueltas++  
}while (suma < 50)

console.log(`el total acumulado es ${suma}, has introducido ${vueltas} números`); */


// Ejercicio 7

/* let numbers = [11, 18, 13, 24, 8];
let impares = [];
let pares = [];
let randomNumber
let result


for (let number of numbers) {    
    randomNumber = Math.round(Math.random()*10);
    result = number * randomNumber;
    console.log(`${number} x ${randomNumber} = ${result}`);
    (result % 2 == 0) ? pares.push(result) : impares.push(result)      
}

console.log(pares,impares);
 */
// Corrección Dorian, para los números utilizó una constante,porque este valor no va a ser modificado, sobra el Math.round



//Ejercicio 8

/* const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dniString = prompt(`Escribe tú DNI`)
let letra
let dni

if (dniString.length > 8 || dniString < 0) {
    console.log (`Ingresaste un dni incorrecto recarga la página para ingresar otro número`)   
} else{
    dni = parseInt(dniString);
    console.log(dni);
    letra = LETRAS[dni % 23];
    console.log(`La letra que corresponde a tu dni # ${dni} es ${letra}`);
} */

// Ejercicio 9
/* 
let palabra = prompt(`Escribe una palabra`);
palabra = palabra.toLowerCase();
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
palabra = removeAccents(palabra);
let vocales = [];
let consonantes = [];
let letra;



for (let i = 1; i <= palabra.length; i++) {
  
  letra = palabra.substring(i-1,i);

  switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      vocales.push(letra)
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'y':
    case 'z':
      consonantes.push(letra)
      break;  
  }
}console.log(`Tú palabra es ${palabra}, la cantidad de letras que tiene es ${palabra.length} su número de consonantes es ${consonantes.length} y el de vocales es ${vocales.length}.`);
 */

// Ejercicio 10

/* let colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

let userColor = prompt(`Introduce tu color favorito`);
userColor = userColor.toLowerCase();

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

userColor = removeAccents(userColor);

if (colors.indexOf(userColor) >=0) {  
  console.log(`Escogiste el color ${userColor}, uno de los colores más populares`);
}else {
  console.log(`Escogiste el color ${userColor},que no está en la lista de los colores más populares`);
} */



