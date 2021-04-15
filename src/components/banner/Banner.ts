import { observe, property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import styles from './styles'

class Banner extends PolymerElement {
  @property({ type: String })
  img?: string

  @property({ type: String })
  bTitle?: string

  @property({ type: String })
  subtitle?: string

  @property({ type: String })
  buttonLabel?: string

  @property({ type: String })
  buttonLink?: string

  static get template() {
    return html`
      ${styles}

      <div class="wrapper">
        <div class="image" role="img" aria-label="[[bTitle]]"></div>

        <div class="caption">
          <h2 class="title">[[bTitle]]</h2>
          <h3 class="subtitle" inner-h-t-m-l="[[subtitle]]"></h3>

          <app-button href="[[buttonLink]]" size="large">
            [[buttonLabel]]
          </app-button>
        </div>
      </div>
    `
  }

  @observe('img')
  private onChangeImage(img: string) {
    this.updateStyles({
      '--app-banner-img': `url(${img})`
    })
  }
}

export default Banner
