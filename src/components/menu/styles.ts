import { html } from '@polymer/polymer'

import 'styles/shared'

export default html`
  <style include="shared">
    .wrapper {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: var(--spacings-small) 0;
      position: relative;
    }

    .logo-wrapper {
      color: var(--colors-white);
    }

    @media (max-width: 768px) {
      .logo-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .icon-wrapper {
      color: var(--colors-white);
      cursor: pointer;
      --iron-icon-height: 2.4rem;
      --iron-icon-width: 2.4rem;
    }

    .menu-group {
      align-items: center;
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }

    .menu-group > :not(:first-child) {
      margin-left: var(--spacings-xsmall);
    }

    @media (min-width: 768px) {
      .menu-nav {
        margin-left: var(--spacings-small);
      }
    }

    .menu-link {
      color: var(--colors-white);
      position: relative;
      font-size: var(--font-sizes-medium);
      margin: 0.3rem var(--spacings-small) 0;
      text-align: center;
      text-decoration: none;
    }

    .menu-link:hover::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: var(--colors-primary);
      animation: hoverAnimation 0.2s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }

    .menu-full {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: var(--colors-white);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      overflow: hidden;
      transition: opacity 0.3s ease-in-out;
      --iron-icon-height: 2.4rem;
      --iron-icon-width: 2.4rem;
    }

    :host([is-open]) .menu-full {
      opacity: 1;
      pointer-events: all;
    }

    :host(:not([is-open])) .menu-full {
      opacity: 0;
      pointer-events: none;
    }

    .menu-full > iron-icon {
      position: absolute;
      top: 0;
      right: 0;
      margin: var(--spacings-xsmall);
      cursor: pointer;
    }

    .menu-full .menu-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    .menu-full .menu-link {
      color: var(--colors-black);
      font-size: var(--font-sizes-xlarge);
      font-weight: var(--font-bold);
      margin-bottom: var(--spacings-small);
      transition: transform 0.3s ease-in-out;
    }

    :host([is-open]) .menu-full .menu-link {
      transform: translateY(0);
    }

    :host(:not([is-open])) .menu-full .menu-link {
      transform: translateY(3rem);
    }

    .menu-full .register-box {
      transition: transform 0.3s ease-in-out;
    }

    :host([is-open]) .menu-full .register-box {
      transform: translateY(0);
    }

    :host(:not([is-open])) .menu-full .register-box {
      transform: translateY(3rem);
    }

    .register-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 var(--spacings-xlarge) var(--spacings-xlarge);
    }

    .register-box > span {
      display: block;
      font-size: var(--font-sizes-xsmall);
      margin: var(--spacings-xxsmall) 0;
    }

    .create-account {
      text-decoration: none;
      color: var(--colors-primary);
      border-bottom: 0.2rem solid var(--colors-primary);
    }
  </style>
`
