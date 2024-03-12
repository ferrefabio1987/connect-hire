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

export default function HeroSection({ id, title, subtitle, button }: Props) {
  return (
    <section id={id} className="w-full overflow-hidden bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <SlideRight>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </SlideRight>
        <SlideLeft>
          <p className="mb-8 text-lg font-normal leading-8 text-gray-600 sm:px-16 xl:px-48">
            {subtitle}
          </p>
        </SlideLeft>
        <FadeIn className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <ArchimedexLink href="#contact">{button}</ArchimedexLink>
        </FadeIn>
      </div>
    </section>
  )
}
