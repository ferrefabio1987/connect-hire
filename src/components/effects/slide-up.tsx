'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

export const SlideUp = ({ className, children }: Props) => {
  return (
    <motion.div
      initial={{ bottom: 0, opacity: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      whileInView={{ bottom: 50, opacity: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
