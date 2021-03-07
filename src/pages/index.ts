import { PolymerElement, html } from '@polymer/polymer'
import { customElement } from '@polymer/decorators'

@customElement('p3-index')
class Index extends PolymerElement {
  static get template() {
    return html` <h2>Home page</h2> `
  }
}

export default Index
