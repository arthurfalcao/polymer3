import Heading from './heading'

customElements.define('p3-heading', Heading)

declare global {
  interface HTMLElementTagNameMap {
    'p3-heading': Heading
  }
}
