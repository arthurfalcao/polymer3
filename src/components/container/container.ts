import { PolymerElement, html } from '@polymer/polymer'

import styles from './styles'

class Container extends PolymerElement {
  static get template() {
    return html`
      ${styles}

      <div class="wrapper">
        <slot></slot>
      </div>
    `
  }
}

export default Container
