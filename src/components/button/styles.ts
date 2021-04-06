import { html } from '@polymer/polymer'

import '../../styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      border: 0;
      border-radius: var(--border-radius);
      color: var(--colors-white);
      cursor: pointer;
      padding: var(--spacings-xxsmall);
    }

    .size-small {
      height: 3rem;
      font-size: var(--font-sizes-xsmall);
    }

    .size-medium {
      height: 4rem;
      font-size: var(--font-sizes-small);
      padding: var(--spacings-xxsmall) var(--spacings-medium);
    }

    .size-large {
      height: 5rem;
      font-size: var(--font-sizes-medium);
      padding: var(--spacings-xxsmall) var(--spacings-xlarge);
    }

    .full-width {
      width: 100%;
    }

    .wrapper ::slotted([slot='icon']) {
      align-items: center;
      display: inline-flex;
      justify-content: center;

      --iron-icon-height: auto;
      --iron-icon-width: 1.5rem;
    }

    .has-children.has-icon > span {
      margin-left: var(--spacings-xxsmall);
    }

    .wrapper:not(.has-children) > span {
      display: none;
    }
  </style>
`
