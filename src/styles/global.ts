import { html } from '@polymer/polymer'
import './theme'
import './shared'

const styles = html`
  <custom-style>
    <style include="theme shared">
      html {
        font-size: 62.5%;
      }

      body {
        font-family: var(--font-family);
        font-size: var(--font-sizes-medium);
      }
    </style>
  </custom-style>
`

document.head.appendChild(styles.content)
