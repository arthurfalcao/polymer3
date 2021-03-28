import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'
import { StampedTemplate } from '@polymer/polymer/interfaces'

import styles from './styles'

type Color = 'black' | 'white'

type As = keyof Pick<
  HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

class Heading extends PolymerElement {
  @property({ type: String })
  as: As = 'h2'

  @property({ type: String })
  color: Color = 'black'

  static get template() {
    return html`
      <style>
        ${styles}
      </style>

      <slot></slot>
    `
  }

  /**
   * Generetes the heading tag based on the `as` property
   */
  _attachDom(dom: StampedTemplate | null): ShadowRoot | null {
    const { as, color } = this

    if (dom) {
      const slot = dom.querySelector('slot')
      const heading = document.createElement(as)

      if (slot) heading.appendChild(slot)

      heading.classList.add(`text-${color}`)
      dom.appendChild(heading)
    }

    return super._attachDom(dom)
  }
}

export default Heading
