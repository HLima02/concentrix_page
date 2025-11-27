import React from 'react'
import './style.scss'

import { CardBenefitsProps } from '@/types/types'

export default function CardBenefits({label, cardImage, cardTitle}: CardBenefitsProps) {
  return (
    <div className='card_benefits'>
      <div className="card_benefits_content">
        <h4>{label}</h4>
        <img src={cardImage} alt={label} />
        <h3>
          {cardTitle}
        </h3>
      </div>
    </div>
  )
}
