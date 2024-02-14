const plantilla = document.getElementById("element").content;
const container = document.getElementById("container");

const instancia_de_plantilla = document.importNode(plantilla, true);
instancia_de_plantilla.firstElementChild.textContent = "Hello World";
instancia_de_plantilla.lastElementChild.textContent =
  "Por fin he conseguido renderizar el template";
container.append(instancia_de_plantilla);
