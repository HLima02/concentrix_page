import React from 'react'
import './style.scss'

type CardBenefitsProps = {
  label: string,
  cardImage: string,
  cardTitle: string
}

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
