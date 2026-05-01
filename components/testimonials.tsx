"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Roberto C.",
      condition: "Quiste Ganglionar",
      quote:
        "Tenía un quiste en la muñeca desde hacía años. El Dr. Luna lo trató sin cirugía abierta y en semanas ya no sentía nada. Excelente.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    {
      name: "Sofía R.",
      condition: "Dedo en Gatillo",
      quote:
        "No podía doblar el dedo sin dolor. El procedimiento fue rapidísimo y la recuperación mejor de lo esperado. Muy agradecida.",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
    },
    {
      name: "Jorge M.",
      condition: "Artritis Reumatoide",
      quote:
        "Con artritis en ambas manos, el Dr. Luna me explicó todas las opciones con mucha paciencia. El tratamiento ha mejorado mucho mi calidad de vida.",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=80",
    },
    {
      name: "Elena V.",
      condition: "Cirugía de Muñeca",
      quote:
        "Desde la primera cita sentí confianza total. La cirugía fue precisa y el seguimiento excelente. Lo recomiendo ampliamente.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
  ]

  return (
    <section id="testimonios" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll opacity-0 font-serif font-bold text-[#111111] text-3xl sm:text-4xl lg:text-5xl mb-4">
            Lo que dicen nuestros pacientes
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="animate-on-scroll opacity-0 bg-[#EDEDED] rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">{testimonial.name}</p>
                  <p className="text-[#B11F2A] text-sm">{testimonial.condition}</p>
                </div>
              </div>
              <p className="text-[#111111]/80 text-sm leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#B11F2A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="animate-on-scroll opacity-0 bg-[#EDEDED] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#111111]">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-[#B11F2A] text-sm">
                  {testimonials[activeIndex].condition}
                </p>
              </div>
            </div>
            <p className="text-[#111111]/80 text-sm leading-relaxed italic">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
            {/* Stars */}
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#B11F2A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#B11F2A]" : "bg-[#B8B8B8]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
