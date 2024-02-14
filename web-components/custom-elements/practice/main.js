
class Block extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum, tempore quidem corrupti tenetur assumenda obcaecati ea? Provident, nisi dolorem?</p>
      </div>
    `
  }
}

customElements.define('block-elm', Block)