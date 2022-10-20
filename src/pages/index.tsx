import { GetStaticProps } from 'next'
import { menuMock } from '../components/Header/mock'

import { MainLayout, MainLayoutProps } from '../layout/Home'

export default function Main(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menu: menuMock
    }
  }
}
