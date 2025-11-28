import React from 'react'
import * as motion from 'motion/react-client'
import './style.scss'

import FaqItem from '@/app/components/FaqItem'
import { askedQuestion } from '@/app/lib/constants'

export default function AskedQuestions() {
  return (
    <section className='asked' id='asked'>
      <div className="content asked_content">
        <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, ease: 'easeInOut'}}
        viewport={{once: true}}
        >Perguntas frequentes</motion.h2>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.3, duration: 0.8, ease: 'easeInOut'}}
        viewport={{once: true}}
        >Tire suas dúvidas</motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.6, duration: 0.8, ease: 'easeInOut'}}
        viewport={{once: true}}
        className="faq_section">
          {askedQuestion.map((item) => (
            <FaqItem key={item.id} title={item.question} txt={item.response} />
          ))}
          
        </motion.div>
        
      </div>
    </section>
  )
}
