import React from 'react'
import './style.scss'
import * as motion from 'motion/react-client'
import SectionTitle from '@/app/components/SectionTitle'
import CardServices from '@/app/components/CardServices'
import ArrowBottomBtn from '@/app/components/ArrowBottomBtn';

export default function ServiceSection() {
  return (
    <section className='service_section' id='service_section'>
      <div className="content service_section_content">
        <SectionTitle title="Atendimento personalizado" subTitle="Diversos canais, para cada necessidade." />

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, ease: 'easeInOut'}}
        viewport={{once: true}}
        className='services_cards'>
          <CardServices imagePath="/images/phone_icon.png" cardTxt="Agilidade onde estiver." cardTitle="Ligação" bgImagePath="/images/call_bg.png" />
          <CardServices imagePath="/images/whats_icon.png" cardTxt="Praticidade" cardTitle="WhatsApp"  bgImagePath="/images/whatsapp_bg.png" />
        </motion.div>

        <ArrowBottomBtn arrowLink="#step_by_step" />
      </div>
    </section>
  )
}
