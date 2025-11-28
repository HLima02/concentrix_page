import React from 'react'
import './style.scss'

import FaqItem from '@/app/components/FaqItem'
import { askedQuestion } from '@/app/lib/constants'

export default function AskedQuestions() {
  return (
    <section className='asked' id='asked'>
      <div className="content asked_content">
        <h2>Perguntas frequentes</h2>
        <p>Tire suas dúvidas</p>

        <div className="faq_section">
          {askedQuestion.map((item) => (
            <FaqItem key={item.id} title={item.question} txt={item.response} />
          ))}
          
        </div>
        
      </div>
    </section>
  )
}
