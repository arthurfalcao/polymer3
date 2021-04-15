import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'
import classNames from 'classnames'

import styles from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

class Ribbon extends PolymerElement {
  @property({ type: String })
  color: RibbonColors = 'primary'

  @property({ type: String })
  size: RibbonSizes = 'normal'

  static get template() {
    return html`
      ${styles}

      <div class$="[[ribbonClass(color, size)]]" part="wrapper">
        <slot></slot>
      </div>
    `
  }

  private ribbonClass(color: RibbonColors, size: RibbonSizes): string {
    return classNames('wrapper', `color-${color}`, `size-${size}`)
  }
}

export default Ribbon
