import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    .color-black {
      color: var(--colors-black);
    }

    .color-white {
      color: var(--colors-white);
    }

    .size-small {
      font-size: var(--font-sizes-medium);
    }

    .size-medium {
      font-size: var(--font-sizes-xlarge);
    }

    @media (min-width: 768px) {
      .size-medium {
        font-size: var(--font-sizes-xxlarge);
      }
    }

    .line-left {
      border-left: 0.7rem solid;
      padding-left: var(--spacings-xxsmall);
    }

    .line-bottom {
      margin-bottom: var(--spacings-medium);
      position: relative;
    }

    .line-bottom::after {
      border-bottom: 0.5rem solid;
      bottom: -0.5rem;
      content: '';
      left: 0;
      position: absolute;
      width: 5rem;
    }

    .size-small.line-bottom::after {
      width: 3rem;
    }

    .line-color-primary.line-left,
    .line-color-primary.line-bottom::after {
      border-color: var(--colors-primary);
    }

    .line-color-secondary.line-left,
    .line-color-secondary.line-bottom::after {
      border-color: var(--colors-secondary);
    }
  </style>
`
