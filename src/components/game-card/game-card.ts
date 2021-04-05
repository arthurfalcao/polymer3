import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'

import styles from './styles'

class GameCard extends PolymerElement {
  @property({ type: String })
  gTitle?: string

  @property({ type: String })
  developer?: string

  @property({ type: String })
  img?: string

  @property({ type: String })
  price?: string

  @property({ type: String })
  promotionalPrice?: string

  @property({ type: Boolean })
  favorite = false

  static get template() {
    return html`
      ${styles}

      <article class="wrapper">
        <div class="image-box">
          <img src="[[img]]" alt="[[gTitle]]" />
        </div>

        <div class="content">
          <div class="info">
            <h3 class="title">[[gTitle]]</h3>
            <h4 class="developer">[[developer]]</h4>
          </div>

          <div class="fav-button" role="button" on-click="onFavorite">
            <template is="dom-if" if="[[favorite]]">
              <iron-icon aria-label="Remove from Wishlist" icon="favorite">
              </iron-icon>
            </template>

            <template is="dom-if" if="[[!favorite]]">
              <iron-icon aria-label="Add to Wishlist" icon="favorite-border">
              </iron-icon>
            </template>
          </div>

          <div class="buy-box">
            <template is="dom-if" if="[[promotionalPrice]]" restamp>
              <div class="price is-promotional">[[price]]</div>
            </template>

            <div class="price">
              [[getFeaturedPrice(price, promotionalPrice)]]
            </div>
          </div>
        </div>
      </article>
    `
  }

  private getFeaturedPrice(price: string, promotionalPrice?: string): string {
    return promotionalPrice || price
  }

  private onFavorite() {
    this.dispatchEvent(
      new CustomEvent('favorite', { bubbles: true, composed: true })
    )
  }
}

export default GameCard
