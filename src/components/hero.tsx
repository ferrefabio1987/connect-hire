import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Bounce } from './effects/bounce'
import { ArchimedexLink } from './common/link'
import { SlideUp } from './effects/slide-up'
import { SlideRight } from './effects/slide-right'
import { SlideLeft } from './effects/slide-left'

export default function Hero() {
  const t = useTranslations('Index')

  return (
    <section className="hero overflow-hidden">
      <div className="w-full max-w-screen-xl">
        <div className="for-hero">
          <div className="flex flex-col justify-end">
            <SlideRight>
              <h1 className="my-2 text-[10vw] font-bold leading-none md:text-[70px] lg:text-[80px]">
                {t('hero_one')}
              </h1>
            </SlideRight>
            <SlideLeft className="flex justify-end">
              <h1 className="my-2 text-[10vw] font-bold leading-none md:text-[70px] lg:text-[80px]">
                {t('hero_two')}
              </h1>
            </SlideLeft>
            <SlideRight>
              <h1 className="my-2 text-[10vw] font-bold leading-none md:text-[70px] lg:text-[80px]">
                {t('hero_three')}
              </h1>
            </SlideRight>
          </div>
          <div className="hero-image relative h-full w-[90%]">
            <Bounce className="absolute left-0 right-0 h-full">
              <Image
                src={'/glassy-circular.png'}
                sizes="(max-width: 991px) 81vw, (max-width: 1439px) 34vw, 450px"
                fill
                priority
                alt="glassy"
              />
            </Bounce>
          </div>
        </div>
      </div>
      <SlideUp className="absolute left-0 right-0 top-auto flex items-center justify-center">
        <ArchimedexLink href="#contact">{t('btn_get')}</ArchimedexLink>
      </SlideUp>
    </section>
  )
}
