import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import { RibbonColors, RibbonSizes } from 'components/ribbon'

import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'

import 'components/button'
import 'components/ribbon'

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
  promotionalPrice: string | null = null

  @property({ type: Boolean })
  favorite = false

  @property({ type: String })
  ribbon: string | null = null

  @property({ type: String })
  ribbonColor: RibbonColors = 'primary'

  @property({ type: String })
  ribbonSize: RibbonSizes = 'small'

  static get template() {
    return html`
      ${styles}

      <article class="wrapper">
        <template is="dom-if" if="[[ribbon]]">
          <app-ribbon color="[[ribbonColor]]" size="[[ribbonSize]]">
            [[ribbon]]
          </app-ribbon>
        </template>

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

            <app-button size="small">
              <iron-icon slot="icon" icon="add-shopping-cart"></iron-icon>
            </app-button>
          </div>
        </div>
      </article>
    `
  }

  private getFeaturedPrice(
    price: string,
    promotionalPrice: string | null
  ): string {
    return promotionalPrice || price
  }

  private onFavorite() {
    this.dispatchEvent(
      new CustomEvent('favorite', { bubbles: true, composed: true })
    )
  }
}

export default GameCard
