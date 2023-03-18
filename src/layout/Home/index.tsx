import { Header } from '../../components/Header'
import { Home } from '../../components/Home'
import { MenuProps } from '../../components/Header/templates/menuTemplate'
import { Promotion } from '../../components/Promotion'

export interface MainLayoutProps {
  menu: MenuProps[]
}

export const MainLayout = ({ menu }: MainLayoutProps) => {
  return (
    <main className="w-full">
      <Header menu={menu} />
      <Home />
      <Promotion />
    </main>
  )
}
