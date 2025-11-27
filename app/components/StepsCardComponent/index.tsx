import React from 'react'
import './style.scss'

type StepsCardComponentProps = {
  numberLabel: string 
  title:string ,
  text:string, 
  image:string
}

export default function StepsCardComponent({numberLabel, title, text, image}:StepsCardComponentProps) {
  return (
    <div className="steps_card_item">
      <h3>{numberLabel}</h3>
      <h4>{title}</h4>
      <p>{text}</p>
      <img src={image} alt={title} />
    </div>
  )
}
