'use client'

import React from 'react'
import { Feature } from '../types/feature'
import { FadeIn } from './effects/fade-in'

type Props = {
  id: string
  title: string
  features: Feature[]
}

export default function Feature({ id, title, features }: Props) {
  const numberElements = features.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'

  return (
    <section id={id} className="container bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div role="contentinfo" className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold text-gray-800 focus:outline-none md:w-9/12 lg:w-5/12">
            {title}
          </h1>
        </div>
        <div
          className={`mt-8 grid justify-center gap-10 focus:outline-none lg:mt-20 ${numberElements}`}
        >
          {features.map((item, index) => (
            <FadeIn key={index} className="flex w-full flex-col focus:outline-none">
              <h2 tabIndex={0} className="text-lg font-bold leading-tight  focus:outline-none">
                {item.title}
              </h2>
              <p tabIndex={0} className="pt-2 text-lg leading-8 text-gray-600 focus:outline-none">
                {item.subtitle}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
