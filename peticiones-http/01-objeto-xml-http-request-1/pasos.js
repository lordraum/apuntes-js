// PASOS PETICIÓN AJAX TIPO 'GET' CON API

// RESUMEN

/* 
- Crear evento / función, para solicitar datos.
-- Instanciar xhr
-- Abrir conexión xhr.open('peticionTipo','url')
-- Enviar petición xhr.send() al final
-- Capturar evento load en xhr
--- Parámetro 2 variable para datos
--- Convertir datos a formato JSON
---- Crear variable para guardar datos JSON con método JSON.parse()
--- Indicar lo que se va a realizar con los datos obtenidos
--- Utilizar fragment, búcle for o forEach, para insertar los datos.
*/


// Paso a paso explicativo

// - Crear evento / Función donde se realice la petición.

element.addEventListener("click", () => {
  /* -- Instanciar objeto XMLHttpRequest(), donde se guardará la respuesta, por convención se suele usar xlr para declarar la variable.  */
  let xhr = new XMLHttpRequest();

  /* Abrir la conexión con el método open(), que recibe 2 parámetros. El parámetro 1 define el tipo de petición, que puede ser 'GET', que solicita datos, 'POST' que los envía, 'PUT' que actualiza registros, 'DELETE' que elimina los datos. El parámetro 2 recibe la url a donde realizaremos la petición.  */
  xhr.open("GET", "url");

  /*  Indicar lo que deseamos hacer con los datos obtenidos
   */

  /* Capturar evento load en xhr, colocar como  2do parámetro la variable donde guardaremos los datos de la respuesta. verificar en consola que todo hasta aquí esté correcto*/

  xhr.addEventListener("load", (data) => {
    /* console.log(data.target.response) */

    /* Los datos obtenidos son un 'string' Convertir datos a formato JSON*/
    const dataJSON = JSON.parse(data.target.response);

    /* Acción que deseamos realizar con los datos obtenidos
    En este caso guardar cada registro en un nuevo <li> que se añadirá a una lista <ul> */

    // Localizando lista <ul>
    const list = document.getElementById("list");
    
    // declarar e instanciar fragment
    const fragment = document.createDocumentFragment()

    // Definiendo Bucle para insertar cada registro en un elemento de la lista
    for (const userInfo of dataJSON) {
        
      // Crear items <li>          
      const listItem = document.createElement("LI");

      // Añadiendo contenido a cada <li>
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;

      // Insertando elementos en fragment
      list.append(fragment)
      
    }

    // Insertar fragment en lista
    list.append(listItem);
  });

  // Enviar petición (crear al inicio)
  xhr.send()
});




