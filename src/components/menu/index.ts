import Menu from './Menu'

customElements.define('app-menu', Menu)

declare global {
  interface HTMLElementTagNameMap {
    'app-menu': Menu
  }
}
