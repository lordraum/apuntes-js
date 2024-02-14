// Peticiones AJAX 

const button = document.getElementById('button')

// Crear función para hacer petición AJAX
// crear objeto para guardar respuesta (por convención se utiliza xhr)
// Utilizar el método .open para conectarse a la base de datos o API
// El método .open puede trabajar con 'GET' 'POST' 'PUT' 'DELETE'
// GET solicita una url
// Antes de finalizar enviar petición con .send
// Indicar lo que se debe hacer con los datos obtenidos, se debe declarar antes de .send - Hay que escuchar un evento para saber cuando la información ha llegado
// 'load' se dispara cuando toda la información ha llegado al objeto
// JSON: Formato de objeto
// JSON.parse() convierte valores en string objeto

button.addEventListener('click',()=>{    
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')   

    xhr.addEventListener('load',(data) => {

        const fragment = document.createDocumentFragment()
        const list = document.getElementById('list')
        const dataJSON = JSON.parse(data.target.response)

        for(const userInfo of dataJSON){   
            const listItem = document.createElement('LI')         
            listItem.textContent = (`${userInfo.id} - ${userInfo.name}`) 
            fragment.append(listItem)           
        }
        list.append(fragment)
      

   /*  
    xhr.addEventListener('load',(data) => {
        const dataJSON = JSON.parse(data.target.response)
        const list = document.getElementById('list')
        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI')
            listItem.textContent = (`${userInfo.id} - ${userInfo.name}`)
            list.append(listItem)
        }
 */
    })
        
    
    xhr.send()
})



  