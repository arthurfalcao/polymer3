import { html } from '@polymer/polymer'

import '../../styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      max-width: var(--grid-container);
      margin-left: auto;
      margin-right: auto;
      padding-left: calc(var(--grid-gutter) / 2);
      padding-right: calc(var(--grid-gutter) / 2);
    }
  </style>
`
