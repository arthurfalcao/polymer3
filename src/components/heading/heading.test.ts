import { render } from 'utils/tests/helpers'

import '.'

describe('<app-heading />', () => {
  it('should render the content', () => {
    const { getByRole } = render(`<app-heading>Polymer3</app-heading>`)
    expect(
      getByRole('heading', { name: /polymer3/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('should render a black heading by default', () => {
    const { getByRole } = render(`<app-heading>Polymer3</app-heading>`)
    expect(getByRole('heading', { name: /polymer3/i })).toHaveClass(
      'color-black'
    )
  })

  it('should render a white heading when color is passed', () => {
    const { getByRole } = render(
      `<app-heading color="white">Polymer3</app-heading>`
    )
    expect(getByRole('heading', { name: /polymer3/i })).toHaveClass(
      'color-white'
    )
  })

  it('should render as a h3', () => {
    const { getByRole } = render(`<app-heading as="h3">Polymer3</app-heading>`)
    expect(getByRole('heading', { name: /polymer3/i, level: 3 }))
  })
})
