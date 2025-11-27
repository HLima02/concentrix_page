import React from 'react'
import './style.scss'

type SectionTitleProps = {
  title: string, 
  subTitle: string
}

export default function SectionTitle({title, subTitle}:SectionTitleProps) {
  return (
    <div className='title_section'>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}
