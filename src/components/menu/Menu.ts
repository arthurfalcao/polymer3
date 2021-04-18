import { property } from '@polymer/decorators'
import { PolymerElement, html } from '@polymer/polymer'

import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import 'components/button'
import 'components/media-match'

import styles from './styles'

class Menu extends PolymerElement {
  @property({ type: Boolean, reflectToAttribute: true })
  isOpen = false

  @property({ type: String })
  username: string | null = null

  static get template() {
    return html`
      ${styles}

      <menu class="wrapper">
        <app-media-match less-than="medium">
          <div class="icon-wrapper" on-click="handleOpen">
            <iron-icon aria-label="Open Menu" icon="menu"></iron-icon>
          </div>
        </app-media-match>

        <div class="logo-wrapper">Polymer3</div>

        <app-media-match greater-than="medium">
          <div class="menu-nav">
            <a class="menu-link" href="#">Home</a>
            <a class="menu-link" href="#">Explore</a>
          </div>
        </app-media-match>

        <div class="menu-group">
          <div class="icon-wrapper">
            <iron-icon aria-label="Search" icon="search"></iron-icon>
          </div>

          <div class="icon-wrapper">
            <iron-icon aria-label="Open Shopping Cart" icon="shopping-cart">
            </iron-icon>
          </div>

          <template is="dom-if" if="[[!username]]">
            <app-media-match greater-than="medium">
              <app-button>Sign In</app-button>
            </app-media-match>
          </template>
        </div>

        <nav class="menu-full" aria-hidden="[[!isOpen]]">
          <iron-icon
            aria-label="Close Menu"
            icon="close"
            on-click="handleClose"
          >
          </iron-icon>

          <div class="menu-nav">
            <a class="menu-link" href="#">Home</a>
            <a class="menu-link" href="#">Explore</a>

            <template is="dom-if" if="[[username]]">
              <a class="menu-link" href="#">My account</a>
              <a class="menu-link" href="#">Wishlist</a>
            </template>
          </div>

          <template is="dom-if" if="[[!username]]">
            <div class="register-box">
              <app-button full-width size="large">Log in now</app-button>
              <span>or</span>
              <a class="create-account" href="#" title="Sign Up"> Sign Up </a>
            </div>
          </template>
        </nav>
      </menu>
    `
  }

  private handleOpen() {
    this.isOpen = true
  }

  private handleClose() {
    this.isOpen = false
  }
}

export default Menu
