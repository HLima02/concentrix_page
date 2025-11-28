import React from 'react'
import './style.scss'
import SectionTitle from '@/app/components/SectionTitle'
import CardServices from '@/app/components/CardServices'
import ArrowBottomBtn from '@/app/components/ArrowBottomBtn';

export default function ServiceSection() {
  return (
    <section className='service_section' id='service_section'>
      <div className="content service_section_content">
        <SectionTitle title="Atendimento personalizado" subTitle="Diversos canais, para cada necessidade." />

        <div className='services_cards'>
          <CardServices imagePath="/images/phone_icon.png" cardTxt="Agilidade onde estiver." cardTitle="Ligação" bgImagePath="/images/call_bg.png" />
          <CardServices imagePath="/images/whats_icon.png" cardTxt="Praticidade" cardTitle="WhatsApp"  bgImagePath="/images/whatsapp_bg.png" />
        </div>

        <ArrowBottomBtn arrowLink="#step_by_step" />
      </div>
    </section>
  )
}
