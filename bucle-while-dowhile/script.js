let pass = '';

while(pass != 'Hola') {
    pass = prompt('Escribe tu contraseña')
}

console.log('Bienvenido');

do{
    pass = prompt('Escribe tu contraseña')
}while(pass != 'Hola')

console.log('Bienvenido')