"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const badges = [
    "Quistes Ganglionares",
    "Dedo en Gatillo",
    "Artritis Reumatoide",
    "Mínima Invasión",
  ]

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="bg-[#111111] min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="animate-on-scroll opacity-0 text-[#B8B8B8] text-sm tracking-wide uppercase">
              Hospital Star Médica · Consultorio 1010 · Chihuahua, Chih.
            </p>
            
            <h1 className="animate-on-scroll opacity-0 font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
              Tu mano en las mejores manos.
            </h1>
            
            <p className="animate-on-scroll opacity-0 text-white/80 text-lg leading-relaxed max-w-xl">
              El Dr. Valentín Luna Domínguez es especialista en Cirugía de Mano
              con enfoque en procedimientos mínimamente invasivos para quistes
              ganglionares, dedo en gatillo, artritis reumatoide y más.
            </p>

            {/* Badges */}
            <div className="animate-on-scroll opacity-0 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#B11F2A] hover:bg-[#E5444F] text-white px-6 py-3.5 rounded-lg font-medium transition-colors"
              >
                Agendar mi cita
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:6144252100"
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar al consultorio
              </a>
            </div>

            <p className="animate-on-scroll opacity-0 text-[#B8B8B8] text-sm">
              Consulta sin compromiso · Atención especializada en mano y muñeca
            </p>

            {/* Stats Row */}
            <div className="animate-on-scroll opacity-0 flex flex-wrap gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-5 h-5 text-[#B11F2A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Alta Especialidad
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-5 h-5 text-[#B11F2A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Cédula 6442626
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-5 h-5 text-[#B11F2A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Chihuahua, Chih.
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll opacity-0 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80"
                alt="Dr. Valentín Luna Domínguez - Especialista en Cirugía de Mano"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#B11F2A] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#111111] text-sm">Alta Especialidad</p>
                  <p className="text-[#B8B8B8] text-xs">Cirugía de Mano y Muñeca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
