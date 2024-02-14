//Objetos
/* 
const rosasVino = {
    id: 1,
    title: 'Rosas y vino',
    price: 65000,
    shippingType: 1,
    active: true,
    shippingZones: {
        zona1 : 'Bogotá Central',
        Zona2 : 'Bogotá Periferia' 
    }
}
 */

// Creando variables para acceder a cada propiedad
/* const {id, title, price, shippingType, active} = rosasVino */

// Accediendo a una propiedad en especifico y expandiendo el resto
/* const {title, ...rest} = rosasVino */

// Cambiando el nombre a la propiedad
/* const {propiedad: newName} = object */
/* const {title : productName} = rosasVino */

/* const {shippingZones : {zona1}} = rosasVino */

// Arrays

/* const numbers = [1, 2, 3, 4]

const [ , , z, ...rest] = numbers; */

// Desestructurando funciones

/* const sumar = (a, b) => {

    const getter = a+b
    const setter = (value1, value2) => value1 + value2
    
    return[getter, setter]
}

const [values, setValues] = sumar(5, 4)

console.log(values, setValues(2, 4))
 */

const element = {
    id: 'div',
    bgColor: 'red' 
}

// Utilizando como parámetros propiedades del objeto para pasar como argumento el objeto

/* const changeBackGroundColor = ({id, bgColor}) => `You have changed the background color of the element ${id} to ${bgColor}`

const mensaje = changeBackGroundColor(element)
mensaje */

const validations = {
    email: false,
    firstName: false,
    lastName: false
}

const {email: v1, firstName: v2, lastName: v3} = validations

console.log([v1, v2, v3])



