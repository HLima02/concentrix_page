import React from 'react'
import './style.scss'
import CardBenefits from '@/app/components/CardBenefits'
import { ArrowDownCircle } from "@deemlol/next-icons";
import ArrowBottomBtn from '@/app/components/ArrowBottomBtn';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className="content benefits_content">
        <h2>
          Benefícios para ajudar<br/>
          <strong>você e sua empresa.</strong>
        </h2>

        <div className="cards">
          <div className="benefits_card_area">
            <CardBenefits label="Negociação" cardImage="/images/img_file.png" cardTitle="Negociação rápida e segura" />
            <CardBenefits label="Segunda via" cardImage="/images/img_search.png" cardTitle="Consulta de débitos em atraso." />
          </div>

          <div className="payment">
            <div className="card_payment">
              <h4>Pagamento</h4>
              <h2>Seu pagamento, como preferir.</h2>
              <img src="/images/payments_icons.png" alt='Pagamento' />
            </div>
          </div>
        </div>

        <ArrowBottomBtn arrowLink="#" />
      </div>
    </section>
  )
}
