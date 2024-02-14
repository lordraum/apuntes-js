const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  // Realizar solicitud 'GET'
  fetch("https://jsonplaceholder.typicode.com/users")  
    
    // Covertir respuesta a JSON
    .then((res) => res.json())

    // Trabajar con los datos
    .then((res) => {
      const fragment = document.createDocumentFragment();
      res.forEach((userInfo) => {
        const listItem = document.createElement("LI");
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragment.append(listItem);
      });

      list.append(fragment);
    });
});

 /*  // validación datos
  .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res))) */