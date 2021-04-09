import Heading from './Heading'

customElements.define('app-heading', Heading)

declare global {
  interface HTMLElementTagNameMap {
    'app-heading': Heading
  }
}
