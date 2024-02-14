const form = document.getElementById('form')
// form tiene los input 'key' y 'value'

// selected al que añadiremos un value con la key seleccionada
const keys = document.getElementById('keys')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    // Asignar en sessionStorage el valor del input 'key' como el parámetro key y el valor del input 'value' como el parámetro value.

    sessionStorage.setItem(form.key.value, form.value.value)

    // crear option con la key seleccionada
    keys.innerHTML += `<option>${form.key.value}</option>`
    form.reset()
})

// escuchar evento cuando cambie el valor de 'keys' (selected)
keys.addEventListener('change', () => {
    const infoValue = document.getElementById('infoValue')

    //Imprimir en infoValue el valor de la key actual
    infoValue.textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)    
})

sessionStorage.clear()
sessionStorage.removeItem('name')


 // Ejemplo con strings
    /* sessionStorage.setItem('name', 'Fer') */
    