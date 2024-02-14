class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>${this.innerText}<h1>`
  }
  // Lógica adicional del elemento personalizado
}

customElements.define("hello-world", HelloWorld);