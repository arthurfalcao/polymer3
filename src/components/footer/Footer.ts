import { PolymerElement, html } from '@polymer/polymer'

import styles from './styles'

class Footer extends PolymerElement {
  static get template() {
    return html`
      ${styles}

      <footer class="wrapper">
        <div>Logo</div>

        <div class="content">
          <div class="column">
            <app-heading
              color="black"
              size="small"
              line-bottom
              line-color="secondary"
            >
              Contact
            </app-heading>

            <a href="mailto:sac@example.com">sac@example.com</a>
          </div>

          <div class="column">
            <app-heading
              color="black"
              size="small"
              line-bottom
              line-color="secondary"
            >
              Follow us
            </app-heading>

            <nav aria-labelledby="social media">
              <a href="#" target="_blank" ref="noopenner, noreferrer">
                Instagram
              </a>

              <a href="#" target="_blank" ref="noopenner, noreferrer">
                Twitter
              </a>

              <a href="#" target="_blank" ref="noopenner, noreferrer">
                Youtube
              </a>

              <a href="#" target="_blank" ref="noopenner, noreferrer">
                Facebook
              </a>
            </nav>
          </div>

          <div class="column">
            <app-heading
              color="black"
              size="small"
              line-bottom
              line-color="secondary"
            >
              Links
            </app-heading>

            <nav aria-labelledby="footer resources">
              <a href="/">Home</a>
              <a href="/games">Store</a>
              <a href="/search">Buscar</a>
            </nav>
          </div>

          <div class="column" aria-labelledby="footer-contact">
            <app-heading
              color="black"
              size="small"
              line-bottom
              line-color="secondary"
            >
              Location
            </app-heading>

            <span>Loren ipsun dolor sit.</span>
            <span>Loren Ipsun</span>
            <span>Loren, ipsun dolor.</span>
          </div>
        </div>

        <div class="copyright">2021 &copy; All rights reserved.</div>
      </footer>
    `
  }
}

export default Footer
