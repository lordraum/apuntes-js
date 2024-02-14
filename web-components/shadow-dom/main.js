const template = document.createElement('template')
template.innerHTML = `
<style>
  h3 {
    color: green;
  }
  </style>
  <h3 data-title></h3>
`

class Block extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(template.content.cloneNode(true))
    this.h1 = shadow.querySelector('[data-title]')
    this.h1.textContent = this.textContent
  }
}

customElements.define('block-elm', Block)
