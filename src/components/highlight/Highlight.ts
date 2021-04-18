import { observe, property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import styles from './styles'

type HighlightAlignment = 'left' | 'right'

class Highlight extends PolymerElement {
  @property({ type: String })
  hTitle?: string

  @property({ type: String })
  subtitle?: string

  @property({ type: String })
  backgroundImage?: string

  @property({ type: String })
  floatImage: string | null = null

  @property({ type: String, reflectToAttribute: true })
  alignment: HighlightAlignment = 'right'

  @property({ type: String })
  buttonLabel?: string

  @property({ type: String })
  buttonLink?: string

  static get template() {
    return html`
      ${styles}

      <section class="wrapper">
        <template is="dom-if" if="[[floatImage]]">
          <img class="float-image" src="[[floatImage]]" alt="[[hTitle]]" />
        </template>

        <div class="content">
          <h2 class="title">[[hTitle]]</h2>
          <h3 class="subtitle">[[subtitle]]</h3>

          <app-button>[[buttonLabel]]</app-button>
        </div>
      </section>
    `
  }

  @observe('backgroundImage')
  private onChangeBackgroundImage(backgroundImage: string) {
    this.updateStyles({
      '--app-hightlight-background-image': `url(${backgroundImage})`
    })
  }
}

export default Highlight
