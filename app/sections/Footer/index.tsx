import React from 'react'
import * as motion from 'motion/react-client'
import './style.scss'

import { footerInfoCall, footerInfoPayments } from '@/app/lib/constants'
import FooterIconsComponent from '@/app/components/FooterIconsComponent'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="content footer_content">
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        viewport={{once: true}}
        className="slider_top">
          <img src="/images/slider_icon.png" alt='Slider icone' />
        </motion.div>

        <div className="middle">
          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.5, ease: 'easeInOut'}}
          viewport={{once: true}}
          className="middle_left">
            <h4>Sobre</h4>
            <a href='#'>Quem somos</a>
            <a href='#'>Política de privacidade</a>
          </motion.div>

          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.4, duration: 0.5, ease: 'easeInOut'}}
          viewport={{once: true}} 
          className="middle_center">
            <FooterIconsComponent  title={footerInfoCall.title} images={footerInfoCall.images} />
          </motion.div>

          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.6, duration: 0.5, ease: 'easeInOut'}}
          viewport={{once: true}} 
          className="right">
            <FooterIconsComponent  title={footerInfoPayments.title} images={footerInfoPayments.images} />
          </motion.div>
        </div>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.8, duration: 0.5, ease: 'easeInOut'}}
          viewport={{once: true}} 
          className="bottom">
          <p className='legal_txt'>© 2023. Todos direitos reservados à Webhelp</p>
          <div className='bottom_img_txt'>
            <div className='img_txt_item'>
              <img src="/images/slider_icon.png" style={{width: '39px', height: '18px'}} alt='Slider icone'  />
              <p style={{ color: '#323E48'}}>Plataforma desenvolvida<br/>
              pela <strong>Concentrix</strong></p>
            </div>
            <div className='img_txt_item'>
              <img src="/images/verify_3D.png"  style={{width: '32px', height: '32px'}} alt='Slider icone'  />
              <p style={{ color: '#145365'}}><strong>Site protegido</strong><br/>
              Certificado SSL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
