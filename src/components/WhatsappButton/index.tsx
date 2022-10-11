import Image from 'next/image'
import { WhatsappButtonContainer, WhatsappButtonName } from './styles'

export interface WhatsappButtonProps {
  name: string
  urlIcon: string
  urlRedirect: string
  alt: string
}

export const WhatsappButton = ({
  name,
  urlIcon,
  urlRedirect,
  alt
}: WhatsappButtonProps) => {
  return (
    <a
      className={WhatsappButtonContainer}
      href={urlRedirect}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={urlIcon} alt={alt} layout="fixed" width={22} height={22} />
      <span className={WhatsappButtonName}>{name}</span>
    </a>
  )
}
