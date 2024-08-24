import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../Navbar'
import About from '../About'
import Property from '../Properties'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Property/>
      <About/>
     </div>
  )
}
