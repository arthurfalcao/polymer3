import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import styles from './styles'

type Breakpoint = 'small' | 'medium' | 'large' | 'huge'

class MediaMatch extends PolymerElement {
  @property({ type: String, reflectToAttribute: true })
  lessThan?: Breakpoint

  @property({ type: String, reflectToAttribute: true })
  greaterThan?: Breakpoint

  static get template() {
    return html`
      ${styles}

      <slot></slot>
    `
  }
}

export default MediaMatch
