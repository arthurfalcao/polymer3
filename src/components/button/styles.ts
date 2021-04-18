import { html } from '@polymer/polymer'

import '../../styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      border: 0;
      border-radius: var(--border-radius);
      color: var(--colors-white);
      font-family: var(--font-family);
      cursor: pointer;
      padding: var(--spacings-xxsmall);
    }

    .wrapper:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
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

    :host([has-children][has-icon]) > .wrapper > span {
      margin-left: var(--spacings-xxsmall);
    }

    :host(:not([has-children])) > .wrapper > span {
      display: none;
    }
  </style>
`
