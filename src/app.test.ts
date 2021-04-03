import { render } from './utils/tests/helpers'

import './app'

describe('<polymer3-app />', () => {
  it('should render the heading', () => {
    const { container, getByRole } = render(`<polymer3-app></polymer3-app>`)

    expect(
      getByRole('heading', { name: /polymer3 playground/i })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
