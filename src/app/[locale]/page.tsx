import Feature from '@/src/components/feature'
import Hero from '@/src/components/hero'
import HeroSection from '@/src/components/hero-section'
import { useTranslations } from 'next-intl'
import Contact from '@/src/components/contact'

export default function Home() {
  const t = useTranslations('Intro')
  const t_contact = useTranslations('Contact')
  const t_advantages = useTranslations('Advantages')
  const t_works = useTranslations('Works')

  return (
    <>
      <Hero />
      <HeroSection id={'what'} title={t('title')} subtitle={t('subtitle')} button={t('btn_get')} />
      <Feature
        id="works"
        title={t_works('title')}
        features={[
          {
            title: t_works('works_1.title'),
            subtitle: t_works('works_1.subtitle')
          },
          {
            title: t_works('works_2.title'),
            subtitle: t_works('works_2.subtitle')
          },
          {
            title: t_works('works_3.title'),
            subtitle: t_works('works_3.subtitle')
          },
          {
            title: t_works('works_4.title'),
            subtitle: t_works('works_4.subtitle')
          }
        ]}
      />
      <Feature
        id="advantages"
        title={t_advantages('title')}
        features={[
          {
            title: t_advantages('advantages_1.title'),
            subtitle: t_advantages('advantages_1.subtitle')
          },
          {
            title: t_advantages('advantages_2.title'),
            subtitle: t_advantages('advantages_2.subtitle')
          },
          {
            title: t_advantages('advantages_3.title'),
            subtitle: t_advantages('advantages_3.subtitle')
          }
        ]}
      />
      <Contact
        id={'contact'}
        title={t_contact('title')}
        subtitle={t_contact('subtitle')}
        button={t_contact('btn_get')}
      />
    </>
  )
}
