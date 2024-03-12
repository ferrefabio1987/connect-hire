'use client'

import { useRef, useState } from 'react'
import { Hover } from '../effects/hover'
import { Media } from './media'
import useMousePosition from './hooks/useMousePosition'

type Props = {
  id: string
  title: string
}

const WORKS = [
  {
    title: 'Ai chat assistant',
    description: 'UI, UX, artificial intelligence',
    image: '/chat_ai.png'
  },
  {
    title: 'Dashboard',
    description: 'UI, UX, artificial intelligence',
    image: '/dashboard.png'
  },
  {
    title: 'App',
    description: 'UI, UX, mobile phone',
    image: '/app.png'
  }
]

export default function Portfolio({ id, title }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const myRef = useRef<HTMLDivElement>(null)

  const { x, y } = useMousePosition(myRef)

  const onHoverStart = (index: number) => {
    setActiveIndex(index)
  }

  const onHoverEnd = () => {
    setActiveIndex(-1)
  }

  return (
    <section id={id} className="relative w-full overflow-hidden bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800 focus:outline-none">{title}</h1>
        <div ref={myRef} className="flex flex-col gap-5">
          {WORKS.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <Hover
                key={index}
                onHoverStart={() => onHoverStart(index)}
                onHoverEnd={onHoverEnd}
                className="flex w-full flex-col justify-between gap-2 border-b border-black py-6 md:flex-row"
              >
                <Media
                  index={index + 1}
                  image={item.image}
                  title={item.title}
                  x={x}
                  y={y}
                  active={isActive}
                />
                <h2 className="text-2xl font-semibold uppercase">{item.title}</h2>
                <p className="font-semibold uppercase">{item.description}</p>
              </Hover>
            )
          })}
        </div>
      </div>
    </section>
  )
}
