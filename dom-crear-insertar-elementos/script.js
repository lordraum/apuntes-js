// crear e insertar elementos

const days = ['Lunes' , 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Festivo']

const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')

/*
Crear elementos con .createElement
- Se crean con document
- Entre paréntesis va la etiqueta html
*/

/* const itemList = document.createElement('LI')
itemList.textContent = 'Lunes' */

/*
Añadir elementos creados con .appendchild
- El elemento a añadir siempre debe ser hijo de otro elemento
*/

/* daysList.appendChild(itemList) */

// Rellenar daysList con el contenido del array days

// Opción 1 con innerHTML, no correcta.

/* for(const day of days){
    daysList.innerHTML += (`<li>${day}</>`)
} */

// Esta opción no es recomendable porque cada vez que se ejecute el búcle se redibuja el DOM entero

// Opción 2 (correcta) con createDocumentFragment

/*
createDocumentFragment
- Inyecta un trozo de código en el DOM
- Fue creado para evitar que el navegador se sobrecargue al inyectar código con búcles

¿Como usarlo?
- Crear la variable que servirá como contenedor
- Se suele usar fragment como nombre del contenedor
- Asignar el código a inyectar
- Inyectar todo el código en un tiempo

const fragment = document.createDocumentFragment()
*/

const fragmentList = document.createDocumentFragment()
const fragmentSelect = document.createDocumentFragment()
// Pendiente resolver duda, de utilizar más de un fragment

/*     
for(const day of days){
    const itemList = document.createElement('LI');
    itemList.textContent = day;
    fragment.appendChild(itemList)    
} */

days.forEach((day)=> {
    const itemList = document.createElement('LI');
    itemList.textContent = day;
    fragmentList.appendChild(itemList)
})


days.forEach((day)=> {
    const itemSelect = document.createElement('OPTION');
    itemSelect.textContent = day;
    itemSelect.setAttribute('value',day.toLowerCase())
    fragmentSelect.appendChild(itemSelect)
})

daysList.appendChild(fragmentList)
daysSelect.appendChild(fragmentSelect)





















