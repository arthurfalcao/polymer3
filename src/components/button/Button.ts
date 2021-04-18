import { property, query } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'
import classNames from 'classnames'

type Size = 'small' | 'medium' | 'large'

class Button extends PolymerElement {
  @property({ type: String })
  private size: Size = 'medium'

  @property({ type: Boolean })
  private fullWidth = false

  @query('slot[name=icon]')
  private icon?: HTMLSlotElement

  @query('slot:not([name]')
  private slottedChildren?: HTMLSlotElement

  static get template() {
    return html`
      <style include="app-button-styles"></style>

      <button class$="[[btnClass(size, fullWidth)]]">
        <slot name="icon"></slot>

        <span>
          <slot></slot>
        </span>
      </button>
    `
  }

  connectedCallback() {
    super.connectedCallback()

    const slottedNodes = this.slottedChildren?.assignedNodes({ flatten: true })
    const hasChildren = slottedNodes?.some((node) => !!node.textContent?.trim())
    if (hasChildren) this.setAttribute('has-children', '')

    const hasIcon = this.icon?.assignedElements().length
    if (hasIcon) this.setAttribute('has-icon', '')
  }

  private btnClass(size: Size, fullWidth: boolean): string {
    return classNames('wrapper', `size-${size}`, {
      'full-width': fullWidth
    })
  }
}

export default Button
