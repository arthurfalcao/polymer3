import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      position: relative;
    }

    .image {
      width: 100%;
      height: 23rem;
      background-color: var(--colors-light-gray);
      background-image: var(--app-banner-img);
      background-position: center center;
      background-size: cover;
    }

    .caption {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding: var(--spacings-small);
    }

    .title {
      color: var(--colors-white);
      font-size: var(--font-sizes-large);
      font-weight: var(--font-bold);
    }

    .subtitle {
      color: var(--colors-white);
      font-size: var(--font-sizes-small);
      font-weight: var(--font-normal);
      margin-bottom: var(--spacings-xsmall);
    }

    .subtitle strong {
      color: var(--colors-primary);
      font-weight: var(--font-bold);
    }

    @media (min-width: 769px) {
      .wrapper {
        box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
      }

      .image {
        height: 58rem;
      }

      .caption {
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        padding: var(--spacings-large);
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .title {
        font-size: var(--font-sizes-xxlarge);
      }

      .subtitle {
        font-size: var(--font-sizes-large);
      }
    }
  </style>
`
