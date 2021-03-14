import { PolymerElement, html } from '@polymer/polymer'
import { StampedTemplate } from '@polymer/polymer/interfaces'

type Color = 'black' | 'white'

type As = keyof Pick<
  HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

class Heading extends PolymerElement {
  static get properties() {
    return {
      as: {
        type: String,
        value: 'h2'
      },
      color: {
        type: String,
        value: 'black'
      }
    }
  }

  static get template() {
    return html`
      <style>
        :host {
          --text-black: #030517;
          --text-white: #fafafa;
        }

        .text-black {
          color: var(--text-black);
        }

        .text-white {
          color: var(--text-white);
        }
      </style>

      <slot></slot>
    `
  }

  _attachDom(dom: StampedTemplate | null): ShadowRoot | null {
    const as = this.get('as') as As
    const color = this.get('color') as Color

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
