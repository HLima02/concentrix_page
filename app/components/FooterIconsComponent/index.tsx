import React from 'react'
import './style.scss'

type FooterInfos = {
  id: number,
  image: string
}

type FooterIconsComponentProps = {
  title: string,
  images: FooterInfos[]
}

export default function FooterIconsComponent({ title, images }:FooterIconsComponentProps) {
  return (
    <div className='footer_icons'>
      <h4>{title}</h4>

      <div className='footer_icon_section'>
        {images.map((item) => (
          <img key={item.id} src={item.image} alt={item.image} />
        ))}
      </div>
    </div>
  )
}
