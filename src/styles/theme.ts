import { html } from '@polymer/polymer'

const theme = document.createElement('dom-module')

const styles = html`
  <style>
    html {
      --grid-container: 130rem;
      --grid-gutter: 3.2rem;
      --border-radius: 0.4rem;
      --colors-primary: #f231a5;
      --colors-secondary: #3cd3c1;
      --colors-black: #030517;
      --colors-white: #fafafa;
      --colors-gray: #8f8f8f;
      --font-light: 300;
      --font-normal: 400;
      --font-bold: 600;
      --font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      --font-sizes-xsmall: 1.2rem;
      --font-sizes-small: 1.4rem;
      --font-sizes-medium: 1.6rem;
      --font-sizes-large: 1.8rem;
      --font-sizes-xlarge: 2rem;
      --font-sizes-xxlarge: 2.8rem;
      --font-sizes-huge: 5.2rem;
      --spacings-xxsmall: 0.8rem;
      --spacings-xsmall: 1.6rem;
      --spacings-small: 2.4rem;
      --spacings-medium: 3.2rem;
      --spacings-large: 4rem;
      --spacings-xlarge: 4.8rem;
      --spacings-xxlarge: 5.6rem;
    }
  </style>
`

theme.insertAdjacentElement('afterbegin', styles)
theme.register('theme')
