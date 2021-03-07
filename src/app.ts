import { PolymerElement, html } from '@polymer/polymer'
import { customElement, property } from '@polymer/decorators'
import '@polymer/app-route/app-location'
import '@polymer/app-route/app-route'
import '@polymer/iron-pages/iron-pages'

import './pages'
import './pages/404'

@customElement('polymer3-app')
class App extends PolymerElement {
  @property({ type: Object })
  data = {}

  @property({ type: Object })
  route = {}

  @property({ type: Object })
  subroute = {}

  static get template() {
    return html`
      <h1>Polymer3 Playground</h1>

      <app-location route="{{route}}"></app-location>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{data}}"
        tail="{{subroute}}"
      >
      </app-route>

      <iron-pages
        selected="{{data.page}}"
        attr-for-selected="id"
        fallback-selection="404"
      >
        <p3-index></p3-index>
        <p3-404 id="404"></p3-404>
      </iron-pages>
    `
  }
}

export default App
