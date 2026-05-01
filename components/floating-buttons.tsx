"use client"

interface FloatingButtonsProps {
  showBackToTop: boolean
}

export function FloatingButtons({ showBackToTop }: FloatingButtonsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Call Button */}
      <a
        href="tel:6144252100"
        className="fixed bottom-7 right-7 z-40 w-14 h-14 bg-[#B11F2A] hover:bg-[#E5444F] rounded-full flex items-center justify-center shadow-lg transition-colors group"
        aria-label="Llamar al consultorio"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-7 z-40 w-12 h-12 bg-[#B11F2A] hover:bg-[#E5444F] rounded-full flex items-center justify-center shadow-lg transition-all animate-fade-up"
          aria-label="Volver arriba"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}
