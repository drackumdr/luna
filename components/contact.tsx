"use client"

import { useEffect, useRef, useState } from "react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contacto" ref={sectionRef} className="bg-[#EDEDED] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <h2 className="font-serif font-bold text-[#111111] text-3xl sm:text-4xl mb-4">
              Agenda tu cita hoy
            </h2>
            <p className="text-[#111111]/70 mb-8">
              Atendemos en Hospital Ángeles Nueva Torre, Avenida Tomás Valles 6500, Consultorio 713, Piso 7.
              Con gusto te orientamos sobre tu padecimiento.
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  ¡Gracias!
                </h3>
                <p className="text-green-700">
                  En breve nos pondremos en contacto contigo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#111111] mb-2"
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B8B8B8] focus:border-[#B11F2A] focus:ring-2 focus:ring-[#B11F2A]/20 outline-none transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#111111] mb-2"
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B8B8B8] focus:border-[#B11F2A] focus:ring-2 focus:ring-[#B11F2A]/20 outline-none transition-colors bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#111111] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#B8B8B8] focus:border-[#B11F2A] focus:ring-2 focus:ring-[#B11F2A]/20 outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-[#111111] mb-2"
                  >
                    Motivo de consulta
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    className="w-full px-4 py-3 rounded-lg border border-[#B8B8B8] focus:border-[#B11F2A] focus:ring-2 focus:ring-[#B11F2A]/20 outline-none transition-colors bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="quiste">Quiste ganglionar</option>
                    <option value="gatillo">Dedo en gatillo</option>
                    <option value="artritis">Artritis reumatoide</option>
                    <option value="muneca">Cirugía de muñeca</option>
                    <option value="segunda">Segunda opinión</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#111111] mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#B8B8B8] focus:border-[#B11F2A] focus:ring-2 focus:ring-[#B11F2A]/20 outline-none transition-colors resize-none bg-white"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="w-5 h-5 text-[#B11F2A] border-[#B8B8B8] rounded focus:ring-[#B11F2A] mt-0.5"
                  />
                  <label htmlFor="privacy" className="text-sm text-[#111111]/70">
                    Acepto el aviso de privacidad y autorizo el uso de mis datos
                    para fines de contacto médico.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#B11F2A] hover:bg-[#E5444F] text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
                >
                  Enviar solicitud
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="animate-on-scroll opacity-0 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#111111] text-lg mb-4">
                Contacto directo
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:6144252100"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#EDEDED] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#B11F2A] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#111111]">614 425 2100</p>
                    <p className="text-sm text-[#B11F2A] group-hover:underline">Llamar</p>
                  </div>
                </a>

                <a
                  href="tel:6144252090"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#EDEDED] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#7FAFD8] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#111111]">614 425 2090</p>
                    <p className="text-sm text-[#B8B8B8]">ext. 2010</p>
                  </div>
                </a>

                <a
                  href="tel:6144326600"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#EDEDED] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#7FAFD8] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#111111]">614 432 6600</p>
                    <p className="text-sm text-[#B8B8B8]">ext. 2010</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#111111] text-lg mb-4">Dirección</h3>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#B11F2A] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-[#111111]/70 text-sm">
                  <p className="font-medium text-[#111111]">Star Médica</p>
                  <p>Consultorio 1010</p>
                  <p>Chihuahua, Chih.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
