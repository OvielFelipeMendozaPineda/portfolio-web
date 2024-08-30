import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import AboutMe from '../../components/AboutMe'
import Footer from '../../components/Footer'
import Identidad from '../../components/Identidad'
import Services from '../../components/Services'
import Certificates from '../../components/Certificates'
import Proyectos from '../../components/Proyectos'

export default function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <Identidad />
      <Services />
      <Certificates />
      <Proyectos />
      <Footer />
    </div>
  )
}
