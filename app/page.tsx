"use client"

import { useEffect, useState } from "react"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { FloatingButtons } from "@/components/floating-buttons"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { Hero } from "@/components/hero"
import { Location } from "@/components/location"
import { Navbar } from "@/components/navbar"
import { Specialties } from "@/components/specialties"
import { Testimonials } from "@/components/testimonials"
import { WhyUs } from "@/components/why-us"

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
