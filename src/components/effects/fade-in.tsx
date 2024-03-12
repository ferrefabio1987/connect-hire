'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

export const FadeIn = ({ className, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
