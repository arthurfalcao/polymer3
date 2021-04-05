import { render } from './utils/tests/helpers'

import './app'

describe('<app-shell />', () => {
  it('should render the heading', () => {
    const { container, getByRole } = render(`<app-shell></app-shell>`)

    expect(
      getByRole('heading', { name: /polymer3 playground/i })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
