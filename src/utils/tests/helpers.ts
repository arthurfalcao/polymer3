import { within } from '@testing-library/dom'

type Template = string

const fixture = (template: Template): Element => {
  const wrapper = document.createElement('div')
  document.body.appendChild(wrapper)

  wrapper.innerHTML = template
  const [element] = wrapper.children
  if (!element.shadowRoot) {
    throw new Error('Template not found')
  }

  return element
}

const getContainer = ({ shadowRoot, tagName }: Element): HTMLElement => {
  const wrapper = document.createElement(tagName)
  wrapper.innerHTML = shadowRoot!.innerHTML
  return wrapper
}

export const render = (template: Template) => {
  const element = fixture(template)
  // @ts-ignore
  const queries = within(element.shadowRoot)

  return {
    ...queries,
    container: getContainer(element)
  }
}
