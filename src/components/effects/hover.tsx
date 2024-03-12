'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  onHoverStart: (event: MouseEvent) => void
  onHoverEnd: () => void
  className?: string
}

export const Hover = ({ className, onHoverStart, onHoverEnd, children }: Props) => {
  return (
    <motion.div onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className={className}>
      {children}
    </motion.div>
  )
}
