// Sintáxis class

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        // Creando una nueva propiedad que no está definida en el constructor
        this.datos = `Nombre = ${nombre} ${apellido} Edad = ${edad} `
    }
    //Sintáxis método de la clase
    saludar() {
        return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`
    }
}

// Otro Ejemplo
class Producto {
    constructor(precio, precioDomicilio, decoracion) {
        this.precio = precio
        this.precioDomicilio = precioDomicilio
        this.decoracion = decoracion
    }
}

// Instanciar objetos

const juan = new Persona('Juan', 'García', 23)

//Accediendo al objeto

// Nomenclatura del punto
console.log(juan.nombre)
console.log(juan.apellido)
console.log(juan.edad)
console.log(juan.datos)
console.log(juan.saludar())

// O por la key
console.log(juan['nombre'])
console.log(juan['apellido'])
console.log(juan['edad'])
console.log(juan['datos'])
console.log(juan['saludar']())






