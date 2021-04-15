import Banner from './Banner'

customElements.define('app-banner', Banner)

declare global {
  interface HTMLElementTagNameMap {
    'app-banner': Banner
  }
}
