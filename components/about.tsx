"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import aboutDoctorImage from "@/public/about-doctor.jpeg"

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
    "Médico Cirujano - Universidad Autónoma de Chihuahua",
    "Especialidad en Ortopedia y Traumatología",
    "Alta Especialidad en Cirugía de Mano",
    "Cédula Profesional: 6442626",
  ]

  return (
    <section id="acerca" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-12">
          <div className="max-w-3xl">
            <h2 className="animate-on-scroll opacity-0 font-serif font-bold text-[#111111] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Un especialista dedicado a la cirugía de mano.
            </h2>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)] gap-8 lg:gap-12 items-start">
            <div className="animate-on-scroll opacity-0 relative">
              <div className="relative aspect-[1600/671] rounded-2xl overflow-hidden bg-[#EDEDED]">
                <Image
                  src={aboutDoctorImage}
                  alt="Dr. Valentín Luna en consulta"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#EDEDED] rounded-2xl" />
            </div>

            <div className="space-y-5 lg:pt-1">
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

              <div className="animate-on-scroll opacity-0 space-y-4 pt-2">
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
      </div>
    </section>
  )
}
