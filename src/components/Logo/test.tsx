import { render, screen } from '@testing-library/react'

import { Logo } from '.'

const { getByLabelText } = screen

describe('<Logo />', () => {
  it('should render by dark color', () => {
    const { container } = render(<Logo color="dark" />)

    const logo = getByLabelText('Embire Burger')
    const pathText = container.querySelector('svg > path:nth-child(1)')
    const pathLogo1 = container.querySelector('svg > g > path:nth-child(1)')
    const pathLogo2 = container.querySelector('svg > g > path:nth-child(2)')
    const pathLogo3 = container.querySelector('svg > g > path:nth-child(3)')

    expect(logo).toHaveStyle({ width: 265 })
    expect(pathText).toHaveAttribute('fill', '#1D0605')
    expect(pathLogo1).toHaveAttribute('fill', '#1D0605')
    expect(pathLogo2).toHaveAttribute('fill', '#1D0605')
    expect(pathLogo3).toHaveAttribute('fill', '#1D0605')
  })
  it('should render by light color', () => {
    const { container } = render(<Logo color="light" />)

    const logo = getByLabelText('Embire Burger')
    const pathText = container.querySelector('svg > path:nth-child(1)')
    const pathLogo1 = container.querySelector('svg > g > path:nth-child(1)')
    const pathLogo2 = container.querySelector('svg > g > path:nth-child(2)')
    const pathLogo3 = container.querySelector('svg > g > path:nth-child(3)')

    expect(logo).toHaveStyle({ width: 265 })
    expect(pathText).toHaveAttribute('fill', '#F59A1B')
    expect(pathLogo1).toHaveAttribute('fill', '#F43127')
    expect(pathLogo2).toHaveAttribute('fill', '#F43127')
    expect(pathLogo3).toHaveAttribute('fill', '#F43127')
  })

  it('should render by custom size', () => {
    render(<Logo color="light" width={400} />)

    const logo = getByLabelText('Embire Burger')

    expect(logo).toHaveStyle({ width: 400 })
  })

  it('Should match snapshot', () => {
    const { container } = render(<Logo color="light" />)

    expect(container).toMatchSnapshot()
  })
})
