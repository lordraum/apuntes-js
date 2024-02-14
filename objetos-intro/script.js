/* 
const walcao = {
    nombre : 'Walcao',
    velocidad : 75,
    remate: 70,
    resistencia : 60,
    defensa : 20,
    cabeza : 69,
}

//Para acceder a un value
console.log(`La potencia de remate del jugador ${walcao.nombre} es ${walcao['remate']}`);

//Para acceder a todas las keys
for (const key in walcao) {
    console.log(key);
}

//Para acceder a los values
for (const key in walcao) {
    console.log(walcao[key]);
}

//Para acceder a todos los elementos de un array dentro de un objeto

const product = {
    name : 'Rosas y vino',
    precio : 65000,
    domicilio : 8500,
    decoración : ['tarjeta personalizada', 'pin con mensaje'],
    contenido : ['Rosas', 'vino', 'follaje', 'chocolates']
}

for (const contenidoItem of product.contenido) {
    console.log(contenidoItem);
}

console.log(`El producto ${product.name} cuesta ${product.precio} incluye ${product.decoración[0]} y ${product.decoración[1]} `);

 */

const person = {
    name : 'Olga',
    age : '35',
    profession : 'Docente',
    City : 'Bogotá',    
    sons : ['Santi', 'Mary']
}

for(const key in person){
    console.log(person[key])
}




