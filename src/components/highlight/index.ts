import Highlight from './Highlight'

customElements.define('app-highlight', Highlight)

declare global {
  interface HTMLElementTagNameMap {
    'app-highlight': Highlight
  }
}
