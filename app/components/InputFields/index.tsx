import React from 'react'
import './style.scss'

import { InputFiledsProps } from '@/types/types'

export default function InputFileds({ type, id, labelText, ...rest }:InputFiledsProps) {
  return (
    <>
      {labelText &&
        <label htmlFor={id}>{ labelText }</label>
      }
      
      <input type={type} {...rest} />
    </>
  )
}
