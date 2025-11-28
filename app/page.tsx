import React from 'react'

import Hero from './sections/Hero'
import MainBanner from './sections/MainBanner'
import Benefits from './sections/Benefits'
import ServiceSection from './sections/ServiceSection'
import StepByStep from './sections/StepByStep'
import AskedQuestions from './sections/AskedQuestions'
import Footer from './sections/Footer'

 import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main>
      <Hero />
      <MainBanner />
      <Benefits />
      <ServiceSection />
      <StepByStep />
      <AskedQuestions />
      <Footer />
      <ToastContainer 
        autoClose={3000}
        closeOnClick
        pauseOnHover />
    </main>
  )
}
