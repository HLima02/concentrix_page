'use client'
import React, { useState } from 'react'
import './style.scss'

import { InputFiledsProps } from '@/types/types'
import { applyMask } from '@/utils/masks'

export default function InputFileds({ type, id, labelText, mask, valueTxt, onChangeValue, ...rest }:InputFiledsProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value

    const masked = mask ? applyMask(raw, mask) : raw

    onChangeValue?.(masked)
  }

  return (
    <>
      {labelText &&
        <label htmlFor={id}>{ labelText }</label>
      }
      
      <input type={type} {...rest} value={valueTxt} onChange={handleChange} />
    </>
  )
}
