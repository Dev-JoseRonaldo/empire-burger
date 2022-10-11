import { render, screen } from '@testing-library/react'

import { WhatsappButton, WhatsappButtonProps } from '.'

const { getByRole, getByText } = screen

const data: WhatsappButtonProps = {
  name: 'contato',
  urlIcon: 'https://res.cloudinary.com/whatsapp.svg',
  urlRedirect: 'https://www.whatsapp.com/',
  alt: 'alt text'
}

describe('<WhatsappButton />', () => {
  it('should render by default', () => {
    render(<WhatsappButton {...data} />)

    const name = getByText('contato')
    const link = getByRole('link')
    const image = getByRole('img', { name: 'alt text' })

    expect(name).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.whatsapp.com/')
    expect(image).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(image).toHaveAttribute('alt', 'alt text')
  })

  it('should match snapshot', () => {
    const { container } = render(<WhatsappButton {...data} />)

    expect(container).toMatchSnapshot()
  })
})
