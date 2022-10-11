import { render, screen } from '@testing-library/react'
import IfoodIcon from '.'

const { getByLabelText } = screen

describe('<IfoodIcon />', () => {
  it('should render by primary color', () => {
    const { container } = render(<IfoodIcon iconColor="primary" />)

    const ifoodIcon = getByLabelText('Ifood icon')
    const path1 = container.querySelector('svg g ')
    const path2 = container.querySelector('svg #a path')

    expect(ifoodIcon).toHaveStyle({
      width: 400,
      height: 80
    })

    expect(path1).toHaveAttribute('fill', '#ffffff')
    expect(path2).toHaveAttribute('fill', '#ffffff')
  })

  it('should render by secondary color', () => {
    const { container } = render(
      <IfoodIcon width={400} height={80} iconColor="secondary" />
    )

    const ifoodIcon = getByLabelText('Ifood icon')
    const path1 = container.querySelector('svg g ')
    const path2 = container.querySelector('svg #a path')

    expect(ifoodIcon).toHaveAttribute('width', '400')
    expect(ifoodIcon).toHaveAttribute('height', '80')

    expect(path1).toHaveAttribute('fill', '#F59A1B')
    expect(path2).toHaveAttribute('fill', '#F59A1B')
  })

  it('should match snapshot', () => {
    const { container } = render(<IfoodIcon iconColor="primary" />)

    expect(container).toMatchSnapshot()
  })
})
