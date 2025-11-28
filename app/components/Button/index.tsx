'use client'
import React, {useState} from 'react'
import './style.scss'

import { ButtonProps } from '@/types/types'

export default function Button({
  children, txt_color, background_color, background_hover, w_size, border, ...props
}:ButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <button className={`btn ${txt_color}`}  
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: txt_color,
        backgroundColor: hover ? background_hover : background_color,
        maxWidth: w_size,
        border: border,
      }}
      {...props}
      >
      {children}
    </button>
  )
}
