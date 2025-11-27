import React from 'react'

import Hero from './sections/Hero'
import MainBanner from './sections/MainBanner'
import Benefits from './sections/Benefits'
import ServiceSection from './sections/ServiceSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <MainBanner />
      <Benefits />
      <ServiceSection />
    </main>
  )
}
