import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'

import styles from './styles'

class GameCard extends PolymerElement {
  @property({ type: String })
  title = ''

  @property({ type: String })
  developer = ''

  @property({ type: String })
  img = ''

  @property({ type: String })
  price = ''

  @property({ type: String })
  promotionalPrice?: string

  static get template() {
    return html`
      <style>
        ${styles}
      </style>

      <article class="wrapper">
        <div class="image-box">
          <img src="[[img]]" alt="[[title]]" />
        </div>

        <div class="content">
          <div class="info">
            <h3 class="title">[[title]]</h3>
            <h4 class="developer">[[developer]]</h4>
          </div>

          <div class="fav-button" role="button">
            <iron-icon
              aria-label="Add to Wishlist"
              icon="favorite-border"
            ></iron-icon>
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
}

export default GameCard
