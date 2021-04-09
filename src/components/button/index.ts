import Button from './Button'

customElements.define('app-button', Button)

declare global {
  interface HTMLElementTagNameMap {
    'app-button': Button
  }
}
