import * as React from 'react'
import { SVGProps } from 'react'

interface InstagramIconProps extends SVGProps<SVGSVGElement> {
  iconColor: 'primary' | 'secondary'
  width?: string | number
  height?: string | number
}

const InstagramIcon = ({
  iconColor,
  width = '18',
  height = '18',
  ...props
}: InstagramIconProps) => (
  <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Instragram icon"
      {...props}
    >
      <path
        d="M9.502 4.668a4.608 4.608 0 0 0-4.615 4.615 4.608 4.608 0 0 0 4.615 4.615 4.608 4.608 0 0 0 4.615-4.615 4.608 4.608 0 0 0-4.615-4.615Zm0 7.615c-1.65 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.35 3-3 3Zm5.88-7.804c0 .599-.482 1.077-1.076 1.077a1.076 1.076 0 1 1 1.076-1.076Zm3.057 1.093c-.069-1.442-.398-2.72-1.454-3.772C15.932.748 14.655.42 13.213.346c-1.486-.084-5.94-.084-7.426 0-1.438.069-2.715.398-3.772 1.45C.96 2.85.634 4.126.561 5.568c-.084 1.486-.084 5.94 0 7.427.069 1.441.398 2.719 1.454 3.771 1.057 1.052 2.33 1.382 3.772 1.454 1.486.084 5.94.084 7.426 0 1.442-.068 2.72-.398 3.772-1.454 1.052-1.052 1.381-2.33 1.454-3.771.084-1.487.084-5.937 0-7.423Zm-1.92 9.017a3.037 3.037 0 0 1-1.711 1.711c-1.185.47-3.997.361-5.306.361-1.31 0-4.125.105-5.306-.361a3.037 3.037 0 0 1-1.71-1.711c-.47-1.185-.362-3.996-.362-5.306s-.105-4.125.361-5.306a3.038 3.038 0 0 1 1.711-1.71c1.185-.47 3.997-.362 5.306-.362 1.31 0 4.125-.105 5.306.361.787.314 1.394.92 1.71 1.711.47 1.185.362 3.997.362 5.306 0 1.31.109 4.125-.361 5.306Z"
        fill={iconColor === 'secondary' ? '#F59A1B' : '#ffffff'}
      />
    </svg>
  </a>
)

export default InstagramIcon
