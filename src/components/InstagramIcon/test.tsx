import { render, screen } from '@testing-library/react'
import InstagramIcon from '.'

const { getByLabelText } = screen

describe('<InstagramIcon />', () => {
  it('should render by primary color', () => {
    const { container } = render(<InstagramIcon iconColor="primary" />)

    const instagramIcon = getByLabelText('Instragram icon')
    const path1 = container.querySelector('svg > path')

    expect(instagramIcon).toHaveStyle({
      width: 400,
      height: 80
    })

    expect(path1).toHaveAttribute('fill', '#ffffff')
  })

  it('should render secondary color', () => {
    const { container } = render(
      <InstagramIcon width={400} height={80} iconColor="secondary" />
    )

    const instagramIcon = getByLabelText('Instragram icon')
    const path1 = container.querySelector('svg > path')

    expect(instagramIcon).toHaveAttribute('width', '400')
    expect(instagramIcon).toHaveAttribute('height', '80')

    expect(path1).toHaveAttribute('fill', '#F59A1B')
  })

  it('should match snapshot', () => {
    const { container } = render(<InstagramIcon iconColor="primary" />)

    expect(container).toMatchSnapshot()
  })
})
