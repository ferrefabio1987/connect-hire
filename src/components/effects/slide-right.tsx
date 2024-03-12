'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

export const SlideRight = ({ className, children }: Props) => {
  return (
    <motion.div
      initial={{ translateX: -40, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
