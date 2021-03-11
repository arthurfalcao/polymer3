import { PolymerElement, html } from '@polymer/polymer';
import { customElement } from '@polymer/decorators';

@customElement('polymer3-app')
class App extends PolymerElement {
  static get template() {
    return html`
      <h1>Polymer3 Playground</h1>
    `;
  }
}

export default App;
