import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      position: absolute;
      top: var(--spacings-xsmall);
      display: flex;
      align-items: center;
      font-weight: var(--font-bold);
      color: var(--colors-white);
    }

    .wrapper::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    .color-primary {
      background-color: var(--colors-primary);
    }

    .color-primary::before {
      border-left-color: var(--colors-primary-darken);
      border-top-color: var(--colors-primary-darken);
    }

    .color-secondary {
      background-color: var(--colors-secondary);
    }

    .color-secondary::before {
      border-left-color: var(--colors-secondary-darken);
      border-top-color: var(--colors-secondary-darken);
    }

    .size-normal {
      font-size: var(--font-sizes-small);
      height: 3.6rem;
      padding: 0 var(--spacings-small);
      right: -2rem;
    }

    .size-normal::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }

    .size-small {
      font-size: var(--font-sizes-xsmall);
      height: 2.6rem;
      padding: 0 var(--spacings-xsmall);
      right: -1.5rem;
    }

    .size-small::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  </style>
`
