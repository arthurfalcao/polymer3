import { htmlLiteral } from '@polymer/polymer/lib/utils/html-tag'

export default htmlLiteral`
  :host {
    --border-radius: 0.4rem;
    --colors-primary: #F231A5;
    --colors-secondary: #3CD3C1;
    --colors-black: #030517;
    --colors-white: #FAFAFA;
    --colors-gray: #8F8F8F;
    --font-bold: 600;
    --font-sizes-small: 1.4rem;
    --font-sizes-medium: 1.6rem;
    --spacings-xxsmall: 0.8rem;
    --spacings-xsmall: 1.6rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--colors-white);
  }

  .image-box {
    height: 14rem;
    width: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }

  .image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: var(--spacings-xsmall);
  }

  .info {
    max-width: calc(100% - 2.5rem);
  }

  .title {
    font-size: var(--font-sizes-medium);
    line-height: var(--font-sizes-medium);
    font-weight: var(--font-bold);
    color: var(--colors-black);
  }

  .developer {
    font-size: var(--font-sizes-small);
    font-weight: var(--font-bold);
    color: var(--colors-gray);
  }

  .fav-button {
    color: var(--colors-primary);
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;

    --iron-icon-width: 2.5rem;
  }

  .buy-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: var(--spacings-xxsmall);
  }

  .price {
    display: inline-flex;
    font-weight: var(--font-bold);
    height: 3rem;
    align-items: center;
  }

  .price:not(.is-promotional) {
    color: var(--colors-white);
    padding: 0 var(--spacings-xxsmall);
    background-color: var(--colors-secondary);
    border-radius: var(--border-radius);
  }

  .price.is-promotional {
    color: var(--colors-gray);
    text-decoration: line-through;
    margin-right: var(--spacings-xsmall);
  }
`
