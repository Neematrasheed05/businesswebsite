import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../Navbar'
import Agent from '../Agents'
import Property from '../Properties'
import About from '../About'
import Partners from '../Partners'
import Footer from '../Footer'
import BackToTopButton from '../Back-top'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Property/>
      <Agent/>
      <About/>
      <Partners/>
      <BackToTopButton/>
      <Footer/>
      
     </div>
  )
}
