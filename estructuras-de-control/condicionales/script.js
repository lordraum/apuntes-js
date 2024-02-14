const validUser = true
const isClick = false

let element
let color

const car = 'Mazda'

const prof = 'Guitarrista'
const ciudad = 'Cali'

const num = 1

// if, else --> 1 sola instrucción

if (validUser) console.log('Tu usuario es válido puedes ingresar')
else console.log('Tu usuario no es válido no puedes ingresar')

// if, else --> más de una instrucción

if (isClick) {
  element = 'DIV'
  color = 'azúl'
} else {
  element = 'P'
  color = 'rojo'
}

console.log(`El elemento a crear debe ser un </${element.toLocaleLowerCase()}> y su texto será de color ${color}`)

// else if

if (car === 'Mazda') console.log(`Debes llevar tu carro ${car} al concesionario Japan Motors`)
else if (car === 'Chevrolet') console.log(`Debes llevar tu carro ${car} al concesionario Shevy United`)
else console.log('solo tengo información sobre Chevrolet y Mazda')


// If anidados

if(prof === 'Guitarrista') {
  if(ciudad === 'Bogotá') console.log(`Puedes inscriberte a la convocatoria para ${prof}s en ${ciudad}`)
  else console.log('No eres apto para esta convocatoria')
} 

// Switch

// Simple
switch (num) {
  case 1:
    console.log(`el valor del número es 1`);
    break;
  case 2:
    console.log(`el valor de número es 2`);
    break;
  default:
    console.log(`dato no válido`);
}

// Múltiple
switch (num) {
  case 1:
  case 3:
  case 5:
    console.log(`${num} es inpar`);
    break
  case 2:
  case 4:
    console.log(`${num} es par`);
    break
  default:
    console.log(`dato no válido`);
}
