import { render } from '../../utils/tests/helpers'

import '.'

describe('<p3-heading />', () => {
  it('should render the content', async () => {
    const { getByRole } = await render(`<p3-heading>Polymer3</p3-heading>`)
    expect(
      getByRole('heading', { name: /polymer3/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('should render a black heading by default', async () => {
    const { getByRole } = await render(`<p3-heading>Polymer3</p3-heading>`)
    expect(getByRole('heading', { name: /polymer3/i })).toHaveClass(
      'text-black'
    )
  })

  it('should render a white heading when color is passed', async () => {
    const { getByRole } = await render(
      `<p3-heading color="white">Polymer3</p3-heading>`
    )
    expect(getByRole('heading', { name: /polymer3/i })).toHaveClass(
      'text-white'
    )
  })

  it('should render as a h3', async () => {
    const { getByRole } = await render(
      `<p3-heading as="h3">Polymer3</p3-heading>`
    )
    expect(getByRole('heading', { name: /polymer3/i, level: 3 }))
  })
})
