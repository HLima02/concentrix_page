import React from 'react'
import './style.scss'
import { ArrowDownCircle } from "@deemlol/next-icons";

type ArrowBottomBtnProps = {
  arrowLink: string,
}

export default function ArrowBottomBtn({arrowLink}:ArrowBottomBtnProps) {
  return (
    <div className='arrow'>
      <a href={arrowLink}>
        <ArrowDownCircle size={30} color="#22252A" />
      </a>
    </div>
  )
}
