'use client'
import React, { useState } from 'react'
import './style.scss'

import { PlusCircle } from "@deemlol/next-icons";

type FaqItemProps = {
  title: string,
  txt: string
}

export default function FaqItem({title, txt}:FaqItemProps) {
  const [isOpenQuestion, setIsOpenQuestion] = useState<boolean>(false)

  return (
    <div className='faq_item'>
      <div className='faq_item_title'>
        <h4>{title}</h4>
        <PlusCircle size={26} color="#FFFFFF" onClick={() => setIsOpenQuestion(!isOpenQuestion)}  
        style={{
          transform: isOpenQuestion ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease"
        }} 
        />
      </div>
      {isOpenQuestion && (
        <div className='faq_item_txt'>
          <p>{txt}</p>
        </div>
      )}
     
    </div>
  )
}
