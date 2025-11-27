import React from 'react'
import './style.scss'

import { ButtonProps } from '@/types/types'

export default function Button({children, txt_color, background_color, w_size, border, ...props}:ButtonProps) {
  return (
    <button className={`btn ${txt_color}`}  style={{
        color: txt_color,
        backgroundColor: background_color,
        maxWidth: w_size,
        border: border
      }}
      {...props}
      >
      {children}
    </button>
  )
}
