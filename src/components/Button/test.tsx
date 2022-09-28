import { render, screen } from '@testing-library/react'

import { Button } from '.'

const { getByRole } = screen

describe('<Button />', () => {
  it('should render by primary button', () => {
    render(<Button variant="primary">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass(
      'bg-primary text-white-900 px-5 py-[0.625rem] font-bold'
    )
  })

  it('should render by secondary button', () => {
    render(<Button variant="secondary">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass(
      'bg-white-500 text-primary px-4 py-2 font-black'
    )
  })

  it('should render with custom class', () => {
    render(<Button className="uppercase">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('uppercase')
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Children</Button>)

    expect(container).toMatchSnapshot()
  })
})
