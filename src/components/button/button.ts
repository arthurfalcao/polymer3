import { property, query } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'
import classNames from 'classnames'

import styles from './styles'

type Size = 'small' | 'medium' | 'large'

class Button extends PolymerElement {
  @property({ type: String })
  private size: Size = 'medium'

  @property({ type: Boolean })
  private fullWidth = false

  @property({ type: Boolean, readOnly: true })
  private hasIcon = false

  @property({ type: Boolean, readOnly: true })
  private hasChildren = false

  @query('slot[name=icon]')
  private icon?: HTMLSlotElement

  @query('slot:not([name]')
  private bChildren?: HTMLSlotElement

  /**
   * Polymer method for readOnly property
   * @link https://polymer-library.polymer-project.org/3.0/docs/devguide/properties#read-only
   */
  private _setHasChildren!: (hasIcon: boolean) => void
  private _setHasIcon!: (hasIcon: boolean) => void

  static get template() {
    return html`
      ${styles}

      <button class$="[[btnClass(size, fullWidth, hasChildren, hasIcon)]]">
        <slot name="icon"></slot>

        <span>
          <slot></slot>
        </span>
      </button>
    `
  }

  connectedCallback() {
    super.connectedCallback()

    this._setHasChildren(
      this.bChildren
        ?.assignedNodes()
        .some((item) => !!item.textContent?.trim()) || false
    )
    this._setHasIcon(!!this.icon?.assignedElements().length)
  }

  private btnClass(
    size: Size,
    fullWidth: boolean,
    hasChildren: boolean,
    hasIcon: boolean
  ): string {
    return classNames('wrapper', `size-${size}`, {
      'full-width': fullWidth,
      'has-children': hasChildren,
      'has-icon': hasIcon
    })
  }
}

export default Button
