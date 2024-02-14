// code01
const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const inputSubmit = document.getElementById('submit');
const link = document.getElementById('link');

input.addEventListener('keyup', (e) =>{
    console.log(e.key)
})

//muestra la información del evento (captura)

/* addEventListener('click', (e) => {
    console.log(e);
}) */

// desplegar y buscar información
/* input.addEventListener('keyup', (e) =>{
    console.log(e.explicitOriginalTarget.attributes.length)
}) */

/* // Acceder a target por medio de un botón
button.addEventListener('click', (e) => {
    console.log(e.target);
}) */

/* submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    input.value = 'Haz hecho click!'   
})

link.addEventListener('click', (e) => {
    e.preventDefault();
    inputSubmit.click()
}) */


// ejercicio gallery-box

const gallery = document.getElementById('gallery')

/* Gallery tiene la clase 'box--blue' que en el css tiene un 
background de color azúl, contiene 9 divs con contenido 1-9*/
// 1- Mostrar el texto (contenido) del div en el que se hizo click.
// 2- Aparte cambiar el color del div en el que se hizo click.

// 1
gallery.addEventListener('click', (e) =>{
    console.log(e.target.textContent)        
})

// 2
gallery.addEventListener('click', (e) =>{
    e.target.classList.replace('box--blue', 'box--red')        
})









