/* 
Objeto window
- Objeto global
- De el descienden todos los objetos
- Es el objeto por defecto cuando no se indica cuál se utiliza
- Métodos window
-- alert()
-- prompt()
-- confirm() - boolean: aceptar - cancelar
- No es recomendable utilizar estos métodos ya que pausan la carga de la página
*/

/* alert('window sin especificar')
window.alert('window especificado') */

/* addEventListener('click',(e)=>{
    console.log(e)
}) */

// Capura el click en cualquier parte del documento

// load se dispara cuando la página ha cargado

/* addEventListener('load',(e)=>{
    console.log('La página ha cargado')
}) */

// evento scroll -- se lanza al hacer scroll el usuario

/* addEventListener('scroll',(e)=>{
    console.log('el usuario ha hecho scroll')
}) */

/* 
Objeto console
- console.log
- console.dir - despliega lo que no es posible con .log
- console.error - muestra una advertencia de error - útil para trabajo en equipo
- console.table - info en columnas - facilita visualización de algunas estructuras como objetos y arrays
*/

/*
Objeto location
- Contiene a la barra de direcciones
-- href - protocol - host - pathname - hash - reload - 
*/


/*
Objeto history
- trabaja con el historial de la pestaña
-- back() - forward() - go(n |-n) .lenght
*/

/* 
Objeto date
- Tiene muchos métodos
- son bastante intuitivos
- Para utilizarlo se necesita instanciarlo
- Day => día de la semana. - Date => día del mes
*/

/*  Mostrar día del */
/* const date = new Date()
console.log(date.getDay())
console.log(date.getDate())
console.log(date.getMonth())
console.log(date) */


// Timers

/* setTimeOut La función se ejecuta al transcurrir el tiempo indicado 
par1 función o callback
par2 tiempo en milisegundos */


// 

/* const button = document.getElementById('button')

const saludar = ()=> {
    console.log('hola')
}

button.addEventListener('click',()=>{
    setTimeout(saludar,3000)
}) */

// clearTimeOut => cancelar timer

/* const button = document.getElementById('button')

const saludar = ()=> {
    console.log('hola')
}

saludar()
// hola

const timeout = setTimeout(()=>{
    console.log('adiós')
},3000)
// adiós

// Cancelar timer timeout
button.addEventListener('click',()=>{
    clearTimeout(timeout)
}) */

// setInterval => se ejecuta cada cierto tiempo



//<h1 id="time">0</h1>
const time = document.getElementById('time')
const button = document.getElementById('button')
let count = 0
const crono = ()=> {
    time.textContent = ++count
}
/* Mostrar en h1 time cada segundo transcurrido (cronómetro), detener el conteo al hacer click en el botón */

// Instanciar intervalo de tiempo de 1 segundo
const interval = setInterval(crono, 1000)

button.addEventListener('click',()=>{
    clearTimeout(interval)
})














