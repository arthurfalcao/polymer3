import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    :host {
      display: none;
    }

    @media (max-width: 450px) {
      :host([less-than='small']) {
        display: block;
      }
    }

    @media (max-width: 768px) {
      :host([less-than='medium']) {
        display: block;
      }
    }

    @media (max-width: 1170px) {
      :host([less-than='large']) {
        display: block;
      }
    }

    @media (max-width: 1440px) {
      :host([less-than='huge']) {
        display: block;
      }
    }

    @media (min-width: 450px) {
      :host([greater-than='small']) {
        display: block;
      }
    }

    @media (min-width: 768px) {
      :host([greater-than='medium']) {
        display: block;
      }
    }

    @media (min-width: 1170px) {
      :host([greater-than='large']) {
        display: block;
      }
    }

    @media (min-width: 1440px) {
      :host([greater-than='huge']) {
        display: block;
      }
    }
  </style>
`
