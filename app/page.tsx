"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Specialties } from "@/components/specialties"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons showBackToTop={showBackToTop} />
    </main>
  )
}
