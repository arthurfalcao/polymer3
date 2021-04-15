import Footer from './Footer'

customElements.define('app-footer', Footer)

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': Footer
  }
}
