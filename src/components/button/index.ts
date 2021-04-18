import { registerStyles } from 'utils/styles'

import Button from './Button'
import styles from './styles'

registerStyles(styles, {
  moduleId: 'app-button-styles'
})

customElements.define('app-button', Button)

declare global {
  interface HTMLElementTagNameMap {
    'app-button': Button
  }
}
