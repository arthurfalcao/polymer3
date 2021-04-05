import { html } from '@polymer/polymer'

const shared = document.createElement('dom-module')

const styles = html`
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *::before,
    *::after {
      box-sizing: inherit;
    }
  </style>
`

shared.insertAdjacentElement('afterbegin', styles)
shared.register('shared')
