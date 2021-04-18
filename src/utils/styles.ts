import '@polymer/polymer/lib/elements/dom-module'
import { CSSResult } from 'lit-element'
export { css, unsafeCSS } from 'lit-element'

const styleSet = new Set<string>()

export type RegisterStylesOptions = {
  moduleId: string
  include?: string[]
}

export const registerStyles = (
  styles: CSSResult,
  options: RegisterStylesOptions
) => {
  const { moduleId } = options

  if (styleSet.has(moduleId)) {
    throw new Error(`${moduleId} is already registered`)
  }

  const moduleIncludes = ['shared'].concat(options?.include || [])
  const styleModuleElement = document.createElement('dom-module')

  styleModuleElement.innerHTML = `
    <template>
      ${moduleIncludes.map((include) => `<style include=${include}></style>`)}
      <style>${styles.toString()}</style>
    </template>
  `

  styleModuleElement.register(moduleId)
  styleSet.add(moduleId)
}

// hardly inspired by https://github.com/vaadin/web-components/blob/master/packages/vaadin-themable-mixin/register-styles.js
