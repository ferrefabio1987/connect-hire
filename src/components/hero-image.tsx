import Image from 'next/image'
import { ArchimedexLink } from './common/link'
import { SlideRight } from './effects/slide-right'
import { SlideLeft } from './effects/slide-left'
import { FadeIn } from './effects/fade-in'

type Props = {
  id: string
  title: string
  subtitle: string
  button: string
}

export default function HeroImage({ id, title, subtitle, button }: Props) {
  return (
    <section id={id} className="w-full overflow-hidden px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden lg:flex lg:gap-x-20">
          <div className="mx-auto text-center lg:mx-0 lg:w-5/12 lg:flex-auto lg:py-10 lg:text-left">
            <SlideRight>
              <h2 className="tracking-tightsm:text-4xl text-3xl font-bold">{title}</h2>
            </SlideRight>
            <SlideLeft>
              <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
            </SlideLeft>
            <FadeIn className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <ArchimedexLink href="#contact">{button}</ArchimedexLink>
            </FadeIn>
          </div>
          <div className="relative lg:w-7/12">
            <Image
              className="left-0 top-0 rounded-md ring-1 ring-white/10"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="App screenshot"
              fill
              sizes="(max-width: 991px) 81vw, (max-width: 1439px) 34vw, 450px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
