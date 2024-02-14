const template = document.createElement('template')
template.innerHTML = /* html */`
  <style>    
    h3 {
      color: green;
    }
  </style>
  <h3>
    <slot></slot>
    <span>
    </span>    
  </h3>
`

class Block extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(template.content.cloneNode(true))
    this.$span = shadow.querySelector('span')
    this.$span.textContent = this.dataset.count
  }

  static get observedAttributes() {

    return ["data-count"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-count") this.updateCount(newValue)
  }

  updateCount(value) {
    this.$span.textContent = this.dataset.count
  }

  connectedCallback() {
    console.log('conectado')
  }

  disconnectedCallback() {
    console.log('desconectado')
  }

}

customElements.define('block-elm', Block)

let count = 0

const $blocks = document.querySelectorAll('block-elm')

const $button = document.getElementById('button')
const $dltButton = document.getElementById('dlt-button')

$button.addEventListener('click', () => {
  count++
  $blocks[0].dataset.count = count
})

$dltButton.addEventListener('click', () => {
  console.log($blocks[1].remove())
})
