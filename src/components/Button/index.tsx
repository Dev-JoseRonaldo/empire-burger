import { ButtonHTMLAttributes } from 'react'

import { ButtonVariant, buttonClasses } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const classNames = `${buttonClasses} ${ButtonVariant[variant]} ${
    className ?? ''
  }`

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
