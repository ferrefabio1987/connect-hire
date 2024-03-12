'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

export const Bounce = ({ className, children }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ translateY: '-15px' }}
      animate={{ translateY: '15px' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
      {children}
    </motion.div>
  )
}
