import { htmlLiteral } from '@polymer/polymer/lib/utils/html-tag'

export default htmlLiteral`
  :host {
    --text-black: #030517;
    --text-white: #fafafa;
  }

  .text-black {
    color: var(--text-black);
  }

  .text-white {
    color: var(--text-white);
  }
`
