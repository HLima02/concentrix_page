import React from 'react'
import * as motion from 'motion/react-client'
import './style.scss'

import { SectionTitleProps } from '@/types/types'

export default function SectionTitle({title, subTitle}:SectionTitleProps) {
  return (
    <div className='title_section'>
      <motion.h2
      initial={{opacity: 0, y: 400}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      viewport={{once: true}}
      >{title}</motion.h2>
      <motion.p
      initial={{opacity: 0, y: 400}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.1, duration: 0.3, ease: 'easeInOut'}}
      viewport={{once: true}}
      >{subTitle}</motion.p>
    </div>
  )
}
