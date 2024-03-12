'use client'

import { ButtonHTMLAttributes, forwardRef, useState } from 'react'
import { IconSpinner } from './icons'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const buttonVariants = cva(
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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, children, ...props }, ref) => {
    const [hovered, setHovered] = useState(false)

    return (
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
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
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
