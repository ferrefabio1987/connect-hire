import { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import '../../globals.css'
import Container from '@/src/components/container'
import { ReactNode } from 'react'

const unbouded = Unbounded({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Archimedex',
  description: 'La consulenza informatica su misura.'
}

export default async function PageLayout({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={unbouded.className}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
