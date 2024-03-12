import { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '../../globals.css'
import Container from '@/src/components/container'
import { ReactNode } from 'react'

const inter = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'ConnectHire',
  description: 'Recruit Right. Right Now.'
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
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
