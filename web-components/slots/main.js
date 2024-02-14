class Block extends HTMLElement {
  constructor () {
    super()
    this.innerHTML = /* html */`
        <article class="card">
            <p><slot name="my-text">My default text</slot></p>
        </article>
    `
  }
}

customElements.define('my-block', Block)
