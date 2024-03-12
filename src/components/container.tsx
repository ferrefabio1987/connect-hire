import { useTranslations } from 'next-intl'
import { PropsWithChildren } from 'react'
import { Link } from '../types/link'
import Header from './header'
import Footer from './footer'

type Props = PropsWithChildren & {}

export default function Container({ children }: Props) {
  const t = useTranslations('Index')

  const LINKS: Link[] = [
    {
      href: '/#what',
      title: t('what')
    },
    {
      href: '/#about',
      title: t('about')
    },
    {
      href: '/#portfolio',
      title: t('portfolio')
    },
    {
      href: '/#contact',
      title: t('contact')
    }
  ]

  return (
    <>
      <Header links={LINKS} />
      <main className="flex min-h-screen flex-col items-center">{children}</main>
      <Footer links={LINKS} />
    </>
  )
}
