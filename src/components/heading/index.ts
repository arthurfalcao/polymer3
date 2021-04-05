import Heading from './heading'

customElements.define('app-heading', Heading)

declare global {
  interface HTMLElementTagNameMap {
    'app-heading': Heading
  }
}
