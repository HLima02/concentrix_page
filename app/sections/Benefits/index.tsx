import React from 'react'
import './style.scss'
import * as motion from 'motion/react-client'
import CardBenefits from '@/app/components/CardBenefits'
import ArrowBottomBtn from '@/app/components/ArrowBottomBtn';

export default function Benefits() {
  return (
    <section className='benefits' id='benefits'>
      <div className="content benefits_content">
        <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, ease: 'easeInOut'}}
        viewport={{once: true}}>
          Benefícios para ajudar<br/>
          <strong>você e sua empresa.</strong>
        </motion.h2>

        <div className="cards">
          <motion.div 
          initial={{opacity: 0,}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className="benefits_card_area">
            <CardBenefits label="Negociação" cardImage="/images/img_file.png" cardTitle="Negociação rápida e segura" />
            <CardBenefits label="Segunda via" cardImage="/images/img_search.png" cardTitle="Consulta de débitos em atraso." />
          </motion.div>

          <motion.div 
          initial={{opacity: 0,}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className="payment">
            <div className="card_payment">
              <h4>Pagamento</h4>
              <h2>Seu pagamento, como preferir.</h2>
              <img src="/images/payments_icons.png" alt='Pagamento' />
            </div>
          </motion.div>
        </div>

        <ArrowBottomBtn arrowLink="#service_section" />
      </div>
    </section>
  )
}
