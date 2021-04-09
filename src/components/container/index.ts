import Container from './Container'

customElements.define('app-container', Container)

declare global {
  interface HTMLElementTagNameMap {
    'app-container': Container
  }
}
