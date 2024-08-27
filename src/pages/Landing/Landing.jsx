import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import AboutMe from '../../components/AboutMe'
import Footer from '../../components/Footer'
import Identidad from '../../components/Identidad'
import Services from '../../components/Services'
import Certificates from '../../components/Certificates'

export default function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <Identidad />
      <Certificates />
      <Services />
      <Footer />
    </div>
  )
}
