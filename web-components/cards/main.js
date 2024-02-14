import '../css/style.css'
import 'normalize.css'

// eslint-disable-next-line no-unused-vars

const template = /* html */`
    <article class="feature">
        <div class="feature__box">
            <div class="feature__img-box">
                <slot name="image" class="feature__img"></slot>                
            </div>
            <div class="feature__info">
                <slot name="title" class="feature__title"></slot>                
                <slot name="text" class="feature__text"></slot>              
            </div>
        </div>
    </article>
    `
const fragment = document.createDocumentFragment
fragment.innerHTML = template
// eslint-disable-next-line no-undef
class FeatureCard extends HTMLElement {
  constructor() {
    super()
    this.append = fragment
    console.log(this)
  }
}

// eslint-disable-next-line no-undef
customElements.define('feature-card', FeatureCard)
