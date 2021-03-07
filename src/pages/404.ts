import { PolymerElement, html } from '@polymer/polymer'
import { customElement } from '@polymer/decorators'

@customElement('p3-404')
class Page404 extends PolymerElement {
  static get template() {
    return html` <h2>Not found</h2> `
  }
}

export default Page404
