import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'it'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    it: '/pathnames'
  }
} satisfies Pathnames<typeof locales>

export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
