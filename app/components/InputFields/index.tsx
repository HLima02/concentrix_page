'use client'
import React, { useState } from 'react'
import './style.scss'

import { InputFiledsProps } from '@/types/types'
import { applyMask } from '@/utils/masks'

export default function InputFileds({ type, id, labelText, mask, ...rest }:InputFiledsProps) {
  const [value, setValue] = useState<string>("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value

    const masked = mask ? applyMask(raw, mask) : raw
    console.log(value.length)

    setValue(masked)
  }

  return (
    <>
      {labelText &&
        <label htmlFor={id}>{ labelText }</label>
      }
      
      <input type={type} {...rest} value={value} onChange={handleChange} />
    </>
  )
}
