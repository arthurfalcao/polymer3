import Button from './button'

customElements.define('app-button', Button)

declare global {
  interface HTMLElementTagNameMap {
    'app-button': Button
  }
}
