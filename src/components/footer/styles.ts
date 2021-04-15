import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      --app-heading-text-transform: uppercase;
    }

    .content {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(2, 1fr);
      margin-top: var(--spacings-medium);
    }

    @media (min-width: 768px) {
      .content {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .column a,
    .column span {
      display: block;
      color: var(--colors-gray);
      text-decoration: none;
      margin-bottom: var(--spacings-xxsmall);
      font-size: var(--font-sizes-small);
    }

    .column a:hover {
      text-decoration: underline;
    }

    .copyright {
      color: var(--colors-gray);
      font-size: var(--font-sizes-xsmall);
      margin-top: var(--spacings-large);
      margin-bottom: var(--spacings-medium);
      text-align: center;
    }
  </style>
`
