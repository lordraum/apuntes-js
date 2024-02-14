let num = 4;

/* (num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es inpar`); */

(num % 2 == 0) ? 
(
    console.log(`${num} es par`),
    console.log(`${num} es par 2`)
)
:
(
    console.log(`${num} es inpar`),
    console.log(`${num} es inpar 2`)
)

let vivienda = 'perro';

(vivienda === 'apartamento') ? console.log(`Vives es un ${vivienda}`) : console.log(`vives en una casa`);

let resultado = 80;

(resultado > 75) ? console.log('Aprobaste el exámen') : console.log('reprobaste el exámen')

let ciudad ='Bucaramanga';

(ciudad === 'Bogotá') ?
(console.log(`Si hacemos domicilios en ${ciudad}`),
    console.log(`El costo del domicilio es $5000`))
:
    console.log(`No hacemos domicilios en ${ciudad}`)
