import React from 'react'
import './style.scss'

type CardServicesProps = {
  imagePath: string, 
  cardTxt: string, 
  cardTitle: string,
  bgImagePath: string
}

export default function CardServices({imagePath, cardTxt, cardTitle, bgImagePath}:CardServicesProps) {
  return (
    <div className='card_item' style={{backgroundImage: `url(${bgImagePath})`}} >
      <img className='card_item_icon' src={imagePath} alt='Ilustração de um telefone' />
      <p className='card_item_txt'>{cardTxt}</p>
      <h4 className='card_item_title'>{cardTitle}</h4>
    </div>
  )
}
