const button = document.getElementById("button");
const list = document.getElementById("list");

// Iniciar petición
button.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();

  // Abrir conexión
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // Trabajar con los datos  
  xhr.addEventListener("load", (data) => {

    // convertir datos a JSON
    const dataJSON = JSON.parse(data.target.response);
    
    const fragment = document.createDocumentFragment();

    //Indicar que qqueremos hacer con los datos
    dataJSON.forEach((userInfo) => {
      const listItem = document.createElement("LI");
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      fragment.append(listItem);
    });

    list.append(fragment);
  });

  // Enviar solicitud
  xhr.send();
});
