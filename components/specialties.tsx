"use client"

import { useEffect, useRef } from "react"

export function Specialties() {
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

  const specialties = [
    {
      title: "Quistes Ganglionares",
      description:
        "Diagnóstico y tratamiento de quistes en mano y muñeca, con opciones desde aspiración hasta cirugía mínimamente invasiva.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Cirugía Mínimamente Invasiva",
      description:
        "Procedimientos artroscópicos de mano y muñeca con mínimas cicatrices y recuperación acelerada.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Dedo en Gatillo",
      description:
        "Tratamiento del dedo en gatillo (trigger finger) con técnicas percutáneas o abiertas según el caso clínico.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
    },
    {
      title: "Artritis Reumatoide",
      description:
        "Manejo quirúrgico y conservador de la artritis reumatoide en mano, incluyendo sinovectomía y reconstrucción articular.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="especialidades" ref={sectionRef} className="bg-[#EDEDED] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll opacity-0 font-serif font-bold text-[#111111] text-3xl sm:text-4xl lg:text-5xl mb-4">
            Especialidades y procedimientos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className="animate-on-scroll opacity-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border-t-[3px] border-transparent hover:border-[#B11F2A]"
            >
              <div className="w-14 h-14 bg-[#B11F2A]/10 rounded-xl flex items-center justify-center text-[#B11F2A] mb-4 group-hover:bg-[#B11F2A] group-hover:text-white transition-colors">
                {specialty.icon}
              </div>
              <h3 className="font-semibold text-[#111111] text-lg mb-3">
                {specialty.title}
              </h3>
              <p className="text-[#111111]/70 text-sm leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
