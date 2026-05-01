"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function About() {
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

  const credentials = [
    "Médico Cirujano — Universidad Autónoma de Chihuahua",
    "Especialidad en Ortopedia y Traumatología",
    "Alta Especialidad en Cirugía de Mano",
    "Cédula Profesional: 6442626",
  ]

  return (
    <section id="acerca" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll opacity-0 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                alt="Dr. Valentín Luna en consulta"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#EDEDED] rounded-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="animate-on-scroll opacity-0 font-serif font-bold text-[#111111] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Un especialista dedicado a la cirugía de mano.
            </h2>

            <p className="animate-on-scroll opacity-0 text-[#111111]/80 text-lg leading-relaxed">
              El Dr. Valentín Luna Domínguez cuenta con Alta Especialidad en
              Cirugía de Mano. Atiende en Hospital Star Médica, Consultorio 1010,
              en Chihuahua, Chihuahua.
            </p>

            <p className="animate-on-scroll opacity-0 text-[#111111]/80 text-lg leading-relaxed">
              Su práctica combina técnicas mínimamente invasivas con un trato
              humano y cercano. Cada paciente recibe una explicación clara de su
              diagnóstico, las opciones de tratamiento disponibles y el proceso
              completo de recuperación.
            </p>

            {/* Credentials */}
            <div className="animate-on-scroll opacity-0 space-y-4 pt-4">
              <h3 className="font-semibold text-[#111111] text-lg">Formación</h3>
              <ul className="space-y-3">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#B11F2A] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#111111]/80">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
