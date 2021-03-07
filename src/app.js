import { PolymerElement, html } from '@polymer/polymer';

class App extends PolymerElement {
  static get is() {
    return 'polymer3-app';
  }

  static get template() {
    return html`
      <h1>Polymer3 Playground</h1>
    `;
  }
}

customElements.define(App.is, App);
