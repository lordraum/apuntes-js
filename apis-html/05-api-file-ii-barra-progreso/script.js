
const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')
const root = document.documentElement

// Ejercicio barra progreso div + span

/* fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    
    fileReader.addEventListener('progress', (e) => {
        progress.style.width = Math.round(e.loaded * 100 / e.total) + '%'
    })
    
    fileReader.addEventListener('loadend', (e) => {
        progress.style.width = '100%'
    })
})
*/

// Ejercicio barra progreso, solamente 1 div


fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Math.round(e.loaded * 100 / e.total) + '%' )
    })

    fileReader.addEventListener('loadend', (e) => {
        root.style.setProperty = '100%'
    })
})

