import { render, screen } from '@testing-library/react'

import { PlopExample } from '.'

const { getByRole } = screen

describe('<PlopExample />', () => {
  it('should render the heading', () => {
    render(<PlopExample title="Hello World"/>)

    const heading = getByRole('heading', { name: "Hello World" })

    expect(heading).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<PlopExample title="Hello World"/>)

    expect(container).toMatchSnapshot()
  })
})