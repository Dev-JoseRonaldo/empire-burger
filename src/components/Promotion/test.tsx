import { render, screen } from '@testing-library/react'

import { Promotion } from '.'

const { getByRole } = screen

describe('<Promotion />', () => {
  it('should render the heading', () => {
    render(<Promotion title="Hello World"/>)

    const heading = getByRole('heading', { name: "Hello World" })

    expect(heading).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<Promotion title="Hello World"/>)

    expect(container).toMatchSnapshot()
  })
})