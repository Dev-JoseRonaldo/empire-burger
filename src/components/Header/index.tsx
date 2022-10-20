import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { Menu, Transition } from '@headlessui/react'

import { Logo } from '../Logo'
import IfoodIcon from '../IfoodIcon'
import InstagramIcon from '../InstagramIcon'
import { WhatsappButton } from '../WhatsappButton'

import { socialMock } from '../WhatsappButton/mock'

import {
  DesktopMenuTemplate,
  MenuProps,
  MobileMenuTemplate
} from './templates/menuTemplate'

import {
  navBarStyle,
  navBarLogoStyle,
  navBarUlStyle,
  navBarMenuMobuleButtonStyle,
  navBarMenuMobuleIconStyle,
  navBarMenuMobuleTransitionContextStyle,
  navBarMenuMobuleItemsStyle,
  headerContainer,
  contactIconsBox,
  socialIconsBox
} from './styles'

export interface HeaderStylesProps {
  menu: string
}

export interface HeaderMenuProps {
  menu: MenuProps[]
}

export const Header = ({ menu }: HeaderMenuProps) => {
  const [styles, setStyles] = useState<HeaderStylesProps>({
    menu: 'before:bg-[#3B200B]/[0.05]'
  })

  const handleScroll = () => {
    if (window.scrollY > 32) {
      setStyles({
        menu: 'before:bg-secondary before:shadow-md before:shadow-gray-500/50'
      })
    } else {
      setStyles({
        menu: 'before:bg-[#3B200B]/[0.05]'
      })
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${headerContainer} ${styles.menu}`}>
      <nav className={navBarStyle}>
        <div className={navBarLogoStyle}>
          <Logo color="dark" />
        </div>

        <ul className={navBarUlStyle}>{menu.map(DesktopMenuTemplate)}</ul>
        <div className={`${contactIconsBox} lg:flex hidden`}>
          <div className={socialIconsBox}>
            <IfoodIcon iconColor="primary" />
            <InstagramIcon iconColor="primary" />
          </div>
          <WhatsappButton
            name={socialMock[0].name}
            urlIcon={socialMock[0].urlIcon}
            urlRedirect={socialMock[0].urlRedirect}
            alt={socialMock[0].alt}
          />
        </div>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className={navBarMenuMobuleButtonStyle}>
                <Icon className={navBarMenuMobuleIconStyle} icon="bx:menu" />
              </Menu.Button>
              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-y-0 opacity-0"
                enterTo="transform scale-y-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-y-100 opacity-100"
                leaveTo="transform scale-y-0 opacity-0"
                className={navBarMenuMobuleTransitionContextStyle}
              >
                <Menu.Items static className={navBarMenuMobuleItemsStyle}>
                  {menu.map(MobileMenuTemplate)}
                  <div className={`${contactIconsBox} p-4`}>
                    <div className={socialIconsBox}>
                      <IfoodIcon iconColor="primary" />
                      <InstagramIcon iconColor="primary" />
                    </div>
                    <WhatsappButton
                      name={socialMock[0].name}
                      urlIcon={socialMock[0].urlIcon}
                      urlRedirect={socialMock[0].urlRedirect}
                      alt={socialMock[0].alt}
                    />
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </nav>
    </header>
  )
}
