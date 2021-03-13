import { fixture } from '@open-wc/testing'
import { within } from '@testing-library/dom'

export const render = async (template: string) => {
  const { shadowRoot: container } = await fixture<HTMLElement>(template)
  // @ts-ignore
  const queries = within(container)

  return {
    ...queries,
    container
  }
}
