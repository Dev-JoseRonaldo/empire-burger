import Link from 'next/link'

import { useRouter } from 'next/router'
import { Menu } from '@headlessui/react'

import { navBarLiStyle } from '../styles'

export interface MenuProps {
  route: string
  name: string
}

export const DesktopMenuTemplate = ({ route, name }: MenuProps) => {
  const router = useRouter()
  return (
    <li className={navBarLiStyle} key={`${name}desktop`}>
      <Link href={route}>
        <a className={router?.asPath == route ? 'text-gray-700 font-bold' : ''}>
          {name}
        </a>
      </Link>
    </li>
  )
}

export const MobileMenuTemplate = ({ route, name }: MenuProps) => {
  const router = useRouter()
  return (
    <Menu.Item key={`${name}mobile`}>
      {({ active }) => (
        <a
          className={`${
            router?.asPath == route ? 'text-gray-700 font-bold' : ''
          } ${
            active && 'bg-secondary'
          } hover:text-black hover:font-semibold p-4`}
          href={route}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  )
}
