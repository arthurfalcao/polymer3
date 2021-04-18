import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'
import { StampedTemplate } from '@polymer/polymer/interfaces'
import classNames from 'classnames'

import styles from './styles'

type Color = 'black' | 'white'
type Size = 'small' | 'medium'
type As = keyof Pick<
  HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>
type LineColor = 'primary' | 'secondary'

class Heading extends PolymerElement {
  @property({ type: String })
  as: As = 'h2'

  @property({ type: String })
  color: Color = 'black'

  @property({ type: String })
  size: Size = 'medium'

  @property({ type: Boolean })
  lineLeft = false

  @property({ type: Boolean })
  lineBottom = false

  @property({ type: String })
  lineColor: LineColor = 'primary'

  static get template() {
    return html`
      ${styles}

      <slot></slot>
    `
  }

  /**
   * Generetes the heading tag based on the `as` property
   */
  _attachDom(dom: StampedTemplate | null): ShadowRoot | null {
    const { as, color, size, lineLeft, lineBottom, lineColor } = this

    if (dom) {
      const slot = dom.querySelector('slot')
      const heading = document.createElement(as)

      if (slot) heading.appendChild(slot)

      const classes = classNames('wrapper', `color-${color}`, `size-${size}`, {
        'line-left': lineLeft,
        'line-bottom': lineBottom,
        [`line-color-${lineColor}`]: lineLeft || lineBottom
      })
      heading.classList.add(...classes.split(' '))
      dom.appendChild(heading)
    }

    return super._attachDom(dom)
  }
}

export default Heading
