'use client'
import React, { useState } from 'react'
import { isValid, parse } from 'date-fns';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import * as motion from 'motion/react-client'
import './style.scss'
import Button from '@/app/components/Button'
import InputFileds from '@/app/components/InputFields'
import { toast } from 'react-toastify'

export default function MainBanner() {
  const [isCpf, setIsCpf] = useState<boolean>(true)
  const [userData, setUserData] = useState({
    cpf: '',
    cnpj: '',
    data: ''
  })

  function handleChangePRofileType(type:boolean) {
    setIsCpf(type)
    setUserData({
      cpf: '',
      cnpj: '',
      data: ''
    })
  }

  function handleSendInfos() {
    const date = parse(userData.data, 'dd/MM/yyyy', new Date());

    if(!isValid(date)) {
      toast.warning("Data inválida! Por favor, preencha uma data válida.");
      return;
    }

    if(!cpf.isValid(userData.cpf) && userData.cnpj == "") {
      toast.warning("CPF inválido! Por favor, preencha um CPF válido.");
      return;
    }

    if(!cnpj.isValid(userData.cnpj) && userData.cpf === "") {
      toast.warning("CNPJ inválido! Por favor, preencha um CNPJ válido.");
      return;
    }

    toast.success("Seus dados foram enviados com Sucesso!")
      setUserData({
        cpf: '',
        cnpj: '',
        data: ''
      })  
  }

  return (
    <section className='banner'>
      <div className='content banner_content'>
        <motion.div 
         initial={{opacity: 0,}}
        whileInView={{opacity: 1,}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        viewport={{once: true}}
        className="banner_left">
          <p>Tenha aqui</p><br/>
          <p>a melhor</p><br/>
          <p>experiência.</p>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.2, duration: 0.9, ease: 'easeInOut'}}
        viewport={{once: true}}
        className="banner_input_data">
          <h2>Tipo de perfil</h2>

          <div className="btn_area">
            <Button background_color="#039DB7" background_hover="#0A7D94"  txt_color='#fff' w_size="165px"  border='2px solid #039DB7'
            onClick={() => handleChangePRofileType(true)}>Pessoa Física</Button>
            <Button background_color="transparent" background_hover="#F6F8F9" txt_color='#628295' w_size="165px" border='2px solid #628295'
            onClick={() => handleChangePRofileType(false)}>Pessoa jurídica</Button>
          </div>

          {isCpf ? (
            <div className="inputArea">
              <InputFileds mask="cpf" labelText="CPF" type='text' placeholder='000.000.000-00' valueTxt={userData.cpf}  onChangeValue={(value:any) => 
                setUserData(prev => ({ ...prev, cpf: value }))
                
              }/>
              <InputFileds mask="date" labelText="Data nascimento" type='text' placeholder='00/00/0000' valueTxt={userData.data} onChangeValue={(value:any) => 
                setUserData(prev => ({ ...prev, data: value }))
              }/>
            </div>
          ) : (
            <div className="inputArea">
              <InputFileds mask="cnpj" labelText="CNPJ" type='text' placeholder='00.000.000/0001-00' valueTxt={userData.cnpj} onChangeValue={(value:any) => 
                setUserData(prev => ({ ...prev, cnpj: value }))
              }/>

             <InputFileds mask="date" labelText="Data nascimento" type='text' placeholder='00/00/0000' valueTxt={userData.data} onChangeValue={(value:any) => 
                setUserData(prev => ({ ...prev, data: value }))
              }/>
            </div>
          )}


          {(
            (isCpf && userData.cpf !== "" && userData.data !== "") || 
            (!isCpf && userData.cnpj !== "" && userData.data !== "")) 
            ? (
          <Button 
            background_color="#039DB7" 
            background_hover="#0A7D94" 
            txt_color='#fff' 
            w_size="100%"  
            border='2px solid #039DB7'
            onClick={() => handleSendInfos()} >Entrar</Button>
          ) : (
            <Button 
            background_color="#CAD1D7" 
            background_hover="#CAD1D7" 
            txt_color='##A5B0BB' 
            w_size="100%"  
            border='2px solid #CAD1D7' 
            disabled >Entrar</Button>
          )}
         
          
          

          
        </motion.div>
      </div>

      <motion.div 
      initial={{opacity: 0, y: 200}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, ease: 'easeInOut'}}
      viewport={{once: true}}
      className='content more'>
        <a href='#benefits'>
          <div className="border_icon bounce">
            <div className="bar_icon pulse"></div>
          </div>
          <span>Saiba mais</span>
        </a>
      </motion.div>
    </section>
  )
}
