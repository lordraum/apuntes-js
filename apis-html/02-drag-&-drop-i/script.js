const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

// Objeto arrastrar
/* smile.addEventListener('dragend', () => {
    console.log('Drag End')
}) */


/* dropZone.addEventListener('dragover',(e) => {
    // Permitir que el objeto se pueda dejar en la zona
    e.preventDefault()
    console.log('Drag Over')
})

// Para que funcione debe estar activado el evento dragover
dropZone.addEventListener('drop',() => {
    // Cancelar que la imagen se abra (comportamiento por defecto)
    e.preventDefault()
    console.log('Drop')
}) */

dropZone.addEventListener('dragleave',() => {
    console.log('Drag Leave')
})