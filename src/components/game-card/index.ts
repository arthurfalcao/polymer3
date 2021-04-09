import GameCard from './GameCard'

customElements.define('app-game-card', GameCard)

declare global {
  interface HTMLElementTagNameMap {
    'app-game-card': GameCard
  }
}
