import * as React from 'react'
import { SVGProps } from 'react'

interface IfoodIconProps extends SVGProps<SVGSVGElement> {
  iconColor: 'primary' | 'secondary'
  width?: string | number
  height?: string | number
}

const IfoodIcon = ({
  iconColor,
  width = '27',
  height = '14',
  ...props
}: IfoodIconProps) => (
  <a target="_blank" href="https://ifood.com.br/" rel="noopener noreferrer">
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ifood icon"
      {...props}
    >
      <g
        clipPath="url(#a)"
        fill={iconColor === 'secondary' ? '#F59A1B' : '#ffffff'}
      >
        <path d="M0 8.994h2.055l1.142-5.68H1.142L0 8.994Zm1.255-6.357h2.063l.34-1.7H1.594l-.34 1.7Zm1.6 7.955h2.054l1.256-6.136h1.541l.227-1.142H6.422l.057-.256c.085-.484.257-1.028 1.027-1.028.457 0 .885.029 1.313.228l.229-1.198A4.512 4.512 0 0 0 7.564.803c-1.656 0-2.797.97-3.226 2.511h-.713l-.228 1.142h.713l-1.256 6.136Z" />
        <path d="M9.362 9.108c2.426 0 4.11-2.198 4.11-3.996 0-1.341-1.228-1.912-2.426-1.912-2.655 0-4.11 2.37-4.11 3.996 0 1.341 1.256 1.912 2.426 1.912Zm6.508 0c2.426 0 4.11-2.198 4.11-3.996 0-1.341-1.256-1.912-2.455-1.912-2.654 0-4.11 2.369-4.11 3.996 0 1.341 1.285 1.912 2.455 1.912Zm7.449-.114h2.026L27 .918h-2.055l-.485 2.397-.856-.085c-1.998 0-3.825 2.568-3.825 4.395 0 .742.484 1.484 1.313 1.484 1.17 0 1.998-.57 2.34-1.141h.114l-.227 1.026Zm-6.337 4.253a7.933 7.933 0 0 1-5.708 1.798c-2.712-.171-4.652-2.255-4.995-4.453h.114c.628 1.372 2.141 2.655 3.996 2.854 1.883.229 4.139-.627 5.366-1.798l-1.37-1.056h4.138l-.914 4.396-.6-1.713-.027-.028Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill={iconColor === 'secondary' ? '#F59A1B' : '#ffffff'}
            transform="translate(0 .803)"
            d="M0 0h27v14.269H0z"
          />
        </clipPath>
      </defs>
    </svg>
  </a>
)

export default IfoodIcon
