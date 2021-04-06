import Container from './container'

customElements.define('app-container', Container)

declare global {
  interface HTMLElementTagNameMap {
    'app-container': Container
  }
}
