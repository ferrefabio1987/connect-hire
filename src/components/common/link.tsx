'use client'

import { PropsWithChildren, useState } from 'react'
import { IconSpinner } from './icons'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import LocalizedClientLink from '../localized-client-link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const linkVariants = cva(
  'rounded-full flex items-center justify-center uppercase text-sm relative',
  {
    variants: {
      variant: {
        default: 'bg-black text-white shadow-md',
        outline: 'border-2 border-black'
      },
      size: {
        default: 'h-14 px-12',
        xs: 'h-8 rounded-md px-0',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8 p-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type Props = PropsWithChildren & {
  className?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'xs' | 'sm' | 'icon' | 'lg'
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top' | string
  loading?: boolean
}

const ArchimedexLink = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  href = '',
  target,
  loading = false
}: Props) => {
  const [hovered, setHovered] = useState(false)

  return (
    <LocalizedClientLink
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      target={target}
      className={cn(linkVariants({ variant, size, className }))}
    >
      {loading ? (
        <IconSpinner className="animate-spin" />
      ) : (
        <>
          {hovered ? <ArrowRightIcon className="absolute h-6 w-10 fill-white" /> : null}
          <span className={hovered ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
            {children}
          </span>
        </>
      )}
    </LocalizedClientLink>
  )
}

export { ArchimedexLink, linkVariants }
