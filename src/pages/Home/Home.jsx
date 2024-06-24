import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Intro from '../../components/Intro/Intro'
import Stats from '../../components/Stats/Stats'
import Portfolio from '../../components/Portfolio/Portfolio'
import Features from '../../components/Features/Features'
import TextSlide from '../../components/TextSlide/TextSlide'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div>
        <HeroSection />
        {/* <Intro /> */}
        <Stats />
        <Portfolio />
        <Features />
        <TextSlide />
        {/* <Contact /> */}
    </div>
  )
}

export default Home