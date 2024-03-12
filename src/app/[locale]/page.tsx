import Feature from '@/src/components/feature'
import Hero from '@/src/components/hero'
import HeroImage from '@/src/components/hero-image'
import HeroSection from '@/src/components/hero-section'
import { useTranslations } from 'next-intl'
import Contact from '@/src/components/contact'
import Portfolio from '@/src/components/portfolio'

export default function Home() {
  const t = useTranslations('Intro')
  const t_about = useTranslations('About')
  const t_contact = useTranslations('Contact')
  const t_service = useTranslations('Services')
  const t_portfolio = useTranslations('Portfolio')

  return (
    <>
      <Hero />
      <HeroSection id={'what'} title={t('title')} subtitle={t('subtitle')} button={t('btn_get')} />
      <HeroImage
        id={'about'}
        title={t_about('title')}
        subtitle={t_about('subtitle')}
        button={t_about('btn_get')}
      />
      <Feature
        id="services"
        title={t_service('title')}
        services={[
          {
            title: t_service('services_1.title'),
            subtitle: t_service('services_1.subtitle')
          },
          {
            title: t_service('services_2.title'),
            subtitle: t_service('services_2.subtitle')
          },
          {
            title: t_service('services_3.title'),
            subtitle: t_service('services_3.subtitle')
          }
        ]}
      />
      <Portfolio id="portfolio" title={t_portfolio('title')} />
      <Contact
        id={'contact'}
        title={t_contact('title')}
        subtitle={t_contact('subtitle')}
        button={t_contact('btn_get')}
      />
    </>
  )
}
