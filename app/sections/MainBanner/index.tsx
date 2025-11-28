'use client'
import React, { useState } from 'react'
import './style.scss'
import Button from '@/app/components/Button'
import InputFileds from '@/app/components/InputFields'

export default function MainBanner() {
  const [isCpf, setIsCpf] = useState<boolean>(true)

  return (
    <section className='banner'>
      <div className='content banner_content'>
        <div className="banner_left">
          <p>Tenha aqui</p><br/>
          <p>a melhor</p><br/>
          <p>experiência.</p>
        </div>
        <div className="banner_input_data">
          <h2>Tipo de perfil</h2>

          <div className="btn_area">
            <Button background_color="#039DB7" background_hover="#0A7D94"  txt_color='#fff' w_size="165px"  border='2px solid #039DB7'
            onClick={() => setIsCpf(true)}>Pessoa Física</Button>
            <Button background_color="transparent" background_hover="#F6F8F9" txt_color='#628295' w_size="165px" border='2px solid #628295'
            onClick={() => setIsCpf(false)}>Pessoa jurídica</Button>
          </div>

          {isCpf ? (
            <div className="inputArea">
              <InputFileds mask="cpf" labelText="CPF" type='text' placeholder='000.000.000-00' />
              <InputFileds mask="date" labelText="Data nascimento" type='text' placeholder='00/00/0000' />
            </div>
          ) : (
            <div className="inputArea">
              <InputFileds mask="cnpj" labelText="CNPJ" type='text' placeholder='00.000.000/0001-00' />
              <InputFileds mask="date" labelText="Data nascimento" type='text' placeholder='00/00/0000' />
            </div>
          )}

         

          <Button 
          background_color="#039DB7" 
          background_hover="#0A7D94" 
          txt_color='#fff' 
          w_size="100%"  
          border='2px solid #039DB7' >Entrar</Button>
        </div>
      </div>

      <div className='content more'>
        <a href='#benefits'>
          <div className="border_icon bounce">
            <div className="bar_icon pulse"></div>
          </div>
          <span>Saiba mais</span>
        </a>
      </div>
    </section>
  )
}
