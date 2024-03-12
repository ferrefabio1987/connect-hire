'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ReactNode, Ref, forwardRef } from 'react'

type Props = {
  children?: ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}

const LocalizedClientLink = (
  { children, href, ...props }: Props,
  ref: Ref<HTMLAnchorElement> | undefined
) => {
  const { locale } = useParams()

  return (
    <Link ref={ref} href={href} locale={locale as string} {...props}>
      {children}
    </Link>
  )
}

export default forwardRef(LocalizedClientLink)
