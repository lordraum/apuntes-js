// Enviar datos con 'POST'

const form = document.getElementById('form')

form.addEventListener('submit',e => {
    e.preventDefault()
    sendData(form)   
    
}) 

const sendData = (data) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'marvel.php')

    // creando objeto FormData
    const formData = new FormData(data)

    xhr.send(formData)
}

