import GameCard from './game-card'

customElements.define('p3-game-card', GameCard)

declare global {
  interface HTMLElementTagNameMap {
    'p3-game-card': GameCard
  }
}
