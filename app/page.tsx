'use client'

import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Contact />
      
      {/* Chat Widget */}
      <ChatWidget segment="home" />
    </div>
  )
}
