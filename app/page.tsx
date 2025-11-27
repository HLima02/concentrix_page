import React from 'react'

import Hero from './sections/Hero'
import MainBanner from './sections/MainBanner'
import Benefits from './sections/Benefits'
import ServiceSection from './sections/ServiceSection'
import StepByStep from './sections/StepByStep'

export default function Home() {
  return (
    <main>
      <Hero />
      <MainBanner />
      <Benefits />
      <ServiceSection />
      <StepByStep />
    </main>
  )
}
