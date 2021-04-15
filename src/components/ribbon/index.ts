import Ribbon from './Ribbon'
export type { RibbonColors, RibbonSizes } from './Ribbon'

customElements.define('app-ribbon', Ribbon)

declare global {
  interface HTMLElementTagNameMap {
    'app-ribbon': Ribbon
  }
}
