import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      position: relative;
      background-image: var(--app-hightlight-background-image);
      background-position: center center;
      background-size: cover;
      height: 23rem;
      display: grid;
    }

    .wrapper::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .float-image {
      color: var(--colors-white);
      grid-area: floatImage;
      z-index: var(--layers-base);
      max-height: 23rem;
      max-width: 100%;
      align-self: end;
    }

    .content {
      grid-area: content;
      z-index: var(--layers-base);
      text-align: right;
      padding: var(--spacings-xsmall);
    }

    .title {
      font-size: var(--font-sizes-large);
      font-weight: var(--font-bold);
      color: var(--colors-white);
    }

    .subtitle {
      font-size: var(--font-sizes-small);
      font-weight: var(--font-light);
      color: var(--colors-white);
      margin-bottom: var(--spacings-small);
    }

    @media (min-width: 768px) {
      .wrapper {
        height: 32rem;
      }

      .float-image {
        max-height: 32rem;
      }

      .content {
        align-self: flex-end;
        padding: var(--spacings-large);
      }

      .title {
        font-size: var(--font-sizes-xxlarge);
      }

      .subtitle {
        font-size: var(--font-sizes-large);
      }
    }

    :host([alignment='left']) .wrapper {
      grid-template-areas: 'content floatImage';
      grid-template-columns: 2fr 1.3fr;
    }

    :host([alignment='left']) .content {
      text-align: left;
    }

    :host([alignment='left']) .float-image {
      justify-self: end;
    }

    :host([alignment='right']) .wrapper {
      grid-template-areas: 'floatImage content';
      grid-template-columns: 1.3fr 2fr;
    }

    :host([alignment='right']) .content {
      text-align: right;
    }

    :host([alignment='right']) .float-image {
      justify-self: start;
    }
  </style>
`
