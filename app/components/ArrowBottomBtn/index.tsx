import React from 'react'
import './style.scss'
import * as motion from 'motion/react-client'
import { ArrowDownCircle } from "@deemlol/next-icons";

import { ArrowBottomBtnProps } from '@/types/types';


export default function ArrowBottomBtn({arrowLink}:ArrowBottomBtnProps) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.4, ease: 'easeInOut'}}
      viewport={{once: true}}
    className='arrow'>
      <a href={arrowLink}>
        <ArrowDownCircle size={30} color="#22252A" />
      </a>
    </motion.div>
  )
}
