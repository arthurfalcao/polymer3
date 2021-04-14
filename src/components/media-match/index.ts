import MediaMatch from './MediaMatch'

customElements.define('app-media-match', MediaMatch)

declare global {
  interface HTMLElementTagNameMap {
    'app-media-match': MediaMatch
  }
}
