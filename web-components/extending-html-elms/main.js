const styles = /* html */`
<style>
  ul {
    position: relative;
  }
  button {
    position: absolute;
    border: none;
    background-color: none;
    padding: 0;
    top: 0;
    left: 5px;
    cursor: pointer;
  }
</style>
`

class ExpandableList extends HTMLUListElement {

  constructor() {
    super()

    this.$toggleButton = document.createElement('BUTTON')

    this.$toggleButton.textContent = '>'
    this.appendChild(this.$toggleButton)
    this.insertAdjacentHTML('afterbegin', styles)

    this.$toggleButton.addEventListener('click', () => {
      this.dataset.expanded = !this.isExpanded
    })
  }

  get isExpanded() {
    return this.dataset.expanded !== "false" && this.dataset.expanded != null
  }
}

customElements.define('expandable-list', ExpandableList, { extends: "ul" })
