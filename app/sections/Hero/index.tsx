import React from 'react'
import * as motion from 'motion/react-client'
import './style.scss'

export default function Hero() {
  return (
    <header className='hero'>
      <div className="content">
        <motion.img 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, ease: 'easeInOut'}}
        viewport={{once: true}}
        className='hero_logo' src="/images/concentrix-logo.png" alt='Logo: Concentrix' />
      </div>
    </header>
  )
}
