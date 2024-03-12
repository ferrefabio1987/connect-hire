'use client'

import { Button } from './common/button'

type Props = {
  id: string
  title: string
  subtitle: string
  button: string
}

export default function Contact({ id, title, subtitle, button }: Props) {
  return (
    <section id={id} className="relative isolate overflow-hidden px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-center text-lg leading-8 text-gray-600">{subtitle}</p>
        <form action="https://fabform.io/f/yP897lE" method="post">
          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <label htmlFor="email-address" className="sr-only">
              Indirizzo email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="Inserisci la tua email"
            />
            <Button type="submit">{button}</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
