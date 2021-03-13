import { fixture } from '@open-wc/testing'
import { getByRole } from 'testing-library__dom'

import './app'

describe('<polymer3-app />', () => {
  it('should render the heading', async () => {
    const container = await fixture<HTMLElement>(
      `<polymer3-app></polymer3-app>`
    )

    expect(
      getByRole(container, 'heading', { name: /polymer3 playground/i })
    ).toBeInTheDocument()

    expect(container.shadowRoot?.firstElementChild).toMatchSnapshot()
  })
})
